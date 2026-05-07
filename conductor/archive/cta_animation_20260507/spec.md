# Spec: Hero CTA Button Animation

**Track ID:** `cta_animation_20260507`
**Goal:** Enhance the "PLAY NOW" button on the Home page Hero section with a high-focus animation to attract immediate user attention.

## Requirements

- **Visual Impact:** The button must stand out immediately through motion.
- **Aesthetic:** Must adhere to the Neo-Brutalist (Retro UI) style (bold borders, high contrast, geometric).
- **Behavior:**
  - Constant "Pulse" animation to draw the eye.
  - Enhanced hover interaction.
  - Tactile active state.
- **Performance:** Animation must be performant (use CSS transforms/opacity).

## Proposed Animation: "Pulse & Glitch"

1.  **Pulse:** A periodic scale and shadow expansion (e.g., every 2 seconds).
2.  **Shadow Shift:** The `shadow-xl` (black shadow) should shift slightly or pulse in intensity.
3.  **Internal Highlight:** A subtle scanline or diagonal sheen passing through the button.
4.  **Hover State:** Faster pulse or "glitch" effect (e.g., random color shift to destructive for a frame).

## Acceptance Criteria

- [ ] "PLAY NOW" button has a continuous, eye-catching pulse animation.
- [ ] Animation does not break the Neo-Brutalist layout or overlap other elements poorly.
- [ ] Hover and active states remain functional and feel enhanced.
- [ ] Code is implemented in `src/routes/+page.svelte` using Tailwind/CSS.
