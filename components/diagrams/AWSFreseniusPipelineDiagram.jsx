"use client";
import React, { useState } from 'react';

export default function AWSFreseniusPipelineDiagram() {
    const [activeStage, setActiveStage] = useState(0);

    const stages = [
        {
            icon: "📟",
            title: "Dialysis Telemetry",
            subtitle: "Edge Machine Vitals",
            badge: "10k MS/sec",
            color: "#0F172A",
            bg: "#F8FAFC",
            border: "#CBD5E1",
            details: "Machine sensors publish blood flow (Qb), dialysate flow (Qd), arterial/venous pressures, and cumulative UF volume every second via MQTT/TLS."
        },
        {
            icon: "⚡",
            title: "Kafka / Kinesis",
            subtitle: "Stream Ingestion",
            badge: "< 50ms Latency",
            color: "#312E81",
            bg: "#EEF2FF",
            border: "#C7D2FE",
            details: "Distributed event streaming partitions high-frequency vitals across hospital cluster brokers, enabling fault-tolerant real-time queueing."
        },
        {
            icon: "🗄️",
            title: "Amazon S3 Lake",
            subtitle: "Parquet / Glue Catalog",
            badge: "Zero Data Loss",
            color: "#78350F",
            bg: "#FFFBEB",
            border: "#FDE68A",
            details: "Telemetry batches converted to columnar Apache Parquet format and cataloged in AWS Glue for fast ad-hoc Athena SQL queries."
        },
        {
            icon: "🧠",
            title: "SageMaker Endpoint",
            subtitle: "IDH Risk Inference",
            badge: "< 100ms SLA",
            color: "#065F46",
            bg: "#ECFDF5",
            border: "#A7F3D0",
            details: "XGBoost and RNN models hosted on auto-scaling SageMaker ML endpoints serve real-time IDH risk scores back to bedside nurse PWAs."
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
                    AWS BIG DATA REFERENCE // FRESENIUS MEDICAL CARE REAL-TIME ML ARCHITECTURE
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                    AWS Architecture Citation
                </span>
            </div>

            {/* Stage Pipeline Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, margin: '8px 0' }}>
                {stages.map((stg, idx) => {
                    const isSel = activeStage === idx;
                    return (
                        <React.Fragment key={stg.title}>
                            <div
                                onClick={() => setActiveStage(idx)}
                                style={{
                                    flex: 1,
                                    background: isSel ? stg.bg : '#F8FAFC',
                                    border: `1.5px solid ${isSel ? stg.border : '#E2E8F0'}`,
                                    borderRadius: '12px',
                                    padding: '12px 10px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    transform: isSel ? 'scale(1.02)' : 'none',
                                    boxShadow: isSel ? `0 4px 12px ${stg.border}` : 'none'
                                }}
                            >
                                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{stg.icon}</div>
                                <div style={{ fontWeight: '800', fontSize: '0.78rem', color: stg.color }}>
                                    {stg.title}
                                </div>
                                <div style={{ fontSize: '0.68rem', color: '#64748B', marginTop: '2px' }}>
                                    {stg.subtitle}
                                </div>
                                <span style={{
                                    display: 'inline-block',
                                    marginTop: '6px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.62rem',
                                    fontWeight: '700',
                                    color: stg.color,
                                    background: '#FFFFFF',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    border: `1px solid ${stg.border}`
                                }}>
                                    {stg.badge}
                                </span>
                            </div>
                            {idx < stages.length - 1 && (
                                <div style={{ color: '#4338CA', fontWeight: 'bold', fontSize: '1rem' }}>➔</div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Stage Detail Card */}
            <div style={{
                background: stages[activeStage].bg,
                border: `1.5px solid ${stages[activeStage].border}`,
                borderRadius: '10px',
                padding: '10px 14px',
                marginTop: '6px'
            }}>
                <div style={{ fontWeight: '800', fontSize: '0.78rem', color: stages[activeStage].color, marginBottom: '2px' }}>
                    Stage {activeStage + 1}: {stages[activeStage].title} Technical Specification
                </div>
                <div style={{ fontSize: '0.73rem', color: '#334155', lineHeight: 1.4 }}>
                    {stages[activeStage].details}
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
                    <strong style={{ color: '#0F172A' }}>Industry Alignment: </strong>
                    DiaClinic telemetry stream mirrors Fresenius Medical Care's AWS enterprise architecture for real-time dialysis risk prediction.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#059669', fontWeight: '700' }}>
                    ☁️ AWS ENTERPRISE READY
                </span>
            </div>
        </div>
    );
}
