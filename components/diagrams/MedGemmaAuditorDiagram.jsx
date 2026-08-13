"use client";
import React, { useState } from 'react';

export default function MedGemmaAuditorDiagram() {
    const [auditScenario, setAuditScenario] = useState('safe');

    const scenarios = {
        safe: {
            title: "Normal Dose Verified",
            drug: "Epoetin Alfa 4,000 IU SC",
            flag: "CLEAR",
            flagBg: "#ECFDF5",
            flagColor: "#059669",
            flagBorder: "#A7F3D0",
            reasoning: "Hb = 10.2 g/dL (Target 10-11.5). No active hypertensive crisis. Dose aligns with KDIGO anemia guidelines."
        },
        warning: {
            title: "Renal Dose Adjustment Rec",
            drug: "Enoxaparin 80 mg SC Daily",
            flag: "DOSE WARNING",
            flagBg: "#FFFBEB",
            flagColor: "#D97706",
            flagBorder: "#FDE68A",
            reasoning: "eGFR < 15 mL/min/1.73m² (ESRD). Enoxaparin accumulates in renal failure. Recommend reducing to 40 mg SC daily or switching to Unfractionated Heparin."
        },
        danger: {
            title: "Severe Contraindication Alert",
            drug: "Spironolactone 50 mg PO",
            flag: "CONTRAINDICATED",
            flagBg: "#FEF2F2",
            flagColor: "#DC2626",
            flagBorder: "#FECACA",
            reasoning: "CRITICAL: Patient Serum K+ = 5.8 mEq/L (Hyperkalemia). Potassium-sparing diuretic contraindicated in ESRD on dialysis. High risk of fatal arrhythmia."
        }
    };

    const current = scenarios[auditScenario];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
            boxSizing: 'border-box'
        }}>
            {/* Header & Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#4338CA',
                    background: '#EEF2FF',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: '700',
                    border: '1px solid #C7D2FE'
                }}>
                    FEATURE 6 OVERVIEW // MEDGEMMA CLINICAL AI AUDITOR
                </span>

                {/* Scenario Toggle */}
                <div style={{ display: 'flex', gap: '6px' }}>
                    {Object.keys(scenarios).map((sc) => (
                        <button
                            key={sc}
                            onClick={() => setAuditScenario(sc)}
                            style={{
                                border: 'none',
                                background: auditScenario === sc ? '#0F172A' : '#F1F5F9',
                                color: auditScenario === sc ? '#FFFFFF' : '#475569',
                                fontSize: '0.68rem',
                                fontWeight: '700',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                textTransform: 'uppercase'
                            }}
                        >
                            {sc}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3 Stage Audit Pipeline */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', flex: 1, margin: '6px 0' }}>
                
                {/* 1. eRx Input */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#0F172A', marginBottom: '4px' }}>
                            1. Physician eRx Order
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                            • Medication & Dose<br/>
                            • Admin Route & Freq<br/>
                            • FHIR `MedicationRequest`
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '700',
                        color: '#0F172A'
                    }}>
                        {current.drug}
                    </div>
                </div>

                {/* 2. MedGemma Reasoning Engine */}
                <div style={{ background: '#F3E8FF', border: '1.5px solid #E9D5FF', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#6B21A8', marginBottom: '4px' }}>
                            2. MedGemma AI Reasoning
                        </div>
                        <div style={{ fontSize: '0.73rem', color: '#9333EA', lineHeight: 1.35 }}>
                            • Cross-checks eGFR & K+<br/>
                            • Polypharmacy Conflict<br/>
                            • SNOMED / LOINC Lookup<br/>
                            • KDIGO Guideline Rules
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: '1px solid #E9D5FF',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#6B21A8',
                        fontWeight: '700'
                    }}>
                        🧠 ON-PREM REASONING
                    </div>
                </div>

                {/* 3. Safety Verification Output */}
                <div style={{ background: current.flagBg, border: `1.5px solid ${current.flagBorder}`, borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: current.flagColor, marginBottom: '4px' }}>
                            3. Safety Clearance
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#1E293B', fontWeight: '700', marginBottom: '4px' }}>
                            {current.title}
                        </div>
                        <div style={{ fontSize: '0.71rem', color: '#334155', lineHeight: 1.35 }}>
                            {current.reasoning}
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: `1px solid ${current.flagBorder}`,
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '800',
                        color: current.flagColor,
                        textAlign: 'center'
                    }}>
                        {current.flag}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: '10px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '0.74rem',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
            }}>
                <div>
                    <strong style={{ color: '#0F172A' }}>National Care Impact: </strong>
                    Eliminates 1.6 Million active paper polypharmacy medication errors in Egyptian dialysis units.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#059669', fontWeight: '700' }}>
                    100% PRESCRIPTION AUDIT
                </span>
            </div>
        </div>
    );
}
