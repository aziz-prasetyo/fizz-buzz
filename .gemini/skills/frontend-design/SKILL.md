---
name: frontend-design
description: Implements a Retro UI (Neo-Brutalist) aesthetic in Svelte 5 projects, strictly referencing retroui.dev for design patterns. Use this skill whenever the user asks for "Retro UI", "Brutalist design", "Neo-Brutalism", or wants to make the application look "beautiful", "modern-retro", or "bold". If a component is missing, install it from shadcn-svelte first before applying the Retro UI restyling.
---

# Retro UI (Neo-Brutalist) Design Skill

This skill provides expert guidance on implementing a high-contrast, bold, and tactile Retro-Brutalist aesthetic, strictly adhering to the design patterns found at **[retroui.dev](https://retroui.dev/)**.

## Component Workflow

ALWAYS follow this sequence when adding or updating UI elements:
1. **Identify**: Determine if the required component exists in the project.
2. **Install**: If it does not exist, install the base version from **shadcn-svelte** using `npx shadcn-svelte@latest add <component>`.
3. **Reference**: Consult **[retroui.dev](https://retroui.dev/docs/install)** for the corresponding React/Base UI implementation.
4. **Convert & Restyle**: Manually translate the Tailwind classes and logic from the Retro UI reference into the Svelte 5 component, ensuring perfect parity with the lo-fi arcade aesthetic.

## Core Design Principles (retroui.dev Spec)

- **High Contrast**: Pure black (`#000000`) for borders and shadows against vibrant primary colors.
- **Dynamic Hard Shadows**: Use zero-blur offsets that displace on interaction. Standard: `shadow-md`. Hover: `shadow`. Active: `shadow-none`.
- **Tactile Transitions**: Interactive elements should physically "press" into the page using `hover:translate-y-1` and `active:translate-y-2 active:translate-x-1`.
- **Refined Geometry**: Use `rounded` (default radius) for buttons and cards to match the Retro UI reference, while maintaining sharp `border-2` or `border-4` strokes.
- **Typography**: `Archivo Black` for headings and `Space Grotesk` for body text.

## CSS Variables (RetroUI Theme)

Apply these to the `:root` in `global.css`:

```css
:root {
	--radius: 0.5rem;
	--background: oklch(1 0 0);
	--foreground: oklch(0 0 0);
	--border: oklch(0 0 0);
	--primary: oklch(0.88 0.17 90); /* #ffdb33 - Signature Yellow */
	--primary-hover: oklch(0.84 0.17 90);
	--primary-foreground: oklch(0 0 0);
	--secondary: oklch(0 0 0);
	--secondary-hover: oklch(0.15 0 0);
	--secondary-foreground: oklch(1 0 0);
	--accent: oklch(0.92 0.12 90);
	--destructive: oklch(0.6 0.2 25);
}
```

## Tailwind v4 Theme Configuration

Ensure hard shadows are defined to override standard blur-heavy defaults:

```css
@theme {
	--shadow-retro: 4px 4px 0 0 var(--border);
	
	/* Hard Shadows (Zero Blur) */
	--shadow-sm: 2px 2px 0 0 var(--border);
	--shadow: 4px 4px 0 0 var(--border);
	--shadow-md: 6px 6px 0 0 var(--border);
	--shadow-lg: 8px 8px 0 0 var(--border);
}
```

## Implementation Checklist

### 1. Missing Components
If the user asks for a `Input`, `Slider`, or `Dialog` that isn't in `src/lib/components/ui/`, you MUST run the shadcn-svelte install command first.

### 2. Manual Conversion
When converting from retroui.dev:
- Map `cva` variants to `tailwind-variants` (`tv`).
- Ensure `active:` states include both translation and shadow removal.
- Use `font-head` for button text and headers.
