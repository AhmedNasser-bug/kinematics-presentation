"use client";
import React from 'react';

export default function WaterQualityDataDiagram() {
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
                    DATA PIPELINE // REVERSE OSMOSIS WATER QUALITY METRICS
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    AAMI & ISO 13959 Compliant
                </span>
            </div>

            {/* RO Water Quality Telemetry Channels */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', margin: '16px 0' }}>
                
                {/* Channel 1 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🧪</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#312E81' }}>Conductivity</div>
                    <div style={{ fontSize: '0.72rem', color: '#4338CA', marginTop: '2px' }}>13.5 - 14.5 mS/cm</div>
                </div>

                {/* Channel 2 */}
                <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>⚠️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#991B1B' }}>Chloramines</div>
                    <div style={{ fontSize: '0.72rem', color: '#DC2626', marginTop: '2px' }}>&lt; 0.1 mg/L Limit</div>
                </div>

                {/* Channel 3 */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🧱</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#78350F' }}>Total Hardness</div>
                    <div style={{ fontSize: '0.72rem', color: '#92400E', marginTop: '2px' }}>Ca & Mg Breakthrough</div>
                </div>

                {/* Channel 4 */}
                <div style={{ background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🌡️</div>
                    <div style={{ fontWeight: '800', fontSize: '0.85rem', color: '#065F46' }}>Water Temp</div>
                    <div style={{ fontSize: '0.72rem', color: '#047857', marginTop: '2px' }}>37.0 °C Isothermic</div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Survey Finding Fix:</strong> Eliminates paper log concealment of 60+ unrecorded carbon/softener filter neglect recurrences.
            </div>
        </div>
    );
}
