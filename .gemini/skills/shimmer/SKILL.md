---
name: shimmer
description: Expertise in integrating shimmer-from-structure into Svelte 5 projects to create structure-aware loading placeholders. Optimized for runes, zero-maintenance skeletons, and Neo-Brutalist aesthetics.
---

# Shimmer From Structure (Svelte 5) Skill

This skill provides expertise in integrating `shimmer-from-structure` into Svelte 5 projects to create structure-aware loading placeholders.

## Core Concepts

- **Structure-Aware**: Measures the actual rendered UI at runtime using `getBoundingClientRect()` to generate a pixel-perfect shimmer overlay.
- **Zero-Maintenance**: Eliminates the need for separate skeleton components by using your real components with template data.
- **Svelte 5 Integration**: Optimized for Svelte 5 runes (`$state`) and snippet-based children.

## Component API: `Shimmer`

| Prop                   | Type                      | Default                    | Description                                                  |
| :--------------------- | :------------------------ | :------------------------- | :----------------------------------------------------------- |
| `loading`              | `boolean`                 | `true`                     | Toggles between the shimmer effect and actual content.       |
| `children`             | `Snippet`                 | `required`                 | The content to render/measure (Slot/Children).               |
| `templateProps`        | `Record<string, unknown>` | `-`                        | Props to inject into the first child for skeleton rendering. |
| `shimmerColor`         | `string`                  | `'rgba(255,255,255,0.15)'` | Color of the moving shimmer wave.                            |
| `backgroundColor`      | `string`                  | `'rgba(255,255,255,0.08)'` | Background color of the shimmer blocks.                      |
| `duration`             | `number`                  | `1.5`                      | Animation duration in seconds.                               |
| `fallbackBorderRadius` | `number`                  | `4`                        | Default radius (px) if no CSS border-radius is found.        |

## Global Configuration

Use `setShimmerConfig` (usually in `+layout.svelte`) to define global defaults:

```typescript
import { setShimmerConfig } from '@shimmer-from-structure/svelte';

setShimmerConfig({
	shimmerColor: 'rgba(255, 219, 51, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	duration: 2,
	fallbackBorderRadius: 0 // Match Neo-Brutalist sharp corners
});
```

## Best Practices

### 1. Match Template Structure

Ensure `templateProps` data has the same array lengths and property structures as real data. If you display 5 items, use `Array(5).fill(...)` to prevent layout shifts.

### 2. Independent Shimmers

Wrap separate logical sections (Sidebar, Feed, Stats) in their own `Shimmer` components. This allows parts of the UI to hydrate independently.

### 3. Explicit Dimensions for Async Content

If a component (like a chart or lazy image) has no initial dimensions, wrap it in a container with explicit `width` and `height`. Shimmer needs a layout to measure.

### 4. Attribute Controls

- `data-shimmer-ignore`: Use for "LIVE" badges or static labels that should remain visible.
- `data-shimmer-no-children`: Use to treat a complex metric row as a single unified shimmer block.

## Performance

- **Efficient Measurement**: Measurement happens only once when `loading` becomes true.
- **Smart Skipping**: Zero-dimension elements (`display: none`) are automatically skipped.
- **Native APIs**: Uses `ResizeObserver` and `getComputedStyle` for high performance.

## Usage Examples

### Stats Grid

```svelte
<script>
	import { Shimmer } from '@shimmer-from-structure/svelte';
	const template = Array(3).fill({ label: 'Label', value: '000' });
	let { stats, loading } = $props();
</script>

<Shimmer {loading} templateProps={{ stats: template }}>
	<div class="stats-grid">
		{#each stats as stat}
			<div class="card">
				<p>{stat.label}</p>
				<h3>{stat.value}</h3>
			</div>
		{/each}
	</div>
</Shimmer>
```

## Retro-Brutalist Guidelines

- **Sharp Corners**: Always set `fallbackBorderRadius: 0` to align with the project's geometric style.
- **High Contrast**: Use the project's `--primary` color for the `shimmerColor`.
- **Ignore Static UI**: Use `data-shimmer-ignore` on geometric borders or static headers to maintain the "brutalist" structure during loading.
