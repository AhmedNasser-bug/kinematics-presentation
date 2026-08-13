"use client";
import React from 'react';

export default function BiometricNodeDiagram() {
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
                    HARDWARE ARCHITECTURE // BIOMETRIC IDENTITY NODE
                </span>
                <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: '600' }}>
                    ESP32 / RPi 4 Edge Pair
                </span>
            </div>

            {/* Diagram Flow Nodes */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', margin: '20px 0' }}>
                
                {/* Node 1: Fingerprint Sensor */}
                <div style={{ flex: 1, background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>👆</div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#0F172A' }}>Optical / Capacitive</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>Fingerprint Scanner</div>
                </div>

                <div style={{ fontSize: '1.2rem', color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Node 2: ESP32 Microcontroller */}
                <div style={{ flex: 1, background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>⚡</div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#312E81' }}>ESP32 Microcontroller</div>
                    <div style={{ fontSize: '0.75rem', color: '#4338CA', marginTop: '2px' }}>AES-256 Hashing</div>
                </div>

                <div style={{ fontSize: '1.2rem', color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Node 3: Local SQLite Queue */}
                <div style={{ flex: 1, background: '#FEF3C7', border: '1.5px solid #FDE68A', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>💾</div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#78350F' }}>Local SQLite Queue</div>
                    <div style={{ fontSize: '0.75rem', color: '#92400E', marginTop: '2px' }}>Zero-Cloud Latency</div>
                </div>

                <div style={{ fontSize: '1.2rem', color: '#4338CA', fontWeight: 'bold' }}>➔</div>

                {/* Node 4: Bedside Nurse Terminal */}
                <div style={{ flex: 1, background: '#ECFDF5', border: '1.5px solid #A7F3D0', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>💻</div>
                    <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#065F46' }}>Bedside Nurse Terminal</div>
                    <div style={{ fontSize: '0.75rem', color: '#047857', marginTop: '2px' }}>Instant Roster Check</div>
                </div>
            </div>

            {/* Bottom Specs Bar */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem' }}>
                <span><strong style={{ color: '#0F172A' }}>Hardware:</strong> ESP32-WROOM-32U + RPi 4</span>
                <span><strong style={{ color: '#0F172A' }}>Encryption:</strong> Local Hash Only (No RAW Biometrics Saved)</span>
                <span><strong style={{ color: '#0F172A' }}>Response:</strong> &lt; 200 ms</span>
            </div>
        </div>
    );
}
