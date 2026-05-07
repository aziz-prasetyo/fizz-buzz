# Plan: Floating Animations for Fizz/Buzz Badges

**Status:** Midstream (Planning)

## Technical Overview

We will define a CSS keyframe animation (`float-bob`) in `src/routes/+page.svelte` and apply it to the FIZZ and BUZZ badges using utility classes. We will use CSS variables or different classes to offset the animation timing for an asynchronous effect. We will also implement a hover state that overrides the animation to snap the element flat and scale it.

## Phases

### Phase 1: CSS Animation Definition
- [x] Task: Define `@keyframes float-bob` in the `<style>` block of `src/routes/+page.svelte` using `transform: translateY()`. (SHA: 58ee64a)
- [x] Task: Create `.animate-float-1` and `.animate-float-2` classes with different animation durations or delays. (SHA: 58ee64a)
- [x] Task: Create a `.hover-snap` class that sets `animation-play-state: paused`, resets transform, and scales up on `:hover`. (SHA: 58ee64a)
- [ ] Task: Conductor - User Manual Verification 'CSS Animation Definition' (Protocol in workflow.md)

### Phase 2: Markup Integration
- [x] Task: Apply `.animate-float-1` and `.hover-snap` to the "FIZZ = %3" badge in `src/routes/+page.svelte`. (SHA: 41f7bf6)
- [x] Task: Apply `.animate-float-2` and `.hover-snap` to the "BUZZ = %5" badge. (SHA: 41f7bf6)
- [ ] Task: Conductor - User Manual Verification 'Markup Integration' (Protocol in workflow.md)

### Phase 3: Validation and Code Quality
- [ ] Task: Run project validation suite (`bun run format`, `bun run lint`, `bun run build` via `bun run check`).
- [ ] Task: Conductor - User Manual Verification 'Validation and Code Quality' (Protocol in workflow.md)