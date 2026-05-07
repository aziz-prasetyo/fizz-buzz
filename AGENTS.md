# Agent Mandates & SDD Workflow

## 1. Spec-Driven Development (SDD)

All agents MUST follow the lifecycle in `conductor/workflow.md`:

1.  **Upstream (Spec):** Define in `spec.md`. Confirm with user.
2.  **Midstream (Plan):** Define in `plan.md`. Confirm with user.
3.  **Downstream (Execute):** Implement via TDD. Confirm final result.
4.  **Recycling (Archive & Sync):** **MANDATORY COMMIT.** After a full cycle, agents MUST commit archival and sync changes to finalize the feature/update.

## 2. Commit Requirements

- **Task Commits:** Every task in `plan.md` needs a commit with `git notes`.
- **Checkpoint Commits:** Every phase completion needs a checkpoint commit.
- **Cycle Completion Commit:** Upon finishing "Phase 4: Recycling", commit the archival of the track and updates to management files (e.g., `tracks.md`).

## 3. Communication (Caveman Mode)

- Always activate `caveman` skill.
- Minimal tokens. Technical substance only. No filler.

## 4. Svelte 5 & SvelteKit Association

- **Primary Framework:** Svelte 5 & SvelteKit.
- **Mandatory Tooling:** Agents MUST be associated with and utilize the **Svelte MCP Server** for all documentation, feature creation, and updates.
- **Runes & Patterns:** Exclusively use Svelte 5 runes (`$state`, etc.).
- **Auto-Fixing:** Always run `svelte-autofixer` before submitting code.
