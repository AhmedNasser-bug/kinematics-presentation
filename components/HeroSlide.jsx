"use client";
import { useEffect, useRef } from 'react';

/**
 * HeroSlide — full-screen opening card.
 * Blueprint aesthetic: IBM Plex Sans, indigo palette, geometric CSS animations.
 * No external deps — pure CSS + React.
 */
export default function HeroSlide({ title, subtitle, presenter = "Ahmed Nasser", audience = "Dr. Ibrahim" }) {
    const lineRef = useRef(null);

    // Animate the scan-line on mount
    useEffect(() => {
        const el = lineRef.current;
        if (!el) return;
        el.style.animation = 'none';
        void el.offsetWidth; // reflow
        el.style.animation = '';
    }, []);

    return (
        <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            padding: '48px',
        }}>
            <style>{`
                @keyframes scanDown {
                    from { top: 0; opacity: 0.6; }
                    to   { top: 100%; opacity: 0; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(18px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes revealWidth {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.35; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0; }
                }
            `}</style>

            {/* Scanning line */}
            <div ref={lineRef} style={{
                position: 'absolute', left: 0, right: 0, top: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, #3730A3, transparent)',
                animation: 'scanDown 3.5s cubic-bezier(0.4,0,0.6,1) 0.3s forwards',
                pointerEvents: 'none',
                zIndex: 2,
            }} />

            {/* Corner marks – top-left */}
            <div style={{ position: 'absolute', top: 24, left: 24 }}>
                <div style={{ width: 28, height: 1, background: '#3730A3' }} />
                <div style={{ width: 1, height: 28, background: '#3730A3', marginTop: -1 }} />
            </div>
            {/* Corner marks – bottom-right */}
            <div style={{ position: 'absolute', bottom: 24, right: 24 }}>
                <div style={{ width: 1, height: 28, background: '#3730A3', marginLeft: 'auto', marginBottom: -1 }} />
                <div style={{ width: 28, height: 1, background: '#3730A3', marginLeft: 'auto' }} />
            </div>

            {/* Label chip */}
            <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                color: '#3730A3',
                background: '#E0E7FF',
                border: '1px solid #3730A3',
                padding: '4px 14px',
                marginBottom: '32px',
                animation: 'fadeUp 0.5s ease both',
                animationDelay: '0.1s',
                textTransform: 'uppercase',
            }}>
                Lecture · Robotics &amp; Mechanical Manipulation
            </div>

            {/* Main title */}
            <h1 style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                color: '#171717',
                textAlign: 'center',
                lineHeight: 1.15,
                margin: '0 0 8px 0',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: '0.25s',
                maxWidth: '820px',
            }}>
                {title}
            </h1>

            {/* Animated underline */}
            <div style={{
                height: '3px',
                background: '#3730A3',
                margin: '16px auto 24px',
                animation: 'revealWidth 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both',
                maxWidth: '560px',
                width: '100%',
            }} />

            {/* Subtitle – Newsreader italic */}
            <p style={{
                fontFamily: "'Newsreader', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                color: '#737373',
                textAlign: 'center',
                margin: '0 0 48px 0',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: '0.5s',
            }}>
                {subtitle}
            </p>

            {/* Credits bar */}
            <div style={{
                display: 'flex',
                gap: '32px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#737373',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: '0.8s',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <span>
                    <span style={{ color: '#3730A3', marginRight: 6 }}>Presented to</span>
                    {audience}
                </span>
                <span style={{ color: '#E0E7FF' }}>|</span>
                <span>
                    <span style={{ color: '#3730A3', marginRight: 6 }}>By</span>
                    {presenter}
                </span>
            </div>

            {/* Pulsing dot indicator */}
            <div style={{
                position: 'absolute', bottom: 28,
                display: 'flex', alignItems: 'center', gap: '8px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.65rem',
                color: '#737373',
                animation: 'fadeUp 0.5s ease 1.2s both',
            }}>
                <span style={{
                    width: 6, height: 6,
                    background: '#3730A3',
                    display: 'inline-block',
                    animation: 'pulse 1.8s ease-in-out infinite',
                }} />
                Press → to begin
            </div>
        </div>
    );
}
