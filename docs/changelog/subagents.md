---
title: Subagents Changelog
description: Changelog history for the Claude Code subagents report
---

# Subagents Report -- Changelog History

Tracks drift between the subagents report and official Claude Code documentation across versions.

::: info Status Legend
| Status | Meaning |
|--------|---------|
| COMPLETE | Action was taken and resolved successfully |
| INVALID | Finding was incorrect, not applicable, or intentional |
| ON HOLD | Action deferred -- waiting on external dependency or user decision |
:::

---

## v2.1.63 -- 2026-02-28

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Agents Table | Add `workflow-changelog-claude-agents-frontmatter-agent` to Agents in This Repository table | COMPLETE (added with model: opus, inherits all tools, no skills/memory) |
| 2 | HIGH | Agents Table | Fix presentation-curator skills column -- add `presentation/` prefix to skill names | COMPLETE (updated to presentation/vibe-to-agentic-framework etc.) |
| 3 | MED | Field Documentation | Add note to `color` field that it is functional but absent from official frontmatter table | COMPLETE (added note about unofficial status in description column) |
| 4 | MED | Invocation Section | Expand invocation section with --agents CLI flag, /agents command, claude agents CLI, agent resumption | COMPLETE (added invocation methods table with 5 methods) |

---

## v2.1.71 -- 2026-03-07

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Broken Link | Fix agent memory link to `reports/claude-agent-memory.md` | COMPLETE |
| 2 | HIGH | Changed Behavior | Update `tools` field description: `Task(agent_type)` to `Agent(agent_type)` (v2.1.63 rename) | COMPLETE |
| 3 | HIGH | Changed Behavior | Update invocation section: Task tool to Agent tool (v2.1.63 rename) | COMPLETE (updated heading, code example, and added rename note) |
| 4 | HIGH | Example Update | Update full-featured example: `Task(monitor, rollback)` to `Agent(monitor, rollback)` | COMPLETE |
| 5 | HIGH | Built-in Agent | Add `Bash` agent to Official Claude Agents table (model: inherit, purpose: terminal commands in separate context) | COMPLETE (added to table) |
| 6 | HIGH | Agents Table | Add `workflow-concepts-agent` to Agents in This Repository table (model: opus, color: green) | COMPLETE |
| 7 | HIGH | Agents Table | Add `workflow-claude-settings-agent` to Agents in This Repository table (model: opus, color: yellow) | COMPLETE |
| 8 | MED | Built-in Agent | Fix `statusline-setup` model: `inherit` to `Sonnet` | COMPLETE |
| 9 | MED | Built-in Agent | Fix `claude-code-guide` model: `inherit` to `Haiku` | NOT APPLICABLE (removed from table) |
| 10 | MED | Agents Table | Fix `weather-agent` color: `teal` to `green` | COMPLETE |
| 11 | MED | Invocation | Add `--agent <name>` CLI flag to invocation methods table | COMPLETE (added as first row in invocation methods table) |
| 12 | MED | Changed Behavior | Update line 147 text: "Task tool" to "Agent tool" in Official Claude Agents table header | COMPLETE (user rewrote header text) |
| 13 | MED | Cross-File | Update CLAUDE.md: `Task(...)` to `Agent(...)` references (lines 50-53, 61) | COMPLETE (updated orchestration section and tools field description) |

---

## v2.1.74 -- 2026-03-12

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.74 -- 2026-03-13 (Re-audit)

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.76 -- 2026-03-15

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.77 -- 2026-03-17

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.78 -- 2026-03-18

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.79 -- 2026-03-19

No drift detected -- report is fully in sync with official docs. All 13 frontmatter fields and 6 built-in agents match.

---

## v2.1.80 -- 2026-03-20

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Field | Add `effort` field to Frontmatter Fields table (string, optional -- effort level override: `low`, `medium`, `high`, `max`) | COMPLETE (added between `background` and `isolation`, count updated 14 to 15) |

---

## v2.1.81 -- 2026-03-21

No drift detected -- report is fully in sync with official docs. All 15 frontmatter fields and 6 built-in agents match.

---

## v2.1.81 -- 2026-03-23 (Re-audit)

No drift detected -- report is fully in sync with official docs. All 15 frontmatter fields (14 official + 1 unofficial `color`) and 6 built-in agents match.

---

## v2.1.83 -- 2026-03-25

No drift detected -- report is fully in sync with official docs. All 15 frontmatter fields (14 official + 1 unofficial `color`) and 6 built-in agents match.

::: tip Watch Item
`initialPrompt` was added in v2.1.83 changelog but has not yet appeared in the official docs' supported frontmatter fields table. When it does, the report will need updating.
:::

---

## v2.1.84 -- 2026-03-26

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Field | Add `initialPrompt` to Frontmatter Fields table (string, optional -- auto-submitted as first user turn when agent runs as main session agent via `--agent` or `agent` setting) | COMPLETE (added between `isolation` and `color`, count updated 15 to 16) |

---

## v2.1.85 -- 2026-03-27

No drift detected -- report is fully in sync with official docs. All 16 frontmatter fields (15 official + 1 unofficial `color`) and 6 built-in agents match.

---

## v2.1.86 -- 2026-03-28

No drift detected -- report is fully in sync with official docs. All 16 frontmatter fields (15 official + 1 unofficial `color`) and 6 built-in agents match.

---

## v2.1.89 -- 2026-04-01

No drift detected -- report is fully in sync with official docs. All 16 frontmatter fields (15 official + 1 unofficial `color`) and 6 built-in agents match.

---

## v2.1.90 -- 2026-04-02

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Removed Agent | Remove `Bash` from Official Claude Agents table -- official docs list 5 built-in agents, `Bash` is not among them | COMPLETE (removed Bash row, renumbered 6 to 5 agents) |
| 2 | LOW | Field Docs | Update `color` field description -- remove "absent from official frontmatter table" note; `color` now appears in official supported frontmatter fields table | COMPLETE (removed unofficial note from color field description) |

---

## v2.1.91 -- 2026-04-03

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | LOW | Field Docs | Update `permissionMode` field description -- add `auto` as a valid value (official docs now list: `default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, `plan`) | COMPLETE (added `auto` between `acceptEdits` and `dontAsk` in permissionMode description) |

---

## v2.1.92 -- 2026-04-04

No drift detected -- report is fully in sync with official docs. All 16 frontmatter fields and 5 built-in agents match.

---

## Verification Checklist

The following rules are checked during every workflow run to catch drift proactively.

### Depth Levels

| Depth | Meaning | Example |
|-------|---------|---------|
| `exists` | Check if a section/table/file exists | "Does the report have a Memory Scopes table?" |
| `presence-check` | Check if a specific item is present or absent | "Is the `color` field in the Frontmatter Fields table?" |
| `content-match` | Compare actual values word-by-word against source | "Does the `model` field description match official docs?" |
| `field-level` | Verify every individual field is accounted for | "Does each frontmatter field from official docs appear in the table?" |
| `cross-file` | Same value must match across multiple files | "Does CLAUDE.md agent section match the report's field list?" |

### 1. Frontmatter Fields Table

Rules that verify the Frontmatter Fields table against official docs.

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 1A | Field Completeness | For each agent frontmatter field in official docs, verify it appears in the report's Frontmatter Fields table | field-level | sub-agents reference page | 2026-02-28 | Initial checklist -- ensures no new fields are missed |
| 1B | Field Types | For each field in the table, verify the Type column matches official docs | content-match | sub-agents reference page | 2026-02-28 | Initial checklist -- type mismatches cause user confusion |
| 1C | Required Status | For each field, verify the Required column matches official docs | content-match | sub-agents reference page | 2026-02-28 | Initial checklist -- wrong required status causes broken agents |
| 1D | Field Descriptions | For each field, verify the Description column accurately reflects official docs behavior | content-match | sub-agents reference page | 2026-02-28 | Initial checklist -- stale descriptions mislead users |

### 2. Memory Scopes

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 2A | Scope Completeness | Verify all memory scopes from official docs appear in the Memory Scopes table | field-level | sub-agents reference page | 2026-02-28 | Initial checklist -- new scopes could be added |
| 2B | Storage Locations | For each scope, verify the Storage Location column matches official docs | content-match | sub-agents reference page | 2026-02-28 | Initial checklist -- wrong paths cause data loss |

### 3. Examples

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 3A | Minimal Example | Verify the minimal example uses only required fields with valid syntax | content-match | sub-agents reference page | 2026-02-28 | Initial checklist -- minimal example should stay minimal |
| 3B | Full-Featured Example | Verify the full-featured example demonstrates ALL available frontmatter fields | field-level | sub-agents reference page | 2026-02-28 | Initial checklist -- full example must show every field |

### 4. Scope and Priority

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 4A | Priority Order | Verify the Scope and Priority table lists all agent locations in correct priority order | content-match | sub-agents reference page + CLI reference page | 2026-02-28 | Initial checklist -- wrong priority order causes resolution bugs |
| 4B | Invocation Methods | Verify the invocation methods table lists ALL invocation methods from CLI reference and sub-agents docs, including `--agent` (singular), `--agents` (plural), `/agents`, `claude agents`, Agent tool, and agent resumption | field-level | CLI reference page + sub-agents reference page | 2026-03-07 | `--agent` CLI flag was missing from the invocation table |

### 5. Cross-File Consistency

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 5A | CLAUDE.md Sync | Verify CLAUDE.md's Subagent Definition Structure section lists the same fields as the report's Frontmatter Fields table | cross-file | CLAUDE.md vs report | 2026-02-28 | Initial checklist -- CLAUDE.md could drift from report |

### 6. Process

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 6A | Source Credibility Guard | Only flag items as drift if confirmed by official sources (sub-agents reference page, CLI reference page, GitHub changelog). Third-party blog sources may be outdated or wrong -- use them for leads only, verify against official docs before flagging | content-match | official docs only | 2026-02-28 | Adopted from hooks workflow -- prevents false positives from blog sources |

### 7. Agent Tables

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 7A | Built-in Agent Completeness | Verify the "Official Claude Agents" table lists all built-in agent types with correct model, tools, and description | field-level | sub-agents reference page + changelog | 2026-02-28 | Report only had 3 of 5 built-in agents |
| 7B | Repository Agent Completeness | Scan `.claude/agents/**/*.md` and verify every agent file appears in the "Agents in This Repository" table with correct model, color, tools, skills, and memory columns | field-level | `.claude/agents/**/*.md` file frontmatter | 2026-02-28 | Repo agents were manually maintained |
| 7C | Repository Agent Links | Verify each agent name in the "Agents in This Repository" table has a clickable link that resolves to the correct `.md` file | exists | resolved file path from `best-practice/` | 2026-02-28 | Agent names were made clickable -- links must stay valid after file moves |

### 8. Hyperlinks

| # | Category | Check | Depth | Compare Against | Added | Origin |
|---|----------|-------|-------|-----------------|-------|--------|
| 8A | Local File Links | Verify all relative file links resolve to existing files | exists | local filesystem | 2026-02-28 | File moves broke relative links -- must catch future breakage |
| 8B | External URL Links | Verify all external URLs return valid pages | exists | HTTP response | 2026-02-28 | External docs pages can be restructured or removed |
| 8C | Cross-File Reference Links | Verify links to other report files resolve to existing files | exists | local filesystem | 2026-02-28 | Reports can be moved or renamed -- cross-references must stay in sync |
