"use client";
import React from 'react';

export default function InfusionMassChart() {
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
                        IV Pole Strain-Gauge Mass Loss Telemetry
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Continuous Load Cell Infusion Mass (Grams) vs Elapsed Time
                    </p>
                </div>
                <span style={{
                    background: '#DCFCE7', color: '#15803D',
                    border: '1px solid #86EFAC', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    0 Unnoticed Stalls
                </span>
            </div>

            {/* Simulated IV Mass Loss Curve */}
            <div style={{ position: 'relative', height: '160px', marginTop: '12px' }}>
                <svg viewBox="0 0 500 150" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Y-Axis Label */}
                    <text x="5" y="20" fill="#64748B" fontSize="10">500g (Full IV Bag)</text>
                    <text x="5" y="140" fill="#64748B" fontSize="10">0g (Empty Container)</text>

                    {/* Normal Steady Mass Loss Curve */}
                    <path
                        d="M 40 25 L 220 85"
                        fill="none" stroke="#10B981" strokeWidth="3"
                    />

                    {/* Occlusion Stall Flatline */}
                    <path
                        d="M 220 85 L 340 85"
                        fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="4"
                    />

                    {/* Alarm Trigger Event */}
                    <circle cx="280" cy="85" r="6" fill="#EF4444" />
                    <text x="290" y="75" fill="#EF4444" fontSize="11" fontWeight="bold">Flow Stall Detected (&lt;3s Alarm)</text>

                    {/* Resumed Infusion after nurse intervention */}
                    <path
                        d="M 340 85 L 480 135"
                        fill="none" stroke="#10B981" strokeWidth="3"
                    />
                </svg>
            </div>

            {/* Infusion Telemetry Summary */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
                background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Sampling Rate</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338CA' }}>5 Hz Continuous</div>
                </div>
                <div style={{ textAlign: 'center', borderLeft: '1px solid #CBD5E1', borderRight: '1px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Alarm Latency</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#EF4444' }}>&lt; 3.0 Seconds</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Hardware Sensor</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>24-Bit HX711 ADC</div>
                </div>
            </div>
        </div>
    );
}
