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
                <span style={{ fontSize: '0.78rem', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    {"< 60s Anomaly Trigger"}
                </span>
            </div>

            {/* Simulated Anomaly Telemetry Chart */}
            <div style={{ position: 'relative', width: '100%', height: '220px', background: '#FAFAFA', borderRadius: '8px', border: '1px solid #F1F5F9', padding: '10px' }}>
                <svg width="100%" height="100%" viewBox="0 0 500 200" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    <line x1="40" y1="40" x2="480" y2="40" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="90" x2="480" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                    <line x1="40" y1="140" x2="480" y2="140" stroke="#F1F5F9" strokeWidth="1" />

                    {/* Baseline Normal Ward Conductivity */}
                    <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        points="40,140 100,138 160,142 220,139 280,140 340,141 400,139 480,140"
                    />

                    {/* Contaminated Loop Spike */}
                    <polyline
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="2.5"
                        strokeDasharray="4,4"
                        points="40,140 100,138 160,142 220,139 280,140 320,60 370,45 420,40 480,42"
                    />

                    {/* Threshold Line */}
                    <line x1="40" y1="75" x2="480" y2="75" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6,4" />
                    <text x="45" y="70" fill="#D97706" fontSize="10" fontWeight="bold">Ward Safety Threshold (Z-Score &gt; 3.0)</text>

                    {/* Anomaly Trigger Circle */}
                    <circle cx="320" cy="60" r="6" fill="#DC2626" />
                    <text x="330" y="55" fill="#DC2626" fontSize="11" fontWeight="bold">Alert Trigger ({"<60s"})</text>
                </svg>
            </div>

            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#991B1B' }}>Multi-Station Cluster Detection</div>
                    <div style={{ fontSize: '0.72rem', color: '#B91C1C' }}>Simultaneous conductivity drift across ≥ 3 machines triggers ward lockout</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#DC2626' }}>{"< 60 Seconds"}</div>
                </div>
            </div>
        </div>
    );
}
