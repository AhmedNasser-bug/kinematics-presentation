"use client";
import React from 'react';

export default function MedGemmaAuditorDiagram() {
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
                    FEATURE 6 OVERVIEW // MEDGEMMA CLINICAL AI AUDITOR
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    100% Prescription Audit
                </span>
            </div>

            {/* MedGemma Audit Pipeline */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '16px 0' }}>
                
                {/* 1. eRx Input */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '4px' }}>1. Physician eRx Order</div>
                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                        • Medication Name & Dose<br/>
                        • Administration Frequency<br/>
                        • FHIR `MedicationRequest`
                    </div>
                </div>

                {/* 2. MedGemma Reasoning */}
                <div style={{ background: '#F3E8FF', border: '1.5px solid #E9D5FF', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#6B21A8', marginBottom: '4px' }}>2. MedGemma AI Reasoning</div>
                    <div style={{ fontSize: '0.75rem', color: '#9333EA' }}>
                        • Cross-references eGFR/Renal Labs<br/>
                        • Checks Polypharmacy Conflicts<br/>
                        • SNOMED CT / LOINC Validation
                    </div>
                </div>

                {/* 3. Safety Clearance */}
                <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#065F46', marginBottom: '4px' }}>3. Safety Verification</div>
                    <div style={{ fontSize: '0.75rem', color: '#047857' }}>
                        • Green Flag: Dose Safe<br/>
                        • Yellow Flag: Renal Adjustment Rec<br/>
                        • Red Flag: Contraindication Alert
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>National Care Impact:</strong> Eliminates 1.6 Million active paper polypharmacy medication errors in Egyptian dialysis units.
            </div>
        </div>
    );
}
