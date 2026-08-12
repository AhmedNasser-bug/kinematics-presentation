"use client";
/**
 * OutroSlide — Sleek closing card for DiaClinic.
 */
export default function OutroSlide() {
    return (
        <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            padding: '40px',
        }}>
            <style>{`
                @keyframes outroFadeUp {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes outroPulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.3; }
                }
            `}</style>

            {/* Category Chip */}
            <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                color: '#4338CA',
                background: '#EEF2FF',
                border: '1px solid #C7D2FE',
                borderRadius: '20px',
                padding: '6px 18px',
                marginBottom: '24px',
                animation: 'outroFadeUp 0.5s ease 0.1s both',
                letterSpacing: '0.08em',
                fontWeight: '600',
                textTransform: 'uppercase',
            }}>
                DIACLINIC ARCHITECTURE // DEPLOYMENT READY
            </div>

            {/* Big "Thank You" */}
            <h1 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                color: '#0F172A',
                margin: '0 0 8px 0',
                letterSpacing: '-0.025em',
                animation: 'outroFadeUp 0.6s ease 0.25s both',
            }}>
                Thank You.
            </h1>

            {/* Underline sweep */}
            <div style={{
                height: '3px',
                background: 'linear-gradient(to right, #4338CA, #6366F1)',
                borderRadius: '2px',
                margin: '12px auto 24px',
                width: '180px',
            }} />

            {/* Subtext */}
            <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: '#475569',
                textAlign: 'center',
                margin: '0 0 32px 0',
                maxWidth: '680px',
                lineHeight: 1.6,
                animation: 'outroFadeUp 0.6s ease 0.4s both',
            }}>
                Hemodialysis Clinical Decision Support & Operational Data Management Pipeline
                <br />
                <span style={{ color: '#4338CA', fontWeight: '600', fontSize: '0.9em' }}>
                    Standardized Data Safety & Real-Time Floor Oversight
                </span>
            </p>

            {/* Live prototype CTA button */}
            <div style={{ animation: 'outroFadeUp 0.6s ease 0.55s both' }}>
                <a 
                    href="https://dialysis-safety-management-system.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                        background: '#10B981', color: '#FFFFFF',
                        borderRadius: '10px', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
                        padding: '12px 24px', fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: '600', fontSize: '0.92rem', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '8px'
                    }}
                >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF', display: 'inline-block' }} />
                    Launch Live DiaClinic Prototype ↗
                </a>
            </div>

            {/* Pulsing end dot */}
            <div style={{
                position: 'absolute', bottom: 24,
                width: 7, height: 7, borderRadius: '50%',
                background: '#4338CA',
                animation: 'outroPulse 2s ease-in-out infinite',
            }} />
        </div>
    );
}

