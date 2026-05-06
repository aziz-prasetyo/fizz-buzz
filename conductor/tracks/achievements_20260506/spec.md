# Specification: Implement Local-First Achievement and Leveling System

## Goal
Add long-term progression to the Fizz Buzz game by tracking user milestones and awarding badges and experience points (XP), all stored locally.

## Requirements
- **Achievement System**: Define a set of badges (e.g., "Combo x10", "Score 500", "Perfect FizzBuzz").
- **Leveling System**: Calculate user level based on total accumulated XP.
- **Profile View**: Update the profiles page to display unlocked achievements and current level.
- **Retro UI**: Use Neo-Brutalist badges and progress bars.

## Technical Approach
- Store achievements and XP in `src/lib/state.svelte.ts`.
- Add logic to `GameSession` to check for achievement triggers.
- Ensure all logic has >95% test coverage.

## Acceptance Criteria
- [x] Level increases correctly based on XP.
- [x] Achievements unlock only once.
- [x] Profile page reflects real data from `localStorage`.
