"use client";
import React from 'react';

export default function EdgeSyncDiagram() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#4338CA', background: '#EEF2FF', padding: '4px 10px', borderRadius: '6px', fontWeight: '700', border: '1px solid #C7D2FE' }}>
                    TECHNICAL ARCHITECTURE // OFFLINE-FIRST EDGE ROSTER SYNC
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    100% Floor Uptime
                </span>
            </div>

            {/* Architecture Columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '16px 0' }}>
                
                {/* Column 1: Bedside Edge Node */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontWeight: '800', color: '#0F172A', fontSize: '0.95rem' }}>1. Bedside Edge Node</div>
                    <div style={{ fontSize: '0.8rem', color: '#475569' }}>ESP32 + Local SQLite DB</div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px', fontSize: '0.75rem', color: '#334155' }}>
                        ✓ Biometric Scan Verification<br/>
                        ✓ Instant Triage Timestamping<br/>
                        ✓ Zero Cloud Dependency
                    </div>
                </div>

                {/* Column 2: Offline Sync Queue */}
                <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontWeight: '800', color: '#78350F', fontSize: '0.95rem' }}>2. Background Sync Queue</div>
                    <div style={{ fontSize: '0.8rem', color: '#92400E' }}>Transaction Log Storage</div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '6px', padding: '8px', fontSize: '0.75rem', color: '#78350F' }}>
                        ⚡ Holds check-in records if Wi-Fi drops<br/>
                        ⚡ Automatic Exponential Backoff<br/>
                        ⚡ Zero Data Loss Guarantee
                    </div>
                </div>

                {/* Column 3: Hospital Central Cloud */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontWeight: '800', color: '#312E81', fontSize: '0.95rem' }}>3. Hospital Cloud / EHR</div>
                    <div style={{ fontSize: '0.8rem', color: '#4338CA' }}>PostgreSQL & FHIR Server</div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #C7D2FE', borderRadius: '6px', padding: '8px', fontSize: '0.75rem', color: '#312E81' }}>
                        ☁️ Bulk Roster Reconciliation<br/>
                        ☁️ HL7 FHIR v4 Serialization<br/>
                        ☁️ National Registry Sync
                    </div>
                </div>
            </div>

            {/* Bottom Legend */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px 14px', fontSize: '0.78rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Resilience Guarantee:</strong> Hospital floor triage continues at 100% speed even during total fiber/cloud outage.
            </div>
        </div>
    );
}
