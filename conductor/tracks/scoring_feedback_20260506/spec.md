# Specification: Implement Advanced Scoring and Visual Feedback System

## Goal

Enhance the Fizz Buzz game with a dynamic scoring system and high-impact visual feedback to provide a "wow" effect for players, while adhering to the local-first and performance goals.

## Requirements

- **Combo System**: Track consecutive correct answers to increase a multiplier.
- **Dynamic Scoring**: Base score multiplied by the current combo level.
- **Visual Feedback**:
  - Particle effects (e.g., stylized CSS shapes) for correct answers.
  - Screen shake or chromatic aberration effect for time penalties (wrong answers).
- **Retro UI Aesthetic**: Ensure all new visual elements align with the Neo-Brutalist design language.
- **Token Efficiency**: All workflow outputs must use `caveman` style or ultra-compressed communication.

## Technical Approach

- Use Svelte 5 runes (`$state`, `$derived`) for reactive scoring logic.
- Implement a lightweight particle system using CSS animations or a simple HTML Canvas layer.
- Ensure all states are persisted to `localStorage` via the existing state management.

## Acceptance Criteria

- [x] Combo counter resets on wrong answer or timer expiry.
- [x] Score increases exponentially with higher combos.
- [x] Visual effects are performant and don't lag on mobile.
- [x] Test coverage for scoring logic exceeds 95%.
