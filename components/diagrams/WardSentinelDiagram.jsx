"use client";
import React from 'react';

export default function WardSentinelDiagram() {
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
                    FEATURE 4 OVERVIEW // WARD QUALITY ANOMALY ENGINE
                </span>
                <span style={{ fontSize: '0.78rem', color: '#DC2626', background: '#FEF2F2', border: '1px solid #FECACA', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    &lt; 60 Sec Ward Alert
                </span>
            </div>

            {/* Ward Sentinel Concept Architecture */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '16px 0' }}>
                
                {/* 1. Multi-Machine Telemetry */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '6px' }}>1. Ward Machine Array</div>
                    <div style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.4 }}>
                        • 15–30 Active Dialysis Units<br/>
                        • Dialysate Conductivity Probes<br/>
                        • Dialysate Temperature Sensors<br/>
                        • Reverse Osmosis Water Loop
                    </div>
                </div>

                {/* 2. Ward Anomaly Aggregator */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#78350F', marginBottom: '6px' }}>2. Statistical Anomaly Sentinel</div>
                    <div style={{ fontSize: '0.76rem', color: '#92400E', lineHeight: 1.4 }}>
                        • Detects correlated variance<br/>
                        • Differentiates patient vs ward<br/>
                        • <strong>Z-Score &gt; 3.0 Cluster Spike</strong><br/>
                        • Hard Water / Chloramine Detector
                    </div>
                </div>

                {/* 3. Automatic Shutoff & Alert */}
                <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#991B1B', marginBottom: '6px' }}>3. Emergency Ward Alarm</div>
                    <div style={{ fontSize: '0.76rem', color: '#DC2626', lineHeight: 1.4 }}>
                        • Immediate Floor Siren & Audio<br/>
                        • Nurse Master Terminal Alert<br/>
                        • Automated Water Loop Cutoff<br/>
                        • Outbreak Prevention
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Epidemiological Defense:</strong> Halts ward-wide toxic outbreaks (like Guy's Hospital Hard Water Syndrome or Guro Hospital Chloramine Hemolysis) in under 60 seconds.
            </div>
        </div>
    );
}
