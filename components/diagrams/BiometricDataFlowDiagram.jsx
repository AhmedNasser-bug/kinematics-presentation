"use client";
import React from 'react';

export default function BiometricDataFlowDiagram() {
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
                    DATA PIPELINE // PRIVACY-PRESERVING HASHING & TELEMETRY
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    HIPAA & GDPR Compliant
                </span>
            </div>

            {/* Step-by-Step Flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
                
                {/* Step 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#EEF2FF', color: '#4338CA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.85rem' }}>1</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0F172A' }}>Capacitive Fingerprint Minutiae Extraction</div>
                        <div style={{ fontSize: '0.76rem', color: '#64748B' }}>Sensor extracts 30-40 ridge vector points; raw image immediately wiped from RAM.</div>
                    </div>
                </div>

                {/* Step 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FDE68A', color: '#78350F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.85rem' }}>2</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#78350F' }}>SHA-256 Irreversible Salted Hashing</div>
                        <div style={{ fontSize: '0.76rem', color: '#92400E' }}>Minutiae vector transformed into one-way cryptographic hash code.</div>
                    </div>
                </div>

                {/* Step 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#A7F3D0', color: '#065F46', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.85rem' }}>3</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#065F46' }}>Patient Shift Roster Match & Ingestion Trigger</div>
                        <div style={{ fontSize: '0.76rem', color: '#047857' }}>Hash matched against daily roster index; opens active Dialysis Encounter session.</div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Privacy Safeguard:</strong> Zero raw biometric images leave device memory. Reconstructive fingerprint recovery is mathematically impossible.
            </div>
        </div>
    );
}
