"use client";
import React from 'react';

export default function CDSSEngineDiagram() {
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
                    FEATURE 3 OVERVIEW // PER-PATIENT CDSS ENGINE
                </span>
                <span style={{ fontSize: '0.78rem', color: '#D97706', background: '#FFFBEB', border: '1px solid #FDE68A', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    15–30 Min IDH Early Warning
                </span>
            </div>

            {/* Pipeline Architecture */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '16px 0' }}>
                
                {/* Step 1: Input Features */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '6px' }}>1. Vitals Feature Vector</div>
                    <div style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.4 }}>
                        • Systolic / Diastolic BP Delta<br/>
                        • Pulse Pressure & HR Trend<br/>
                        • Interdialytic Weight Gain (IDWG)<br/>
                        • Dialysate Sodium & Temp
                    </div>
                </div>

                {/* Step 2: ML Model Inference */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81', marginBottom: '6px' }}>2. XGBoost / RNN Inference</div>
                    <div style={{ fontSize: '0.76rem', color: '#4338CA', lineHeight: 1.4 }}>
                        • <strong>AUROC: 0.940 (RNN)</strong><br/>
                        • <strong>AUROC: 0.936 (XGBoost)</strong><br/>
                        • Real-time probability scoring<br/>
                        • Calibrated threshold tuning
                    </div>
                </div>

                {/* Step 3: Clinical Intervention */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#78350F', marginBottom: '6px' }}>3. Bedside Alert & Action</div>
                    <div style={{ fontSize: '0.76rem', color: '#92400E', lineHeight: 1.4 }}>
                        • Trend Warning Banner<br/>
                        • UF Rate Reduction Rec<br/>
                        • Patient Trend Curve Plot<br/>
                        • Nurse Check Protocol
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Clinical Outcome:</strong> Prevents acute Intradiallytic Hypotension crashes before systolic blood pressure drops below 90 mmHg.
            </div>
        </div>
    );
}
