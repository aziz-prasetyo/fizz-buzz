# Plan: Hero CTA Button Animation

**Track ID:** `cta_animation_20260507`
**Status:** Midstream (Planning)

## Technical Overview

We will implement a custom "Neo-Pulse" animation using CSS keyframes and apply it to the `Button` component in `src/routes/+page.svelte`. The animation will involve scaling, shadow manipulation, and a pseudo-element for a "sheen" effect.

## Phases

### Phase 1: Animation Definition (CSS)

- [ ] Define `@keyframes neo-pulse` in the `<style>` block of `src/routes/+page.svelte`.
  - 0%, 100%: `transform: scale(1); box-shadow: 12px 12px 0px 0px rgba(0,0,0,1);`
  - 50%: `transform: scale(1.05); box-shadow: 20px 20px 0px 0px rgba(0,0,0,0.8);`
- [ ] Define `@keyframes sheen` for the internal highlight effect.
- [ ] Create utility classes or apply directly via Tailwind `animate-` or custom CSS.

### Phase 2: Implementation (Markup)

- [ ] Apply the animation classes to the "PLAY NOW" button.
- [ ] Add a pseudo-element (`::after`) to the button for the sheen effect.
- [ ] Ensure hover/active states override the animation appropriately for tactile feedback.

### Phase 3: Validation

- [ ] Verify visual alignment with Neo-Brutalist style.
- [ ] Confirm no layout shifts or z-index issues.

## Task Breakdown

### Phase 1: CSS & Styling

- **Task 1.1**: Define `neo-pulse` and `sheen` keyframes. [x]
- **Task 1.2**: Create a `.cta-animate` class for easy application. [x]

### Phase 2: Integration

- **Task 2.1**: Update `Button` in `src/routes/+page.svelte`. [x]

### Phase 3: Final Check

- **Task 3.1**: Run `bun run check`. [x]
