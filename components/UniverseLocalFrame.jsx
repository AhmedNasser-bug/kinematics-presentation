"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Edges } from '@react-three/drei';
import { useControls } from 'leva';

export default function UniverseLocalFrame() {
    const { positionArray, rotationArray } = useControls("Local Frame", {
        positionArray: { value: [2, 1, 1], step: 0.1, label: "Translation" },
        rotationArray: { value: [0, Math.PI/4, 0], step: 0.1, label: "Rotation" }
    });

    return (
        <div style={{ width: '100%', minHeight: '350px', background: '#FFF4E0', position: 'relative' }}>
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls makeDefault />
                
                {/* Universe Frame */}
                <axesHelper args={[3]} />
                <gridHelper args={[10, 10, '#0F0F0F', '#ccc']} rotation={[Math.PI/2, 0, 0]} />

                {/* Local Frame */}
                <group position={positionArray} rotation={rotationArray}>
                    <Box args={[1, 1, 1]}>
                        <meshStandardMaterial color="#FFD500" transparent opacity={0.5} />
                        <Edges linewidth={2} threshold={15} color="#0F0F0F" />
                    </Box>
                    <axesHelper args={[1.5]} />
                </group>
            </Canvas>
        </div>
    );
}
