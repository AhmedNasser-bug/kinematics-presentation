"use client";
import React from 'react';

export default function AWSFreseniusPipelineDiagram() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#4338CA', background: '#EEF2FF', padding: '4px 10px', borderRadius: '6px', fontWeight: '700', border: '1px solid #C7D2FE' }}>
                    AWS BIG DATA REFERENCE // FRESENIUS MEDICAL CARE REAL-TIME ML ARCHITECTURE
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                    AWS Blog Citation
                </span>
            </div>

            {/* Architecture Pipeline Flow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', margin: '14px 0' }}>
                
                {/* Stage 1 */}
                <div style={{ flex: 1, background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>📟</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#0F172A' }}>Dialysis Telemetry</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748B', marginTop: '2px' }}>Machine Vitals</div>
                </div>

                <div style={{ color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Stage 2 */}
                <div style={{ flex: 1, background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>⚡</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#312E81' }}>Apache Kafka / Kinesis</div>
                    <div style={{ fontSize: '0.7rem', color: '#4338CA', marginTop: '2px' }}>Stream Ingestion</div>
                </div>

                <div style={{ color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Stage 3 */}
                <div style={{ flex: 1, background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>🗄️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#78350F' }}>Amazon S3 Data Lake</div>
                    <div style={{ fontSize: '0.7rem', color: '#92400E', marginTop: '2px' }}>Parquet / Glue Catalog</div>
                </div>

                <div style={{ color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Stage 4 */}
                <div style={{ flex: 1, background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>🧠</div>
                    <div style={{ fontWeight: '800', fontSize: '0.8rem', color: '#065F46' }}>SageMaker ML Endpoint</div>
                    <div style={{ fontSize: '0.7rem', color: '#047857', marginTop: '2px' }}>IDH Risk Score</div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.75rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Industry Validation:</strong> DiaClinic's telemetry stream mirrors Fresenius Medical Care's AWS enterprise architecture for real-time hemodialysis risk prediction.
            </div>
        </div>
    );
}
