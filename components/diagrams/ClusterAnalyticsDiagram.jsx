"use client";
import React from 'react';

export default function ClusterAnalyticsDiagram() {
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
                    TECHNICAL ARCHITECTURE // MULTI-MACHINE CLUSTER ANALYTICS
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    Zero False Alarms
                </span>
            </div>

            {/* Cluster Calculation Visual */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', margin: '14px 0' }}>
                
                {/* Single Machine Anomaly */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '4px' }}>Single Machine Variance</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', marginBottom: '10px' }}>Isolated conductivity spike on 1 machine</div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px', fontSize: '0.76rem', color: '#334155' }}>
                        ➔ Classed as <strong>Patient-Specific Baseline Shift</strong><br/>
                        ➔ Triggers local CDSS check only<br/>
                        ➔ <strong>No ward siren alarm</strong>
                    </div>
                </div>

                {/* Multi-Machine Cluster Anomaly */}
                <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '10px', padding: '16px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#991B1B', marginBottom: '4px' }}>Correlated Ward Cluster (&ge; 3 Machines)</div>
                    <div style={{ fontSize: '0.74rem', color: '#DC2626', marginBottom: '10px' }}>Simultaneous conductivity drift across 3+ machines</div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #FECACA', borderRadius: '6px', padding: '10px', fontSize: '0.76rem', color: '#991B1B' }}>
                        ➔ Classed as <strong>Systemic RO Water Contamination</strong><br/>
                        ➔ Triggers <strong>Ward Emergency Sentinel Siren</strong><br/>
                        ➔ Automatic Water Solenoid Valve Lockout
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Statistical Precision:</strong> Spatial correlation algorithms ensure individual patient fluctuations never cause false unit-wide shutdowns.
            </div>
        </div>
    );
}
