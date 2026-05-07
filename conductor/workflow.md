# Project Workflow: Spec-Driven Development (SDD)

## Core Philosophy

This project follows a **Spec-Driven Development (SDD)** workflow. Every feature, update, or bug fix must traverse a linear "waterfall" lifecycle from high-level specification to verified implementation. This ensures maximum clarity, minimizes rework, and optimizes resource usage.

### Optimization Rules

- **Token Efficiency:** Utilize `caveman` related skills to compress all outputs. Keep communication technical, direct, and concise.
- **Resource Efficiency:** Use parallel tool execution for independent tasks. Batch reads and searches.
- **Workflow Integrity:** Never skip a phase. Each phase MUST be confirmed by the user before moving to the next.

---

## SDD Lifecycle Phases

### Phase 1: Upstream (Specification - "Spec")

**Goal:** Define _what_ to build and _why_.

1.  **Identify Need:** Start with a user request or a planned feature from `tracks.md`.
2.  **Create/Update Spec:** Define the requirements in `conductor/tracks/<track_id>/spec.md`.
    - Reference `product.md` and `product-guidelines.md`.
    - Define clear acceptance criteria.
3.  **Confirm Spec:** Present the Spec to the user. **PAUSE** for explicit approval. If improvements are needed, iterate on the Spec and re-confirm.

### Phase 2: Midstream (Planning - "Plan")

**Goal:** Define _how_ to build it.

1.  **Create/Update Plan:** Translate the Spec into a technical implementation plan in `conductor/tracks/<track_id>/plan.md`.
    - Break down the work into logical phases and actionable tasks.
    - Reference `tech-stack.md` and `code_styleguides/`.
2.  **Confirm Plan:** Present the Plan to the user. **PAUSE** for explicit approval. If architectural changes or improvements are suggested, update the Plan and re-confirm.

### Phase 3: Downstream (Execution - "Implement & Validate")

**Goal:** Build and verify the feature.

1.  **Execute Task Lifecycle:** For each task in `plan.md`:
    - **Mark [~]:** Set task status to in-progress.
    - **TDD (Red/Green/Refactor):** Write failing tests first, then implement to pass, then refactor.
    - **Validate:** Run `bun run check` (lint, type-check, build).
    - **Commit:** Use Conventional Commits and attach a task summary via `git notes`.
    - **Mark [x]:** Append commit SHA and mark complete.
2.  **Checkpointing:** Upon completing a phase in `plan.md`, execute the **Phase Completion Verification Protocol** (see below).
3.  **Confirm Downstream:** Once all tasks are complete, present the final result for user validation.

### Phase 4: Recycling (Return to Upstream)

**Goal:** Close the loop and prepare for the next iteration.

1.  **Archive:** Move the completed track folder to `conductor/archive/`.
2.  **Sync:** Update `product.md`, `tech-stack.md`, or `tracks.md` if implementation introduced permanent changes.
3.  **Final Commit:** Stage archival and sync changes. Commit with message: `chore(workflow): Finalize track <track_id> and recycle resources`.
4.  **Next Up:** Return to **Phase 1 (Upstream)** for next prioritized feature.

---

## Task Lifecycle (Phase 3 Detail)

All tasks follow a strict lifecycle:

1. **Select Task:** Choose the next available task from `plan.md` in sequential order.
2. **Mark In Progress:** Edit `plan.md` and change `[ ]` to `[~]`.
3. **Write Failing Tests (Red Phase):** Create tests defining expected behavior. Confirm failure.
4. **Implement (Green Phase):** Write minimum code to pass tests.
5. **Validation:** Run `bun run format`, `bun run lint`, `bun run build`.
6. **Refactor:** Improve code quality while maintaining passing tests.
7. **Commit Changes:** Stage changes, propose commit message, execute commit.
8. **Attach Git Note:** Attach a detailed summary (task name, changes, "why") to the commit hash.
9. **Update Plan:** Mark `[x]`, append 7-char SHA, commit the `plan.md` update.

---

## Phase Completion Verification Protocol

Executed immediately after a phase in `plan.md` concludes:

1.  **Announce Start:** Inform user that verification has begun.
2.  **Audit Changes:** `git diff --name-only <previous_checkpoint_sha> HEAD`.
3.  **Verify Tests:** Ensure every modified code file has a corresponding, passing test.
4.  **Run Suite:** Execute `CI=true bun test && bun run check`.
5.  **Manual Verification Plan:** Propose a step-by-step plan for the user based on `product.md` and `plan.md`.
6.  **User Approval:** **PAUSE** for explicit confirmation.
7.  **Checkpoint Commit:** Create a checkpoint commit and attach a verification report via `git notes`.
8.  **Update Plan:** Append `[checkpoint: <sha>]` to the phase heading.

---

## Quality Gates

Before marking any task complete, verify:

- [ ] All tests pass
- [ ] Code coverage >95%
- [ ] Follows `code_styleguides/`
- [ ] JSDoc/Docstrings updated
- [ ] Type safety enforced
- [ ] No linting/static analysis errors
- [ ] Mobile-friendly
- [ ] No security vulnerabilities (Secrets, XSS, etc.)

## Deployment & Emergency Procedures

(Refer to previous workflow sections for details on Deployment, Hotfixes, and Security Breaches)

%

- [ ] No linting errors
- [ ] Mobile testing complete
- [ ] Environment variables configured
- [ ] Backup created

### Deployment Steps

1. Merge feature branch to main
2. Tag release with version
3. Push to deployment service (Google Cloud Run)
4. Verify deployment
5. Test critical paths
6. Monitor for errors

### Post-Deployment

1. Monitor analytics
2. Check error logs
3. Gather user feedback
4. Plan next iteration

## Continuous Improvement

- Review workflow weekly
- Update based on pain points
- Document lessons learned
- Optimize for user happiness
- Keep things simple and maintainable
