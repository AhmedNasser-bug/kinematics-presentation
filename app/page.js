"use client";

import { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(() => import('../components/ThreeBackground'), { ssr: false });
const UniverseLocalFrame = dynamic(() => import('../components/UniverseLocalFrame'), { ssr: false });
const DHLinkVisualizer = dynamic(() => import('../components/DHLinkVisualizer'), { ssr: false });
const RoboticArmHero = dynamic(() => import('../components/RoboticArmHero'), { ssr: false });
const VideoSlide = dynamic(() => import('../components/VideoSlide'), { ssr: false });
const HeroSlide = dynamic(() => import('../components/HeroSlide'), { ssr: false });
const OutroSlide = dynamic(() => import('../components/OutroSlide'), { ssr: false });

mermaid.initialize({

    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#E0E7FF',
        primaryBorderColor: '#3730A3',
        primaryTextColor: '#171717',
        lineColor: '#3730A3',
        edgeLabelBackground: '#FAFAFA',
        fontSize: '15px',
    }
});

function MermaidChart({ chart }) {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.removeAttribute('data-processed');
            ref.current.innerHTML = chart;
            mermaid.run({ nodes: [ref.current] }).catch(console.error);
        }
    }, [chart]);
    return (
        <div
            ref={ref}
            className="mermaid"
            style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center', width: '100%', height: '100%',
            }}
        />
    );
}

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

const slidesData = [
    {
        id: 0, title: "", subtitle: "",
        term: "", desc: "",
        subdesc: "", placeholder: "", isMermaid: false,
        notes: []
    },
    {
        id: 1, title: "1. The Presentation", subtitle: "Robotics & Mechanical Manipulation",
        term: "From Coordinate Frames to Forward Kinematics", desc: "A Full Pipeline Explainer.",
        subdesc: "➔ Visual terminology bridging spatial math and robotics.", placeholder: "", isMermaid: false,
        notes: [
            "This is a self-contained pipeline — no prior robotics background assumed.",
            "Every concept introduced here is a necessary prerequisite for the next.",
            "Think of this as a vocabulary lesson before we write the sentence.",
            "❓ Before we start — how would you describe where your hand is right now?",
        ]
    },
    {
        id: 2, title: "2. Visual: The Presentation", subtitle: "Interactive 3D", term: "Visualization",
        desc: "", subdesc: "", placeholder: "", isMermaid: false
    },
    {
        id: 3, title: "3. The Context", subtitle: "Project Introduction", term: "Roles & Audience",
        desc: "Origin and destination of this presentation.", subdesc: "➔ Presented To: Dr.Ibrahim | Presenter: Ahmed Nasser, Production team: Ahmed Nassem, Ahmed Nasser",
        placeholder: "graph LR\nA[Presenter] -->|Delivers| B(Robotics Pipeline)\nB -->|To| C([Audience])", isMermaid: true,
        notes: [
            "This pipeline originates from a real manipulation problem — controlling a robot arm end-effector.",
            "The audience is expected to have basic linear algebra literacy.",
            "Presenter cue: keep the context slide brief — this is framing, not content.",
        ]
    },
    {
        id: 4, title: "4. The Map", subtitle: "Overview", term: "Slide Progression",
        desc: "Six core concepts structured sequentially.", subdesc: "➔ Frame ➔ Body ➔ Matrix ➔ Chain ➔ DH ➔ FK.",
        placeholder: "graph LR\nA[Frames] --> B[Bodies]\nB --> C[Matrices]\nC --> D[Chains]\nD --> E[DH Params]\nE --> F[FK]", isMermaid: true,
        notes: [
            "Each arrow represents a mathematical dependency — you cannot skip a step.",
            "The sequence mirrors how a controller actually computes pose at runtime.",
            "❓ Notice each block feeds directly into the next — why do you think order matters here?",
        ]
    },
    {
        id: 5, title: "5. The Rationale", subtitle: "Why This Order?", term: "Pedagogical Sequence",
        desc: "Each definition builds mathematical necessity for the next.", subdesc: "➔ Expect clear, discrete links from local coordinates to full arm control.", placeholder: "", isMermaid: false,
        notes: [
            "Starting with frames before bodies mirrors how robots actually sense their environment — coordinate-first.",
            "Matrices come after bodies because you need something to transform before you define the transform.",
            "DH parameters only make sense once the chain topology is established.",
            "FK is the payoff: all prior definitions collapse into a single product of matrices.",
        ]
    },
    {
        id: 6, title: "6. Visual: The Rationale", subtitle: "Animation", term: "Visualization",
        desc: "", subdesc: "", video: '/StaircaseBuilder.mp4', isMermaid: false
    },
    {
        id: 7, title: "7. The Boundaries", subtitle: "What is Not Expected", term: "Scope Limitation",
        desc: "Calculus proofs, dynamics, and Inverse Kinematics.", subdesc: "➔ We define 'What' and 'How' analytically, omitting kinetic physics.", placeholder: "", isMermaid: false,
        notes: [
            "No forces, torques, or masses — this is pure kinematics, not dynamics.",
            "Inverse Kinematics (IK) is the harder reverse problem: given a target pose, find joint angles. Out of scope today.",
            "Proofs of rotation group properties (SO(3) closure, orthogonality) are omitted — treated as given.",
            "❓ If FK gives us pose from angles — what would you need to do it the other way around?",
        ]
    },
    {
        id: 8, title: "8. Visual: The Boundaries", subtitle: "Animation", term: "Visualization",
        desc: "", subdesc: "", video: '/IKStrikeOut.mp4', isMermaid: false
    },
    {
        id: 9, title: "9. The Universe & The Local", subtitle: "Spatial Referencing", term: "Coordinate Frame",
        desc: "A position vector + a rotation matrix.", subdesc: "➔ Defines 'Where' and 'How' an object is oriented.", placeholder: "", isMermaid: false,
        notes: [
            "The world frame {W} is our absolute reference — fixed, origin at (0,0,0).",
            "Every object gets its own local frame {B} — a translated and rotated copy of the world.",
            "Mathematically: a frame = origin p ∈ ℝ³ + orientation R ∈ SO(3).",
            "SO(3): the Special Orthogonal group — all 3×3 matrices where Rᵀ R = I and det(R) = +1.",
            "❓ If a frame tells us where something is and how it's rotated — what's the minimum we need to move between two frames?",
        ]
    },
    {
        id: 10, title: "10. Visual: The Universe & The Local", subtitle: "Interactive 3D", term: "Visualization",
        desc: "", subdesc: "", placeholder: "", isMermaid: false
    },
    {
        id: 11, title: "11. The Mechanical Foundation", subtitle: "Body & Articulation", term: "Rigid Body & Joints",
        desc: "Non-deforming links connected by constraints.", subdesc: "➔ Prismatic (Slide) OR Revolute (Rotate).", placeholder: "", isMermaid: false,
        notes: [
            "Rigid body assumption: the link's shape and mass distribution do not change — only its pose.",
            "Each joint removes one or more degrees of freedom from the relative motion between links.",
            "Revolute joint: 1-DOF rotation about a fixed axis. Prismatic: 1-DOF linear translation.",
            "A standard 6-DOF arm chains six revolute joints — enough to reach any pose in its workspace.",
            "❓ If a rigid body can move freely in 3D space, how many independent numbers describe its state?",
        ]
    },
    {
        id: 12, title: "12. Visual: The Mechanical Foundation", subtitle: "Animation", term: "Visualization",
        desc: "", subdesc: "", video: '/RigidBodyAndJoints.mp4', isMermaid: false
    },
    {
        id: 13, title: "13. The Mathematical Bridge", subtitle: "Mapping Space", term: "Homogeneous Transformation Matrix (T)",
        desc: "A 4×4 matrix encoding both rotation and translation.", subdesc: "➔ T = [ R | p ; 0 0 0 | 1 ] — maps points from one frame into another.", placeholder: "", isMermaid: false,
        notes: [
            "Homogeneous coordinates extend ℝ³ → ℝ⁴ so that rotation and translation collapse into one matrix multiply.",
            "R ∈ SO(3) occupies the top-left 3×3 block; p ∈ ℝ³ is the top-right column.",
            "The bottom row [0 0 0 1] preserves the homogeneous structure under composition.",
            "T ∈ SE(3): the Special Euclidean group — all rigid-body transforms in 3D.",
            "Composition rule: ᴬTᶜ = ᴬTᴮ · ᴮTᶜ — frames chain by simple matrix multiplication.",
            "❓ We can now map a point from one frame to another — but what if there are six frames in sequence?",
        ]
    },
    {
        id: 14, title: "14. Visual: The Mathematical Bridge", subtitle: "Animation", term: "Visualization",
        desc: "", subdesc: "", video: '/HomogeneousTransformationMatrix.mp4', isMermaid: false
    },
    {
        id: 15, title: "15. The Structure", subtitle: "Topology", term: "Kinematic Chain",
        desc: "The serial connection of frames.", subdesc: "➔ Base Frame ➔ Joint 1 ➔ Link 1 ➔ ... ➔ Tool Center Point (TCP).",
        placeholder: "graph LR\nA[Base Frame] -->|Joint 1| B(Link 1)\nB -->|Joint 2| C(Link 2)\nC -->|Joint n| D((TCP))", isMermaid: true,
        notes: [
            "Open kinematic chain: each link has exactly one parent — no closed loops.",
            "The TCP (Tool Center Point) is the end-effector frame — the pose we ultimately want to control.",
            "Total transform: ⁰Tₙ = ⁰T₁ · ¹T₂ · ... · ⁿ⁻¹Tₙ — a product of n matrices.",
            "❓ Each Tᵢ depends on joint angles — how do we parameterize those transforms in a standard, reusable way?",
        ]
    },
    {
        id: 16, title: "16. The Standardization", subtitle: "Rule-Based Modeling", term: "Denavit-Hartenberg (DH)",
        desc: "4 parameters fully describe any joint transform.", subdesc: "➔ a (link length) · α (link twist) · d (joint offset) · θ (joint angle).", placeholder: "", isMermaid: false,
        notes: [
            "DH convention (Denavit & Hartenberg, 1955): any consecutive joint pair can be described by exactly 4 parameters.",
            "a: distance along xᵢ between zᵢ₋₁ and zᵢ axes. α: angle between zᵢ₋₁ and zᵢ about xᵢ.",
            "d: distance along zᵢ₋₁ from the origin of frame i−1 to xᵢ. θ: angle about zᵢ₋₁ from xᵢ₋₁ to xᵢ.",
            "For a revolute joint: θ is the variable; a, α, d are constants defined by the arm geometry.",
            "DH reduces the arm model to an n×4 table — compact, unambiguous, and simulation-ready.",
        ]
    },
    {
        id: 17, title: "17. Visual: The Standardization", subtitle: "Interactive 3D", term: "Visualization",
        desc: "", subdesc: "", placeholder: "", isMermaid: false
    },
    {
        id: 18, title: "18. The Destination", subtitle: "The Full Pipeline", term: "Forward Kinematics (FK)",
        desc: "Joint Space → Task Space.", subdesc: "➔ ⁰Tₙ = ∏ᵢ₌₁ⁿ ⁱ⁻¹Tᵢ(θᵢ) — multiply all DH transforms to get the TCP pose.", placeholder: "", isMermaid: false,
        notes: [
            "Input: a vector of n joint angles [θ₁, θ₂, …, θₙ] — the joint space.",
            "Output: a 4×4 SE(3) matrix — the TCP position and orientation in the world frame.",
            "Complexity: O(n) matrix multiplications — efficient and closed-form.",
            "FK has a unique solution: one set of joint angles → exactly one TCP pose.",
            "This is the foundation of every simulation, trajectory planner, and robot controller.",
            "❓ We can compute where the arm ends up — but can we go the other direction?",
        ]
    },
    {
        id: 19, title: "19. Visual: The Destination", subtitle: "Animation", term: "Visualization",
        desc: "", subdesc: "", video: '/ForwardKinematicsChain.mp4', isMermaid: false
    },
    {
        id: 20, title: "", subtitle: "",
        term: "", desc: "",
        subdesc: "", placeholder: "", isMermaid: false,
        notes: []
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const slide = slidesData[currentSlide];

    return (
        <>
            {/* Global Three.js canvas – sits behind everything */}
            <ThreeBackground />

            {/* Custom cursor */}
            <CustomCursor />

            {/* Slide card */}
            <div className="slide-container">
                {/* key forces remount → CSS animation re-fires on every nav */}
                <div key={currentSlide} className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h1>{slide.title}</h1>
                    <h2>{slide.subtitle}</h2>

                    <div className="content">
                        {slide.term !== "Visualization" && (
                            <>
                                <p><span className="term">{slide.term}</span> {slide.desc}</p>
                                <p>{slide.subdesc}</p>
                            </>
                        )}

                        {slide.id === 2 ? (
                            <div className="visual-placeholder fullscreen" style={{ padding: 0 }}>
                                <RoboticArmHero />
                            </div>
                        ) : slide.id === 10 ? (
                            <div className={`visual-placeholder ${slide.term === "Visualization" ? "fullscreen" : ""}`} style={{ padding: 0 }}>
                                <UniverseLocalFrame />
                            </div>
                        ) : slide.id === 17 ? (
                            <div className={`visual-placeholder ${slide.term === "Visualization" ? "fullscreen" : ""}`} style={{ padding: 0 }}>
                                <DHLinkVisualizer />
                            </div>
                        ) : slide.video ? (
                            <div className="visual-placeholder fullscreen" style={{ padding: 0 }}>
                                <VideoSlide src={slide.video} />
                            </div>
                        ) : slide.isMermaid ? (
                            <div className={`visual-placeholder ${slide.term === "Visualization" ? "fullscreen" : ""}`} key={`mermaid-${slide.id}`}>
                                <MermaidChart chart={slide.placeholder} />
                            </div>
                        ) : slide.placeholder ? (
                            <div className={`visual-placeholder ${slide.term === "Visualization" ? "fullscreen" : ""}`}>
                                {slide.placeholder.split('\\n').map((line, i) => (
                                    <span key={i} style={{ display: 'block', margin: i === 0 ? '0 0 10px 0' : '0' }}>{line}</span>
                                ))}
                            </div>
                        ) : slide.id === 0 ? (
                            <HeroSlide />
                        ) : slide.id === 20 ? (
                            <OutroSlide />
                        ) : null}
                    </div>
                </div>{/* /slide-content */}

                {/* Presenter notes panel – only on non-visual slides with notes */}
                {slide.notes?.length > 0 && (
                    <div className="notes-panel">
                        {slide.notes.map((note, i) => (
                            <span
                                key={i}
                                className={`note-item ${note.startsWith('❓') ? 'note-question' : ''}`}
                            >
                                {note}
                            </span>
                        ))}
                    </div>
                )}

                {/* Slide counter + keyboard hint */}
                <div className="slide-counter">
                    {currentSlide + 1} / {slidesData.length}
                    <span className="key-hint">← →</span>
                </div>
            </div>
        </>
    );
}