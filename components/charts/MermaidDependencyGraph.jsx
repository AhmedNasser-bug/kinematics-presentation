"use client";
import React, { useEffect, useRef } from 'react';

export default function MermaidDependencyGraph() {
    const containerRef = useRef(null);

    useEffect(() => {
        let isMounted = true;

        async function renderGraph() {
            try {
                const mermaid = (await import('mermaid')).default;
                mermaid.initialize({
                    startOnLoad: false,
                    theme: 'default',
                    securityLevel: 'loose',
                    flowchart: {
                        useMaxWidth: true,
                        htmlLabels: true,
                        curve: 'basis'
                    }
                });

                const graphDefinition = `
                    graph TD
                        L1["<strong>Level 1: Smart Patient Data Access</strong><br/>Biometric Identity Node & Edge Roster Sync"] --> L2["<strong>Level 2: Digitization & FHIR Compliancy</strong><br/>Bedside Nurse Terminal & HL7 FHIR v4 Converter"]
                        L2 --> L3["<strong>Level 3: Nurse Dashboard & Patient CDSS & Risk Profile</strong><br/>Real-Time Vitals Entry & XGBoost IDH Prediction"]
                        L3 --> L4["<strong>Level 4: Doctor Dashboard & Data & Trend Analysis</strong><br/>Longitudinal Hemodynamics & Dialytic Clearance Trends"]
                        L4 --> L5["<strong>Level 5: Medical Decision Support & Prescriptions</strong><br/>Clinical AI Order Verification & eRx Auditing"]
                        L5 --> L6["<strong>Level 6: Sensor Infusion & Software Layer 2</strong><br/>IV Pole Load-Cell Mass Telemetry & Ward RO Sentinel"]
                        L6 --> L7["<strong>Level 7: MedGemma Fine-Tuning & Unit Integration</strong><br/>SNOMED CT / LOINC Fine-Tuned AI & EHR System Sync"]

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
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
            overflow: 'auto'
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#4338CA',
                background: '#EEF2FF',
                border: '1px solid #C7D2FE',
                padding: '4px 12px',
                borderRadius: '6px',
                marginBottom: '16px',
                fontWeight: '600'
            }}>
                7-TIER SYSTEM ARCHITECTURE & FEATURE DEPENDENCY GRAPH
            </div>
            <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
        </div>
    );
}
