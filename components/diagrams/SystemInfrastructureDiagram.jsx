"use client";
import React from 'react';

export default function SystemInfrastructureDiagram() {
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
                    INFRASTRUCTURE SUMMARY // END-TO-END DEPLOYMENT MAP
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    100% Floor Availability
                </span>
            </div>

            {/* Infrastructure Tier Map */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', margin: '14px 0' }}>
                
                {/* Tier 1 */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>⚡</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#0F172A' }}>Edge Microcontrollers</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '2px' }}>ESP32 + Load Cells + Fingerprint</div>
                </div>

                {/* Tier 2 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>💻</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#312E81' }}>Nurse Terminals</div>
                    <div style={{ fontSize: '0.7rem', color: '#4338CA', marginTop: '2px' }}>Bedside PWA + Local SQLite</div>
                </div>

                {/* Tier 3 */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>🖥️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#78350F' }}>Ward Server GPU</div>
                    <div style={{ fontSize: '0.7rem', color: '#92400E', marginTop: '2px' }}>Local MedGemma & CDSS ML</div>
                </div>

                {/* Tier 4 */}
                <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>☁️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#065F46' }}>Central Cloud / EHR</div>
                    <div style={{ fontSize: '0.7rem', color: '#047857', marginTop: '2px' }}>FHIR Store + National Registry</div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.75rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Operational Targets:</strong> Slashes nursing paper overhead from ~25 min down to &lt; 5 min per session, delivers 15-30 min IDH advance warning, and &lt; 60s ward outbreak alerts.
            </div>
        </div>
    );
}
