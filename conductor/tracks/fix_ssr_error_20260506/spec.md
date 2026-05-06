# Specification: Fix SSR Tailwind CSS Error on /game and /profiles

## Goal
Resolve the "500 Internal Error" SSR crash that occurs on `/game` and `/profiles` when refreshing the page during `bun run dev`. The crash is caused by `@tailwindcss/vite` failing to parse `boxWith, mergeProps` in `bits-ui` components.

## Requirements
- **Investigation**: Utilize the `svelte` MCP and `shadcn-svelte` skills to investigate if there's a known implementation issue or compatibility problem between SvelteKit, Tailwind CSS v4, and the current version of `shadcn-svelte`/`bits-ui`.
- **Resolution**: Apply the necessary fix (such as configuration tweaks, version upgrades, or replacing conflicting components) so that the development server runs without crashing on these routes.

## Technical Approach
- Activate the `shadcn-svelte` skill and leverage the `svelte` MCP to query documentation and compatibility notes.
- Verify `package.json` dependencies and Vite/Tailwind configurations.
- Apply the fix.

## Acceptance Criteria
- [ ] Running `bun run dev` and refreshing the browser on `/game` and `/profiles` no longer results in a 500 SSR error.
- [ ] The game and profile pages render properly.