"use client";
import React from 'react';

export default function VitalsTelemetryDiagram() {
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
                    DATA PIPELINE // INTRA-SESSION VITALS TELEMETRY
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    Continuous 15-Min Checks
                </span>
            </div>

            {/* Vitals Telemetry Channels */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '16px 0' }}>
                
                {/* Channel 1 */}
                <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🩸</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#991B1B' }}>Blood Pressure</div>
                    <div style={{ fontSize: '0.72rem', color: '#DC2626', marginTop: '2px' }}>LOINC: 8480-6</div>
                </div>

                {/* Channel 2 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>❤️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#312E81' }}>Heart Rate</div>
                    <div style={{ fontSize: '0.72rem', color: '#4338CA', marginTop: '2px' }}>LOINC: 8867-4</div>
                </div>

                {/* Channel 3 */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>💧</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#78350F' }}>Ultrafiltration Rate</div>
                    <div style={{ fontSize: '0.72rem', color: '#92400E', marginTop: '2px' }}>mL / kg / hr</div>
                </div>

                {/* Channel 4 */}
                <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>⚡</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#065F46' }}>Dialysate Temp</div>
                    <div style={{ fontSize: '0.72rem', color: '#047857', marginTop: '2px' }}>35.5 - 37.0 °C</div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Automated Validation:</strong> Out-of-bounds readings trigger immediate nurse verification alert before saving to FHIR store.
            </div>
        </div>
    );
}
