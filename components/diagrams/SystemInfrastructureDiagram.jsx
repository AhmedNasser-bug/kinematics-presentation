"use client";
import React, { useState } from 'react';

export default function SystemInfrastructureDiagram() {
    const [selectedTier, setSelectedTier] = useState(1);

    const tiers = [
        {
            icon: "⚡",
            name: "Tier 1: Edge Microcontrollers",
            sub: "ESP32 + Load Cells + Fingerprint",
            latency: "< 50ms",
            color: "#0F172A",
            bg: "#F8FAFC",
            border: "#CBD5E1",
            details: "Bedside hardware nodes equipped with load-cell strain gauges, optical minutiae sensors, and local RS485/WiFi telemetry modules."
        },
        {
            icon: "💻",
            name: "Tier 2: Nurse Terminals",
            sub: "Bedside PWA + Local SQLite",
            latency: "< 200ms",
            color: "#312E81",
            bg: "#EEF2FF",
            border: "#C7D2FE",
            details: "Touchscreen PWA running offline-first web service worker with local SQLite database for zero-latency bedside data entry during network outages."
        },
        {
            icon: "🖥️",
            name: "Tier 3: Ward GPU Server",
            sub: "Local MedGemma & CDSS ML",
            latency: "< 500ms",
            color: "#78350F",
            bg: "#FFFBEB",
            border: "#FDE68A",
            details: "On-premises unit GPU server hosting local MedGemma LoRA fine-tuned model and XGBoost/RNN real-time IDH early warning prediction engine."
        },
        {
            icon: "☁️",
            name: "Tier 4: Central Cloud / EHR",
            sub: "FHIR Store + National Registry",
            latency: "< 1.5s",
            color: "#065F46",
            bg: "#ECFDF5",
            border: "#A7F3D0",
            details: "Central HL7 FHIR v4 repository syncing aggregated clinical encounters, water quality logs, and national dialysis unit registry analytics."
        }
    ];

    const current = tiers[selectedTier];

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
            {/* Header */}
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
                    INFRASTRUCTURE SUMMARY // END-TO-END DEPLOYMENT MAP
                </span>
                <span style={{
                    fontSize: '0.75rem',
                    color: '#059669',
                    background: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: '700'
                }}>
                    100% Floor Availability
                </span>
            </div>

            {/* 4 Tier Grid Map */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', flex: 1, margin: '6px 0' }}>
                {tiers.map((t, idx) => {
                    const isSel = selectedTier === idx;
                    return (
                        <div
                            key={t.name}
                            onClick={() => setSelectedTier(idx)}
                            style={{
                                background: isSel ? t.bg : '#F8FAFC',
                                border: `1.5px solid ${isSel ? t.border : '#E2E8F0'}`,
                                borderRadius: '12px',
                                padding: '10px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: isSel ? 'scale(1.02)' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div style={{ fontSize: '1.4rem', marginBottom: '2px' }}>{t.icon}</div>
                                <div style={{ fontWeight: '800', fontSize: '0.75rem', color: t.color }}>
                                    {t.name.split(':')[1]}
                                </div>
                                <div style={{ fontSize: '0.66rem', color: '#64748B', marginTop: '2px' }}>
                                    {t.sub}
                                </div>
                            </div>
                            <span style={{
                                marginTop: '6px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.62rem',
                                fontWeight: '700',
                                color: t.color,
                                background: '#FFFFFF',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                border: `1px solid ${t.border}`
                            }}>
                                LATENCY: {t.latency}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Tier Detail Card */}
            <div style={{
                background: current.bg,
                border: `1.5px solid ${current.border}`,
                borderRadius: '10px',
                padding: '10px 14px',
                marginTop: '4px'
            }}>
                <div style={{ fontWeight: '800', fontSize: '0.78rem', color: current.color, marginBottom: '2px' }}>
                    {current.name} Specification
                </div>
                <div style={{ fontSize: '0.73rem', color: '#334155', lineHeight: 1.4 }}>
                    {current.details}
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
                    <strong style={{ color: '#0F172A' }}>Operational Target: </strong>
                    Slashes nursing paper overhead from ~25 min down to &lt; 5 min per session, delivers 15-30 min IDH advance warning, and &lt; 60s ward outbreak alerts.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#4338CA', fontWeight: '700' }}>
                    🚀 FULL DEPLOYMENT
                </span>
            </div>
        </div>
    );
}
