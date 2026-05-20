"use client";
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─────────────────────────────────────────────────────────────────
   Constants – DH-inspired 6-DOF arm configuration
   ───────────────────────────────────────────────────────────────── */
const JOINTS = [
    { length: 1.4, radius: 0.18, color: '#3730A3' },
    { length: 1.8, radius: 0.14, color: '#4338CA' },
    { length: 1.4, radius: 0.12, color: '#6366F1' },
    { length: 0.9, radius: 0.10, color: '#818CF8' },
    { length: 0.6, radius: 0.09, color: '#A5B4FC' },
    { length: 0.35, radius: 0.08, color: '#C7D2FE' },
];

const PHASE_PAN_END   = 4.0;
const PHASE_BLEND_END = 6.5;
const PHASE_TOTAL     = 10.0;

/* ─────────────────────────────────────────────────────────────────
   Pixel ratio cap – prevent GPU overload on HiDPI screens
   ───────────────────────────────────────────────────────────────── */
function PixelRatioCap() {
    const { gl } = useThree();
    useEffect(() => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }, [gl]);
    return null;
}

/* ─────────────────────────────────────────────────────────────────
   Single link: solid + wireframe meshes with shared geometry
   Material opacity is written via refs each frame (no re-renders)
   ───────────────────────────────────────────────────────────────── */
function Link({ length, radius, color, wireOpacityRef }) {
    const solidSphMat  = useRef();
    const wireSphMat   = useRef();
    const solidBodyMat = useRef();
    const wireBodyMat  = useRef();

    // Shared geometry – created once, disposed on unmount
    const sphereGeom = useMemo(() => new THREE.SphereGeometry(radius, 14, 14), [radius]);
    const bodyGeom   = useMemo(
        () => new THREE.CylinderGeometry(radius * 0.7, radius, length, 10, 1),
        [length, radius]
    );
    useEffect(() => () => { sphereGeom.dispose(); bodyGeom.dispose(); }, [sphereGeom, bodyGeom]);

    useFrame(() => {
        const w = wireOpacityRef.current;
        const s = 1 - w;
        if (solidSphMat.current)  solidSphMat.current.opacity  = s;
        if (wireSphMat.current)   wireSphMat.current.opacity   = w * 0.85;
        if (solidBodyMat.current) solidBodyMat.current.opacity = s;
        if (wireBodyMat.current)  wireBodyMat.current.opacity  = w * 0.85;
    });

    return (
        <group>
            {/* Joint sphere – solid */}
            <mesh geometry={sphereGeom}>
                <meshStandardMaterial ref={solidSphMat} color={color} metalness={0.7} roughness={0.25} transparent />
            </mesh>
            {/* Joint sphere – wire */}
            <mesh geometry={sphereGeom}>
                <meshStandardMaterial ref={wireSphMat} color={color} wireframe transparent opacity={0} />
            </mesh>

            {/* Link body – solid */}
            <mesh geometry={bodyGeom} position={[0, length / 2, 0]}>
                <meshStandardMaterial ref={solidBodyMat} color={color} metalness={0.6} roughness={0.3} transparent />
            </mesh>
            {/* Link body – wire */}
            <mesh geometry={bodyGeom} position={[0, length / 2, 0]}>
                <meshStandardMaterial ref={wireBodyMat} color={color} wireframe transparent opacity={0} />
            </mesh>
        </group>
    );
}

/* ─────────────────────────────────────────────────────────────────
   Arm – recursive joint chain with sinusoidal animation
   ───────────────────────────────────────────────────────────────── */
function Arm({ wireOpacityRef }) {
    const groupRefs = useRef(JOINTS.map(() => useRef(null)));  // stable across renders
    const t = useRef(0);

    useFrame((_, delta) => {
        t.current += delta;
        const tc = t.current;
        const speeds  = [0.3, 0.25, 0.4, 0.5, 0.6, 0.8];
        const offsets = [0,   1,    2,   0.5, 1.5, 0  ];
        const amps    = [0.6, 0.35, 0.4, 1.0, 0.5, 1.0];
        const bases   = [0,  -0.4,  0.3, 0,   0,   0  ];
        const axes    = ['y', 'z',  'z', 'y', 'z', 'y'];

        JOINTS.forEach((_, i) => {
            const g = groupRefs.current[i]?.current;
            if (g) g.rotation[axes[i]] = bases[i] + Math.sin(tc * speeds[i] + offsets[i]) * amps[i];
        });
    });

    const buildChain = (index) => {
        if (index >= JOINTS.length) return null;
        const j = JOINTS[index];
        return (
            <group ref={groupRefs.current[index]}>
                <Link length={j.length} radius={j.radius} color={j.color} wireOpacityRef={wireOpacityRef} />
                <group position={[0, j.length, 0]}>
                    {buildChain(index + 1)}
                </group>
            </group>
        );
    };

    return <group position={[0, -2.5, 0]}>{buildChain(0)}</group>;
}

/* ─────────────────────────────────────────────────────────────────
   Camera orbit + phase controller (no state, pure refs)
   ───────────────────────────────────────────────────────────────── */
function SceneController({ wireOpacityRef }) {
    const clock    = useRef(0);
    const camAngle = useRef(0);

    useFrame(({ camera }, delta) => {
        clock.current = (clock.current + delta) % PHASE_TOTAL;
        const tc = clock.current;

        // Orbital camera pan
        camAngle.current += delta * 0.32;
        camera.position.set(
            Math.sin(camAngle.current) * 9,
            2.5 + Math.sin(tc * 0.2) * 1.2,
            Math.cos(camAngle.current) * 9
        );
        camera.lookAt(0, 1, 0);

        // Solid → wireframe phase
        if (tc < PHASE_PAN_END) {
            wireOpacityRef.current = 0;
        } else if (tc < PHASE_BLEND_END) {
            wireOpacityRef.current = (tc - PHASE_PAN_END) / (PHASE_BLEND_END - PHASE_PAN_END);
        } else {
            wireOpacityRef.current = 1;
        }
    });

    return null;
}

/* ─────────────────────────────────────────────────────────────────
   Scene root
   ───────────────────────────────────────────────────────────────── */
function Scene() {
    const wireOpacityRef = useRef(0);

    // Base geometry – disposed on unmount
    const baseTopGeom = useMemo(() => new THREE.CylinderGeometry(0.5, 0.65, 0.18, 20), []);
    const baseBotGeom = useMemo(() => new THREE.CylinderGeometry(0.9, 0.9, 0.12, 20), []);
    useEffect(() => () => { baseTopGeom.dispose(); baseBotGeom.dispose(); }, [baseTopGeom, baseBotGeom]);

    return (
        <>
            <PixelRatioCap />
            <SceneController wireOpacityRef={wireOpacityRef} />
            <Arm wireOpacityRef={wireOpacityRef} />

            {/* Base platform */}
            <mesh geometry={baseTopGeom} position={[0, -2.55, 0]}>
                <meshStandardMaterial color="#3730A3" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh geometry={baseBotGeom} position={[0, -2.7, 0]}>
                <meshStandardMaterial color="#171717" metalness={0.5} roughness={0.4} />
            </mesh>

            {/* Floor grid */}
            <gridHelper args={[16, 16, '#3730A3', '#E0E7FF']} position={[0, -2.8, 0]} />

            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[8, 12,  6]} intensity={1.4} color="#ffffff" />
            <directionalLight position={[-6, 4, -8]} intensity={0.5} color="#818CF8" />
            <pointLight       position={[0,  6,  0]} intensity={0.6} color="#E0E7FF" />
        </>
    );
}

/* ─────────────────────────────────────────────────────────────────
   Export – Canvas with performance settings
   ───────────────────────────────────────────────────────────────── */
export default function RoboticArmHero() {
    return (
        <div style={{ width: '100%', height: '100%', background: '#FAFAFA' }}>
            <Canvas
                camera={{ position: [9, 2.5, 0], fov: 45, near: 0.5, far: 60 }}
                gl={{
                    antialias: true,
                    powerPreference: 'high-performance',    // hint GPU selection
                    stencil: false,                         // disable unused buffer
                    depth: true,
                }}
                dpr={[1, 2]}     // pixel ratio 1–2 (R3F handles HiDPI cap)
                frameloop="always"
            >
                <Scene />
            </Canvas>
        </div>
    );
}
