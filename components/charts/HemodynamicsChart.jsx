"use client";
import React from 'react';

export default function HemodynamicsChart() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
        }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0F172A', fontWeight: 700 }}>
                        Intra-Session Patient Hemodynamics Telemetry
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Systolic/Diastolic Blood Pressure (mmHg) & Ultrafiltration Trajectory (240 Min Session)
                    </p>
                </div>
                <span style={{
                    background: '#EEF2FF', color: '#4338CA',
                    border: '1px solid #C7D2FE', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    Real-Time Vitals Stream
                </span>
            </div>

            {/* Simulated Blood Pressure Trajectory SVG */}
            <div style={{ position: 'relative', height: '160px', marginTop: '12px' }}>
                <svg viewBox="0 0 500 150" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#E2E8F0" strokeDasharray="4" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#E2E8F0" strokeDasharray="4" />
                    <line x1="0" y1="130" x2="500" y2="130" stroke="#E2E8F0" strokeDasharray="4" />

                    {/* Labels */}
                    <text x="5" y="24" fill="#4338CA" fontSize="10" fontWeight="bold">Systolic BP (140 mmHg baseline)</text>
                    <text x="5" y="74" fill="#10B981" fontSize="10" fontWeight="bold">Diastolic BP (85 mmHg baseline)</text>

                    {/* Systolic BP Path */}
                    <path
                        d="M 40 30 Q 120 35 200 45 T 320 85 T 480 35"
                        fill="none" stroke="#4338CA" strokeWidth="3"
                    />

                    {/* Diastolic BP Path */}
                    <path
                        d="M 40 80 Q 120 82 200 88 T 320 110 T 480 82"
                        fill="none" stroke="#10B981" strokeWidth="3"
                    />

                    {/* IDH Prediction Alert Marker at Min 120 */}
                    <circle cx="320" cy="85" r="6" fill="#EF4444" />
                    <text x="330" y="80" fill="#EF4444" fontSize="11" fontWeight="bold">CDSS Warning: IDH Crash Predicted</text>
                </svg>
            </div>

            {/* Footer metrics */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
                background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Session Duration</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>240 Minutes</div>
                </div>
                <div style={{ textAlign: 'center', borderLeft: '1px solid #CBD5E1', borderRight: '1px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Predictive Window</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338CA' }}>30 Min Lead Time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>UF Volume Rate</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>Dynamic Target</div>
                </div>
            </div>
        </div>
    );
}
