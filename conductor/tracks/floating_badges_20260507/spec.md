# Spec: Floating Animations for Fizz/Buzz Badges

**Goal:** Add a floating animation to the "FIZZ = %3" and "BUZZ = %5" rule badges in the Home page Hero section to make the UI feel more dynamic while maintaining the Neo-Brutalist aesthetic.

## Functional Requirements

- **Animation Style:** A smooth, slow up-and-down "Gentle Bobbing" motion.
- **Timing:** The animations must be asynchronous (different speeds or offsets) so the badges move independently of one another.
- **Interaction (Hover):** When hovered, the badge should "Snap & Scale" — pausing the float animation, returning to a flat/unrotated base state, and scaling up slightly for tactile feedback.

## Non-Functional Requirements

- **Performance:** Use hardware-accelerated CSS properties (`transform: translateY`) to ensure smooth 60fps rendering without layout recalculations.
- **Aesthetic:** Ensure the scaling and snapping maintain the sharp, high-contrast look of the Retro UI design.

## Acceptance Criteria

- [ ] The "FIZZ = %3" and "BUZZ = %5" badges bob gently up and down continuously.
- [ ] The two badges do not bob in perfect sync.
- [ ] Hovering over a badge stops its bobbing, resets its rotation (if any), and scales it up.
- [ ] The animation is implemented via CSS keyframes/classes in the relevant Svelte component.