# Cross-Model Workflow

A workflow that combines **Claude Code** and **Codex CLI** across two terminals, leveraging each model's strengths for planning, review, implementation, and verification.

## Workflow

```
┌─────────────────────────────────────────────────────────────────────────┐
│              CROSS-MODEL CLAUDE CODE + CODEX WORKFLOW                   │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  STEP 1: PLAN                                          Claude Code      │
│  ─────────────                                         Opus 4.6         │
│  Open Claude Code in plan mode (Terminal 1).           Plan Mode        │
│  Claude interviews you via AskUserQuestion.                             │
│  Produces a phased plan with test gates.                                │
│                                                                         │
│  Output: plans/{feature-name}.md                                        │
│                                                                         │
│                              ▼                                          │
│                                                                         │
│  STEP 2: QA REVIEW                                     Codex CLI        │
│  ──────────────────                                    GPT-5.4          │
│  Open Codex CLI in another terminal (Terminal 2).                       │
│  Codex reviews plan against the actual codebase.                        │
│  Inserts intermediate phases ("Phase 2.5")                              │
│  with "Codex Finding" headings.                                         │
│  Adds to the plan — never rewrites original phases.                     │
│                                                                         │
│  Output: plans/{feature-name}.md (updated)                              │
│                                                                         │
│                              ▼                                          │
│                                                                         │
│  STEP 3: IMPLEMENT                                     Claude Code      │
│  ──────────────────                                    Opus 4.6         │
│  Start a new Claude Code session (Terminal 1).                          │
│  You implement phase-by-phase                                           │
│  with test gates at each phase.                                         │
│                                                                         │
│                              ▼                                          │
│                                                                         │
│  STEP 4: VERIFY                                        Codex CLI        │
│  ────────────────                                      GPT-5.4          │
│  Start a new Codex CLI session (Terminal 2).                            │
│  Codex verifies the implementation                                      │
│  against the plan.                                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Step-by-Step Breakdown

### Step 1: Plan (Claude Code -- Opus 4.6, Plan Mode)

Open Claude Code in **plan mode** in Terminal 1. Claude interviews you via `AskUserQuestion` to understand the feature requirements, then produces a phased plan with test gates.

::: tip
Plan mode ensures Claude focuses on designing the approach rather than jumping straight into code. The interview-style interaction helps surface edge cases and requirements early.
:::

**Output**: `plans/{feature-name}.md`

### Step 2: QA Review (Codex CLI -- GPT-5.4)

Open Codex CLI in Terminal 2. Codex reviews the plan against the **actual codebase**, looking for gaps, conflicts, or missing steps. It inserts intermediate phases (e.g., "Phase 2.5") with "Codex Finding" headings.

::: warning Important
Codex **adds to** the plan -- it never rewrites the original phases. This preserves the original planning intent while augmenting it with codebase-aware insights.
:::

**Output**: `plans/{feature-name}.md` (updated in-place)

### Step 3: Implement (Claude Code -- Opus 4.6)

Start a **new** Claude Code session in Terminal 1. Implement the feature phase-by-phase, following the reviewed plan. Each phase has a test gate that must pass before moving to the next.

### Step 4: Verify (Codex CLI -- GPT-5.4)

Start a **new** Codex CLI session in Terminal 2. Codex verifies the implementation against the plan, checking that all phases were completed and test gates were satisfied.

## Why Cross-Model?

::: info Benefits of Cross-Model Workflows
- **Independent verification**: A different model reviewing the plan catches blind spots that the planning model might miss
- **Codebase grounding**: Codex CLI reviews the plan against real code, not just abstract requirements
- **Separation of concerns**: Planning and review happen in separate contexts, reducing confirmation bias
- **Test gate enforcement**: Phase-by-phase implementation with verification ensures nothing is skipped
:::
