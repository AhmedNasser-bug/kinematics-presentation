"use client";
import React from 'react';

export default function ClericalFrictionCards() {
    const stats = [
        {
            number: "1.6 MILLION",
            label: "Active Medication Errors",
            subtext: "Discrepancies in national dialysis units driven by paper polypharmacy",
            color: "#EF4444",
            bg: "#FEF2F2",
            border: "#FECACA"
        },
        {
            number: "~25 MINS",
            label: "Paperwork Overhead",
            subtext: "Spent per nurse per 4-hour session (>30% shift time stolen from care)",
            color: "#D97706",
            bg: "#FFFBEB",
            border: "#FDE68A"
        },
        {
            number: "33.3%",
            label: "HCV Exposure Risk",
            subtext: "Dialysis population positive for Hepatitis C antibodies requiring strict isolation",
            color: "#4338CA",
            bg: "#EEF2FF",
            border: "#C7D2FE"
        },
        {
            number: "60 RECURRENCES",
            label: "Unrecorded Water Neglect",
            subtext: "Chlorine/chloramine neglect occurrences at single unit hidden by paper logs",
            color: "#DC2626",
            bg: "#FEF2F2",
            border: "#FCA5A5"
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
                        fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                        fontWeight: 900,
                        color: s.color,
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        marginBottom: '8px'
                    }}>
                        {s.number}
                    </div>
                    <div style={{
                        fontSize: '1.05rem',
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
