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

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `loading` | `boolean` | `true` | Toggles between the shimmer effect and actual content. |
| `templateProps` | `Record<string, any>` | `{}` | Mock data injected into the child for skeleton rendering. |
| `shimmerColor` | `string` | (Global Default) | Color of the moving shimmer wave. |
| `backgroundColor` | `string` | (Global Default) | Background color of the shimmer blocks. |
| `duration` | `number` | `1.5` | Animation duration in seconds. |
| `fallbackBorderRadius` | `number` | `4` | Default radius (px) if no CSS border-radius is found. |

## Configuration

### Global Defaults
Use `setShimmerConfig` in `+layout.svelte` or a parent component:

```typescript
import { setShimmerConfig } from '@shimmer-from-structure/svelte';

setShimmerConfig({
  shimmerColor: 'rgba(255, 219, 51, 0.4)', // #ffdb33 with opacity
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  duration: 2,
  fallbackBorderRadius: 0 // Match Neo-Brutalist sharp corners
});
```

## Usage Patterns

### 1. Basic Component Wrapper
```svelte
<script>
  import { Shimmer } from '@shimmer-from-structure/svelte';
  let loading = $state(true);
</script>

<Shimmer {loading}>
  <div class="retro-card">
    <h2>Mission Objective</h2>
    <p>Complete the Fizz Buzz sequence.</p>
  </div>
</Shimmer>
```

### 2. Dynamic Content with `templateProps`
```svelte
<script>
  import { Shimmer } from '@shimmer-from-structure/svelte';
  let { user } = $props();
  let loading = $state(!user);

  const userTemplate = { name: 'PILOT_NAME', score: '000' };
</script>

<Shimmer {loading} templateProps={{ user: userTemplate }}>
  <UserStats user={user || userTemplate} />
</Shimmer>
```

## Retro-Brutalist Guidelines

- **Sharp Corners**: Always set `fallbackBorderRadius: 0` to align with the project's geometric style.
- **High Contrast**: Use the project's `--primary` color for the `shimmerColor` and a subtle dark wash for `backgroundColor`.
- **Ignore Static UI**: Use `data-shimmer-ignore` on elements like labels or borders that should remain visible while data hydrates.
- **Batch Shimmers**: Wrap logical groups (e.g., Header, Stats, History) in separate `Shimmer` components for independent hydration.
