"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = {
  primary: 0x3730a3,
  accent:  0xc7d2fe,
  grid:    0xe0e7ff,
  dark:    0x171717,
};

const NODE_COUNT   = 60;
const LINK_DIST    = 3.2;
const SPEED        = 0.0012;

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
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 18);

    /* ── Coordinate-grid helper (XY plane) ──────────────────────── */
    const gridGeo = new THREE.BufferGeometry();
    const step = 2, halfW = 26, halfH = 16;
    const gridVerts = [];
    for (let x = -halfW; x <= halfW; x += step) {
      gridVerts.push(x, -halfH, -8, x, halfH, -8);
    }
    for (let y = -halfH; y <= halfH; y += step) {
      gridVerts.push(-halfW, y, -8, halfW, y, -8);
    }
    gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(gridVerts, 3));
    const gridMat = new THREE.LineBasicMaterial({ color: BRAND.grid, transparent: true, opacity: 0.22 });
    scene.add(new THREE.LineSegments(gridGeo, gridMat));

    /* ── Floating nodes ─────────────────────────────────────────── */
    const nodeGeo = new THREE.SphereGeometry(0.10, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: BRAND.primary });
    const accentMat = new THREE.MeshBasicMaterial({ color: BRAND.accent });

    const nodes   = [];
    const meshes  = [];
    const spread  = { x: 26, y: 16, z: 10 };

    for (let i = 0; i < NODE_COUNT; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * spread.x * 2,
        (Math.random() - 0.5) * spread.y * 2,
        (Math.random() - 0.5) * spread.z,
      );
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * SPEED * 2,
        (Math.random() - 0.5) * SPEED * 2,
        (Math.random() - 0.5) * SPEED * 0.5,
      );
      const isAccent = Math.random() < 0.25;
      const mesh = new THREE.Mesh(nodeGeo, isAccent ? accentMat : nodeMat);
      mesh.scale.setScalar(isAccent ? 1.8 : 1.0);
      mesh.position.copy(pos);
      scene.add(mesh);
      nodes.push({ pos, vel, isAccent });
      meshes.push(mesh);
    }

    /* ── Dynamic link lines ─────────────────────────────────────── */
    const MAX_LINKS  = 100;
    const linesMat   = new THREE.LineBasicMaterial({ color: BRAND.primary, transparent: true, opacity: 0.18, vertexColors: false });
    const linesGeo   = new THREE.BufferGeometry();
    const lineVerts  = new Float32Array(MAX_LINKS * 6); // 2 verts × 3 components each
    linesGeo.setAttribute("position", new THREE.BufferAttribute(lineVerts, 3));
    linesGeo.setDrawRange(0, 0);
    const linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    scene.add(linesMesh);

    /* ── Axis arrows (coordinate frame decoration) ──────────────── */
    const arrowMats = [
      new THREE.MeshBasicMaterial({ color: 0xef4444 }),   // X – red
      new THREE.MeshBasicMaterial({ color: 0x22c55e }),   // Y – green
      new THREE.MeshBasicMaterial({ color: 0x3730a3 }),   // Z – blue/indigo
    ];
    const arrowLen = 2.2, arrowR = 0.05;
    const arrowCylGeo = new THREE.CylinderGeometry(arrowR, arrowR, arrowLen, 8);
    const arrowTipGeo = new THREE.ConeGeometry(arrowR * 2.5, arrowLen * 0.25, 8);
    const axes = [
      { dir: new THREE.Euler(0, 0, -Math.PI / 2), offset: [arrowLen / 2, 0, 0] },
      { dir: new THREE.Euler(0, 0, 0),             offset: [0, arrowLen / 2, 0] },
      { dir: new THREE.Euler(Math.PI / 2, 0, 0),   offset: [0, 0, arrowLen / 2] },
    ];
    const origin = new THREE.Vector3(-10, -6, 2);
    axes.forEach(({ dir, offset }, i) => {
      const cyl = new THREE.Mesh(arrowCylGeo, arrowMats[i]);
      cyl.rotation.copy(dir);
      cyl.position.copy(origin).add(new THREE.Vector3(...offset));
      scene.add(cyl);

      const tip = new THREE.Mesh(arrowTipGeo, arrowMats[i]);
      tip.rotation.copy(dir);
      tip.position.copy(origin).add(new THREE.Vector3(...offset.map((v, j) => j === i ? v + arrowLen * 0.62 : v)));
      scene.add(tip);
    });

    /* ── Small floating "frame" cross markers ───────────────────── */
    const crossMat = new THREE.LineBasicMaterial({ color: BRAND.primary, opacity: 0.5, transparent: true });
    const crossPositions = [
      [8, 4, 0], [-6, -4, 1], [3, -7, -1], [-9, 5, 0], [11, -2, 0.5],
    ];
    crossPositions.forEach(([cx, cy, cz]) => {
      const cGeo = new THREE.BufferGeometry();
      const cv = new Float32Array([
        cx - 0.6, cy, cz, cx + 0.6, cy, cz,
        cx, cy - 0.6, cz, cx, cy + 0.6, cz,
      ]);
      cGeo.setAttribute("position", new THREE.BufferAttribute(cv, 3));
      scene.add(new THREE.LineSegments(cGeo, crossMat));
    });

    /* ── Subtle background gradient plane ───────────────────────── */
    const planeMat = new THREE.MeshBasicMaterial({
      color: BRAND.accent, transparent: true, opacity: 0.04, side: THREE.DoubleSide,
    });
    const planeGeo = new THREE.PlaneGeometry(60, 40);
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.position.z = -9;
    scene.add(plane);

    /* ── Animate ────────────────────────────────────────────────── */
    let animId;
    const half = { x: spread.x, y: spread.y, z: spread.z / 2 };

    function animate() {
      animId = requestAnimationFrame(animate);

      /* Move nodes */
      nodes.forEach((n, i) => {
        n.pos.addScaledVector(n.vel, 1);
        if (Math.abs(n.pos.x) > half.x)  n.vel.x *= -1;
        if (Math.abs(n.pos.y) > half.y)  n.vel.y *= -1;
        if (Math.abs(n.pos.z) > half.z)  n.vel.z *= -1;
        meshes[i].position.copy(n.pos);
      });

      /* Rebuild link lines */
      let linkCount = 0;
      const pos = linesGeo.attributes.position;
      outer: for (let a = 0; a < NODE_COUNT - 1; a++) {
        for (let b = a + 1; b < NODE_COUNT; b++) {
          if (nodes[a].pos.distanceTo(nodes[b].pos) < LINK_DIST) {
            if (linkCount >= MAX_LINKS) break outer;
            const base = linkCount * 6;
            lineVerts[base]     = nodes[a].pos.x; lineVerts[base + 1] = nodes[a].pos.y; lineVerts[base + 2] = nodes[a].pos.z;
            lineVerts[base + 3] = nodes[b].pos.x; lineVerts[base + 4] = nodes[b].pos.y; lineVerts[base + 5] = nodes[b].pos.z;
            linkCount++;
          }
        }
      }
      pos.set(lineVerts);
      pos.needsUpdate = true;
      linesGeo.setDrawRange(0, linkCount * 2);

      /* Gentle camera drift */
      const t = Date.now() * 0.00008;
      camera.position.x = Math.sin(t) * 1.2;
      camera.position.y = Math.cos(t * 0.7) * 0.8;
      camera.lookAt(0, 0, 0);

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
