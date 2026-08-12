"use client";
import React from 'react';

export default function NationalStatsCards() {
    const stats = [
        {
            number: "7.1M+",
            label: "Egyptian CKD Patients",
            subtext: "5th leading cause of mortality nationwide (106 per 1,000 population)",
            color: "#EF4444",
            bg: "#FEF2F2",
            border: "#FECACA"
        },
        {
            number: "9.2M",
            label: "Annual Sessions",
            subtext: "Generated across 11,000 public & 4,000 private machines",
            color: "#4338CA",
            bg: "#EEF2FF",
            border: "#C7D2FE"
        },
        {
            number: "60.0%",
            label: "Inadequate Clearance",
            subtext: "Kt/V < 1.2 clearance dose driving cardiovascular mortality",
            color: "#D97706",
            bg: "#FFFBEB",
            border: "#FDE68A"
        },
        {
            number: "79.9%",
            label: "Catheter Dependency",
            subtext: "Initiate via temporary CVCs vs 18.7% AVF (high sepsis risk)",
            color: "#9333EA",
            bg: "#F3E8FF",
            border: "#E9D5FF"
        }
    ];

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
        }}>
            {stats.map((s, idx) => (
                <div key={idx} style={{
                    background: s.bg,
                    border: `1.5px solid ${s.border}`,
                    borderRadius: '14px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
                }}>
                    <div style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.4rem)',
                        fontWeight: 900,
                        color: s.color,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        marginBottom: '8px'
                    }}>
                        {s.number}
                    </div>
                    <div style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: '6px'
                    }}>
                        {s.label}
                    </div>
                    <div style={{
                        fontSize: '0.82rem',
                        color: '#475569',
                        lineHeight: 1.4
                    }}>
                        {s.subtext}
                    </div>
                </div>
            ))}
        </div>
    );
}
