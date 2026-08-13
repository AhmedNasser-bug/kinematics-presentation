"use client";
import React from 'react';

export default function NurseTerminalLayoutDiagram() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            borderRadius: '14px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                    <span style={{ fontWeight: '800', fontSize: '0.9rem', color: '#0F172A' }}>NURSE TERMINAL // BEDSIDE PWA MOCKUP</span>
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', background: '#EEF2FF', color: '#4338CA', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>
                    Offline-First PWA
                </span>
            </div>

            {/* UI Mockup Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '14px', margin: '12px 0' }}>
                
                {/* Left Side: Vitals Ingestion Form */}
                <div style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontWeight: '700', fontSize: '0.82rem', color: '#334155', display: 'flex', justifyContent: 'space-between' }}>
                        <span>PATIENT: JOHN DOE (ID: #4902)</span>
                        <span style={{ color: '#059669' }}>BED #04</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px' }}>
                            <div style={{ fontSize: '0.68rem', color: '#64748B' }}>Blood Pressure</div>
                            <div style={{ fontWeight: '800', fontSize: '1rem', color: '#0F172A' }}>118 / 74 <span style={{ fontSize: '0.7rem', fontWeight: '400' }}>mmHg</span></div>
                        </div>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px' }}>
                            <div style={{ fontSize: '0.68rem', color: '#64748B' }}>Heart Rate</div>
                            <div style={{ fontWeight: '800', fontSize: '1rem', color: '#0F172A' }}>74 <span style={{ fontSize: '0.7rem', fontWeight: '400' }}>bpm</span></div>
                        </div>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px' }}>
                            <div style={{ fontSize: '0.68rem', color: '#64748B' }}>Target Ultrafiltration</div>
                            <div style={{ fontWeight: '800', fontSize: '1rem', color: '#4338CA' }}>2.80 <span style={{ fontSize: '0.7rem', fontWeight: '400' }}>Liters</span></div>
                        </div>
                        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '8px' }}>
                            <div style={{ fontSize: '0.68rem', color: '#64748B' }}>Session Elapsed</div>
                            <div style={{ fontWeight: '800', fontSize: '1rem', color: '#059669' }}>02h 15m</div>
                        </div>
                    </div>

                    <button style={{ background: '#4338CA', color: '#FFFFFF', border: 'none', borderRadius: '6px', padding: '8px', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer' }}>
                        + Save Vitals & Trigger CDSS Assessment
                    </button>
                </div>

                {/* Right Side: CDSS Real-Time Risk Banner */}
                <div style={{ background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '10px', padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#78350F', marginBottom: '4px' }}>REAL-TIME RISK ENGINE</div>
                        <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#92400E' }}>IDH Crash Risk: 8.2%</div>
                        <div style={{ fontSize: '0.74rem', color: '#78350F', marginTop: '6px', lineHeight: 1.3 }}>
                            Patient stable. Next automated vitals check scheduled in 15 mins.
                        </div>
                    </div>

                    <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '6px', padding: '8px', fontSize: '0.72rem', color: '#92400E' }}>
                        ⚡ <strong>Paperwork Saved:</strong> 20.2 mins/session
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px 12px', fontSize: '0.74rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Touch Screen Ergonomics:</strong> Large button targets optimized for gloved nurse touch entry during active dialyzer hookup.
            </div>
        </div>
    );
}
