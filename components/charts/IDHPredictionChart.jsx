"use client";
import React from 'react';

export default function IDHPredictionChart() {
    const models = [
        { name: "RNN (Recurrent Neural Net)", auroc: 0.940, lead: "15–60 min", color: "#6366F1" },
        { name: "XGBoost Classifier", auroc: 0.936, lead: "60 min prior", color: "#10B981" },
        { name: "CatBoost Model", auroc: 0.880, lead: "Pre-dialysis", color: "#F59E0B" },
        { name: "Bidirectional LSTM", auroc: 0.816, lead: "15–75 min", color: "#3B82F6" },
    ];

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
                        Machine Learning IDH Predictive Models
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Validated AUROC Metrics & Actionable Lead Time Window
                    </p>
                </div>
                <span style={{
                    background: '#EEF2FF', color: '#4338CA',
                    border: '1px solid #C7D2FE', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    15–30 Min Warning Horizon
                </span>
            </div>

            {/* Model AUROC Bar Chart */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
                {models.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                            <span>{m.name}</span>
                            <span style={{ color: m.color, fontWeight: 700 }}>AUROC: {m.auroc.toFixed(3)} ({m.lead})</span>
                        </div>
                        <div style={{ width: '100%', height: '10px', background: '#F1F5F9', borderRadius: '5px', overflow: 'hidden' }}>
                            <div style={{
                                width: `${(m.auroc / 1.0) * 100}%`,
                                height: '100%',
                                background: m.color,
                                borderRadius: '5px',
                                transition: 'width 0.8s ease'
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Metric Callout Panel */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
                background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Sensitivity</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>85.8% - 88.0%</div>
                </div>
                <div style={{ textAlign: 'center', borderLeft: '1px solid #CBD5E1', borderRight: '1px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Optimal Lead Time</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338CA' }}>30 Minutes</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Clinical Action</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>Preemptive UF Drop</div>
                </div>
            </div>
        </div>
    );
}
