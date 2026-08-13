"use client";
import React from 'react';

export default function OutbreakCaseComparison() {
    const cases = [
        {
            title: "Hard Water Syndrome Outbreak",
            location: "Guy's Hospital, London (PMC7025357)",
            rootCause: "Cracked water softener casing -> Calcium & Magnesium breakthrough into dialysate",
            impacts: [
                "Serum Calcium jumped from 2.43 to 3.92 mmol/L",
                "Mid-dialysis BP spiked to 158/80 mmHg",
                "30 patients suffered severe hypertension & new-onset atrial fibrillation"
            ],
            color: "#DC2626",
            bg: "#FEF2F2",
            border: "#FCA5A5"
        },
        {
            title: "Chloramine Toxic Hemolysis Outbreak",
            location: "Guro Hospital, Seoul (PMC4532089)",
            rootCause: "Exhausted carbon filters -> Chloramines (>0.6 mg/L) destroyed red blood cells",
            impacts: [
                "83% attack rate across 34 of 41 patients",
                "Transfusions spiked 3.25x (1.2 -> 3.9 units/pt/mo)",
                "Hemoglobin collapsed down to 4.81 - 5.71 g/dL"
            ],
            color: "#B91C1C",
            bg: "#FFF1F2",
            border: "#FECDD3"
        }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        }}>
            {cases.map((c, idx) => (
                <div key={idx} style={{
                    flex: 1,
                    background: c.bg,
                    border: `1.5px solid ${c.border}`,
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)'
                }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: c.color }}>
                                {c.title}
                            </span>
                            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', background: '#FFFFFF', padding: '3px 8px', borderRadius: '6px', border: `1px solid ${c.border}`, color: '#475569' }}>
                                {c.location}
                            </span>
                        </div>
                        <p style={{ margin: '0 0 12px 0', fontSize: '0.82rem', color: '#475569', fontWeight: 500 }}>
                            <strong style={{ color: '#0F172A' }}>Root Cause:</strong> {c.rootCause}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {c.impacts.map((imp, iIdx) => (
                            <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155', fontWeight: 600 }}>
                                <span style={{ color: c.color }}>⚠</span>
                                <span>{imp}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
