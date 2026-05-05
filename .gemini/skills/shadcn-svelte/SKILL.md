---
name: shadcn-svelte
description: Manages shadcn-svelte components and projects — adding, updating, fixing, debugging, styling, and composing UI. Provides project context, component docs, and usage examples. Applies when working with shadcn-svelte, the CLI, design-system presets, or any project with a components.json file. Also triggers for "shadcn-svelte init", "add component", or registry URLs.
---

# shadcn-svelte

A framework for building UI, components, and design systems for Svelte. Components are added as source to the user's project via the CLI.

> **IMPORTANT:** Run all CLI commands using the project's package runner: `npx shadcn-svelte@latest`, `pnpm dlx shadcn-svelte@latest`, or `bunx --bun shadcn-svelte@latest` — based on the project's package manager.

## Critical Mandate
**ALWAYS base layouting and components on Shadcn Svelte patterns.** Favor using Shadcn components and Tailwind utility classes for ALL UI work in this project. Do not use custom CSS or external libraries unless specifically requested and if they don't overlap with Shadcn Svelte's capabilities.

## Current Project Context
Read `components.json` at the project root and, when you need the live file layout, list the directory given by the `aliases.ui` path.

## Imports (Svelte)
Each component lives in its own folder with an `index.ts` barrel. Match the [installation docs](https://shadcn-svelte.com/docs/installation):

- **Multi-part components** (dialog, select, card, field, tabs, …): `import * as Dialog from "$lib/components/ui/dialog"` then `Dialog.Content`, `Dialog.Title`, etc.
- **Single-component barrels** (button, input, badge, etc.): **named imports** — `import { Button } from "$lib/components/ui/button"`.

## Principles
1. **Use existing components first.** Check [Components](https://shadcn-svelte.com/docs/components) before writing custom UI.
2. **Compose, don't reinvent.** Settings page = Tabs + Card + form controls.
3. **Use built-in variants before custom styles.** `variant="outline"`, `size="sm"`, etc.
4. **Use semantic colors.** `bg-primary`, `text-muted-foreground` — never raw values like `bg-blue-500`.

## Critical Rules

### Styling & Tailwind
- **`class` for layout, not styling.** Never override component colors or typography.
- **No `space-x-*` or `space-y-*`.** Use `flex` with `gap-*`.
- **Use `size-*` when width and height are equal.** `size-10` not `w-10 h-10`.
- **Use `cn()` for conditional classes.** Don't write manual template literal ternaries.
- **No manual `z-index` on overlay components.** Dialog, Sheet, Popover, etc. handle their own stacking.

### Forms & Inputs
- **Forms use `Field.FieldGroup` + `Field.Field`.** Never use raw `div` with `space-y-*`.
- **Field validation uses `data-invalid` + `aria-invalid`.**

### Component Structure
- **Items always inside their Group.** `Select.Item` → `Select.Group`.
- **Dialog, Sheet, and Drawer always need a Title.** Use `class="sr-only"` if visually hidden.
- **Use full Card composition.** `Card.Header`/`Card.Title`/`Card.Content`/`Card.Footer`.

### Use Components, Not Custom Markup
- **Callouts use `Alert`.**
- **Empty states use `Empty`.**
- **Use `Separator`** instead of `<hr>`.
- **Use `Skeleton`** for loading placeholders.
- **Use `Badge`** instead of custom styled spans.

### Icons
- **Icons in `<Button>` use `data-icon`.** `data-icon="inline-start"` or `data-icon="inline-end"` on the icon.
- **No sizing classes on icons inside components.** Components handle icon sizing via CSS.

## Workflow
1. **Get project context** — read `components.json`.
2. **Check installed components first.**
3. **Discover components** — `npx shadcn-svelte@latest add`.
4. **Install or update** — `npx shadcn-svelte@latest add <name>`.

## Quick Reference
```bash
# Initialize shadcn-svelte
npx shadcn-svelte@latest init

# Add components
npx shadcn-svelte@latest add button card dialog
```

**Docs:** [shadcn-svelte.com](https://shadcn-svelte.com)
