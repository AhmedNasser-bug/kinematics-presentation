"use client";
import React, { useState } from 'react';

export default function TerminologyDataDiagram() {
    const [selectedTab, setSelectedTab] = useState('snomed'); // 'snomed', 'loinc'

    const terminology = {
        snomed: {
            title: "SNOMED CT (Systematized Nomenclature of Medicine)",
            domain: "Clinical Conditions & Care Procedures",
            bg: "#EEF2FF",
            border: "#C7D2FE",
            color: "#312E81",
            items: [
                { code: "716186003", display: "Hemodialysis care plan", category: "Procedure Plan" },
                { code: "236435004", display: "End-stage renal disease (ESRD)", category: "Clinical Diagnosis" },
                { code: "410620009", display: "Heparin sodium administration", category: "Substance Admin" },
                { code: "473010000", display: "Intradiallytic hypotension", category: "Clinical Finding" }
            ],
            sampleJson: `{
  "system": "http://snomed.info/sct",
  "code": "716186003",
  "display": "Hemodialysis care plan"
}`
        },
        loinc: {
            title: "LOINC (Logical Observation Identifiers Names & Codes)",
            domain: "Laboratory Tests & Vital Measurements",
            bg: "#F3E8FF",
            border: "#E9D5FF",
            color: "#6B21A8",
            items: [
                { code: "2160-0", display: "Serum Creatinine [Mass/volume]", category: "Renal Lab" },
                { code: "33914-3", display: "Estimated GFR (eGFR)", category: "Renal Function" },
                { code: "2823-3", display: "Potassium [Moles/volume] in Serum", category: "Electrolyte Panel" },
                { code: "8480-6", display: "Systolic Blood Pressure", category: "Vital Sign" }
            ],
            sampleJson: `{
  "system": "http://loinc.org",
  "code": "2160-0",
  "display": "Serum Creatinine [Mass/volume]"
}`
        }
    };

    const current = terminology[selectedTab];

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
            {/* Header & Tabs */}
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
                    DATA PIPELINE // CLINICAL TERMINOLOGY STANDARDS
                </span>

                <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                        onClick={() => setSelectedTab('snomed')}
                        style={{
                            border: 'none',
                            background: selectedTab === 'snomed' ? '#312E81' : '#F1F5F9',
                            color: selectedTab === 'snomed' ? '#FFFFFF' : '#475569',
                            fontSize: '0.68rem',
                            fontWeight: '700',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                        }}
                    >
                        SNOMED CT
                    </button>
                    <button
                        onClick={() => setSelectedTab('loinc')}
                        style={{
                            border: 'none',
                            background: selectedTab === 'loinc' ? '#6B21A8' : '#F1F5F9',
                            color: selectedTab === 'loinc' ? '#FFFFFF' : '#475569',
                            fontSize: '0.68rem',
                            fontWeight: '700',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                        }}
                    >
                        LOINC
                    </button>
                </div>
            </div>

            {/* Main Interactive Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '12px', flex: 1, margin: '6px 0' }}>
                
                {/* Concept Code List */}
                <div style={{ background: current.bg, border: `1.5px solid ${current.border}`, borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontWeight: '800', fontSize: '0.82rem', color: current.color, marginBottom: '2px' }}>
                            {current.title}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748B', marginBottom: '8px' }}>
                            {current.domain}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {current.items.map((item) => (
                                <div
                                    key={item.code}
                                    style={{
                                        background: '#FFFFFF',
                                        border: `1px solid ${current.border}`,
                                        borderRadius: '6px',
                                        padding: '6px 10px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div>
                                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '800', fontSize: '0.74rem', color: current.color, marginRight: '8px' }}>
                                            [{item.code}]
                                        </span>
                                        <span style={{ fontSize: '0.73rem', color: '#0F172A', fontWeight: '600' }}>
                                            {item.display}
                                        </span>
                                    </div>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#64748B', background: '#F8FAFC', padding: '2px 6px', borderRadius: '4px' }}>
                                        {item.category}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FHIR Coding Payload Box */}
                <div style={{ background: '#0F172A', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#38BDF8', fontWeight: '700' }}>
                                FHIR Coding Structure
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#A3E635' }}>
                                GLOBAL STANDARD
                            </span>
                        </div>
                        <pre style={{
                            margin: 0,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: '#F8FAFC',
                            lineHeight: 1.35,
                            overflowX: 'auto',
                            whiteSpace: 'pre-wrap'
                        }}>
                            {current.sampleJson}
                        </pre>
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', borderTop: '1px solid #334155', paddingTop: '6px', marginTop: '6px' }}>
                        Enables seamless cross-hospital clinical analytics & AI interoperability.
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
                    <strong style={{ color: '#0F172A' }}>International Standardization: </strong>
                    Ensures all e-prescriptions and lab observations follow global biomedical terminology standards.
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#059669', fontWeight: '700' }}>
                    🌐 GLOBAL INTEROPERABILITY
                </span>
            </div>
        </div>
    );
}
