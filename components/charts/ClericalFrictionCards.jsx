"use client";
import React from 'react';

export default function ClericalFrictionCards() {
    const stats = [
        {
            number: "1.6 MILLION",
            label: "Active Medication Errors",
            subtext: "Discrepancies in national dialysis units driven by paper polypharmacy",
            color: "#F43F5E",
            bg: "#0F172A",
            border: "rgba(244, 63, 94, 0.3)"
        },
        {
            number: "~25 MINS",
            label: "Paperwork Overhead",
            subtext: "Spent per nurse per 4-hour session (>30% shift time stolen from care)",
            color: "#FBBF24",
            bg: "#0F172A",
            border: "rgba(251, 191, 36, 0.3)"
        },
        {
            number: "33.3%",
            label: "HCV Exposure Risk",
            subtext: "Dialysis population positive for Hepatitis C antibodies requiring strict isolation",
            color: "#38BDF8",
            bg: "#0F172A",
            border: "rgba(56, 189, 248, 0.3)"
        },
        {
            number: "60 RECURRENCES",
            label: "Unrecorded Water Neglect",
            subtext: "Chlorine/chloramine neglect occurrences at single unit hidden by paper logs",
            color: "#FB7185",
            bg: "#0F172A",
            border: "rgba(251, 113, 133, 0.3)"
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
