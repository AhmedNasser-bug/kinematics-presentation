"use client";
import React, { useState } from 'react';

export default function FHIRSerializationDiagram() {
    const [selectedField, setSelectedField] = useState('bp');

    const fields = {
        bp: {
            name: "Systolic Blood Pressure",
            value: "118 mmHg",
            loinc: "8480-6",
            loincDisplay: "Systolic blood pressure",
            fhirJson: `{
  "resourceType": "Observation",
  "status": "final",
  "category": [{ "coding": [{ "code": "vital-signs" }] }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "8480-6",
      "display": "Systolic blood pressure"
    }]
  },
  "subject": { "reference": "Patient/EG-88219" },
  "valueQuantity": { "value": 118, "unit": "mmHg" }
}`
        },
        hr: {
            name: "Heart Rate",
            value: "74 bpm",
            loinc: "8867-4",
            loincDisplay: "Heart rate",
            fhirJson: `{
  "resourceType": "Observation",
  "status": "final",
  "category": [{ "coding": [{ "code": "vital-signs" }] }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "8867-4",
      "display": "Heart rate"
    }]
  },
  "subject": { "reference": "Patient/EG-88219" },
  "valueQuantity": { "value": 74, "unit": "/min" }
}`
        },
        uf: {
            name: "Ultrafiltration Mass Removed",
            value: "2.80 L",
            loinc: "9279-1",
            loincDisplay: "Dialysis ultrafiltration volume",
            fhirJson: `{
  "resourceType": "Observation",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "9279-1",
      "display": "Dialysis ultrafiltration volume"
    }]
  },
  "valueQuantity": { "value": 2.80, "unit": "L" }
}`
        },
        heparin: {
            name: "Heparin Bolus Dose",
            value: "2,500 IU",
            loinc: "20570-8",
            loincDisplay: "Heparin sodium dose",
            fhirJson: `{
  "resourceType": "MedicationAdministration",
  "status": "completed",
  "medicationCodeableConcept": {
    "coding": [{ "system": "http://snomed.info/sct", "code": "410620009" }]
  },
  "dosage": { "dose": { "value": 2500, "unit": "IU" } }
}`
        }
    };

    const current = fields[selectedField];

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
                    STANDARDS CONVERSION // HL7 FHIR v4 JSON ENGINE
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
                    100% Interoperable
                </span>
            </div>

            {/* Interactive Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 6fr', gap: '12px', alignItems: 'stretch', flex: 1, margin: '6px 0' }}>
                
                {/* Left: Input Selection */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.82rem', color: '#0F172A', marginBottom: '4px' }}>
                        Bedside Form Values
                    </div>
                    {Object.keys(fields).map((key) => {
                        const isSel = selectedField === key;
                        const f = fields[key];
                        return (
                            <div
                                key={key}
                                onClick={() => setSelectedField(key)}
                                style={{
                                    background: isSel ? '#EEF2FF' : '#FFFFFF',
                                    border: `1.5px solid ${isSel ? '#818CF8' : '#CBD5E1'}`,
                                    borderRadius: '8px',
                                    padding: '8px 10px',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '0.76rem', color: isSel ? '#312E81' : '#334155' }}>
                                        {f.name}
                                    </div>
                                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748B' }}>
                                        LOINC: {f.loinc}
                                    </div>
                                </div>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: '800',
                                    fontSize: '0.78rem',
                                    color: isSel ? '#4338CA' : '#0F172A'
                                }}>
                                    {f.value}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Center: Conversion Engine Arrow */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#EEF2FF',
                    border: '1px solid #C7D2FE',
                    borderRadius: '12px',
                    padding: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '1.4rem', color: '#4338CA', fontWeight: 'bold' }}>➔</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#312E81', marginTop: '4px' }}>
                        FHIR v4
                    </div>
                    <div style={{ fontSize: '0.62rem', color: '#4338CA', marginTop: '2px' }}>
                        Serializer
                    </div>
                </div>

                {/* Right: FHIR JSON Output */}
                <div style={{
                    background: '#0F172A',
                    borderRadius: '12px',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#38BDF8', fontWeight: '700' }}>
                            {current.name} Resource
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#A3E635' }}>
                            VALIDATED JSON
                        </span>
                    </div>
                    <pre style={{
                        margin: 0,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: '#F8FAFC',
                        lineHeight: 1.35,
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        flex: 1
                    }}>
                        {current.fhirJson}
                    </pre>
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
                color: '#475569'
            }}>
                <strong style={{ color: '#0F172A' }}>Hospital EHR Interoperability: </strong>
                Plugs natively into Epic Systems, Cerner, or Egyptian Ministry of Health centralized registries.
            </div>
        </div>
    );
}
