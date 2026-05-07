# Specification: Implement shimmer-from-structure Integration

## Goal

Integrate the `shimmer-from-structure` library into the Fizz Buzz project to provide high-quality, structure-aware loading placeholders for all components that fetch data from `localStorage`.

## Requirements

- **Library Integration**: Install `@shimmer-from-structure/svelte` and configure it globally to match the project's Neo-Brutalist aesthetic.
- **Widespread Application**: Implement the `Shimmer` component across:
  - Game Result screen (during score syncing).
  - Pilot Profile statistics.
  - Game History lists.
  - Any component that initialized with placeholder values (like "0" or "null") before `localStorage` data is loaded.
- **Retro-Brutalist Aesthetic**: Customize the shimmer colors and behavior to use high-contrast blocks (e.g., primary yellow/black) instead of soft gradients, ensuring it feels tactile and bold.
- **Knowledge Transfer**: Create a new standalone agent skill at `.gemini/skills/shimmer/SKILL.md` to document usage patterns, API references, and best practices for the team.

## Technical Approach

- Use `setShimmerConfig` in the root layout to define the Neo-Brutalist theme variables.
- Wrap target components in the `Shimmer` component.
- Utilize `templateProps` to ensure the skeleton accurately matches the intended layout.
- Use `data-shimmer-ignore` for static Retro UI elements like borders or headers that should remain visible.

## Acceptance Criteria

- [ ] `@shimmer-from-structure/svelte` is installed and functional.
- [ ] Global configuration is applied in `+layout.svelte`.
- [ ] New `shimmer` skill is created and documented.
- [ ] Shimmer effect is visible and performant on Profile, History, and Result pages during data hydration.
- [ ] Test coverage for data loading states remains >95%.
