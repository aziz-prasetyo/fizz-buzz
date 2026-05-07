# Project Guidelines & Workflow

## Core Mandates

### 1. Spec-Driven Development (SDD)

This project STRICTLY follows the SDD workflow defined in `conductor/workflow.md`.

- **Waterfall Lifecycle:** Every feature/update MUST proceed through:
  1. **Upstream (Spec):** Define requirements in `spec.md`. Get user confirmation.
  2. **Midstream (Plan):** Define implementation in `plan.md`. Get user confirmation.
  3. **Downstream (Execute):** Implement via TDD and validate. Get user confirmation.
  4. **Recycling:** Archive completed tracks and return to Upstream.
- **Confirmation Gates:** DO NOT proceed to the next phase without explicit user approval of the current phase's output.
- **Process Improvement:** If a process requires improvement, confirm the change with the user before proceeding.

### 2. Token & Resource Optimization

- **Caveman Mode:** Always activate and use the `caveman` skill to minimize token usage for all communication.
- **Context Efficiency:** Batch file reads and searches. Use parallel execution for independent tool calls.
- **No Chitchat:** Avoid conversational filler. Be technical, direct, and concise.

### 3. Svelte 5 & SvelteKit Association

- **Framework:** Svelte 5 & SvelteKit.
- **Svelte MCP:** Agents MUST be associated with and use the Svelte MCP server for ALL documentation lookups, feature implementations, and updates. This is the source of truth for framework patterns.
- **Runes:** Mandatory use of Svelte 5 runes.
- **Validation:** Every component MUST pass `svelte-autofixer` before finalization.

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
