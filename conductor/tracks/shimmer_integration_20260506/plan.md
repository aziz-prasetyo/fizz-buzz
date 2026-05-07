# Implementation Plan: Implement shimmer-from-structure Integration

## Phase 1: Foundation & Skill
- [ ] **Task: Create standalone Shimmer Skill**
    - [ ] Create `.gemini/skills/shimmer/SKILL.md` with API docs and Retro-Brutalist patterns.
- [ ] **Task: Library Installation & Global Configuration**
    - [ ] Run `bun add @shimmer-from-structure/svelte`.
    - [ ] Update `src/routes/+layout.svelte` with `setShimmerConfig` matching Neo-Brutalist colors.
- [ ] **Task: Conductor - User Manual Verification 'Foundation & Skill' (Protocol in workflow.md)**

## Phase 2: State Loading Strategy
- [ ] **Task: Write tests for GameState loading transitions**
- [ ] **Task: Implement discrete `loading` states in `state.svelte.ts`**
    - [ ] Add reactive boolean state to track `localStorage` hydration completion.
- [ ] **Task: Conductor - User Manual Verification 'State Loading Strategy' (Protocol in workflow.md)**

## Phase 3: Shimmer Implementation
- [ ] **Task: Write tests for Shimmer component rendering**
- [ ] **Task: Apply Shimmer to Profile Mission Statistics**
    - [ ] Wrap `Pilot Profile` stats in `Shimmer`.
- [ ] **Task: Apply Shimmer to Game History List**
    - [ ] Wrap `History` records in `Shimmer`.
- [ ] **Task: Apply Shimmer to Result Screen Syncing**
    - [ ] Replace 'Syncing...' pulse with `Shimmer` overlay.
- [ ] **Task: Conductor - User Manual Verification 'Shimmer Implementation' (Protocol in workflow.md)**
