"use client";
import React from 'react';

export default function TerminologyDataDiagram() {
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
                    DATA PIPELINE // CLINICAL TERMINOLOGY STANDARDS
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    SNOMED CT + LOINC
                </span>
            </div>

            {/* Terminology Mapping Table */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '14px 0' }}>
                
                {/* Column 1: SNOMED CT */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81', marginBottom: '6px' }}>SNOMED CT (Clinical Terms)</div>
                    <div style={{ fontSize: '0.76rem', color: '#4338CA', lineHeight: 1.5 }}>
                        • <strong>Concept ID 716186003:</strong> Hemodialysis care plan<br/>
                        • <strong>Concept ID 236435004:</strong> End-stage renal disease<br/>
                        • <strong>Concept ID 410620009:</strong> Heparin sodium administration
                    </div>
                </div>

                {/* Column 2: LOINC */}
                <div style={{ background: '#F3E8FF', border: '1.5px solid #E9D5FF', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#6B21A8', marginBottom: '6px' }}>LOINC (Lab Observations)</div>
                    <div style={{ fontSize: '0.76rem', color: '#9333EA', lineHeight: 1.5 }}>
                        • <strong>LOINC 2160-0:</strong> Serum Creatinine<br/>
                        • <strong>LOINC 33914-3:</strong> Estimated GFR (eGFR)<br/>
                        • <strong>LOINC 2823-3:</strong> Serum Potassium Panel
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>International Standardization:</strong> Ensures all e-prescriptions and lab observations follow global biomedical terminology standards.
            </div>
        </div>
    );
}
