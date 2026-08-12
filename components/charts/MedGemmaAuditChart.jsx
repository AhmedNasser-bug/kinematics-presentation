"use client";
import React from 'react';

export default function MedGemmaAuditChart() {
    const stats = [
        { label: "100% Order Verification", detail: "Every e-prescription audited before nurse dispatch", color: "#10B981" },
        { label: "SNOMED CT & LOINC Standard", detail: "Standardized medical term & lab code mapping", color: "#4338CA" },
        { label: "Zero Unadjusted Enoxaparin", detail: "Automated dose adjustment based on eGFR & Creatinine", color: "#6366F1" },
        { label: "81%–86% Error Elimination", detail: "Proven trial reduction in clinical prescribing errors", color: "#0F172A" },
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0F172A', fontWeight: 700 }}>
                        MedGemma Clinical AI Prescription Audit
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Automated Order Interception against LOINC & SNOMED CT Standards
                    </p>
                </div>
                <span style={{
                    background: '#EEF2FF', color: '#4338CA',
                    border: '1px solid #C7D2FE', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    100% Order Verification
                </span>
            </div>

            {/* Grid of Audit Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', margin: '16px 0' }}>
                {stats.map((s, idx) => (
                    <div key={idx} style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '10px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                    }}>
                        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: s.color }}>
                            {s.label}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4 }}>
                            {s.detail}
                        </span>
                    </div>
                ))}
            </div>

            {/* Footer summary */}
            <div style={{
                background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '8px',
                padding: '10px 14px', fontSize: '0.78rem', color: '#312E81', fontWeight: 500
            }}>
                CLINICAL AI SECURITY GATE: Intercepts high-risk renally cleared orders (enoxaparin, gabapentin, acyclovir) and cross-references active eGFR + potassium levels in real time.
            </div>
        </div>
    );
}
