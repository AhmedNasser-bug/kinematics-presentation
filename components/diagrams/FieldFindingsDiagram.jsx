"use client";
import React, { useState } from 'react';

export default function FieldFindingsDiagram() {
    const [selectedFinding, setSelectedFinding] = useState(0);

    const findings = [
        {
            id: 'batch-lab',
            icon: '📋',
            title: "Uniform Batch Lab Error",
            severity: "CRITICAL",
            sevColor: "#DC2626",
            sevBg: "#FEF2F2",
            summary: "Entire month's lab results copy-pasted across patient charts without flagging abnormal values.",
            detail: "Audit revealed identical serum potassium & creatinine entries across 42 consecutive patient flowsheets. Human clerical burnout led to zero real-time anomaly alerts.",
            impact: "High risk of unmonitored hyperkalemia & cardiac arrest during dialysis."
        },
        {
            id: 'water-neglect',
            icon: '💧',
            title: "60+ Unrecorded Water Filter Neglects",
            severity: "HIGH RISK",
            sevColor: "#D97706",
            sevBg: "#FFFBEB",
            summary: "Chlorine/chloramine filter replacement neglect recurrences hidden by paper logsheets.",
            detail: "Reverse Osmosis (RO) carbon tank maintenance skipped during peak shift hours. Paper logs showed fraudulent compliance checkmarks despite depleted carbon beds.",
            impact: "Risk of patient hemolysis due to chloramine breakthrough in dialysate water."
        },
        {
            id: 'paper-friction',
            icon: '👩‍⚕️',
            title: "Paper Friction & Fragmented Care Link",
            severity: "EFFICIENCY LOSS",
            sevColor: "#4338CA",
            sevBg: "#EEF2FF",
            summary: "Loose paper binder notes force physicians to spend 20+ mins reviewing past session trends manually.",
            detail: "Attending nephrologists spend up to 35% of round time sifting through physical binders. Key intra-dialytic blood pressure drops went unrecorded between shifts.",
            impact: "Physician fatigue, delayed prescription adjustments, and zero trend analytics."
        }
    ];

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: '#DC2626',
                        background: '#FEF2F2',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontWeight: '700',
                        border: '1px solid #FECACA'
                    }}>
                        PHYSICAL SURVEY FINDINGS // DIALYSIS FLOOR AUDIT
                    </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '600' }}>
                    Click finding to inspect details
                </span>
            </div>

            {/* Interactive Finding Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
                {findings.map((item, idx) => {
                    const isSelected = selectedFinding === idx;
                    return (
                        <div
                            key={item.id}
                            onClick={() => setSelectedFinding(idx)}
                            style={{
                                background: isSelected ? item.sevBg : '#F8FAFC',
                                border: `1.5px solid ${isSelected ? item.sevColor : '#E2E8F0'}`,
                                borderRadius: '12px',
                                padding: '12px 16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: isSelected ? 'translateX(4px)' : 'none',
                                boxShadow: isSelected ? `0 4px 12px ${item.sevColor}15` : 'none'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                                    <div>
                                        <div style={{ fontWeight: '800', fontSize: '0.86rem', color: '#0F172A' }}>
                                            {item.title}
                                        </div>
                                        <div style={{ fontSize: '0.74rem', color: '#475569', marginTop: '2px' }}>
                                            {item.summary}
                                        </div>
                                    </div>
                                </div>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    fontWeight: '800',
                                    color: item.sevColor,
                                    background: '#FFFFFF',
                                    padding: '3px 8px',
                                    borderRadius: '6px',
                                    border: `1px solid ${item.sevColor}40`,
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item.severity}
                                </span>
                            </div>

                            {isSelected && (
                                <div style={{
                                    marginTop: '10px',
                                    paddingTop: '10px',
                                    borderTop: `1px dashed ${item.sevColor}40`,
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '12px',
                                    fontSize: '0.73rem'
                                }}>
                                    <div>
                                        <span style={{ fontWeight: '700', color: '#0F172A' }}>Root Cause: </span>
                                        <span style={{ color: '#334155' }}>{item.detail}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: '700', color: item.sevColor }}>Clinical Impact: </span>
                                        <span style={{ color: '#334155' }}>{item.impact}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Footer Solution Note */}
            <div style={{
                marginTop: '12px',
                background: '#ECFDF5',
                border: '1px solid #A7F3D0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: '0.74rem',
                color: '#065F46',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
            }}>
                <div>
                    <strong style={{ color: '#047857' }}>DiaClinic Resolution: </strong>
                    Digital FHIR Terminals + Automated RO Sentinel Probes + MedGemma AI Audits eliminate all paper failure modes.
                </div>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    color: '#059669',
                    background: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid #6EE7B7'
                }}>
                    ZERO PAPER LOSS
                </span>
            </div>
        </div>
    );
}
