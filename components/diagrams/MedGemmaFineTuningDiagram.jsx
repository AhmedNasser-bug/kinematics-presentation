"use client";
import React from 'react';

export default function MedGemmaFineTuningDiagram() {
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
                    TECHNICAL ARCHITECTURE // MEDGEMMA LORA FINE-TUNING
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    On-Premises Local Inference
                </span>
            </div>

            {/* Fine Tuning Stages */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', margin: '16px 0' }}>
                
                {/* Stage 1 */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '4px' }}>1. Base MedGemma Model</div>
                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                        • Google MedGemma 7B / 27B<br/>
                        • Pre-trained on PubMed & Clinical Notes<br/>
                        • Open-weights LLM foundation
                    </div>
                </div>

                {/* Stage 2 */}
                <div style={{ background: '#F3E8FF', border: '1.5px solid #E9D5FF', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#6B21A8', marginBottom: '4px' }}>2. LoRA Fine-Tuning Engine</div>
                    <div style={{ fontSize: '0.75rem', color: '#9333EA' }}>
                        • Parameter-Efficient LoRA Adapters<br/>
                        • Fine-tuned on SNOMED CT & LOINC<br/>
                        • Egyptian Dialysis Formulary Rules
                    </div>
                </div>

                {/* Stage 3 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81', marginBottom: '4px' }}>3. Local Hospital Deployment</div>
                    <div style={{ fontSize: '0.75rem', color: '#4338CA' }}>
                        • Quantized INT4 / INT8 Weights<br/>
                        • Runs on Local Hospital Server GPU<br/>
                        • <strong>Zero Patient Data Exfiltration</strong>
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Sovereign AI Security:</strong> All LLM prescription auditing is conducted locally on hospital hardware without sending sensitive patient records to external APIs.
            </div>
        </div>
    );
}
