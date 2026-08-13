"use client";
import { useEffect, useRef } from 'react';

/**
 * HeroSlide — Sleek opening card.
 * Comfortable typography, indigo accent, smooth animations.
 */
export default function HeroSlide({ title, subtitle }) {
    const lineRef = useRef(null);

    useEffect(() => {
        const el = lineRef.current;
        if (!el) return;
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
    }, []);

    return (
        <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            padding: '40px',
        }}>
            <style>{`
                @keyframes scanDown {
                    from { top: 0; opacity: 0.4; }
                    to   { top: 100%; opacity: 0; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes revealWidth {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.4; }
                }
            `}</style>

            {/* Subtle top scan line */}
            <div ref={lineRef} style={{
                position: 'absolute', left: 0, right: 0, top: 0,
                height: '2px',
                background: 'linear-gradient(to right, transparent, #818CF8, transparent)',
                animation: 'scanDown 3s ease-out 0.2s forwards',
                pointerEvents: 'none',
                zIndex: 2,
            }} />

            {/* System Category Chip */}
            <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: '#818CF8',
                background: 'rgba(129, 140, 248, 0.1)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                borderRadius: '20px',
                padding: '6px 18px',
                marginBottom: '24px',
                animation: 'fadeUp 0.5s ease both',
                animationDelay: '0.1s',
                fontWeight: '600',
            }}>
                DIACLINIC // CLINICAL DECISION SUPPORT & DATA MANAGEMENT
            </div>

            {/* Main Title - Wide & Clean */}
            <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                color: '#F8FAFC',
                textAlign: 'center',
                lineHeight: 1.2,
                margin: '0 0 16px 0',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: '0.2s',
                maxWidth: '1100px',
                letterSpacing: '-0.02em'
            }}>
                {title || "Hemodialysis Clinical Decision Support Architecture"}
            </h1>

            {/* Subtle Pill Underline */}
            <div style={{
                height: '3px',
                background: 'linear-gradient(to right, #6366F1, #818CF8)',
                borderRadius: '2px',
                margin: '8px auto 24px',
                animation: 'revealWidth 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both',
                maxWidth: '480px',
                width: '100%',
            }} />

            {/* Subtitle */}
            <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.05rem, 1.8vw, 1.28rem)',
                color: '#94A3B8',
                textAlign: 'center',
                margin: '0 0 36px 0',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: '0.35s',
                maxWidth: '920px',
                lineHeight: 1.6,
                fontWeight: 400
            }}>
                {subtitle || "Integrated Edge Telemetry, Machine Learning Anomaly Detection, & Clinical Decision Support for Hemodialysis Units"}
            </p>

            {/* Live Link Buttons - Sleek Pill Buttons */}
            <div style={{
                display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center',
                animation: 'fadeUp 0.6s ease 0.5s both',
                marginBottom: '32px'
            }}>
                <a 
                    href="https://dialysis-safety-management-system.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                        background: '#10B981', color: '#020617',
                        borderRadius: '10px', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                        padding: '10px 22px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: '700', fontSize: '0.88rem', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        transition: 'transform 0.2s ease'
                    }}
                >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#020617', display: 'inline-block' }} />
                    Launch Live DiaClinic Prototype ↗
                </a>
                <a 
                    href="https://kinematics-presentation.vercel.app" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                        background: 'rgba(129, 140, 248, 0.1)', color: '#818CF8',
                        border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '10px',
                        padding: '10px 22px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: '600', fontSize: '0.88rem', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '8px'
                    }}
                >
                    Presentation Domain ↗
                </a>
            </div>

            {/* Navigation indicator */}
            <div style={{
                position: 'absolute', bottom: 24,
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#94A3B8',
                animation: 'fadeUp 0.5s ease 0.7s both',
            }}>
                <span style={{
                    width: 7, height: 7,
                    borderRadius: '50%',
                    background: '#818CF8',
                    display: 'inline-block',
                    animation: 'pulse 2s ease-in-out infinite',
                }} />
                Use arrow keys ← → to navigate deck
            </div>
        </div>
    );
}

