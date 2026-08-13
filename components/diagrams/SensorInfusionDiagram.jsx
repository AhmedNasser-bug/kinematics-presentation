"use client";
import React from 'react';

export default function SensorInfusionDiagram() {
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
                    FEATURE 5 OVERVIEW // SENSOR INFUSION MONITORING
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    &lt; 3 Sec Stall Alarm
                </span>
            </div>

            {/* Hardware Load Cell Architecture */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '16px 0' }}>
                
                {/* 1. IV Pole Strain Gauge */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>⚖️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A' }}>Strain-Gauge Load Cell</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>5kg Capacity S-Type Sensor hooked on IV Pole</div>
                </div>

                {/* 2. HX711 24-Bit ADC */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>🔌</div>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81' }}>HX711 24-Bit ADC</div>
                    <div style={{ fontSize: '0.74rem', color: '#4338CA', marginTop: '2px' }}>High Precision Mass Sampling (10 Samples/Sec)</div>
                </div>

                {/* 3. Real-Time Flow Calculation */}
                <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>📊</div>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#065F46' }}>Mass Telemetry Engine</div>
                    <div style={{ fontSize: '0.74rem', color: '#047857', marginTop: '2px' }}>Calculates Δm / Δt; alerts if infusion stalls</div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Patient Safety Outcome:</strong> Prevents air embolisms and saline bag dry-outs during continuous IV infusion or heparin anticoagulation.
            </div>
        </div>
    );
}
