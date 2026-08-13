"use client";
import React, { useState } from 'react';

export default function BiometricDataFlowDiagram() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            num: "1",
            title: "Capacitive Fingerprint Minutiae Extraction",
            subtitle: "30-40 Ridge Vectors Extracted",
            color: "#4338CA",
            bg: "#EEF2FF",
            borderColor: "#C7D2FE",
            detail: "Hardware optical/capacitive sensor extracts 34 minutiae vector points (bifurcations & ridge endings). The raw bitmap image is instantly purged from volatile RAM within <10ms.",
            codeSnippet: "VECTORS: [(x:142, y:88, θ:45°), (x:198, y:120, θ:112°), ...]",
            status: "RAM Instant Wiped"
        },
        {
            num: "2",
            title: "SHA-256 Irreversible Salted Hashing",
            subtitle: "One-Way Cryptographic Transform",
            color: "#D97706",
            bg: "#FFFBEB",
            borderColor: "#FDE68A",
            detail: "Vector coordinates are combined with a per-hospital secret salt key and processed through SHA-256. Reconstructing the original fingerprint image from the resulting string is mathematically impossible.",
            codeSnippet: "HASH: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            status: "Irreversible Math"
        },
        {
            num: "3",
            title: "Patient Shift Roster Match & Ingestion Trigger",
            subtitle: "Zero-Knowledge Session Access",
            color: "#059669",
            bg: "#ECFDF5",
            borderColor: "#A7F3D0",
            detail: "Hash is matched against daily patient roster index stored on local edge sqlite db. Match unlocks patient's active Dialysis Encounter flowsheet for bedside nurse verification.",
            codeSnippet: "MATCH: Patient #EG-88219 [Ward B / Station 4] -> ACTIVE SESSION",
            status: "Roster Verified"
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
                    DATA PIPELINE // PRIVACY-PRESERVING HASHING & TELEMETRY
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
                    HIPAA & GDPR Compliant
                </span>
            </div>

            {/* Interactive Step Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'center' }}>
                {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                        <div
                            key={step.num}
                            onClick={() => setActiveStep(idx)}
                            style={{
                                background: isActive ? step.bg : '#F8FAFC',
                                border: `1.5px solid ${isActive ? step.borderColor : '#E2E8F0'}`,
                                borderRadius: '12px',
                                padding: '12px 16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: isActive ? 'scale(1.01)' : 'none'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: step.color,
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '800',
                                        fontSize: '0.88rem',
                                        boxShadow: `0 2px 8px ${step.color}40`
                                    }}>
                                        {step.num}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '800', fontSize: '0.86rem', color: '#0F172A' }}>
                                            {step.title}
                                        </div>
                                        <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '1px' }}>
                                            {step.subtitle}
                                        </div>
                                    </div>
                                </div>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    fontWeight: '700',
                                    color: step.color,
                                    background: '#FFFFFF',
                                    padding: '3px 8px',
                                    borderRadius: '6px',
                                    border: `1px solid ${step.borderColor}`
                                }}>
                                    {step.status}
                                </span>
                            </div>

                            {isActive && (
                                <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: `1px dashed ${step.borderColor}` }}>
                                    <p style={{ fontSize: '0.74rem', color: '#334155', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                                        {step.detail}
                                    </p>
                                    <div style={{
                                        background: '#0F172A',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.68rem',
                                        color: '#38BDF8',
                                        overflowX: 'auto'
                                    }}>
                                        {step.codeSnippet}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Privacy Footer */}
            <div style={{
                marginTop: '12px',
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
                    <strong style={{ color: '#0F172A' }}>Privacy Guarantee: </strong>
                    Zero raw biometric images stored or transmitted. Reconstruction is mathematically impossible.
                </div>
                <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#059669',
                    fontWeight: '700'
                }}>
                    🔒 SALT-PROTECTED
                </span>
            </div>
        </div>
    );
}
