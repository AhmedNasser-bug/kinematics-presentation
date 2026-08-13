# UI Theme & Clinical Telemetry Rules

## 1. Full Surface UI Theme Audits
When switching, updating, or reverting color themes (Light mode vs Dark mode), ALWAYS audit and update all 6 layout layers simultaneously:
1. **Root CSS Tokens (`:root`):** `--color-background`, `--color-surface`, `--color-text`, `--color-border`, `--color-accent`.
2. **Global Body Background (`body`):** Set outer canvas background and grid line colors to match the target theme (e.g. `#F8FAFC` light slate with `rgba(203, 213, 225, 0.35)` lines for light mode). Never leave a dark blue/black outer gutter surrounding a light slide box.
3. **Slide Container Surface (`.slide-container`):** Set container background (`#FFFFFF`), borders (`1px solid #E2E8F0`), and shadows to match theme.
4. **Typography & Highlights:** Set slide title (`h1`) to bold navy black (`#0F172A`), body text to slate (`#334155`), and highlight pills (`#FDE047` neobrutalist yellow). Prevent washed-out white titles on light cards.
5. **Utility Elements & Badges:** Update header module badges (`#EEF2FF` / `#4338CA`), DiaClinic specification pills (`#F8FAFC`), asset spec bars (`#F1F5F9`), slide counter pills (`#FFFFFF`), and presenter notes (`#F8FAFC`).
6. **Hero & Outro Slide Components:** Verify opening and closing slides match the exact color tokens.

## 2. Un-Occluded Clinical Telemetry Waveforms
- Background 3D/WebGL animations placed behind full-viewport container elements with `zIndex: 0` are obscured by opaque slide card backgrounds (`zIndex: 10`).
- Render clinical telemetry visualizers (like animated ECG heartbeat pulse lines) as explicit HTML5 Canvas telemetry monitor strips (`ECGHeartbeatMonitor.jsx`) positioned in the active visible layer (e.g. directly under the slide header bar).
- Use high-contrast stroke colors (`#EF4444` pulse red, `#10B981` emerald green) and include an active status badge (`❤️ ECG LEAD II // 72 BPM [NORMAL SINUS RHYTHM]`).

## 3. Windows Next.js Build Cache Hygiene
- On Windows systems, Next.js static builds (`next build`) can fail with `ENOENT` on `.next/server/.../*.nft.json` if a dev server or file watcher locked `.next` files.
- Always execute `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue ; npm run build` to clear build locks before deployment verification.
