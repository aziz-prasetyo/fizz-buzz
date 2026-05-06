# Implementation Plan: Implement Advanced Scoring and Visual Feedback System

## Phase 1: Scoring Foundation
- [ ] **Task: Write tests for Combo System logic**
    - [ ] Create unit tests for combo increment, reset, and multiplier calculation.
- [ ] **Task: Implement Combo System logic**
    - [ ] Add `combo` and `multiplier` state to `game.svelte.ts`.
    - [ ] Update scoring calculation to include multiplier.
- [ ] **Task: Conductor - User Manual Verification 'Scoring Foundation' (Protocol in workflow.md)**

## Phase 2: Visual Feedback
- [ ] **Task: Write tests for Feedback Triggering**
    - [ ] Ensure events are dispatched correctly for correct/wrong answers.
- [ ] **Task: Implement Particle Feedback for Correct Answers**
    - [ ] Create a reusable Svelte component for burst effects.
- [ ] **Task: Implement Screen Shake for Wrong Answers**
    - [ ] Add a global "glitch" or shake class triggered on errors.
- [ ] **Task: Conductor - User Manual Verification 'Visual Feedback' (Protocol in workflow.md)**

## Phase 3: UI & Integration
- [ ] **Task: Add Combo & Multiplier Display to UI**
    - [ ] Update the game board to show the current combo and multiplier level.
- [ ] **Task: Final Validation and Coverage Check**
    - [ ] Ensure total coverage is >95%.
    - [ ] Run `bun run check` to verify build integrity.
- [ ] **Task: Conductor - User Manual Verification 'UI & Integration' (Protocol in workflow.md)**
