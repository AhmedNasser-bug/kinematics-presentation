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
        let height = canvas.height = 48; // compact telemetry strip height

        function handleResize() {
            if (canvas && canvas.parentElement) {
                width = canvas.width = canvas.parentElement.offsetWidth;
                height = canvas.height = 48;
            }
        }
        window.addEventListener('resize', handleResize);

        let offset = 0;

        // PQRST Waveform Generator
        function getECGDisplacement(x) {
            const cycle = 160; // wavelength in pixels
            const pos = (x + offset) % cycle;
            
            if (pos > 20 && pos < 40) {
                // P Wave
                return -6 * Math.sin(((pos - 20) / 20) * Math.PI);
            } else if (pos >= 40 && pos < 48) {
                // Q Dip
                return 4;
            } else if (pos >= 48 && pos < 62) {
                // R Spike (Sharp Upward)
                return -28 * Math.sin(((pos - 48) / 14) * Math.PI);
            } else if (pos >= 62 && pos < 70) {
                // S Dip (Downward)
                return 8 * Math.sin(((pos - 62) / 8) * Math.PI);
            } else if (pos > 85 && pos < 115) {
                // T Wave
                return -10 * Math.sin(((pos - 85) / 30) * Math.PI);
            }
            return 0;
        }

        function draw() {
            animId = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, width, height);

            offset += 2.2; // sweep speed

            const centerY = height / 2;

            // 1. Draw subtle background grid lines for cardiac monitor
            ctx.strokeStyle = '#EEF2FF';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x < width; x += 16) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            ctx.moveTo(0, centerY);
            ctx.lineTo(width, centerY);
            ctx.stroke();

            // 2. Draw Main ECG Waveform Line
            ctx.strokeStyle = '#EF4444'; // Vibrant Pulse Red
            ctx.lineWidth = 2.5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();

            for (let x = 0; x < width; x += 2) {
                const y = centerY + getECGDisplacement(x);
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // 3. Draw Glowing Lead Head Point at the right edge
            const leadX = width - 12;
            const leadY = centerY + getECGDisplacement(leadX);

            ctx.shadowColor = '#EF4444';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#EF4444';
            ctx.beginPath();
            ctx.arc(leadX, leadY, 4, 0, Math.PI * 2);
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
            width: '100%',
            height: '40px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 12px',
            marginTop: '8px',
            marginBottom: '12px'
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: '700',
                color: '#DC2626',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                zIndex: 2,
                background: '#FFFFFF',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid #FECACA',
                whiteSpace: 'nowrap'
            }}>
                <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#EF4444',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #EF4444'
                }} />
                ECG LEAD II // 72 BPM [NORMAL SINUS RHYTHM]
            </div>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} />
        </div>
    );
}
