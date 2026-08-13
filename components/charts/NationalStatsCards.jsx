"use client";
import React from 'react';

export default function NationalStatsCards() {
    const stats = [
        {
            number: "7.1M+",
            label: "Egyptian CKD Patients",
            subtext: "5th leading cause of mortality nationwide (106 per 1,000 population)",
            color: "#F87171",
            bg: "#0F172A",
            border: "rgba(248, 113, 113, 0.3)"
        },
        {
            number: "9.2M",
            label: "Annual Sessions",
            subtext: "Generated across 11,000 public & 4,000 private machines",
            color: "#818CF8",
            bg: "#0F172A",
            border: "rgba(129, 140, 248, 0.3)"
        },
        {
            number: "60.0%",
            label: "Inadequate Clearance",
            subtext: "Kt/V < 1.2 clearance dose driving cardiovascular mortality",
            color: "#FBBF24",
            bg: "#0F172A",
            border: "rgba(251, 191, 36, 0.3)"
        },
        {
            number: "79.9%",
            label: "Catheter Dependency",
            subtext: "Initiate via temporary CVCs vs 18.7% AVF (high sepsis risk)",
            color: "#C084FC",
            bg: "#0F172A",
            border: "rgba(192, 132, 252, 0.3)"
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
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: s.color
                    }} />
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
                        color: '#F8FAFC',
                        marginBottom: '6px'
                    }}>
                        {s.label}
                    </div>
                    <div style={{
                        fontSize: '0.85rem',
                        color: '#94A3B8',
                        lineHeight: 1.4
                    }}>
                        {s.subtext}
                    </div>
                </div>
            ))}
        </div>
    );
}
