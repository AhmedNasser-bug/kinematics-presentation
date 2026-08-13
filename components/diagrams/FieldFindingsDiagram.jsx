"use client";
import React from 'react';

export default function FieldFindingsDiagram() {
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
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#DC2626', background: '#FEF2F2', padding: '4px 10px', borderRadius: '6px', fontWeight: '700', border: '1px solid #FECACA' }}>
                    PHYSICAL SURVEY FINDINGS // DIALYSIS FLOOR AUDIT
                </span>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600' }}>
                    3 Key Structural Vulnerabilities
                </span>
            </div>

            {/* 3 Key Vulnerability Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
                
                {/* Finding 1 */}
                <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontSize: '1.5rem' }}>📋</div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#991B1B' }}>Uniform Batch Lab Error</div>
                        <div style={{ fontSize: '0.76rem', color: '#DC2626' }}>Entire month's lab results copy-pasted across patient charts without flagging abnormal values.</div>
                    </div>
                </div>

                {/* Finding 2 */}
                <div style={{ background: '#FFFBEB', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontSize: '1.5rem' }}>💧</div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#78350F' }}>60+ Unrecorded Water Filter Neglects</div>
                        <div style={{ fontSize: '0.76rem', color: '#92400E' }}>Chlorine/chloramine filter replacement neglect recurrences hidden by paper logsheets.</div>
                    </div>
                </div>

                {/* Finding 3 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontSize: '1.5rem' }}>👩‍⚕️</div>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81' }}>Paper Friction & Fragmented Care Link</div>
                        <div style={{ fontSize: '0.76rem', color: '#4338CA' }}>Loose paper binder notes force physicians to spend 20+ mins reviewing past session trends manually.</div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>DiaClinic Solution:</strong> Replaces paper flowsheets with digital FHIR terminals, automated water sentinel probes, and MedGemma AI prescription auditing.
            </div>
        </div>
    );
}
