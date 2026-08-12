"use client";
import React from 'react';

export default function DocumentationTimeChart() {
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
                        Nursing Documentation Overhead Reduction
                    </h3>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#64748B' }}>
                        Per-Session Nursing Time (Minutes) — Paper vs DiaClinic Digital
                    </p>
                </div>
                <span style={{
                    background: '#DCFCE7', color: '#166534',
                    border: '1px solid #86EFAC', borderRadius: '20px',
                    padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700
                }}>
                    -80% Time Reduction
                </span>
            </div>

            {/* SVG Bar Chart */}
            <div style={{ flexGrow: 1, marginTop: '20px', display: 'flex', alignItems: 'flex-end', gap: '40px', padding: '0 20px 20px 20px' }}>
                {/* Paper Charting Bar */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#EF4444', marginBottom: '8px' }}>
                        ~25.0 Mins
                    </div>
                    <div style={{
                        width: '100%',
                        maxWidth: '90px',
                        height: '85%',
                        background: 'linear-gradient(to top, #EF4444, #FCA5A5)',
                        borderRadius: '8px 8px 0 0',
                        boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
                        transition: 'all 0.5s ease'
                    }} />
                    <span style={{ marginTop: '12px', fontSize: '0.82rem', fontWeight: 600, color: '#475569' }}>
                        Paper Flowsheet
                    </span>
                </div>

                {/* DiaClinic Digital Bar */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#10B981', marginBottom: '8px' }}>
                        &lt; 4.8 Mins
                    </div>
                    <div style={{
                        width: '100%',
                        maxWidth: '90px',
                        height: '17%',
                        background: 'linear-gradient(to top, #10B981, #6EE7B7)',
                        borderRadius: '8px 8px 0 0',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                        transition: 'all 0.5s ease'
                    }} />
                    <span style={{ marginTop: '12px', fontSize: '0.82rem', fontWeight: 700, color: '#0F172A' }}>
                        DiaClinic Terminal
                    </span>
                </div>
            </div>

            {/* Metric Footer */}
            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px',
                background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Time Recovered</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4338CA' }}>+20.2 min/session</div>
                </div>
                <div style={{ textAlign: 'center', borderLeft: '1px solid #CBD5E1', borderRight: '1px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Data Loss Rate</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10B981' }}>0.0% (Zero Loss)</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: '#64748B' }}>FHIR Conversion</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>100% Automated</div>
                </div>
            </div>
        </div>
    );
}
