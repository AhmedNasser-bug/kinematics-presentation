"use client";
/**
 * OutroSlide — closing card.
 * Mirrors the Hero visual language but restructured as a thank-you / teaser.
 */
export default function OutroSlide({ presenter = "Ahmed Nasser 202304446, Ahmed Nassem 202300117, Karim Amr Ali 202302834", audience = "Dr. Ibrahim" }) {
    return (
        <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            padding: '48px',
        }}>
            <style>{`
                @keyframes outroFadeUp {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes outroReveal {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes outroPulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.3; }
                }
            `}</style>

            {/* Corner marks – top-right */}
            <div style={{ position: 'absolute', top: 24, right: 24, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ width: 28, height: 1, background: '#3730A3' }} />
                <div style={{ width: 1, height: 28, background: '#3730A3' }} />
            </div>
            {/* Corner marks – bottom-left */}
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                <div style={{ width: 1, height: 28, background: '#3730A3', marginBottom: -1 }} />
                <div style={{ width: 28, height: 1, background: '#3730A3' }} />
            </div>

            {/* FK formula — monospace chip, appears first */}
            <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 'clamp(0.75rem, 1.4vw, 1rem)',
                color: '#3730A3',
                background: '#E0E7FF',
                border: '1px solid #3730A3',
                padding: '8px 20px',
                marginBottom: '36px',
                animation: 'outroFadeUp 0.5s ease 0.1s both',
                letterSpacing: '0.05em',
            }}>
                ⁰Tₙ = ⁰T₁ · ¹T₂ · ··· · ⁿ⁻¹Tₙ
            </div>

            {/* Big "Thank you." */}
            <h1 style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: '#171717',
                margin: '0 0 6px 0',
                letterSpacing: '-0.02em',
                animation: 'outroFadeUp 0.6s ease 0.25s both',
            }}>
                Thank you.
            </h1>

            {/* Underline sweep */}
            <div style={{
                height: '3px',
                background: '#3730A3',
                margin: '14px auto 28px',
                animation: 'outroReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both',
                width: '220px',
            }} />

            {/* Newsreader italic teaser */}
            <p style={{
                fontFamily: "'Newsreader', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                color: '#737373',
                textAlign: 'center',
                margin: '0 0 48px 0',
                maxWidth: '540px',
                animation: 'outroFadeUp 0.6s ease 0.5s both',
            }}>
                From Coordinate Frames to Forward Kinematics — complete.
                <br />
                <span style={{ color: '#3730A3', fontStyle: 'normal', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8em' }}>
                    Next: Inverse Kinematics?
                </span>
            </p>

            {/* Credits */}
            <div style={{
                display: 'flex',
                gap: '28px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.72rem',
                color: '#737373',
                animation: 'outroFadeUp 0.6s ease 0.8s both',
                flexWrap: 'wrap',
                justifyContent: 'center',
                borderTop: '1px solid #E0E7FF',
                paddingTop: '20px',
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

            {/* Pulsing end dot */}
            <div style={{
                position: 'absolute', bottom: 28,
                width: 8, height: 8,
                background: '#3730A3',
                animation: 'outroPulse 2s ease-in-out infinite',
            }} />
        </div>
    );
}
