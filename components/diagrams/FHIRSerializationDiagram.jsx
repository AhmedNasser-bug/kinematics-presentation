"use client";
import React from 'react';

export default function FHIRSerializationDiagram() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#4338CA', background: '#EEF2FF', padding: '4px 10px', borderRadius: '6px', fontWeight: '700', border: '1px solid #C7D2FE' }}>
                    STANDARDS CONVERSION // HL7 FHIR v4 JSON ENGINE
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    100% Interoperable
                </span>
            </div>

            {/* Conversion Flow Diagram */}
            <div style={{ display: 'grid', gridTemplateColumns: '5fr 2fr 5fr', gap: '14px', alignItems: 'center', margin: '14px 0' }}>
                
                {/* Left: Bedside Nurse Inputs */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '8px' }}>Bedside Form Inputs</div>
                    <div style={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>
                        BP: 118/74 mmHg<br/>
                        Heart Rate: 74 bpm<br/>
                        Ultrafiltration: 2.80 L<br/>
                        Heparin Dose: 2,500 IU
                    </div>
                </div>

                {/* Center: FHIR Converter Arrow */}
                <div style={{ textAlign: 'center', background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '8px', padding: '10px 4px' }}>
                    <div style={{ fontSize: '1.2rem', color: '#4338CA', fontWeight: 'bold' }}>➔</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: '700', color: '#312E81', marginTop: '2px' }}>FHIR v4 Engine</div>
                </div>

                {/* Right: Standardized FHIR JSON Payload */}
                <div style={{ background: '#0F172A', borderRadius: '10px', padding: '14px', color: '#F8FAFC', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
                    <div style={{ color: '#38BDF8', fontWeight: '700', marginBottom: '4px' }}>// Observation Resource JSON</div>
                    <span style={{ color: '#F472B6' }}>"resourceType"</span>: <span style={{ color: '#A3E635' }}>"Observation"</span>,<br/>
                    <span style={{ color: '#F472B6' }}>"code"</span>: &#123; <span style={{ color: '#F472B6' }}>"coding"</span>: [&#123; <span style={{ color: '#F472B6' }}>"code"</span>: <span style={{ color: '#A3E635' }}>"8480-6"</span> &#125;] &#125;,<br/>
                    <span style={{ color: '#F472B6' }}>"valueQuantity"</span>: &#123; <span style={{ color: '#F472B6' }}>"value"</span>: 118 &#125;
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Hospital Interoperability:</strong> Plugs directly into Epic, Cerner, or Egyptian Ministry of Health EMR databases without proprietary lock-in.
            </div>
        </div>
    );
}
