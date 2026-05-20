"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, Sphere } from '@react-three/drei';
import { useControls } from 'leva';

export default function DHLinkVisualizer() {
    const { theta, d, a, alpha } = useControls("DH Parameters", {
        theta: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1, label: "θ (Z rot)" },
        d: { value: 2, min: -5, max: 5, step: 0.1, label: "d (Z trans)" },
        a: { value: 2, min: -5, max: 5, step: 0.1, label: "a (X trans)" },
        alpha: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1, label: "α (X rot)" },
    });

    return (
        <div style={{ width: '100%', minHeight: '350px', background: '#FFF4E0', position: 'relative' }}>
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls makeDefault />
                
                <gridHelper args={[10, 10, '#0F0F0F', '#ccc']} rotation={[Math.PI/2, 0, 0]} />

                {/* Frame i-1 (World origin for this demo) */}
                <axesHelper args={[2]} />
                <Sphere args={[0.2, 16, 16]}><meshStandardMaterial color="#0F0F0F" /></Sphere>

                {/* Apply DH Transforms */}
                {/* 1. d (trans Z) and theta (rot Z) */}
                <group position={[0, 0, d]} rotation={[0, 0, theta]}>
                    <Cylinder args={[0.05, 0.05, Math.abs(d) || 0.01, 8]} position={[0, 0, -d/2]} rotation={[Math.PI/2, 0, 0]}>
                       <meshStandardMaterial color="#00E5FF" />
                    </Cylinder>
                    
                    {/* 2. a (trans X) and alpha (rot X) */}
                    <group position={[a, 0, 0]} rotation={[alpha, 0, 0]}>
                        <Cylinder args={[0.05, 0.05, Math.abs(a) || 0.01, 8]} position={[-a/2, 0, 0]} rotation={[0, 0, Math.PI/2]}>
                           <meshStandardMaterial color="#FF0055" />
                        </Cylinder>
                        
                        {/* Frame i */}
                        <axesHelper args={[2]} />
                        <Sphere args={[0.2, 16, 16]}><meshStandardMaterial color="#0F0F0F" /></Sphere>
                    </group>
                </group>
            </Canvas>
        </div>
    );
}
