"use client";
import React, { useEffect, useRef } from 'react';

export default function ECGHeartbeatMonitor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        let width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;

        function handleResize() {
            if (canvas && canvas.parentElement) {
                width = canvas.width = canvas.parentElement.offsetWidth;
                height = canvas.height = canvas.parentElement.offsetHeight;
            }
        }
        window.addEventListener('resize', handleResize);

        let offset = 0;

        // Large, Subtle PQRST Cardiac Waveform Generator
        function getECGDisplacement(x) {
            const cycle = 320; // wide graceful wavelength
            const pos = (x + offset) % cycle;
            
            if (pos > 30 && pos < 70) {
                // P Wave
                return -16 * Math.sin(((pos - 30) / 40) * Math.PI);
            } else if (pos >= 70 && pos < 85) {
                // Q Dip
                return 12;
            } else if (pos >= 85 && pos < 115) {
                // Large R Spike (Sharp Upward Peak - 140px tall!)
                return -130 * Math.sin(((pos - 85) / 30) * Math.PI);
            } else if (pos >= 115 && pos < 132) {
                // S Dip (Downward)
                return 22 * Math.sin(((pos - 115) / 17) * Math.PI);
            } else if (pos > 160 && pos < 220) {
                // T Wave
                return -26 * Math.sin(((pos - 160) / 60) * Math.PI);
            }
            return 0;
        }

        function draw() {
            animId = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, width, height);

            offset += 1.8; // smooth sweep speed

            const centerY = height * 0.52; // centered vertically across panel

            // 1. Draw Subtle Large ECG Waveform Line
            ctx.strokeStyle = '#EF4444'; // Pulse Red
            ctx.lineWidth = 3.5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();

            for (let x = 0; x < width; x += 3) {
                const y = centerY + getECGDisplacement(x);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // 2. Draw Glowing Lead Head Point at sweep front
            const leadX = (offset * 1.5) % width;
            const leadY = centerY + getECGDisplacement(leadX);

            ctx.shadowColor = '#EF4444';
            ctx.shadowBlur = 12;
            ctx.fillStyle = '#EF4444';
            ctx.beginPath();
            ctx.arc(leadX, leadY, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.16, // subtle opacity in background
            overflow: 'hidden'
        }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        </div>
    );
}
