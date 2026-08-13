"use client";
import React, { useState } from 'react';

export default function MedGemmaFineTuningDiagram() {
    const [selectedLayer, setSelectedLayer] = useState(1);

    const layers = [
        {
            id: 0,
            title: "Base MedGemma Model",
            subtitle: "Foundation Weights",
            badge: "7B / 27B Params",
            color: "#0F172A",
            bg: "#F8FAFC",
            border: "#CBD5E1",
            specs: [
                "Google MedGemma open-weights LLM foundation",
                "Pre-trained on PubMed, MIMIC-III, and clinical literature",
                "Deep medical knowledge base & general reasoning"
            ],
            foot: "FROZEN BASE WEIGHTS"
        },
        {
            id: 1,
            title: "LoRA Fine-Tuning Engine",
            subtitle: "Parameter-Efficient Adapters",
            badge: "Rank r=16, α=32",
            color: "#6B21A8",
            bg: "#F3E8FF",
            border: "#E9D5FF",
            specs: [
                "Low-Rank Adaptation (LoRA) matrix insertion on attention layers",
                "Trained on Egyptian Dialysis Formulary & KDIGO Guidelines",
                "SNOMED CT concept mappings & LOINC lab code alignment"
            ],
            foot: "TRAINED LORA ADAPTERS"
        },
        {
            id: 2,
            title: "Local Hospital Server GPU",
            subtitle: "Quantized Local Inference",
            badge: "INT4 / INT8 (4.2GB VRAM)",
            color: "#312E81",
            bg: "#EEF2FF",
            border: "#C7D2FE",
            specs: [
                "Quantized for low-latency inference on local RTX/Tesla GPUs",
                "Hosted entirely inside hospital firewall local subnet",
                "Zero patient data exfiltration to public cloud APIs"
            ],
            foot: "ON-PREM LOCAL DEPLOYMENT"
        }
    ];

    const current = layers[selectedLayer];

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
                    TECHNICAL ARCHITECTURE // MEDGEMMA LORA FINE-TUNING
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
                    On-Premises Local Inference
                </span>
            </div>

            {/* 3 Architecture Blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', flex: 1, margin: '6px 0' }}>
                {layers.map((lyr, idx) => {
                    const isSel = selectedLayer === idx;
                    return (
                        <div
                            key={lyr.title}
                            onClick={() => setSelectedLayer(idx)}
                            style={{
                                background: isSel ? lyr.bg : '#F8FAFC',
                                border: `1.5px solid ${isSel ? lyr.border : '#E2E8F0'}`,
                                borderRadius: '12px',
                                padding: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: isSel ? 'scale(1.02)' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                    <span style={{ fontWeight: '800', fontSize: '0.82rem', color: lyr.color }}>
                                        {idx + 1}. {lyr.title}
                                    </span>
                                </div>
                                <div style={{ fontSize: '0.72rem', color: '#64748B', marginBottom: '8px' }}>
                                    {lyr.subtitle}
                                </div>
                                <div style={{ fontSize: '0.72rem', color: '#334155', lineHeight: 1.35 }}>
                                    {lyr.specs.map((sp, i) => (
                                        <div key={i} style={{ marginBottom: '3px' }}>• {sp}</div>
                                    ))}
                                </div>
                            </div>
                            <div style={{
                                marginTop: '8px',
                                background: '#FFFFFF',
                                border: `1px solid ${lyr.border}`,
                                borderRadius: '6px',
                                padding: '4px 8px',
                                fontSize: '0.65rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: '700',
                                color: lyr.color,
                                textAlign: 'center'
                            }}>
                                {lyr.badge}
                            </div>
                        </div>
                    );
                })}
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
                    <strong style={{ color: '#0F172A' }}>Sovereign AI Security: </strong>
                    All LLM prescription auditing is conducted locally on hospital hardware without sending sensitive patient records to external APIs.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#6B21A8', fontWeight: '700' }}>
                    🔒 ZERO DATA EXFILTRATION
                </span>
            </div>
        </div>
    );
}
