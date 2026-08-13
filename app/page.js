"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const HeroSlide = dynamic(() => import('../components/HeroSlide'), { ssr: false });
const OutroSlide = dynamic(() => import('../components/OutroSlide'), { ssr: false });

const DocumentationTimeChart = dynamic(() => import('../components/charts/DocumentationTimeChart'), { ssr: false });
const IDHPredictionChart = dynamic(() => import('../components/charts/IDHPredictionChart'), { ssr: false });
const WardAnomalyChart = dynamic(() => import('../components/charts/WardAnomalyChart'), { ssr: false });
const InfusionMassChart = dynamic(() => import('../components/charts/InfusionMassChart'), { ssr: false });
const MedGemmaAuditChart = dynamic(() => import('../components/charts/MedGemmaAuditChart'), { ssr: false });
const HemodynamicsChart = dynamic(() => import('../components/charts/HemodynamicsChart'), { ssr: false });

const NationalStatsCards = dynamic(() => import('../components/charts/NationalStatsCards'), { ssr: false });
const ClericalFrictionCards = dynamic(() => import('../components/charts/ClericalFrictionCards'), { ssr: false });
const OutbreakCaseComparison = dynamic(() => import('../components/charts/OutbreakCaseComparison'), { ssr: false });
const MermaidDependencyGraph = dynamic(() => import('../components/charts/MermaidDependencyGraph'), { ssr: false });
const ECGHeartbeatMonitor = dynamic(() => import('../components/ECGHeartbeatMonitor'), { ssr: false });

/**
 * Custom crosshair cursor.
 * Strategy: write two CSS custom properties (--cx, --cy) on <html> directly
 * from the mousemove event — NO RAF, NO per-frame JS.
 * .cursor-dot  reads them instantly via CSS translate().
 * .cursor-ring uses the same properties + a CSS transition for the trail
 *              (all handled by the browser compositor, zero JS overhead).
 */
function CustomCursor() {
    useEffect(() => {
        const root = document.documentElement;
        const onMove = (e) => {
            root.style.setProperty('--cx', `${e.clientX}px`);
            root.style.setProperty('--cy', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', onMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <>
            {/* Trailing ring – transitions handled by CSS */}
            <div className="cursor-ring" />
            {/* Zero-lag crosshair */}
            <div className="cursor-dot">
                <div className="cursor-cross-h" />
                <div className="cursor-cross-v" />
            </div>
        </>
    );
}

/**
 * Parses markdown-style **bold** tags and converts them into sleek dark-mode indigo highlighted pills.
 */
function highlightText(text) {
    if (!text) return "";
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, idx) => {
        if (idx % 2 === 1) {
            return (
                <strong key={idx} style={{ 
                    background: 'rgba(129, 140, 248, 0.15)', 
                    color: '#A5B4FC', 
                    padding: '2px 8px', 
                    border: '1px solid rgba(129, 140, 248, 0.35)', 
                    borderRadius: '6px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    display: 'inline-block',
                    margin: '0 3px',
                }}>
                    {part}
                </strong>
            );
        }
        return part;
    });
}

const slidesData = [
    // ----------------------------------------------------
    // TITLE & OVERVIEW (SLIDES 1 - 2)
    // ----------------------------------------------------
    {
        id: 0,
        type: 'hero',
        title: "DiaClinic: Dialysis Management & Safety System",
        subtitle: "Integrated Clinical Decision Support & Operational Data Pipeline",
        notes: [
            "Welcome to DiaClinic presentation.",
            "Integrated clinical decision support and data management architecture for hemodialysis units.",
            "Replaces fragmented paper flowsheets with a standardized edge-to-cloud data pipeline."
        ]
    },
    {
        id: 1,
        type: 'intro',
        title: "Hemodialysis Operational Pipeline",
        subtitle: "Architecture Breakdown & Feature Matrix",
        notes: [
            "DiaClinic addresses high care volume and strict 4-hour session constraints.",
            "Standardized HL7 FHIR v4 data pipeline connects edge devices to clinical decision engines."
        ],
        modules: [
            {
                title: "Core Hardware & Nursing",
                slides: [
                    "Feature 1: Biometric Verification Node",
                    "Feature 2: Nurse Operations Terminal"
                ]
            },
            {
                title: "Analytics & Anomaly Engine",
                slides: [
                    "Feature 3: Per-Patient CDSS",
                    "Feature 4: Ward Anomaly Engine"
                ]
            },
            {
                title: "Telemetry & Clinical AI",
                slides: [
                    "Feature 5: Sensor Infusion Telemetry",
                    "Feature 6: MedGemma Prescription Auditor"
                ]
            }
        ]
    },

    // ----------------------------------------------------
    // PROBLEM STATEMENT & NATIONAL CRISIS (SLIDES 3 - 6)
    // ----------------------------------------------------
    {
        id: 2,
        type: 'content',
        moduleNum: 0,
        moduleTitle: "Problem Statement: National Crisis",
        slideNum: 1,
        title: "Problem Statement: National Burden & Epidemiological Crisis",
        assetSpec: "Big Numbers Display: 7.1M CKD, 9.2M Sessions, 60% Inadequate Dialysis, 79.9% CVC",
        imageUrl: "/generated_visuals/slide2_vulnerabilities.jpg",
        chartType: 'nationalStats',
        keyPoints: [
            "**7.1 Million CKD Population:** Chronic kidney disease is the **5th leading cause of mortality** nationwide in Egypt, with an age-standardized prevalence of 106 per 1,000 population.",
            "**9.2 Million Annual Sessions:** Massive care volume generated across 15,000 public (11,000) and private (4,000) dialysis machines.",
            "**60% Inadequate Clearance:** Single-pool dialytic clearance dose deficit (**Kt/V < 1.2**) directly correlates with elevated cardiovascular mortality and systemic fatigue.",
            "**79.9% Catheter Dependency:** Overwhelming majority initiate therapy via temporary central venous catheters (CVCs) rather than mature AV fistulas (only 18.7%), causing severe bacteremia."
        ],
        speakerNotes: "Egypt faces a massive hemodialysis burden with 9.2M annual sessions and 60% receiving inadequate dialytic clearance."
    },
    {
        id: 3,
        type: 'content',
        moduleNum: 0,
        moduleTitle: "Problem Statement: Clerical Overhead",
        slideNum: 2,
        title: "Problem Statement: Operational Friction & Paper Overhead",
        assetSpec: "Big Numbers Display: 1.6M Errors, ~25m Overhead, 33.3% HCV, 60 Neglect Incidents",
        imageUrl: "/generated_visuals/slide2_vulnerabilities.jpg",
        chartType: 'clericalFriction',
        keyPoints: [
            "**1.6 Million Medication Errors:** Paper-based polypharmacy (5–14 active drugs daily) causes **2–3 prescribing discrepancies** per patient during care transitions.",
            "**~25 Mins Clerical Overhead:** Nursing staff spend **>30% of each 4-hour treatment** manually recording vitals on paper flowsheets, stealing time from active care.",
            "**33.3% Viral Exposure Risk:** High Hepatitis C antibody prevalence demands continuous digital monitoring and strict chair isolation.",
            "**60 Unrecorded Neglect Incidents:** Water purification chlorine and chloramine neglect recur unescalated due to paper-based documentation blindspots."
        ],
        speakerNotes: "Paperwork overhead consumes over 30% of nursing shift time, while paper polypharmacy generates 1.6M national medication discrepancies."
    },
    {
        id: 4,
        type: 'content',
        moduleNum: 0,
        moduleTitle: "Problem Statement: Incident Evidence",
        slideNum: 3,
        title: "Problem Statement: Documented Outbreak & Systemic Failures",
        assetSpec: "Outbreak Case Evidence: Hard Water Syndrome vs Chloramine Toxic Hemolysis",
        imageUrl: "/generated_visuals/slide2_vulnerabilities.jpg",
        chartType: 'outbreakCases',
        keyPoints: [
            "**Hard Water Syndrome Outbreak:** Cracked water softener casing released resin beads, driving serum calcium to **3.92 mmol/L** and BP spiking to **158/80 mmHg** in 30 patients.",
            "**Chloramine Toxic Hemolysis Outbreak:** Exhausted carbon beds caused **83% attack rate** across 34 patients, spiking blood transfusions 3.25x (**1.2 to 3.9 units/pt/mo**).",
            "**Structurally Invisible Patterns:** Paper charts isolate individual beds, making collective mineral decline and equipment drift completely unnoticeable until acute harm occurs."
        ],
        speakerNotes: "Documented outbreaks prove that paper recordkeeping is structurally incapable of catching unit-wide equipment failures before patient harm."
    },
    {
        id: 5,
        type: 'content',
        moduleNum: 0,
        moduleTitle: "Problem Statement: Field Findings",
        slideNum: 4,
        title: "Problem Statement: Local Field Findings & Data Blindspots",
        assetSpec: "Field Survey Findings: Uniform Batch Lab Anomaly & Loose Doctor-Nurse Protocol",
        imageUrl: "/generated_visuals/slide2_vulnerabilities.jpg",
        keyPoints: [
            "**Uniform Batch Lab Error:** Entire month's batch of patient lab results returned identical due to clerical copy-paste error, unflagged because no historical baseline existed.",
            "**60+ Water Neglect Recurrences:** Direct confirmation from clinical reviewers that chlorine/chloramine filter maintenance neglect recurred ~60 times without digital escalation.",
            "**Loose Physician-Nurse Link:** Verbal prescription updates and un-updated orders leave nurses exposed to outdated clinical guidelines during busy shifts."
        ],
        speakerNotes: "Field survey findings confirmed copy-paste lab errors and loose verbal communication as direct threats to dialysis patient safety."
    },

    // ----------------------------------------------------
    // FEATURE 1: BIOMETRIC IDENTITY NODE (SLIDES 3 - 6)
    // ----------------------------------------------------
    {
        id: 2,
        type: 'content',
        moduleNum: 1,
        moduleTitle: "Feature 1: Biometric Verification Node",
        slideNum: 1,
        title: "Feature 1: What is the Biometric Identity Node?",
        assetSpec: "Feature 1 Overview: Edge Biometric Authentication Node Architecture",
        imageUrl: "/generated_visuals/slide3_biometric_terminal.jpg",
        keyPoints: [
            "**Edge Microcontroller Authentication:** Standalone embedded hardware node (**ESP32 / Raspberry Pi**) paired with optical and capacitive fingerprint scanners.",
            "**Zero-Cloud Latency Queue:** Manages scheduled shift rosters, arrival timestamps, and patient triage locally without internet dependence.",
            "**Auditory Tone Feedback:** Emits distinct audio frequencies to instantly confirm valid patient check-in versus administrative staff access."
        ],
        speakerNotes: "The Biometric Identity Node verifies patient identity at the floor entry using edge microcontrollers, preventing roster mismatches."
    },
    {
        id: 3,
        type: 'content',
        moduleNum: 1,
        moduleTitle: "Feature 1: Biometric Verification Node",
        slideNum: 2,
        title: "Feature 1: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: Patient Triage Efficiency & Identity Error Elimination",
        imageUrl: "/plots/01_demographics_overview.png",
        chartType: 'docTime',
        keyPoints: [
            "**Eliminates Identity Mismatches:** Prevents 100% of patient identity errors during crowded shift transitions and high-volume arrivals.",
            "**Removes Paper Check-in Friction:** Eliminates manual roster lookup queues and reduces patient entry delay from ~25 minutes to instant check-in.",
            "**Operational Continuity:** Operates independently of hospital network status, guaranteeing uninterrupted floor triage."
        ],
        speakerNotes: "Biometric check-in eliminates identity errors and removes entry bottlenecks before dialyzer hookup."
    },
    {
        id: 4,
        type: 'content',
        moduleNum: 1,
        moduleTitle: "Feature 1: Biometric Verification Node",
        slideNum: 3,
        title: "Feature 1: Technical Implementation Options",
        assetSpec: "System Options: AWS IoT Core, Azure IoT Hub, & Microcontroller Edge Architecture",
        imageUrl: "/docs_images/Hospital system Demo 1.png",
        keyPoints: [
            "**Microcontroller Edge Stack:** C++/FreeRTOS firmware on ESP32 microcontrollers with hardware-accelerated SHA-256 biometric hashing.",
            "**Cloud Managed IoT Options:** **AWS IoT Core** / Greengrass for MQTT message routing, **Azure IoT Hub** for device provisioning, or **GCP Healthcare IoT**.",
            "**Local Fallback Storage:** Encrypted SQLite/IndexedDB store on Raspberry Pi edge gateway for offline authentication sync."
        ],
        speakerNotes: "The node can run on lightweight ESP32 microcontrollers or connect to AWS IoT Core and Azure IoT Hub for enterprise fleet management."
    },
    {
        id: 5,
        type: 'content',
        moduleNum: 1,
        moduleTitle: "Feature 1: Biometric Verification Node",
        slideNum: 4,
        title: "Feature 1: Data Integration Sources",
        assetSpec: "Data Sources: Fingerprint Scanners, HL7 FHIR Patient Resources, & ADT Feeds",
        imageUrl: "/generated_visuals/slide3_biometric_terminal.jpg",
        keyPoints: [
            "**Hardware Telemetry:** Raw optical/capacitive fingerprint byte arrays converted to encrypted template hashes.",
            "**Healthcare Standard Payload:** Standardized **HL7 FHIR v4 Patient** JSON resource (`Patient/id`, `identifier`, `telecom`).",
            "**EHR System Ingestion:** Real-time synchronization with Hospital ADT (Admission, Discharge, Transfer) registration database feeds."
        ],
        speakerNotes: "Biometric hashes map directly to HL7 FHIR v4 Patient resources and hospital ADT feeds."
    },

    // ----------------------------------------------------
    // FEATURE 2: NURSE OPERATIONS TERMINAL (SLIDES 7 - 10)
    // ----------------------------------------------------
    {
        id: 6,
        type: 'content',
        moduleNum: 2,
        moduleTitle: "Feature 2: Nurse Operations Terminal",
        slideNum: 1,
        title: "Feature 2: What is the Nurse Operations Terminal?",
        assetSpec: "Feature 2 Overview: Bedside Nurse Ingestion Interface & Terminal Layout",
        imageUrl: "/generated_visuals/slide3_biometric_terminal.jpg",
        keyPoints: [
            "**Bedside Touch Interface:** Responsive web/mobile application designed for rapid intra-session vital entry and medication logging.",
            "**Offline-First Data Storage:** Local SQLite edge database architecture guaranteeing complete operation during hospital network drops.",
            "**HL7 FHIR v4 Conversion Engine:** Automatically packages bedside inputs into standardized FHIR JSON resources (`Observation`, `MedicationRequest`, `Encounter`)."
        ],
        speakerNotes: "The Nurse Terminal provides a touch interface that works offline-first, automatically structuring data into HL7 FHIR v4."
    },
    {
        id: 7,
        type: 'content',
        moduleNum: 2,
        moduleTitle: "Feature 2: Nurse Operations Terminal",
        slideNum: 2,
        title: "Feature 2: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: Charting Overhead Reduction & Data Integrity",
        imageUrl: "/plots/02_hemodynamics_vitals.png",
        chartType: 'docTime',
        keyPoints: [
            "**Slashes Paperwork Overhead:** Charting duration reduced from **~25 minutes down to < 5 minutes** per patient session.",
            "**Prevents Medication Delays:** Eliminates mid-session medication delivery delays caused by paper flowsheet queue bottlenecks.",
            "**Eliminates Data Loss:** Guarantees 100% vital log retention and eliminates lost shift handoff records."
        ],
        speakerNotes: "By reducing documentation time by 80%, nurses regain critical time for direct patient monitoring."
    },
    {
        id: 8,
        type: 'content',
        moduleNum: 2,
        moduleTitle: "Feature 2: Nurse Operations Terminal",
        slideNum: 3,
        title: "Feature 2: Technical Implementation Options",
        assetSpec: "System Options: Next.js PWA, Azure Health Data Services, & AWS HealthLake",
        imageUrl: "/docs_images/Hospital system Demo 1.png",
        keyPoints: [
            "**Frontend Application:** Next.js / React Progressive Web App (PWA) with Service Worker offline caching.",
            "**Cloud FHIR Engines:** **Azure Health Data Services (FHIR API)**, **AWS HealthLake** for healthcare data stores, or **Google Cloud Healthcare API**.",
            "**Edge Sync Layer:** Asynchronous background sync via WebSockets / REST API with automatic conflict resolution."
        ],
        speakerNotes: "The terminal builds on Next.js PWAs and integrates with Azure Health Data Services or AWS HealthLake."
    },
    {
        id: 9,
        type: 'content',
        moduleNum: 2,
        moduleTitle: "Feature 2: Nurse Operations Terminal",
        slideNum: 4,
        title: "Feature 2: Data Integration Sources",
        assetSpec: "Data Sources: Bluetooth Vitals Monitors, Bedside Inputs, & eMAR Feeds",
        imageUrl: "/generated_visuals/slide3_biometric_terminal.jpg",
        keyPoints: [
            "**Bedside Telemetry:** Bluetooth LE connection to NIBP blood pressure cuffs and pulse oximeter monitors.",
            "**Nurse Direct Inputs:** Pre, intra, and post-dialysis weight readings, blood flow rates (BFR), and dialysate flow rates (DFR).",
            "**eMAR System Feeds:** Electronic Medication Administration Record integration for timestamped heparin and saline delivery."
        ],
        speakerNotes: "Ingests Bluetooth vitals, direct touch entries, and electronic medication administration logs."
    },

    // ----------------------------------------------------
    // FEATURE 3: PER-PATIENT CDSS (SLIDES 11 - 14)
    // ----------------------------------------------------
    {
        id: 10,
        type: 'content',
        moduleNum: 3,
        moduleTitle: "Feature 3: Per-Patient CDSS Engine",
        slideNum: 1,
        title: "Feature 3: What is the Per-Patient CDSS?",
        assetSpec: "Feature 3 Overview: Predictive Machine Learning & Real-Time Trajectory Engine",
        imageUrl: "/generated_visuals/slide4_cdss_anomaly.jpg",
        keyPoints: [
            "**Predictive ML Classifier:** Machine learning engine (**XGBoost / RNN / CatBoost**) trained on continuous dialysis session vitals.",
            "**Fresenius 4008S Telemetry Compatibility:** Designed to ingest real-time machine telemetry streams directly from partner unit dialyzers.",
            "**Early IDH Warning:** Generates advance warning notifications for Intradialytic Hypotension (IDH) **15–30 minutes** before clinical onset."
        ],
        speakerNotes: "Feature 3 uses real-time machine learning to predict hypotensive crashes up to 30 minutes before vascular collapse occurs."
    },
    {
        id: 11,
        type: 'content',
        moduleNum: 3,
        moduleTitle: "Feature 3: Per-Patient CDSS Engine",
        slideNum: 2,
        title: "Feature 3: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: 15-30 Min IDH Prediction Window & Sensitivity Rate",
        imageUrl: "/plots/03_weight_and_ultrafiltration.png",
        chartType: 'idh',
        keyPoints: [
            "**Proactive Hypotension Warning:** Provides a **15–30 minute advance warning window** for predicted IDH events.",
            "**High Sensitivity:** Achieves **88% predictive sensitivity** for acute blood pressure drops.",
            "**Prevents Vascular Collapse:** Allows attending staff to adjust ultrafiltration rates and saline boluses proactively."
        ],
        speakerNotes: "A 30-minute warning window enables proactive ultrafiltration adjustments, preventing acute hypotensive shocks."
    },
    {
        id: 12,
        type: 'content',
        moduleNum: 3,
        moduleTitle: "Feature 3: Per-Patient CDSS Engine",
        slideNum: 3,
        title: "Feature 3: Real-Time ML Architecture (AWS & Fresenius Care Alignment)",
        assetSpec: "AWS Architecture Baseline: Apache Kafka, Kinesis Streams, Lambda, SageMaker, & OpenSearch (Fresenius Medical Care Benchmark)",
        imageUrl: "/docs_images/Fresenius_AWS_Architecture.png",
        keyPoints: [
            "**AWS Stream Ingestion Pipeline:** Machine telemetry streams via **Apache Kafka -> Amazon Kinesis Data Streams / Kinesis Data Analytics**.",
            "**AWS S3 Data Lake & Glue:** Unstructured machine streams and historical patient records persisted in **Amazon S3 Data Lake & AWS Glue** catalog.",
            "**AWS Lambda + SageMaker Inference:** Real-time ML prediction executed via **AWS Lambda & Amazon SageMaker**, rendered to **Amazon OpenSearch & Kibana**.",
            "**Validated Industry Alignment:** Directly aligns with **Fresenius Medical Care's AWS Big Data Architecture** for real-time dialysis predictive analytics."
        ],
        speakerNotes: "DiaClinic's cloud ML architecture aligns with Fresenius Medical Care's AWS production design for real-time dialysis analytics."
    },
    {
        id: 13,
        type: 'content',
        moduleNum: 3,
        moduleTitle: "Feature 3: Per-Patient CDSS Engine",
        slideNum: 4,
        title: "Feature 3: Data Integration Sources",
        assetSpec: "Data Sources: Hemodynamic Vitals, Weight Gains, & Monthly Lab Panels",
        imageUrl: "/plots/07_bp_joint_density.png",
        chartType: 'hemo',
        keyPoints: [
            "**Fresenius 4008S Telemetry:** Real-time systolic/diastolic blood pressure, arterial pressure, venous pressure, and dialysate rates.",
            "**Interdialytic Weight Data:** Pre-dialysis fluid gain mass (kg) and historical post-dialysis dry weight targets.",
            "**Laboratory Panels:** Monthly blood panel ingestion (Hemoglobin, Ferritin, Electrolytes, Calcium, Potassium, PTH)."
        ],
        speakerNotes: "Combines real-time vitals, fluid gain history, and monthly lab blood panels for holistic risk scoring."
    },

    // ----------------------------------------------------
    // FEATURE 4: WARD ANOMALY ENGINE (SLIDES 15 - 18)
    // ----------------------------------------------------
    {
        id: 14,
        type: 'content',
        moduleNum: 4,
        moduleTitle: "Feature 4: Ward Anomaly Engine",
        slideNum: 1,
        title: "Feature 4: What is the Ward Anomaly Engine?",
        assetSpec: "Feature 4 Overview: Cross-Station Variance & Environmental Quality Sentinel",
        imageUrl: "/generated_visuals/slide6_system_targets.jpg",
        keyPoints: [
            "**Cross-Bed Statistical Sentinel:** Edge gateway engine running real-time statistical variance analysis across all active dialysis stations.",
            "**Environmental Failure Detection:** Identifies Reverse Osmosis (RO) water purification failure, dialysate fluid misformulation, and batch defects.",
            "**Ward Quality Scoring:** Calculates an aggregate ward safety index continuously updated every 60 seconds."
        ],
        speakerNotes: "Feature 4 evaluates cross-bed variance in real time to catch water purification or dialysate mixing errors."
    },
    {
        id: 15,
        type: 'content',
        moduleNum: 4,
        moduleTitle: "Feature 4: Ward Anomaly Engine",
        slideNum: 2,
        title: "Feature 4: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: 60-Second Cluster Alert Threshold & Multi-Bed Protection",
        imageUrl: "/plots/06_feature_effect_sizes.png",
        chartType: 'ward',
        keyPoints: [
            "**Rapid Detection Threshold:** Triggers multi-patient cluster alerts within **< 60 seconds** of anomaly onset.",
            "**Eliminates Bedside Data Isolation:** Uncovers systemic ward issues hidden by isolated paper charts across individual beds.",
            "**Prevents Ward-Wide Toxicity:** Prevents collective electrolyte shifts and water contamination before patient harm occurs."
        ],
        speakerNotes: "Replaces bedside isolation with ward-wide telemetry oversight, alerting clinical directors within 60 seconds."
    },
    {
        id: 16,
        type: 'content',
        moduleNum: 4,
        moduleTitle: "Feature 4: Ward Anomaly Engine",
        slideNum: 3,
        title: "Feature 4: Technical Implementation Options",
        assetSpec: "System Options: AWS IoT Greengrass, Azure IoT Edge, & Apache Flink Stream Computing",
        imageUrl: "/generated_visuals/slide6_system_targets.jpg",
        keyPoints: [
            "**Stream Processing Compute:** Apache Flink / Kinesis Data Analytics for real-time windowed statistical computation.",
            "**Edge Gateway Frameworks:** **AWS IoT Greengrass** for edge stream routing, **Azure IoT Edge** for containerized module execution.",
            "**Alert Notification Layer:** Local WebSocket broadcast to clinical director console and SMS/email push triggers."
        ],
        speakerNotes: "Runs on AWS Greengrass or Azure IoT Edge with Apache Flink stream analytics for instant cluster alerts."
    },
    {
        id: 17,
        type: 'content',
        moduleNum: 4,
        moduleTitle: "Feature 4: Ward Anomaly Engine",
        slideNum: 4,
        title: "Feature 4: Data Integration Sources",
        assetSpec: "Data Sources: Dialysate Machine Telemetry, RO Water Plant Sensors, & Temperature Logs",
        imageUrl: "/docs_images/Development_plan.png",
        keyPoints: [
            "**Machine Dialysate Streams:** Real-time dialysate conductivity (mS/cm), dialysate temperature, and ultrafiltration rate (UFR).",
            "**RO Water Plant Telemetry:** Central Reverse Osmosis purification plant conductivity, total dissolved solids (TDS), and pH levels.",
            "**Station Sensor Cluster:** Ambient station temperature, fluid line pressures, and machine alarm state logs."
        ],
        speakerNotes: "Ingests machine dialysate conductivity, central RO water plant sensors, and machine alarm logs."
    },

    // ----------------------------------------------------
    // FEATURE 5: SENSOR INFUSION TELEMETRY (SLIDES 19 - 22)
    // ----------------------------------------------------
    {
        id: 18,
        type: 'content',
        moduleNum: 5,
        moduleTitle: "Feature 5: Sensor Infusion Telemetry",
        slideNum: 1,
        title: "Feature 5: What is Sensor Infusion Monitoring?",
        assetSpec: "Feature 5 Overview: IV Pole Load-Cell Weight Telemetry & Hardware Node",
        imageUrl: "/generated_visuals/slide5_infusion_medgemma.jpg",
        keyPoints: [
            "**IV Pole Load-Cell Hardware:** Strain-gauge weight sensors mounted on IV poles paired with microcontroller telemetry units.",
            "**Real-Time Mass Loss Tracking:** Measures container mass loss continuously to monitor IV fluid delivery speed.",
            "**Local Flow Failure Alarm:** Triggers local audio-visual alerts if fluid mass stops decreasing outside prespecified tolerances."
        ],
        speakerNotes: "Feature 5 uses physical strain-gauge load cells on IV poles to track infusion mass loss continuously."
    },
    {
        id: 19,
        type: 'content',
        moduleNum: 5,
        moduleTitle: "Feature 5: Sensor Infusion Telemetry",
        slideNum: 2,
        title: "Feature 5: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: Zero Unnoticed IV Stalls & Real-Time Flow Response",
        imageUrl: "/generated_visuals/slide5_infusion_medgemma.jpg",
        chartType: 'infusion',
        keyPoints: [
            "**Eliminates IV Line Stalls:** Prevents 100% of unnoticed IV line occlusions and flow halts during busy shift periods.",
            "**Prevents Dry Bag Incidents:** Alerts nursing staff before IV infusion containers empty completely.",
            "**Instant Alarm Latency:** Triggers bedside audio-visual alerts in **< 3 seconds** of flow stall detection."
        ],
        speakerNotes: "Catches IV flow occlusions immediately, preventing line stalls and empty bag incidents."
    },
    {
        id: 20,
        type: 'content',
        moduleNum: 5,
        moduleTitle: "Feature 5: Sensor Infusion Telemetry",
        slideNum: 3,
        title: "Feature 5: Technical Implementation Options",
        assetSpec: "System Options: HX711 ADC, MQTT Protocol, & AWS/Azure IoT Device Shadows",
        imageUrl: "/generated_visuals/slide5_infusion_medgemma.jpg",
        keyPoints: [
            "**Hardware Signal Conditioning:** HX711 24-bit analog-to-digital converter (ADC) paired with ESP32 microcontroller.",
            "**Messaging & Cloud State:** MQTT lightweight protocol over local Wi-Fi / Zigbee, with **AWS IoT Device Shadow** or **Azure Device Twins**.",
            "**Local Bedside Buzzer:** Direct GPIO-driven piezo buzzer and LED status indicator for immediate zero-latency feedback."
        ],
        speakerNotes: "Combines 24-bit HX711 ADCs with ESP32 microcontrollers, routing MQTT telemetry to AWS Device Shadows or local buzzers."
    },
    {
        id: 21,
        type: 'content',
        moduleNum: 5,
        moduleTitle: "Feature 5: Sensor Infusion Telemetry",
        slideNum: 4,
        title: "Feature 5: Data Integration Sources",
        assetSpec: "Data Sources: Load Cell Weight Telemetry, Drop Counter Sensors, & Pharmacy Orders",
        imageUrl: "/docs_images/Hospital system Demo 1.png",
        keyPoints: [
            "**Mass Telemetry Stream:** Continuous container weight values (grams) sampled at 5 Hz.",
            "**Optical Flow Telemetry:** Supplementary infrared drop counter pulses verifying drip rate.",
            "**Pharmacy Order Integration:** Active IV medication order schedule (volume, target infusion time, drug density)."
        ],
        speakerNotes: "Correlates load cell mass telemetry with optical drop sensors and active pharmacy infusion orders."
    },

    // ----------------------------------------------------
    // FEATURE 6: MEDGEMMA PRESCRIPTION AUDITOR (SLIDES 23 - 26)
    // ----------------------------------------------------
    {
        id: 22,
        type: 'content',
        moduleNum: 6,
        moduleTitle: "Feature 6: MedGemma Prescription Auditor",
        slideNum: 1,
        title: "Feature 6: What is the MedGemma Prescription Auditor?",
        assetSpec: "Feature 6 Overview: Domain-Adapted Clinical LLM & Order Verification Engine",
        imageUrl: "/generated_visuals/slide5_infusion_medgemma.jpg",
        keyPoints: [
            "**Clinical AI Order Auditor:** Domain-adapted clinical language model (**MedGemma**) integrated into physician prescribing consoles.",
            "**Contraindication Auditing:** Cross-references proposed drug orders against active patient blood lab panels and renal clearance values.",
            "**Medical Indexing Standardization:** Maps drug regimens against standardized **LOINC and SNOMED CT** indices."
        ],
        speakerNotes: "Feature 6 integrates MedGemma—a clinical AI auditor that checks proposed prescriptions against lab panels and medical codes."
    },
    {
        id: 23,
        type: 'content',
        moduleNum: 6,
        moduleTitle: "Feature 6: MedGemma Prescription Auditor",
        slideNum: 2,
        title: "Feature 6: What It Solves & Clinical Impact",
        assetSpec: "Impact Statistics: Automated Order Audit Coverage & LOINC/SNOMED Compliance",
        imageUrl: "/plots/04_machine_pressures.png",
        chartType: 'medgemma',
        keyPoints: [
            "**Prevents Adverse Drug Events:** Audits 100% of proposed drug orders for patients with impaired renal drug clearance.",
            "**Catches Outdated Regimens:** Flags un-updated drug prescriptions and dosing errors before orders reach the floor.",
            "**Standardized Audit Trails:** Provides auditable clinical reasoning logs compliant with SNOMED CT and LOINC standards."
        ],
        speakerNotes: "Prevents toxic drug accumulation in kidney failure patients by auditing 100% of prescriptions against lab values."
    },
    {
        id: 24,
        type: 'content',
        moduleNum: 6,
        moduleTitle: "Feature 6: MedGemma Prescription Auditor",
        slideNum: 3,
        title: "Feature 6: Technical Implementation Options",
        assetSpec: "System Options: Google Cloud Vertex AI, Azure OpenAI Healthcare, & Local vLLM Inference",
        imageUrl: "/generated_visuals/slide5_infusion_medgemma.jpg",
        keyPoints: [
            "**Cloud Managed LLM Endpoints:** **Google Cloud Vertex AI** for HIPAA-compliant MedGemma deployment or **Azure OpenAI Service**.",
            "**Local On-Premises Option:** Local **vLLM / Ollama** inference engine running on hospital GPU servers for zero data egress.",
            "**RAG & Knowledge Base:** Vector database (Pgvector / Qdrant) storing SNOMED CT indices and clinical renal drug guidelines."
        ],
        speakerNotes: "Deployable on GCP Vertex AI, Azure OpenAI Healthcare, or locally on hospital GPU servers via vLLM."
    },
    {
        id: 25,
        type: 'content',
        moduleNum: 6,
        moduleTitle: "Feature 6: MedGemma Prescription Auditor",
        slideNum: 4,
        title: "Feature 6: Data Integration Sources",
        assetSpec: "Data Sources: LOINC/SNOMED CT Indices, e-Prescriptions, & Laboratory Blood Panels",
        imageUrl: "/plots/02_hemodynamics_vitals.png",
        keyPoints: [
            "**Medical Terminology Coding:** SNOMED CT clinical concept IDs and LOINC lab test observation codes.",
            "**Electronic Prescriptions:** Physician eRx orders (`MedicationRequest` FHIR payload).",
            "**Renal Laboratory Results:** Serum Creatinine, eGFR, Serum Potassium, Calcium, Phosphate, and Liver Function Panels."
        ],
        speakerNotes: "Cross-references e-prescriptions with SNOMED CT, LOINC codes, and real-time renal laboratory panels."
    },

    // ----------------------------------------------------
    // SYSTEM SUMMARY & DEPLOYMENT (SLIDES 27 - 28)
    // ----------------------------------------------------
    {
        id: 26,
        type: 'content',
        moduleNum: 7,
        moduleTitle: "System Infrastructure & Targets",
        slideNum: 1,
        title: "System Infrastructure & Operational Targets",
        assetSpec: "Infrastructure Map: Edge Hardware Telemetry to Cloud Synchronization Architecture",
        imageUrl: "/docs_images/Development_plan.png",
        keyPoints: [
            "**Resilient Edge Hardware:** Microcontrollers (ESP32/RPi), load cells, fingerprint scanners, and local SQLite edge stores.",
            "**Documentation Reduction:** Slashes nursing documentation duration from **~25 min down to < 5 min** per session.",
            "**Performance Benchmarks:** **15–30 min IDH advance warning**, **100% floor availability during network drops**, **<60s ward cluster alerts**."
        ],
        speakerNotes: "DiaClinic combines edge resilience with cloud synchronization, delivering 100% floor uptime and 80% documentation savings."
    },
    {
        id: 27,
        type: 'content',
        moduleNum: 8,
        moduleTitle: "7-Tier Architecture Dependency Graph",
        slideNum: 1,
        title: "System Dependency Graph: 7-Level Architecture Flow",
        assetSpec: "7-Level Architecture Dependency Map: Smart Access -> FHIR -> Dashboards -> AI Prescriptions -> Sensors -> MedGemma",
        imageUrl: "/docs_images/Development_plan.png",
        chartType: 'mermaidDep',
        keyPoints: [
            "**Level 1 & 2 (Smart Access & FHIR):** Biometric verification feeds bedside nurse terminal HL7 FHIR v4 conversion.",
            "**Level 3 & 4 (Dashboards & CDSS):** Real-time nurse vitals entries drive XGBoost IDH prediction & physician trend analytics.",
            "**Level 5, 6 & 7 (Prescriptions, Sensors & AI):** Medical decision support, IV load-cell weight telemetry, and MedGemma fine-tuning."
        ],
        speakerNotes: "The 7-level dependency graph maps how smart biometric access flows through FHIR conversion, CDSS, and MedGemma fine-tuning."
    },
    {
        id: 28,
        type: 'outro',
        title: "DiaClinic System Prototype & Summary",
        subtitle: "Interactive Prototype & Clinical Deployment Ready"
    }
];

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slidesData.length - 1));
    const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

    /* Keyboard navigation */
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const slide = slidesData[currentSlide];

    return (
        <div className="slide-container" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Large Background ECG Heartbeat Waveform Overlay */}
            <ECGHeartbeatMonitor />

            <div key={currentSlide} className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 2 }}>
                
                {/* Render Title/Hero slide */}
                {slide.type === 'hero' && (
                    <div style={{ flexGrow: 1, display: 'flex', position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                        <div style={{ zIndex: 2, width: '100%' }}>
                            <HeroSlide 
                                title={slide.title} 
                                subtitle={slide.subtitle} 
                            />
                        </div>
                    </div>
                )}

                {/* Render Intro/Overview slide with sleek card layout */}
                {slide.type === 'intro' && (
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
                        <div>
                            <h2 style={{ marginBottom: '8px', fontSize: '0.85rem' }}>{slide.subtitle}</h2>
                            <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', letterSpacing: '-0.02em', color: '#0F172A' }}>{slide.title}</h1>
                            <div style={{ 
                                marginTop: '16px', 
                                padding: '14px 20px', 
                                background: '#EEF2FF', 
                                borderRadius: '10px',
                                border: '1px solid #C7D2FE',
                                fontSize: '1.05rem',
                                color: '#312E81',
                                fontWeight: '500',
                                lineHeight: 1.5
                            }}>
                                SYSTEM OVERVIEW: DiaClinic structures each of its 6 core features into 4 dedicated modules: (1) What is it, (2) What it solves with statistics, (3) Technical cloud implementation options, and (4) Data source integration standards.
                            </div>
                        </div>
                        <div style={{
                            flexGrow: 1,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '16px',
                            marginTop: '4px'
                        }}>
                            {slide.modules.map((mod, idx) => (
                                <div key={idx} style={{
                                    background: '#F8FAFC',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.75rem',
                                        background: 'rgba(129, 140, 248, 0.12)',
                                        color: '#818CF8',
                                        padding: '4px 10px',
                                        alignSelf: 'flex-start',
                                        fontWeight: '600',
                                        borderRadius: '6px',
                                        border: '1px solid rgba(129, 140, 248, 0.3)'
                                    }}>
                                        Section 0{idx + 1}
                                    </div>
                                    <div style={{
                                        fontSize: '1.15rem',
                                        fontWeight: '700',
                                        color: '#F8FAFC',
                                        lineHeight: 1.3
                                    }}>
                                        {mod.title}
                                    </div>
                                    <ul style={{
                                        margin: '4px 0 0 0',
                                        paddingLeft: '18px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    }}>
                                        {mod.slides.map((s, sIdx) => (
                                            <li key={sIdx} style={{
                                                fontSize: '0.92rem',
                                                color: '#94A3B8',
                                                fontWeight: '500',
                                                lineHeight: 1.4
                                            }}>
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Render Content slides in wide sleek 50/50 split layout */}
                {slide.type === 'content' && (
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
                        
                        {/* Slide Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.72rem',
                                    background: '#EEF2FF',
                                    color: '#4338CA',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    border: '1px solid #C7D2FE'
                                }}>
                                    {slide.moduleTitle}
                                </span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#64748B' }}>
                                    SLIDE {slide.id + 1} OF {slidesData.length}
                                </span>
                            </div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                color: '#475569',
                                background: '#F8FAFC',
                                border: '1px solid #E2E8F0',
                                borderRadius: '6px',
                                padding: '4px 10px',
                                fontWeight: '500'
                            }}>
                                DiaClinic Specification
                            </div>
                        </div>

                        {/* Split Content Area - Widened 6:6 layout for max comfort */}
                        <div style={{ display: 'flex', flexGrow: 1, gap: '36px', overflow: 'hidden', minHeight: 0 }}>
                            
                            {/* Left Column: Title & Key Delivery Points */}
                            <div style={{ flex: '6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <h1 style={{
                                        margin: '0 0 20px 0',
                                        fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                                        lineHeight: 1.25,
                                        fontWeight: 700,
                                        color: '#0F172A'
                                    }}>
                                        {slide.title}
                                    </h1>
                                    
                                    {/* Key Points formatted with clean rounded light cards */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        {slide.keyPoints.map((pt, idx) => (
                                            <div key={idx} style={{
                                                display: 'flex',
                                                gap: '14px',
                                                alignItems: 'flex-start',
                                                background: '#F8FAFC',
                                                border: '1px solid #E2E8F0',
                                                borderRadius: '10px',
                                                padding: '14px 18px',
                                                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)'
                                            }}>
                                                <span style={{
                                                    background: '#EEF2FF',
                                                    color: '#4338CA',
                                                    width: '22px',
                                                    height: '22px',
                                                    borderRadius: '50%',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'bold',
                                                    flexShrink: 0,
                                                    marginTop: '2px',
                                                    border: '1px solid #C7D2FE'
                                                }}>
                                                    ✓
                                                </span>
                                                <span style={{
                                                    fontSize: 'clamp(0.95rem, 1.5vw, 1.12rem)',
                                                    lineHeight: 1.5,
                                                    color: '#334155',
                                                    fontWeight: 400
                                                }}>
                                                    {highlightText(pt)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Asset Specification Text label */}
                                <div style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.72rem',
                                    background: '#F1F5F9',
                                    color: '#475569',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '8px',
                                    padding: '8px 14px',
                                    marginTop: '16px',
                                    lineHeight: 1.4
                                }}>
                                    <span style={{ fontWeight: '600', color: '#312E81' }}>Asset Spec:</span> {slide.assetSpec}
                                </div>
                            </div>

                            {/* Right Column: Interactive Chart or Visual Image Panel */}
                            <div style={{
                                flex: '6',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                border: slide.chartType ? 'none' : '1px solid #E2E8F0',
                                borderRadius: '12px',
                                boxShadow: slide.chartType ? 'none' : '0 4px 16px rgba(15, 23, 42, 0.04)',
                                background: slide.chartType ? 'transparent' : '#F8FAFC',
                                padding: slide.chartType ? '0' : '12px',
                                height: '100%',
                                overflow: 'hidden'
                            }}>
                                {slide.chartType === 'nationalStats' && <NationalStatsCards />}
                                {slide.chartType === 'clericalFriction' && <ClericalFrictionCards />}
                                {slide.chartType === 'outbreakCases' && <OutbreakCaseComparison />}
                                {slide.chartType === 'docTime' && <DocumentationTimeChart />}
                                {slide.chartType === 'idh' && <IDHPredictionChart />}
                                {slide.chartType === 'ward' && <WardAnomalyChart />}
                                {slide.chartType === 'infusion' && <InfusionMassChart />}
                                {slide.chartType === 'medgemma' && <MedGemmaAuditChart />}
                                {slide.chartType === 'hemo' && <HemodynamicsChart />}
                                {slide.chartType === 'mermaidDep' && <MermaidDependencyGraph />}
                                {!slide.chartType && (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src={slide.imageUrl} 
                                            alt={slide.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: '8px'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Render Outro Slide */}
                {slide.type === 'outro' && (
                    <div style={{ flexGrow: 1, position: 'relative', width: '100%', height: '100%' }}>
                        <OutroSlide />
                    </div>
                )}

            </div>{/* /slide-content */}

            {/* Speaker notes panel */}
            {slide.speakerNotes && (
                <div style={{
                    marginTop: '14px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    background: '#F1F5F9',
                    padding: '8px 14px',
                }}>
                    <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: '#475569',
                        margin: 0,
                        lineHeight: 1.4
                    }}>
                        <strong style={{ color: '#312E81' }}>Speaker Note:</strong> {slide.speakerNotes}
                    </p>
                </div>
            )}

            {/* Presenter Notes for intro */}
            {slide.notes?.length > 0 && (
                <div className="notes-panel">
                    {slide.notes.map((note, i) => (
                        <span key={i} className="note-item">
                            {note}
                        </span>
                    ))}
                </div>
            )}

            {/* Sleek Navigation Buttons (Center) */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                zIndex: 100
            }}>
                <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    style={{
                        padding: '8px 22px',
                        background: currentSlide === 0 ? '#F1F5F9' : '#EEF2FF',
                        border: '1px solid #C7D2FE',
                        borderRadius: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                        color: currentSlide === 0 ? '#94A3B8' : '#4338CA',
                        transition: 'all 0.2s ease'
                    }}
                >
                    ← PREV
                </button>
                <button 
                    onClick={nextSlide}
                    disabled={currentSlide === slidesData.length - 1}
                    style={{
                        padding: '8px 22px',
                        background: currentSlide === slidesData.length - 1 ? '#F1F5F9' : '#4338CA',
                        border: '1px solid #4338CA',
                        borderRadius: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: currentSlide === slidesData.length - 1 ? 'not-allowed' : 'pointer',
                        color: currentSlide === slidesData.length - 1 ? '#94A3B8' : '#FFFFFF',
                        boxShadow: currentSlide === slidesData.length - 1 ? 'none' : '0 4px 12px rgba(67, 56, 202, 0.25)',
                        transition: 'all 0.2s ease'
                    }}
                >
                    NEXT →
                </button>
            </div>

            {/* Prototype & Stitch Links (Bottom Left) */}
            <div style={{
                position: 'absolute', bottom: '20px', left: '32px',
                display: 'flex', gap: '10px', zIndex: 100
            }}>
                <a 
                    href="https://dialysis-safety-management-system.vercel.app/" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                        background: '#10B981', color: '#FFFFFF',
                        borderRadius: '6px',
                        padding: '5px 12px', fontFamily: "var(--font-mono)",
                        fontWeight: '600', fontSize: '0.74rem', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '6px'
                    }}
                >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF', display: 'inline-block' }} />
                    Live Prototype ↗
                </a>
                <a 
                    href="https://stitch.withgoogle.com/projects/503366360860058565" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                        background: '#EEF2FF', color: '#4338CA',
                        border: '1px solid #C7D2FE', borderRadius: '6px',
                        padding: '5px 12px', fontFamily: "var(--font-mono)",
                        fontWeight: '600', fontSize: '0.74rem', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: '6px'
                    }}
                >
                    Stitch Spec ↗
                </a>
            </div>

            {/* Slide counter (Bottom Right) */}
            <div className="slide-counter">
                <span style={{ fontWeight: '600', color: '#0F172A', fontSize: '0.9rem' }}>
                    {currentSlide + 1} / {slidesData.length}
                </span>
                <span className="key-hint">← →</span>
            </div>
        </div>
    );
}