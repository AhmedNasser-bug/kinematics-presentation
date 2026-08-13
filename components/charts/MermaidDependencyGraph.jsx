"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function MermaidDependencyGraph() {
    const containerRef = useRef(null);
    const [selectedLevel, setSelectedLevel] = useState(null);

    const levelsInfo = [
        { level: 1, title: "Level 1: Smart Patient Data Access", tech: "Biometric Identity Node & Edge Roster Sync", color: "#4338CA" },
        { level: 2, title: "Level 2: Digitization & FHIR Compliancy", tech: "Bedside Nurse Terminal & HL7 FHIR v4 Converter", color: "#059669" },
        { level: 3, title: "Level 3: Nurse Dashboard & Patient CDSS", tech: "Real-Time Vitals Entry & XGBoost IDH Prediction", color: "#D97706" },
        { level: 4, title: "Level 4: Doctor Dashboard & Trend Analytics", tech: "Longitudinal Hemodynamics & Clearance Trends", color: "#9333EA" },
        { level: 5, title: "Level 5: Clinical AI & eRx Auditing", tech: "MedGemma Clinical Order Verification", color: "#2563EB" },
        { level: 6, title: "Level 6: Sensor Infusion & Sentinel", tech: "IV Pole Mass Telemetry & Ward RO Sentinel", color: "#E11D48" },
        { level: 7, title: "Level 7: Sovereign AI & EHR Sync", tech: "SNOMED CT / LOINC Local AI & EHR Sync", color: "#7C3AED" }
    ];

    useEffect(() => {
        let isMounted = true;

        async function renderGraph() {
            try {
                const mermaid = (await import('mermaid')).default;
                mermaid.initialize({
                    startOnLoad: false,
                    theme: 'neutral',
                    securityLevel: 'loose',
                    flowchart: {
                        useMaxWidth: true,
                        htmlLabels: true,
                        curve: 'basis'
                    }
                });

                const graphDefinition = `
                    graph TD
                        L1["<div style='padding:6px 12px;'><strong>Level 1: Smart Patient Data Access</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>Biometric Identity Node & Edge Roster Sync</span></div>"] --> L2["<div style='padding:6px 12px;'><strong>Level 2: Digitization & FHIR Compliancy</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>Bedside Nurse Terminal & HL7 FHIR v4 Converter</span></div>"]
                        L2 --> L3["<div style='padding:6px 12px;'><strong>Level 3: Nurse Dashboard & Patient CDSS & Risk Profile</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>Real-Time Vitals Entry & XGBoost IDH Prediction</span></div>"]
                        L3 --> L4["<div style='padding:6px 12px;'><strong>Level 4: Doctor Dashboard & Data & Trend Analysis</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>Longitudinal Hemodynamics & Dialytic Clearance Trends</span></div>"]
                        L4 --> L5["<div style='padding:6px 12px;'><strong>Level 5: Medical Decision Support & Prescriptions</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>Clinical AI Order Verification & eRx Auditing</span></div>"]
                        L5 --> L6["<div style='padding:6px 12px;'><strong>Level 6: Sensor Infusion & Software Layer 2</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>IV Pole Load-Cell Mass Telemetry & Ward RO Sentinel</span></div>"]
                        L6 --> L7["<div style='padding:6px 12px;'><strong>Level 7: MedGemma Fine-Tuning & Unit Integration</strong><br/><span style='font-size:0.75rem;opacity:0.9;'>SNOMED CT / LOINC Fine-Tuned AI & EHR System Sync</span></div>"]

                        classDef l1 fill:#EEF2FF,stroke:#4338CA,stroke-width:2px,color:#312E81;
                        classDef l2 fill:#ECFDF5,stroke:#059669,stroke-width:2px,color:#065F46;
                        classDef l3 fill:#FEF3C7,stroke:#D97706,stroke-width:2px,color:#92400E;
                        classDef l4 fill:#F3E8FF,stroke:#9333EA,stroke-width:2px,color:#6B21A8;
                        classDef l5 fill:#EFF6FF,stroke:#2563EB,stroke-width:2px,color:#1E40AF;
                        classDef l6 fill:#FFF1F2,stroke:#E11D48,stroke-width:2px,color:#9F1239;
                        classDef l7 fill:#F5F3FF,stroke:#7C3AED,stroke-width:2px,color:#5B21B6;

                        class L1 l1;
                        class L2 l2;
                        class L3 l3;
                        class L4 l4;
                        class L5 l5;
                        class L6 l6;
                        class L7 l7;
                `;

                if (containerRef.current && isMounted) {
                    containerRef.current.innerHTML = '';
                    const id = `mermaid-dep-${Date.now()}`;
                    const { svg } = await mermaid.render(id, graphDefinition);
                    if (containerRef.current && isMounted) {
                        containerRef.current.innerHTML = svg;
                    }
                }
            } catch (err) {
                console.error("Mermaid render error:", err);
            }
        }

        renderGraph();

        return () => {
            isMounted = false;
        };
    }, []);

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
            boxSizing: 'border-box',
            overflow: 'hidden'
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
                    7-TIER SYSTEM ARCHITECTURE & FEATURE DEPENDENCY GRAPH
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
                    End-to-End System Flow
                </span>
            </div>

            {/* Mermaid SVG Render Box */}
            <div style={{
                flex: 1,
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px',
                background: '#FAFAFA',
                borderRadius: '12px',
                border: '1px solid #F1F5F9'
            }}>
                <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
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
                    <strong style={{ color: '#0F172A' }}>Architecture Completeness: </strong>
                    Covers 100% of DiaClinic hardware nodes, edge services, ML predictors, clinical dashboards, and AI auditors.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#4338CA', fontWeight: '700' }}>
                    7 FULL LEVELS
                </span>
            </div>
        </div>
    );
}
