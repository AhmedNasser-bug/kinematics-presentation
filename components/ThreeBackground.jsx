"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Renderer ───────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Scene / Camera ─────────────────────────────────────────── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 16);

    /* ── Subtle Background Grid Lines ───────────────────────────── */
    const gridGeo = new THREE.BufferGeometry();
    const step = 2, halfW = 28, halfH = 18;
    const gridVerts = [];
    for (let x = -halfW; x <= halfW; x += step) {
      gridVerts.push(x, -halfH, -5, x, halfH, -5);
    }
    for (let y = -halfH; y <= halfH; y += step) {
      gridVerts.push(-halfW, y, -5, halfW, y, -5);
    }
    gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(gridVerts, 3));
    const gridMat = new THREE.LineBasicMaterial({ color: 0xc7d2fe, transparent: true, opacity: 0.15 });
    scene.add(new THREE.LineSegments(gridGeo, gridMat));

    /* ── Animated Heartbeat / ECG Waveform Line ─────────────────── */
    const POINT_COUNT = 300;
    const width = 36;
    const ecgPositions = new Float32Array(POINT_COUNT * 3);

    // Function to calculate ECG PQRST Y displacement for given X
    function getECGY(x, phase) {
      const normX = ((x + width / 2 + phase) % 12) - 6; // repeat every 12 units
      if (normX > -5.5 && normX < -4.8) return 0.25 * Math.sin((normX + 5.5) / 0.7 * Math.PI); // P wave
      if (normX > -4.5 && normX < -4.2) return -0.3; // Q dip
      if (normX > -4.2 && normX < -3.6) return 2.8 * Math.sin((normX + 4.2) / 0.6 * Math.PI); // R spike
      if (normX > -3.6 && normX < -3.3) return -0.6; // S dip
      if (normX > -2.5 && normX < -1.5) return 0.45 * Math.sin((normX + 2.5) / 1.0 * Math.PI); // T wave
      return 0;
    }

    for (let i = 0; i < POINT_COUNT; i++) {
      const x = (i / (POINT_COUNT - 1)) * width - width / 2;
      ecgPositions[i * 3] = x;
      ecgPositions[i * 3 + 1] = 0;
      ecgPositions[i * 3 + 2] = 0;
    }

    const ecgGeo = new THREE.BufferGeometry();
    ecgGeo.setAttribute("position", new THREE.BufferAttribute(ecgPositions, 3));
    const ecgMat = new THREE.LineBasicMaterial({ color: 0x4338ca, linewidth: 3, transparent: true, opacity: 0.45 });
    const ecgLine = new THREE.Line(ecgGeo, ecgMat);
    ecgLine.position.set(0, -2, 0);
    scene.add(ecgLine);

    /* Second Secondary Pulse Wave Line */
    const ecgGeo2 = new THREE.BufferGeometry();
    const ecgPositions2 = new Float32Array(POINT_COUNT * 3);
    for (let i = 0; i < POINT_COUNT; i++) {
      const x = (i / (POINT_COUNT - 1)) * width - width / 2;
      ecgPositions2[i * 3] = x;
      ecgPositions2[i * 3 + 1] = 0;
      ecgPositions2[i * 3 + 2] = -2;
    }
    ecgGeo2.setAttribute("position", new THREE.BufferAttribute(ecgPositions2, 3));
    const ecgMat2 = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.25 });
    const ecgLine2 = new THREE.Line(ecgGeo2, ecgMat2);
    ecgLine2.position.set(0, 3, 0);
    scene.add(ecgLine2);

    /* Glowing Heartbeat Lead Node Sphere */
    const pulsePointGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const pulsePointMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const pulsePoint = new THREE.Mesh(pulsePointGeo, pulsePointMat);
    scene.add(pulsePoint);

    /* ── Animation Loop ─────────────────────────────────────────── */
    let animId;
    let phase = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      phase += 0.04;

      const pos = ecgGeo.attributes.position;
      const pos2 = ecgGeo2.attributes.position;

      for (let i = 0; i < POINT_COUNT; i++) {
        const x = pos.getX(i);
        const y = getECGY(x, phase);
        pos.setY(i, y);

        const x2 = pos2.getX(i);
        const y2 = getECGY(x2, phase * 0.8) * 0.7;
        pos2.setY(i, y2);
      }

      pos.needsUpdate = true;
      pos2.needsUpdate = true;

      // Position glowing red heartbeat dot at the peak of the wave
      const leadIndex = Math.floor(((phase * 15) % POINT_COUNT));
      const leadX = pos.getX(leadIndex);
      const leadY = pos.getY(leadIndex);
      pulsePoint.position.set(leadX, leadY - 2, 0.2);

      renderer.render(scene, camera);
    }
    animate();

    /* ── Resize ─────────────────────────────────────────────────── */
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
