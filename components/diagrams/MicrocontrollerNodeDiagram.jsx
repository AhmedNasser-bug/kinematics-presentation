"use client";
import React from 'react';

export default function MicrocontrollerNodeDiagram() {
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
                    TECHNICAL ARCHITECTURE // MICROCONTROLLER HARDWARE NODE
                </span>
                <span style={{ fontSize: '0.78rem', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>
                    Sub-$15 Hardware Cost
                </span>
            </div>

            {/* Hardware Node Specs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', margin: '14px 0' }}>
                
                {/* Spec 1 */}
                <div style={{ background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0F172A', marginBottom: '4px' }}>ESP32 Dual-Core Microcontroller</div>
                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>
                        • 240 MHz Tensilica LX6<br/>
                        • Integrated Wi-Fi & Bluetooth LE<br/>
                        • Low-power deep sleep mode
                    </div>
                </div>

                {/* Spec 2 */}
                <div style={{ background: '#EEF2FF', border: '1.5px solid #C7D2FE', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#312E81', marginBottom: '4px' }}>HX711 ADC Signal Amplifier</div>
                    <div style={{ fontSize: '0.75rem', color: '#4338CA' }}>
                        • 24-Bit Analog-to-Digital Converter<br/>
                        • On-chip low noise PGA (Gain: 128)<br/>
                        • $\pm 0.5\text{g}$ mass resolution
                    </div>
                </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.76rem', color: '#475569' }}>
                <strong style={{ color: '#0F172A' }}>Cost Efficiency:</strong> Low-cost off-the-shelf microcontrollers allow retrofitting existing hospital IV poles without replacing dialysis machines.
            </div>
        </div>
    );
}
