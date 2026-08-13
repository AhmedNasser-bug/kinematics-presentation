"use client";
import React, { useState } from 'react';

export default function CDSSEngineDiagram() {
    const [riskLevel, setRiskLevel] = useState('high'); // 'low', 'moderate', 'high'

    const riskStates = {
        low: {
            title: "Normal Hemodynamics",
            prob: "12%",
            badge: "STABLE",
            badgeBg: "#ECFDF5",
            badgeColor: "#059669",
            badgeBorder: "#A7F3D0",
            action: "Continue routine 15-min vitals monitoring. UF rate on schedule.",
            bpTrend: "BP: 122/78 -> 120/76 mmHg (Stable)"
        },
        moderate: {
            title: "Early Pulse Pressure Narrowing",
            prob: "54%",
            badge: "ELEVATED RISK",
            badgeBg: "#FFFBEB",
            badgeColor: "#D97706",
            badgeBorder: "#FDE68A",
            action: "Alert nurse to re-check cuff position. Consider reducing UF rate by 15%.",
            bpTrend: "BP: 114/72 -> 106/68 mmHg (Narrowing)"
        },
        high: {
            title: "Imminent IDH Collapse Alert",
            prob: "88%",
            badge: "CRITICAL ALERT (15-30m)",
            badgeBg: "#FEF2F2",
            badgeColor: "#DC2626",
            badgeBorder: "#FECACA",
            action: "IMMEDIATE ACTION: Reduce UF rate, position Trendelenburg, evaluate saline bolus.",
            bpTrend: "BP: 102/64 -> 94/58 mmHg (Impending drop <90)"
        }
    };

    const current = riskStates[riskLevel];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
            boxSizing: 'border-box'
        }}>
            {/* Header & Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#4338CA',
                    background: '#EEF2FF',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: '700',
                    border: '1px solid #C7D2FE'
                }}>
                    FEATURE 3 OVERVIEW // PER-PATIENT CDSS ENGINE
                </span>

                {/* Risk Simulation Buttons */}
                <div style={{ display: 'flex', gap: '6px' }}>
                    {['low', 'moderate', 'high'].map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setRiskLevel(lvl)}
                            style={{
                                border: 'none',
                                background: riskLevel === lvl ? '#0F172A' : '#F1F5F9',
                                color: riskLevel === lvl ? '#FFFFFF' : '#475569',
                                fontSize: '0.68rem',
                                fontWeight: '700',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease',
                                textTransform: 'uppercase'
                            }}
                        >
                            {lvl}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3 Stage Architecture */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', flex: 1, margin: '6px 0' }}>
                
                {/* Stage 1: Feature Vector */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#0F172A', marginBottom: '4px' }}>
                            1. Vitals Feature Vector
                        </div>
                        <div style={{ fontSize: '0.73rem', color: '#475569', lineHeight: 1.4 }}>
                            • Systolic / Diastolic Δ<br/>
                            • Pulse Pressure Δ<br/>
                            • Heart Rate Variability<br/>
                            • IDWG & Target UF Rate<br/>
                            • Dialysate Na+ & Temp
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#334155'
                    }}>
                        FREQ: 1 Hz Stream Ingestion
                    </div>
                </div>

                {/* Stage 2: Dual ML Ensemble */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#312E81', marginBottom: '4px' }}>
                            2. Dual ML Ensemble
                        </div>
                        <div style={{ fontSize: '0.73rem', color: '#4338CA', lineHeight: 1.4 }}>
                            • <strong>RNN AUROC: 0.940</strong><br/>
                            • <strong>XGBoost AUROC: 0.936</strong><br/>
                            • Calibrated Probability Output<br/>
                            • SHAP Feature Attribution
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: '1px solid #C7D2FE',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '800',
                        color: current.badgeColor,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span>SCORE: {current.prob}</span>
                        <span style={{ fontSize: '0.62rem', background: current.badgeBg, padding: '2px 6px', borderRadius: '4px' }}>
                            {current.badge}
                        </span>
                    </div>
                </div>

                {/* Stage 3: Clinical Intervention */}
                <div style={{ background: current.badgeBg, border: `1.5px solid ${current.badgeBorder}`, borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: current.badgeColor, marginBottom: '4px' }}>
                            3. Bedside Alert & Action
                        </div>
                        <div style={{ fontSize: '0.73rem', color: '#1E293B', fontWeight: '700', marginBottom: '4px' }}>
                            {current.title}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#334155', lineHeight: 1.35 }}>
                            {current.action}
                        </div>
                    </div>
                    <div style={{
                        marginTop: '8px',
                        background: '#FFFFFF',
                        border: `1px solid ${current.badgeBorder}`,
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: current.badgeColor,
                        fontWeight: '600'
                    }}>
                        {current.bpTrend}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: '10px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '0.74rem',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
            }}>
                <div>
                    <strong style={{ color: '#0F172A' }}>Clinical Outcome: </strong>
                    15-30 minute advance warning prevents acute intra-dialytic hypotension crashes before blood pressure drops &lt; 90 mmHg.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#4338CA', fontWeight: '700' }}>
                    ⚡ 0.940 AUROC
                </span>
            </div>
        </div>
    );
}
