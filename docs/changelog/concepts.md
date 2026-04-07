---
title: Concepts Changelog
description: Changelog history for the README CONCEPTS section tracking drift against official Claude Code documentation
---

# Concepts Section -- Changelog History

Tracks drift between the README CONCEPTS table and official Claude Code documentation across versions.

::: info Status Legend
| Status | Meaning |
|--------|---------|
| COMPLETE | Action was taken and resolved successfully |
| INVALID | Finding was incorrect, not applicable, or intentional |
| ON HOLD | Action deferred -- waiting on external dependency or user decision |
:::

---

## v2.1.63 -- 2026-03-02 (First Pass)

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Broken URL | Fix Permissions URL from `/iam` to `/permissions` | COMPLETE (URL updated to /permissions) |
| 2 | HIGH | Missing Concept | Add Agent Teams row to CONCEPTS table | COMPLETE (row added with ~/.claude/teams/ location) |
| 3 | HIGH | Missing Concept | Add Keybindings row to CONCEPTS table | COMPLETE (row added with ~/.claude/keybindings.json location) |
| 4 | HIGH | Missing Concept | Add Model Configuration row to CONCEPTS table | COMPLETE (row added with .claude/settings.json location) |
| 5 | HIGH | Missing Concept | Add Auto Memory row to CONCEPTS table | COMPLETE (row added with ~/.claude/projects/&lt;project&gt;/memory/ location) |
| 6 | HIGH | Stale Anchor | Fix Rules URL anchor from `#modular-rules-with-clauderules` to `#organize-rules-with-clauderules` | COMPLETE (anchor updated) |
| 7 | MED | Missing Concept | Add Checkpointing row to CONCEPTS table | COMPLETE (row added with automatic git-based location) |
| 8 | MED | Missing Concept | Add Status Line row to CONCEPTS table | COMPLETE (row added with ~/.claude/settings.json location) |
| 9 | MED | Missing Concept | Add Remote Control row to CONCEPTS table | COMPLETE (row added with CLI / claude.ai location) |
| 10 | MED | Missing Concept | Add Fast Mode row to CONCEPTS table | COMPLETE (row added with .claude/settings.json location) |
| 11 | MED | Missing Concept | Add Headless Mode row to CONCEPTS table | COMPLETE (row added with CLI flag -p location) |
| 12 | LOW | Changed Description | Update Memory description to mention auto memory | COMPLETE (description and location updated) |
| 13 | LOW | Changed Location | Update MCP Servers location to include `.mcp.json` | COMPLETE (location updated to include .mcp.json) |
| 14 | LOW | Missing Badge | Add Implemented badge to Hooks row | COMPLETE (Implemented badge added linking to .claude/hooks/) |

---

## v2.1.63 -- 2026-03-02 (Second Pass -- Consolidation)

::: tip Table Consolidation
The CONCEPTS table was consolidated from 22 rows to 10 rows by folding related concepts as inline doc links within their parent rows. This improved readability while preserving access to all concepts.
:::

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Table Consolidation | Consolidate CONCEPTS table from 22 rows to 10 rows -- fold related concepts as inline doc links | COMPLETE (22 to 10 rows) |
| 2 | MED | Merged Concept | Fold Marketplaces into Plugins row as inline link | COMPLETE (linked to /discover-plugins) |
| 3 | MED | Merged Concept | Fold Agent Teams into Sub-Agents row as inline link | COMPLETE (linked to /agent-teams) |
| 4 | MED | Merged Concept | Fold Permissions, Model Config, Output Styles, Sandboxing, Keybindings, Status Line, Fast Mode into Settings row as inline links | COMPLETE (7 concepts folded with doc links) |
| 5 | MED | Merged Concept | Fold Auto Memory and Rules into Memory row as inline links | COMPLETE |
| 6 | MED | Merged Concept | Fold Headless Mode into Remote Control row as inline link | COMPLETE (linked to /headless) |
| 7 | LOW | Reorder | Reorder table by logical grouping: building blocks, extension, config, context, runtime | COMPLETE (grouped by concern, not chronology) |

---

## v2.1.71 -- 2026-03-07

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Broken URL | Fix `context-management` to `interactive-mode` in TIPS (3 occurrences) | COMPLETE |
| 2 | HIGH | Broken URL | Fix `model-configuration` to `model-config` in TIPS (3 occurrences) | COMPLETE |
| 3 | HIGH | Broken URL | Fix `usage-billing` to `costs` in TIPS | COMPLETE |
| 4 | HIGH | Broken URL | Remove `cowork` URL in STARTUPS -- page does not exist | COMPLETE (hyperlink removed, plain text kept) |
| 5 | HIGH | Missing Concept | Add Scheduled Tasks row to CONCEPTS and Hot section (`/loop`, cron tools) | COMPLETE (added to both tables) |
| 6 | MED | Changed Location | Update Agent Teams location from `.claude/agents/&lt;name&gt;.md` to `built-in (env var)` | COMPLETE (location updated) |

---

## v2.1.72 -- 2026-03-10

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Broken URL | Fix Commands URL from `/slash-commands` to `/skills` in CONCEPTS table -- `/slash-commands` serves Skills page content | INVALID (URL still resolves; user chose to keep as-is) |
| 2 | HIGH | Broken URL | Fix Commands URL from `/slash-commands` to `/skills` in TIPS section | INVALID (URL still resolves; user chose to keep as-is) |
| 3 | MED | Missing Inline Link | Add Interactive Mode as inline link to CLI Startup Flags row | COMPLETE (inline link added) |
| 4 | MED | Missing Inline Link | Add Costs as inline link to Settings row | INVALID (user chose to skip) |
| 5 | LOW | Missing Concept | Consider adding IDE Integrations row | INVALID (user chose to skip -- platform surfaces, not configuration concepts) |
| 6 | HIGH | Missing Concept | Add Code Review row to Hot table -- multi-agent PR analysis (research preview, Teams and Enterprise) | COMPLETE (row added as first Hot entry with blog link) |
| 7 | MED | New Badge | Create beta.svg tag and add to Code Review and Agent Teams in Hot table | COMPLETE (beta.svg created; added to both rows) |
| 8 | MED | Reorder | Sort Hot table by release date (most recent first) | COMPLETE |

---

## v2.1.74 -- 2026-03-12

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Broken URL | Fix Commands URL `/slash-commands` to `/skills` | INVALID (RECURRING -- URL still resolves; user chose to keep as-is) |
| 2 | LOW | Verification | All external docs URLs validated -- no broken links found | COMPLETE (all 20+ URLs return valid pages) |
| 3 | LOW | Verification | All local badge file paths validated -- no missing files | COMPLETE |
| 4 | LOW | Verification | Memory anchor `#organize-rules-with-clauderules` validated on target page | COMPLETE (heading exists) |
| 5 | LOW | Verification | All CONCEPTS descriptions checked against official docs | COMPLETE (no description drift detected) |

---

## v2.1.76 -- 2026-03-15

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING -- URL still resolves; user chose to keep as-is) |
| 2 | MED | Missing Badges | Remote Control (Hot) has zero badges -- only Hot item without any BP or Impl badge | COMPLETE (BP badge added) |
| 3 | LOW | Naming | "Sub-Agents" in README vs "subagents" in official docs | COMPLETE (renamed to "Subagents" in CONCEPTS table) |
| 4-7 | LOW | Verification | All external docs URLs, local badges, anchors, and descriptions validated | COMPLETE (no drift detected) |

---

## v2.1.77 -- 2026-03-17

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | HIGH | Changed Description | Hooks description says "Deterministic scripts" but hooks now include 4 types: command, HTTP, prompt, and agent | COMPLETE (updated to "User-defined handlers (scripts, HTTP, prompts, agents)") |
| 3 | MED | Missing Concept | Desktop App has dedicated docs page at `/desktop` | INVALID (user considers it a platform surface, not a configuration concept) |
| 4 | MED | Changed URL | Hooks docs now split into Guide (`/hooks-guide`) and Reference (`/hooks`) -- CONCEPTS links only to Reference | COMPLETE (Guide link added as inline link) |
| 5-8 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.78 -- 2026-03-18

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | HIGH | Changed URL+Name | Voice Mode in Hot table links to tweet instead of official docs `/voice-dictation`; official name is "Voice Dictation" | COMPLETE (renamed to "Voice Dictation", linked to /voice-dictation) |
| 3-6 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.79 -- 2026-03-19

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2-5 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.80 -- 2026-03-20

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Concept | Add Channels row to Hot table -- push events from Telegram/Discord/webhooks into running sessions (research preview, v2.1.80) | COMPLETE (row added as first Hot entry) |
| 2 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 3 | MED | Missing Deep Link | Git Worktrees URL should anchor to `#run-parallel-claude-code-sessions-with-git-worktrees` | COMPLETE (anchor added) |
| 4 | LOW | Missing Inline Link | Plugins row could add Marketplaces sub-link | COMPLETE (Create Marketplaces inline link added) |
| 5-8 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.81 -- 2026-03-21

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2-6 | LOW | Verification | All URLs, badges, anchors (including Git Worktrees), and descriptions validated | COMPLETE |

---

## v2.1.81 -- 2026-03-23 (Re-audit)

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2-6 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.83 -- 2026-03-25

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | MED | Changed URL | Simplify and Batch primary link points to tweet instead of official docs `/skills#bundled-skills` | COMPLETE (primary link updated to official docs) |
| 3-7 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |
| 8 | HIGH | Missing Concept | Add Auto Mode row to Hot table -- background safety classifier replaces permission prompts (research preview, Team/Enterprise) | COMPLETE (row added as first Hot entry) |

---

## v2.1.84 -- 2026-03-26

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | MED | Missing Concept | Add Slack integration to Hot table -- mention @Claude in Slack to route coding tasks to Claude Code web sessions | COMPLETE (row added) |
| 3 | MED | Missing Concept | Add GitHub Actions / CI-CD to Hot table -- automate PR reviews, issue triage, and code generation in CI/CD pipelines | COMPLETE (row added with GitLab CI/CD inline link) |
| 4-10 | LOW | Verification | All URLs, badges, anchors (including Auto Mode, Bundled Skills), and descriptions validated | COMPLETE |

---

## v2.1.85 -- 2026-03-27

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | MED | Missing Concept | Add Chrome integration to Hot table -- browser automation via Claude in Chrome extension (beta, dedicated docs at `/chrome`) | COMPLETE (row added) |
| 3-9 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.86 -- 2026-03-28

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2 | MED | Missing Badge | Chrome row in Hot table has no BP badge -- report exists | COMPLETE (BP badge added) |
| 3 | LOW | Changed Description | Plugins description missing LSP servers -- official docs list `.lsp.json` as plugin component | COMPLETE (added "and LSP servers") |
| 4-10 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.89 -- 2026-04-01

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Concept | Add Computer Use row to Hot table -- screen control on macOS via built-in MCP server (research preview, v2.1.85+) | COMPLETE (row added) |
| 2 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 3 | MED | Missing Concept | Add Fullscreen Rendering row to Hot table -- flicker-free alt-screen rendering with mouse support (research preview, v2.1.88+) | COMPLETE (row added with CLAUDE_CODE_NO_FLICKER=1 location) |
| 4-10 | LOW | Verification | All URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.90 -- 2026-04-02

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` serves Skills page | INVALID (RECURRING) |
| 2-8 | LOW | Verification | All 39 external docs URLs, badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.91 -- 2026-04-03

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Stale URL | Commands URL `/slash-commands` not in official sitemap (llms.txt) -- redirects to `/skills` | INVALID (RECURRING -- URL still resolves via redirect; user chose to keep as-is) |
| 2-8 | LOW | Verification | All 40 external docs URLs validated against llms.txt sitemap (80 pages), badges, anchors, and descriptions validated | COMPLETE |

---

## v2.1.92 -- 2026-04-04

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Concept | Add Ultraplan row to Hot table -- cloud-based plan drafting with browser review, inline comments, and flexible execution (`/ultraplan`) | COMPLETE (row added) |
| 2 | HIGH | Missing Concept | Add Claude Code Web row to Hot table -- run tasks on cloud infrastructure at claude.ai/code with PR auto-fix and parallel sessions | COMPLETE (row added) |
| 3 | HIGH | Stale URL | Commands URL `/slash-commands` not in official sitemap | INVALID (RECURRING) |
| 4 | MED | Missing Concept | Add Desktop App row to Hot table | INVALID (RECURRING from 2026-03-17 -- user considers it a platform surface, not a configuration concept) |

---

## Verification Checklist

The following rules are checked during every workflow run to catch drift in the CONCEPTS table.

### 1. External URL Liveness

- **Category**: URL Accuracy
- **What to check**: Every external URL in the CONCEPTS table returns a valid page
- **Depth**: Fetch each URL and confirm it loads the expected page (not a redirect to the wrong page)
- **Source**: `https://code.claude.com/docs/llms.txt` for canonical URL list
- **Added**: 2026-03-02
- **Origin**: Permissions URL `/iam` was found to redirect to Authentication page instead of Permissions

### 2. Anchor Fragment Validity

- **Category**: URL Accuracy
- **What to check**: Any URL with an anchor fragment (`#section-name`) matches an actual heading on the target page
- **Depth**: Fetch the page and verify the heading exists with the expected anchor
- **Added**: 2026-03-02
- **Origin**: Rules anchor `#modular-rules-with-clauderules` was stale; section renamed to `#organize-rules-with-clauderules`

### 3. Missing Docs Pages

- **Category**: Missing Concepts
- **What to check**: Every page in the official docs index (`llms.txt`) that represents a user-facing feature has a corresponding row in the CONCEPTS table
- **Depth**: Compare full docs index against CONCEPTS table entries
- **Added**: 2026-03-02
- **Origin**: Multiple missing concepts found (Agent Teams, Keybindings, Model Configuration, etc.)

### 4. Local Badge Link Validity

- **Category**: Badge Accuracy
- **What to check**: Every badge target path in the CONCEPTS table points to a file or directory that exists
- **Depth**: Use Read/Glob to verify file existence
- **Added**: 2026-03-02
- **Origin**: Initial checklist creation

### 5. Description Currency

- **Category**: Description Accuracy
- **What to check**: Each concept's description accurately reflects the current official docs description
- **Depth**: Compare README description against the official page's meta description or first paragraph
- **Added**: 2026-03-02
- **Origin**: Memory description missing auto memory; MCP Servers location missing `.mcp.json`
