"use client";
import React from 'react';

export default function WardAnomalyChart() {
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
                        Systemic Ward Conductivity & RO Anomaly Detector
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Cross-Station Statistical Variance (60-Second Window)
                    </p>
                </div>
                <span style={{
                    background: '#FEF2F2', color: '#DC2626',
                    border: '1px solid #FECACA', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    &lt; 60s Anomaly Trigger
                </span>
            </div>

            {/* Simulated Real-Time Conductivity Line Chart */}
            <div style={{ position: 'relative', height: '160px', marginTop: '12px' }}>
                <svg viewBox="0 0 500 150" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Baseline Grid lines */}
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#E2E8F0" strokeDasharray="4" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="#E2E8F0" strokeDasharray="4" />
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#FCA5A5" strokeDasharray="4" />

                    {/* Threshold Label */}
                    <text x="5" y="24" fill="#DC2626" fontSize="10" fontWeight="bold">RO Failure Threshold (0.1 mg/L Chloramine / High EC Spike)</text>

                    {/* Normal Conductivity Line (Beds 1-8) */}
                    <path
                        d="M 0 115 Q 60 118 120 114 T 240 116 T 300 114"
                        fill="none" stroke="#10B981" strokeWidth="2.5"
                    />

                    {/* Anomaly Spike Line (Cross-bed outbreak) */}
                    <path
                        d="M 300 114 Q 330 110 360 40 T 420 25 T 500 20"
                        fill="none" stroke="#DC2626" strokeWidth="3"
                    />

                    {/* Trigger Point Circle */}
                    <circle cx="360" cy="40" r="6" fill="#DC2626" />
                    <text x="370" y="44" fill="#DC2626" fontSize="11" fontWeight="bold">Alert Trigger (&lt;60s)</text>
                </svg>
            </div>

            {/* Anomaly Metric Breakdown */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
                background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Cluster Response</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#DC2626' }}>&lt; 60 Seconds</div>
                </div>
                <div style={{ textAlign: 'center', borderLeft: '1px solid #CBD5E1', borderRight: '1px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>RO Outbreak Risk</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>100% Intercepted</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Ward Scope</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338CA' }}>All Active Beds</div>
                </div>
            </div>
        </div>
    );
}
