# Implementation Plan: Implement Advanced Scoring and Visual Feedback System

## Phase 1: Scoring Foundation
- [x] **Task: Write tests for Combo System logic**
    - [x] Create unit tests for combo increment, reset, and multiplier calculation.
- [x] **Task: Implement Combo System logic**
    - [x] Add `combo` and `multiplier` state to `game.svelte.ts`.
    - [x] Update scoring calculation to include multiplier.
- [x] **Task: Conductor - User Manual Verification 'Scoring Foundation' (Protocol in workflow.md)**

## Phase 2: Visual Feedback
- [x] **Task: Write tests for Feedback Triggering**
    - [x] Ensure events are dispatched correctly for correct/wrong answers.
- [x] **Task: Implement Particle Feedback for Correct Answers**
    - [x] Create a reusable Svelte component for burst effects.
- [x] **Task: Implement Screen Shake for Wrong Answers**
    - [x] Add a global "glitch" or shake class triggered on errors.
- [x] **Task: Conductor - User Manual Verification 'Visual Feedback' (Protocol in workflow.md)**

## Phase 3: UI & Integration
- [x] **Task: Add Combo & Multiplier Display to UI**
    - [x] Update the game board to show the current combo and multiplier level.
- [x] **Task: Final Validation and Coverage Check**
    - [x] Ensure total coverage is >95%.
    - [x] Run `bun run check` to verify build integrity.
- [x] **Task: Conductor - User Manual Verification 'UI & Integration' (Protocol in workflow.md)**
