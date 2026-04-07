---
title: Development Workflows Changelog
description: Changelog history for the development workflows comparison tracking community Claude Code workflow repos
---

# Development Workflows -- Changelog History

Tracks updates to the development workflows comparison table, including star counts, feature counts, sort order changes, and new workflow additions across community Claude Code repos.

::: info Status Legend
| Status | Meaning |
|--------|---------|
| COMPLETE | Action was taken and resolved successfully |
| INVALID | Finding was incorrect, not applicable, or intentional |
| ON HOLD | Action deferred -- waiting on external dependency or user decision |
:::

---

## 2026-03-19 (First Pass)

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Repo Change | Changed humanlayer from article-only repo to humanlayer/humanlayer (10k stars, 6 agents, 27 commands) | COMPLETE (user requested, repo has actual implementation) |
| 2 | HIGH | Count Update | Added counts for context-hub: 0 agents, 7 skills, 7 commands | COMPLETE (was showing --) |
| 3 | HIGH | Count Update | Added counts for agent-os: 0 agents, 0 skills, 5 commands | COMPLETE (was showing --) |
| 4 | MED | Count Update | Updated spec-kit commands from 14 to 9+ (9 core, extensions are community-contributed) | COMPLETE |
| 5 | MED | Count Update | Updated OpenSpec commands from 10+ to 11 (confirmed exact count) | COMPLETE |
| 6 | MED | Count Update | Updated gstack from "21 skills, 21 commands" to "21 skills/commands" (skills serve as command surface) | COMPLETE |
| 7 | MED | Description | Added uniqueness descriptions for context-hub, agent-os, humanlayer | COMPLETE |
| 8 | LOW | Sort Order | Moved humanlayer up from 1.6k to 10k position (after context-hub) | COMPLETE |
| 9 | LOW | Report Update | Updated cross-workflow analysis report "Workflows at a Glance" table with all 9 workflows | COMPLETE (was only 6, now includes all 9) |

---

## 2026-03-19 (Second Pass)

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Count Update | Update obra/superpowers agents from 7 to 5 (v5.0.4 consolidated review loop to whole-plan evaluation) | COMPLETE |
| 2 | HIGH | Count Update | Update obra/superpowers skills from 44+ to 14 core (community repo archived Oct 2025) | COMPLETE |
| 3 | HIGH | Count Update | Update spec-kit: skills 10 to 0 (v0.3.0 replaced with preset system), commands kept at 9+ | COMPLETE |
| 4 | HIGH | Count Update | Update context-hub counts from 7 skills, 7 commands to: 0 agents, 1 skill, 0 commands | COMPLETE (corrected previous run's inaccurate counts) |
| 5 | MED | Star Update | Update spec-kit stars from 78k to 79k | COMPLETE |
| 6 | MED | Count Update | agent-os counts verified: 0 agents, 0 skills, 5 commands | COMPLETE |
| 7 | MED | Star Update | Update agent-os stars from 4.1k to 4k | COMPLETE |
| 8 | MED | Report Update | Update cross-workflow analysis report with current counts | COMPLETE |
| 9 | LOW | Count Update | OpenSpec commands: table shows 11, research found 9-11 depending on counting | INVALID (11 is within range, keeping current value) |
| 10 | LOW | Uniqueness | Updated spec-kit uniqueness to mention pluggable extension/preset ecosystem (v0.3.0) | COMPLETE |

---

## 2026-03-20

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 98k to 100k (99,603 actual -- approaching 100k milestone) | COMPLETE |
| 2 | HIGH | Star Update | Update Everything Claude Code from 87k to 89k (88,580 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update Get Shit Done from 35k to 36k (36,307 actual) | COMPLETE |
| 4 | HIGH | Count Update | Update Get Shit Done commands from 46 to 50 (v1.26.0 added /gsd:ship, /gsd:next, /gsd:do, /gsd:ui-phase) | COMPLETE |
| 5 | MED | Star Update | Update gstack from 26k to 29k (28,889 actual -- v0.9.0 multi-AI expansion) | COMPLETE |
| 6 | MED | Count Update | Update BMAD-METHOD skills from 43 to 42 (v6.2.0 recount: 30 bmm-skills + 12 core-skills) | COMPLETE |
| 7 | LOW | Sort Order | Reorder table by Plan type groups (commands, agents, skills -- stars descending within) | COMPLETE |

---

## 2026-03-21

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 100k to 103k (102,767 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update Everything Claude Code from 89k to 93k (93,145 actual) | COMPLETE |
| 3 | HIGH | Count Update | Update ECC agents 25 to 28, commands 57 to 59, skills 108+ to 116 (v1.9.0: selective install, ECC Tools Pro, 12 lang ecosystems) | COMPLETE |
| 4 | HIGH | Star Update | Update Get Shit Done from 36k to 38k (37,748 actual) | COMPLETE |
| 5 | HIGH | Count Update | Update GSD agents 16 to 18, commands 50 to 52 (v1.27.0: advisor mode, multi-repo workspaces) | COMPLETE |
| 6 | HIGH | Star Update | Update gstack from 29k to 34k (34,456 actual -- v0.9.4 Codex reviews, Windows 11 support) | COMPLETE |
| 7 | HIGH | Architecture | Update BMAD agents from 9 to 0 (v6.x pure skills rewrite -- agent personas now implemented as skills) | COMPLETE |
| 8 | MED | Star Update | Update BMAD from 41k to 42k (41,629 actual) | COMPLETE |
| 9 | MED | Star Update | Update OpenSpec from 32k to 33k (32,862 actual) | COMPLETE |
| 10 | MED | Sort Order | Swap gstack (34k) above OpenSpec (33k) -- stars descending order | COMPLETE |

---

## 2026-03-23

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 103k to 107k (107,308 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 93k to 101k (101,098 actual -- crossed 100k milestone) | COMPLETE |
| 3 | HIGH | Count Update | Update ECC commands 59 to 60, skills 116 to 125 (v1.9.0 continued: new skills pytorch-patterns, documentation-lookup, claude-devfleet, prompt-optimizer) | COMPLETE |
| 4 | HIGH | Star Update | Update gstack from 34k to 41k (41,224 actual -- v0.9.x multi-AI expansion, CSO security audit) | COMPLETE |
| 5 | HIGH | Count Update | Update gstack skills 21 to 27 (6 new: gstack-autoplan, gstack-benchmark, gstack-cso, gstack-design-consultation, gstack-office-hours, gstack-freeze/unfreeze) | COMPLETE |
| 6 | HIGH | Sort Order | Move gstack (41k) above GSD (40k) -- stars descending order | COMPLETE |
| 7 | HIGH | Star Update | Update GSD from 38k to 40k (39,588 actual) | COMPLETE |
| 8 | HIGH | Count Update | Update GSD commands 52 to 57 (v1.28.0: /gsd:forensics, /gsd:milestone-summary, /gsd:plant-seed, /gsd:profile-user, /gsd:workstreams) | COMPLETE |
| 9 | MED | Star Update | Update Spec Kit from 79k to 81k (81,349 actual -- v0.4.0 embedded core pack) | COMPLETE |
| 10 | MED | Plan Update | Update gstack Plan from plan-eng-review to autoplan (higher-level orchestrator) | COMPLETE |
| 11 | LOW | Count Update | Update OpenSpec commands 11 to 10 (recount) | COMPLETE |
| 12 | LOW | Count Correction | Correct OpenSpec skills 11 to 0 (no skills directory exists -- CLI tool, not skills-based) | COMPLETE |

---

## 2026-03-24

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 107k to 110k (109,846 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 101k to 104k (103,960 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update gstack from 41k to 44k (44,300 actual -- v0.11.x triple-voice multi-model review) | COMPLETE |
| 4 | HIGH | Sort Order | Move gstack (44k) above BMAD (42k) -- stars descending | COMPLETE |
| 5 | HIGH | Count Update | Update BMAD skills from 42 to 44 (recount: 32 bmm-skills + 12 core-skills, including nested research sub-skills) | COMPLETE |
| 6 | HIGH | Count Update | Update gstack skills from 27 to 28 | COMPLETE |
| 7 | MED | Star Update | Update Spec Kit from 81k to 82k (81,780 actual) | COMPLETE |
| 8 | MED | Star Update | Update GSD from 40k to 41k (40,500 actual) | COMPLETE |
| 9 | MED | Star Update | Update OpenSpec from 33k to 34k (33,800 actual) | COMPLETE |

---

## 2026-03-25

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 110k to 112k (112,163 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 104k to 107k (106,913 actual) | COMPLETE |
| 3 | HIGH | Count Update | Update ECC commands from 60 to 63 (3 new: add-language-rules, database-migration, feature-development) | COMPLETE |
| 4 | HIGH | Star Update | Update gstack from 44k to 47k (46,703 actual -- infrastructure hardening) | COMPLETE |
| 5 | MED | Count Update | Update BMAD skills from 44 to 42 (recount: 30 bmm-skills + 12 core-skills; v6.2.1 consolidated 2 sub-skills) | COMPLETE |
| 6 | LOW | Count Update | Update gstack skills from 28 to 27 (27 root-level dirs confirmed) | COMPLETE |

---

## 2026-03-26

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 112k to 114k (114,107 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 107k to 109k (108,839 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update gstack from 47k to 48k (48,303 actual) | COMPLETE |
| 4 | HIGH | Star Update | Update GSD from 41k to 42k (42,092 actual) | COMPLETE |
| 5 | MED | Count Update | Update OpenSpec commands from 10 to 11 (v1.2.0 added /opsx:explore) | COMPLETE |

---

## 2026-03-27

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 114k to 118k (117,568 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 109k to 111k (111,487 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update gstack from 48k to 52k (51,544 actual -- v0.12.x skill namespacing, Codex fallback) | COMPLETE |
| 4 | HIGH | Count Update | Update gstack skills from 27 to 31 (4 new: canary, codex, connect-chrome, land-and-deploy) | COMPLETE |
| 5 | HIGH | Star Update | Update GSD from 42k to 43k (43,136 actual) | COMPLETE |
| 6 | HIGH | Sort Order | Swap GSD (43,136) above BMAD (42,529) -- GSD has more stars | COMPLETE |
| 7 | MED | Star Update | Update Spec Kit from 82k to 83k (82,878 actual) | COMPLETE |
| 8 | MED | Star Update | Update BMAD from 42k to 43k (42,529 actual) | COMPLETE |
| 9 | MED | Star Update | Update OpenSpec from 34k to 35k (34,821 actual) | COMPLETE |
| 10 | MED | Count Update | Update Compound Engineering agents from 43 to 47 (4 new review/workflow agents) | COMPLETE |
| 11 | MED | Count Update | Update Compound Engineering skills from 44 to 42 (recount: 41 compound-engineering + 1 coding-tutor) | COMPLETE |

---

## 2026-03-28

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 118k to 120k (120,147 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 111k to 114k (114,134 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update gstack from 52k to 54k (53,533 actual -- v0.13.x design binary, security audit) | COMPLETE |
| 4 | HIGH | Star Update | Update GSD from 43k to 44k (43,816 actual -- v1.30.0 GSD SDK headless CLI) | COMPLETE |
| 5 | MED | Count Update | Update gstack skills from 31 to 29 (2 removed/consolidated in v0.13.x) | COMPLETE |
| 6 | MED | Count Update | Update BMAD skills from 42 to 43 (31 bmm-skills + 12 core-skills) | COMPLETE |
| 7 | MED | Count Update | Update Compound Engineering skills from 42 to 43 (42 compound-eng + 1 coding-tutor) | COMPLETE |

---

## 2026-03-29

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 120k to 122k (122,129 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 114k to 116k (115,898 actual) | COMPLETE |
| 3 | HIGH | Count Update | Update ECC agents from 28 to 30, skills from 125 to 135 (healthcare agent, token-budget-advisor) | COMPLETE |
| 4 | HIGH | Star Update | Update gstack from 54k to 55k (55,000 actual) | COMPLETE |
| 5 | MED | Count Update | Update gstack skills from 29 to 28 | COMPLETE |
| 6 | MED | Count Update | Update BMAD skills from 43 to 40 (recount: 29 bmm-skills + 11 core-skills) | COMPLETE |
| 7 | MED | Star Update | Update Compound Engineering from 11k to 12k (11,500 actual) | COMPLETE |
| 8 | MED | Count Update | Update Compound Eng agents from 47 to 48, skills from 43 to 42 | COMPLETE |

---

## 2026-03-31

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 122k to 127k (127,473 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 116k to 124k (124,279 actual) | COMPLETE |
| 3 | HIGH | Star Update | Update gstack from 55k to 59k (59,046 actual -- v0.14.x Review Army, composable skills) | COMPLETE |
| 4 | HIGH | Star Update | Update GSD from 44k to 46k (45,773 actual) | COMPLETE |
| 5 | HIGH | Count Update | Update gstack skills from 28 to 32 (4 new: design-html, sidebar CSS inspector, composable skill resolver, scope drift detection) | COMPLETE |
| 6 | MED | Star Update | Update Spec Kit from 83k to 84k (84,042 actual) | COMPLETE |
| 7 | MED | Star Update | Update OpenSpec from 35k to 36k (35,985 actual) | COMPLETE |
| 8 | MED | Count Update | Update BMAD skills from 40 to 43 (32 bmm-skills + 11 core-skills; 3 new including PRFAQ) | COMPLETE |
| 9 | LOW | Count Verify | ECC commands 63 to 3, skills 135 to 30 -- research agent only checked .claude/ dirs, missed root directories | INVALID (agent undercounting -- keeping current values) |
| 10 | LOW | Count Verify | Superpowers agents 5 to 8 -- contradictory signals between v5.0.6 review agent reduction and brainstorm additions | ON HOLD (needs manual verification) |

---

## 2026-04-01

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update Superpowers from 127k to 129k (128,925 actual) | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 124k to 129k (128,606 actual -- neck-and-neck with Superpowers) | COMPLETE |
| 3 | HIGH | Count Update | Update ECC agents 30 to 36, commands 63 to 71, skills 135 to 143 (6 new agents incl. gan-evaluator/generator/planner, cpp/kotlin/flutter reviewers; 8 new commands; 8 new skills) | COMPLETE |
| 4 | MED | Star Update | Update gstack from 59k to 60k (60,036 actual -- v0.15.0 /checkpoint, /health) | COMPLETE |
| 5 | MED | Count Update | Update gstack skills 32 to 33 (v0.15.0 added /checkpoint and /health, some consolidated -- net +1) | COMPLETE |
| 6 | LOW | Count Update | Update CE commands 4 to 3, skills 42 to 40 | COMPLETE |
| 7 | LOW | Count Verify | BMAD skills 43 to 34 -- agent counted from module-help.csv, previous directory counts found 43 | ON HOLD (agent likely undercounting -- keeping 43 until manual verification) |

---

## 2026-04-02

::: tip Milestone
ECC (133k) overtook Superpowers (132k) in star count, becoming the most-starred Claude Code workflow repo.
:::

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Sort Order | Move ECC (133k) above Superpowers (132k) -- ECC now has more stars | COMPLETE |
| 2 | HIGH | Star Update | Update ECC from 129k to 133k (133,114 actual -- overtook Superpowers) | COMPLETE |
| 3 | HIGH | Star Update | Update Superpowers from 129k to 132k (131,818 actual) | COMPLETE |
| 4 | HIGH | Count Update | Update ECC commands 71 to 68, skills 143 to 152 (legacy commands collapsed into skills; +9 new skills incl. brand-voice, network-ops) | COMPLETE |
| 5 | HIGH | Star Update | Update gstack from 60k to 62k (61,800 actual -- v0.15.1 design-html routing, Session Intelligence Layer) | COMPLETE |
| 6 | HIGH | Count Update | Update GSD agents 18 to 21, commands 57 to 59 (v1.31.0: 3 new agents, skills discovery, Gemini CLI fix) | COMPLETE |
| 7 | MED | Star Update | Update Spec Kit from 84k to 85k (84,701 actual) | COMPLETE |
| 8 | MED | Star Update | Update GSD from 46k to 47k (46,900 actual) | COMPLETE |
| 9 | MED | Count Update | Update BMAD skills 43 to 40 (29 bmm-skills + 11 core-skills; removed QA Quinn + Barry solo-dev, added checkpoint-preview) | COMPLETE |
| 10 | MED | Star Update | Update OpenSpec from 36k to 37k (36,600 actual) | COMPLETE |
| 11 | MED | Star Update | Update CE from 12k to 13k (12,600 actual) | COMPLETE |
| 12 | MED | Count Update | Update CE agents 48 to 49, commands 3 to 4, skills 40 to 42 | COMPLETE |

---

## 2026-04-03

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update ECC from 133k to 136k (135,765 actual -- widening lead over Superpowers) | COMPLETE |
| 2 | HIGH | Count Update | Update ECC agents 36 to 38, commands 68 to 75, skills 152 to 156 (NestJS patterns, Jira integration, C#/Dart support, web frontend rules) | COMPLETE |
| 3 | HIGH | Star Update | Update Superpowers from 132k to 134k (133,718 actual -- v5.0.7 Copilot CLI support) | COMPLETE |
| 4 | MED | Star Update | Update gstack from 62k to 63k (63,065 actual -- Session Intelligence Layer, AquaVoice aliases) | COMPLETE |
| 5 | MED | Count Update | Update gstack skills from 33 to 31 (checkpoint/health may be subcommands) | COMPLETE |
| 6 | LOW | Count Update | Update GSD commands from 59 to 60 (v1.31.0: /gsd:docs-update added) | COMPLETE |
| 7 | LOW | Count Update | Update BMAD skills from 40 to 39 (28 bmm-skills + 11 core-skills) | COMPLETE |

---

## 2026-04-04

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | MED | Star Update | Update ECC from 136k to 137k (137,404 actual) | COMPLETE |
| 2 | MED | Star Update | Update Superpowers from 134k to 135k (134,933 actual) | COMPLETE |
| 3 | MED | Star Update | Update gstack from 63k to 64k (63,841 actual -- GStack Browser .app with CDP, anti-bot stealth) | COMPLETE |
| 4 | MED | Star Update | Update GSD from 47k to 48k (47,705 actual -- v1.32.0 Trae/Kilo/Augment/Cline runtimes) | COMPLETE |
| 5 | LOW | Star Update | Update BMAD from 43k to 44k (43,538 actual) | COMPLETE |
| 6 | LOW | Star Update | Update oh-my-claudecode from 23k to 24k (23,709 actual -- v4.10.2 HUD, Bedrock hardening) | COMPLETE |

---

## 2026-04-06

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Star Update | Update ECC from 137k to 142k (142,218 actual -- v1.10.0 Surface Refresh, 10 commits on Apr 6 alone) | COMPLETE |
| 2 | HIGH | Count Update | Update ECC agents 38 to 47, commands 75 to 82, skills 156 to 182 (agent-introspection-debugging, hookify bundle restored, 26 new skills) | COMPLETE |
| 3 | HIGH | Star Update | Update Superpowers from 135k to 137k (137,166 actual) | COMPLETE |
| 4 | HIGH | Count Update | Update GSD agents 21 to 24, commands 60 to 68 (v1.33.0: unified behavioral refs, STATE.md drift detection, autonomous --to N) | COMPLETE |
| 5 | MED | Star Update | Update gstack from 64k to 65k (65,279 actual -- v0.15.15.0 token redaction, team mode) | COMPLETE |
| 6 | MED | Count Update | Update gstack skills from 31 to 34 (3 new: retro, setup-deploy, learn) | COMPLETE |
| 7 | MED | Star Update | Update Spec Kit from 85k to 86k (85,617 actual -- v0.5.0 native skills arch) | COMPLETE |
| 8 | LOW | Star Update | Update OpenSpec from 37k to 38k (37,604 actual) | COMPLETE |
| 9 | LOW | Star Update | Update oh-my-claudecode from 24k to 25k (24,921 actual -- v4.10.0 HUD upgrades, LSP diagnostics) | COMPLETE |
| 10 | LOW | Count Update | Update CE agents from 49 to 50 | COMPLETE |
