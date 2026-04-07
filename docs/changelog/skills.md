---
title: Skills Changelog
description: Changelog history for the Claude Code skills report
---

# Skills Report -- Changelog History

Tracks drift between the skills report and official Claude Code documentation across versions.

::: info Status Legend
| Status | Meaning |
|--------|---------|
| COMPLETE | Action was taken and resolved successfully |
| INVALID | Finding was incorrect, not applicable, or intentional |
| ON HOLD | Action deferred -- waiting on external dependency or user decision |
:::

---

## v2.1.74 -- 2026-03-13

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | MED | Extra Bundled Skill | `keybindings-help` is in local report but absent from official docs bundled skills list -- investigate whether to remove or keep | COMPLETE (removed from bundled skills table -- it is a local custom skill in this repo, not an official bundled skill; `/keybindings` is a built-in CLI command) |

---

## v2.1.76 -- 2026-03-15

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | LOW | Field Accuracy | `name` field Required column reads "Recommended" in local report but official docs now list it as "No" (optional) -- update to match | COMPLETE (updated `name` Required from "Recommended" to "No" to match official docs) |

---

## v2.1.77 -- 2026-03-17

No drift detected -- frontmatter fields (10) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.78 -- 2026-03-18

No drift detected -- frontmatter fields (10) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.79 -- 2026-03-19

No drift detected -- frontmatter fields (10) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.80 -- 2026-03-20

No drift detected -- frontmatter fields (10) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.81 -- 2026-03-21

No drift detected -- frontmatter fields (11) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.81 -- 2026-03-23 (Re-audit)

No drift detected -- frontmatter fields (11) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.83 -- 2026-03-25

No drift detected -- frontmatter fields (11) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.84 -- 2026-03-26

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Field | Add `shell` field to frontmatter table -- accepts `bash` (default) or `powershell`, controls shell for `!command` blocks in skill content | COMPLETE (added to frontmatter table, count updated 11 to 12) |

---

## v2.1.85 -- 2026-03-27

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Field | Add `paths` field to frontmatter table -- accepts glob patterns (string or YAML list) that limit when a skill auto-activates | COMPLETE (added to frontmatter table, count updated 12 to 13) |

---

## v2.1.86 -- 2026-03-28

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.88 -- 2026-03-31

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.89 -- 2026-04-01

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.90 -- 2026-04-02

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.91 -- 2026-04-03

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.

---

## v2.1.92 -- 2026-04-04

No drift detected -- frontmatter fields (13) and bundled skills (5) are fully synchronized with official docs.
