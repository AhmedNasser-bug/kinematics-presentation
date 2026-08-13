"use client";
import React from 'react';

export default function InfusionDataFlowDiagram() {
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
                    DATA PIPELINE // INFUSION MASS TELEMETRY CALCULATIONS
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    Real-Time Rate Tracking
                </span>
            </div>

            {/* Calculations Flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ fontWeight: '800', color: '#4338CA', fontSize: '1.1rem' }}>1</div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0F172A' }}>Raw ADC Strain Sampling</div>
                        <div style={{ fontSize: '0.76rem', color: '#64748B' }}>10 mass readings per second filtered via moving average window.</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ fontWeight: '800', color: '#4338CA', fontSize: '1.1rem' }}>2</div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#312E81' }}>Volumetric Flow Rate Calculation (Δm / Δt)</div>
                        <div style={{ fontSize: '0.76rem', color: '#4338CA' }}>Computes active infusion rate in mL/hr against prescribed dose.</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ fontWeight: '800', color: '#059669', fontSize: '1.1rem' }}>3</div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#065F46' }}>Occlusion & Empty Bag Threshold Alarm</div>
                        <div style={{ fontSize: '0.76rem', color: '#047857' }}>Triggers bedside nurse terminal audio alert if flow rate drops below threshold for &gt; 3 seconds.</div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Precision Margin:</strong> Detects subtle IV tubing kinks and vein occlusions before standard pressure sensors trip.
            </div>
        </div>
    );
}
