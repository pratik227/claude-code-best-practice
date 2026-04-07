---
title: Settings Changelog
description: Changelog history for the Claude Code settings report
---

# Settings Report -- Changelog History

Tracks drift between the settings report and official Claude Code documentation across versions. Covers settings keys, environment variables, permissions, sandbox configuration, and the settings hierarchy.

::: info Status Legend
| Status | Meaning |
|--------|---------|
| COMPLETE | Action was taken and resolved successfully |
| INVALID | Finding was incorrect, not applicable, or intentional |
| ON HOLD | Action deferred -- waiting on external dependency or user decision |
:::

---

## v2.1.69 -- 2026-03-05

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Settings | Add 13 non-hook missing settings keys (`$schema`, `availableModels`, `fastModePerSessionOptIn`, `teammateMode`, `prefersReducedMotion`, `sandbox.filesystem.*`, `sandbox.network.allowManagedDomainsOnly`, `sandbox.enableWeakerNetworkIsolation`, `allowManagedMcpServersOnly`, `blockedMarketplaces`, `includeGitInstructions`, `pluginTrustMessage`, `fileSuggestion` table entry) | COMPLETE (added to report) |
| 2 | HIGH | Missing Env Vars | Add missing environment variables including `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING`, `CLAUDE_CODE_DISABLE_1M_CONTEXT`, `CLAUDE_CODE_ACCOUNT_UUID`, `CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS`, `ENABLE_CLAUDEAI_MCP_SERVERS`, and more | COMPLETE (added 13 missing env vars to report) |
| 3 | HIGH | Effort Default | Update effort level default from "High" to "Medium" for Max/Team subscribers; add Sonnet 4.6 support (changed v2.1.68) | COMPLETE (updated default and added Sonnet note) |
| 4 | MED | Settings Hierarchy | Add managed settings via macOS plist/Windows Registry (v2.1.61/v2.1.69); document array merge behavior across scopes | COMPLETE (added plist/registry and merge note) |
| 5 | MED | Sandbox Filesystem | Add `sandbox.filesystem.allowWrite`, `denyWrite`, `denyRead` with path prefix semantics (`//`, `~/`, `/`, `./`) | COMPLETE (added to sandbox table) |
| 6 | MED | Permission Syntax | Add `Agent(name)` permission pattern; document `MCP(server:tool)` syntax form | COMPLETE (added to tool syntax table) |
| 7 | MED | Plugin Gaps | Add `blockedMarketplaces`, `pluginTrustMessage` | COMPLETE (added to plugins table) |
| 8 | MED | Model Config | Add `availableModels` setting | COMPLETE (added to general settings table) |
| 9 | MED | Suspect Keys | Verify `sandbox.network.deniedDomains`, `sandbox.ignoreViolations`, `pluginConfigs` -- present in report but not in official docs | ON HOLD (kept in report pending verification) |
| 10 | LOW | Header Counts | Update header from "38 settings and 84 env vars" to reflect actual counts (~55+ settings, ~110+ env vars) | COMPLETE (updated header) |
| 11 | LOW | CLAUDE.md Sync | Update CLAUDE.md configuration hierarchy (add managed/CLI/user levels) | ON HOLD (awaiting user approval) |
| 12 | LOW | Example Update | Update Quick Reference example with `$schema`, sandbox filesystem, `Agent(*)`, remove hooks example | COMPLETE (updated example) |
| 13 | MED | Hooks Redirect | Replace hooks section with redirect to claude-code-hooks repo | COMPLETE (hooks externalized to dedicated repo) |

---

## v2.1.71 -- 2026-03-07

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Changed Behavior | Fix `teammateMode`: type `boolean` to `string`, default `false` to `"auto"`, description to "Agent team display: auto, in-process, tmux" | COMPLETE (type, default, and description updated) |
| 2 | HIGH | New Setting | Add `allowManagedPermissionRulesOnly` to Permissions table (boolean, managed only) | COMPLETE (added to Permission Keys table) |
| 3 | HIGH | Missing Env Vars | Add ~31 missing env vars including confirmed (`CLAUDE_CODE_MAX_OUTPUT_TOKENS`, `CLAUDE_CODE_DISABLE_FAST_MODE`, `CLAUDE_CODE_DISABLE_AUTO_MEMORY`, `CLAUDE_CODE_USER_EMAIL`, `CLAUDE_CODE_ORGANIZATION_UUID`, `CLAUDE_CONFIG_DIR`) and agent-reported (Foundry, Bedrock, mTLS, shell prefix, etc.) | COMPLETE (added 31 env vars to table) |
| 4 | MED | Changed Default | Fix `plansDirectory` default from `.claude/plans/` to `~/.claude/plans` | COMPLETE (default updated) |
| 5 | MED | Changed Description | Fix `sandbox.enableWeakerNetworkIsolation` description to "(macOS only) Allow access to system TLS trust; reduces security" | COMPLETE (description updated) |
| 6 | MED | Scope Fix | Fix `extraKnownMarketplaces` scope from "Any" to "Project" | COMPLETE (scope and description updated) |
| 7 | MED | Boundary Violation | Replace `CLAUDE_CODE_EFFORT_LEVEL` in `claude-cli-startup-flags.md` with cross-reference to settings report | COMPLETE (replaced with link) |
| 8 | MED | Version Badge | Update report version from v2.1.69 to v2.1.71 | COMPLETE (badge and header updated) |
| 9 | LOW | Suspect Keys | Verify `skipWebFetchPreflight`, `sandbox.ignoreViolations`, `sandbox.network.deniedDomains`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` | ON HOLD (kept in report pending verification -- recurring from 2026-03-05) |
| 10 | LOW | CLAUDE.md Sync | Update CLAUDE.md configuration hierarchy (3 levels to 5+) | COMPLETE (updated to 5-level hierarchy with managed layer) |

---

## v2.1.74 -- 2026-03-12

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Changed Behavior | Fix `dontAsk` permission mode description: "Auto-accept all tools" to "Auto-denies tools unless pre-approved via `/permissions` or `permissions.allow` rules" | COMPLETE (description corrected per official permissions docs) |
| 2 | HIGH | New Setting | Add `modelOverrides` to Model Configuration section (object, maps Anthropic model IDs to provider-specific IDs like Bedrock ARNs) | COMPLETE (added with example and description) |
| 3 | HIGH | New Setting | Add `allow_remote_sessions` to managed-only settings list (boolean, defaults `true`, controls Remote Control/web session access) | COMPLETE (added to Permission Keys table) |
| 4 | HIGH | Changed Default | Fix `$schema` URL from `https://www.schemastore.org/...` to `https://json.schemastore.org/...` per official docs | COMPLETE (updated in description, example, and Sources) |
| 5 | MED | Changed Description | Fix `ANTHROPIC_CUSTOM_HEADERS` format description from "JSON string" to "Name: Value format, newline-separated" | COMPLETE (description updated per official docs) |
| 6 | MED | Unverified Modes | `askEdits` and `viewOnly` permission modes not in official docs -- only 5 modes documented (default, acceptEdits, plan, dontAsk, bypassPermissions) | COMPLETE (marked as "not in official docs -- unverified" in table) |
| 7 | MED | Missing Env Vars | Add `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS`, `CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY`, `CLAUDE_CODE_DISABLE_TERMINAL_TITLE`, `CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL`, `CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS` | COMPLETE (added 5 env vars) |
| 8 | MED | New Setting | Add `autoMemoryDirectory` to Core Configuration (string, custom auto-memory directory) -- version uncertain, not on settings page | COMPLETE (added near plansDirectory -- version unresolved) |
| 9 | LOW | Suspect Keys | Verify `skipWebFetchPreflight`, `sandbox.ignoreViolations`, `sandbox.network.deniedDomains`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` -- still not in official docs | ON HOLD (kept in report pending verification -- recurring from 2026-03-05) |
| 10 | LOW | Missing Env Var | Add `CLAUDE_CODE_SUBAGENT_MODEL` to env vars table | COMPLETE (added to env vars table) |
| 11 | LOW | Example Update | Update Quick Reference example to include `modelOverrides` and corrected `$schema` URL | COMPLETE (example updated with both) |

---

## v2.1.75 -- 2026-03-14

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Settings Hierarchy | Restructure to match official 5-level hierarchy: Managed (#1) > CLI args > Local > Project > User. Remove `~/.claude/settings.local.json` row. Add managed-tier internal precedence (server-managed > MDM > file > HKCU). Note Managed "cannot be overridden by any other level, including CLI args" | COMPLETE (restructured table to 5 levels with Managed as #1) |
| 2 | HIGH | Changed Behavior | Fix `availableModels` description: change from complex object array to simple string array `["sonnet", "haiku"]` per official docs | COMPLETE (updated description to match official docs format) |
| 3 | HIGH | Changed Behavior | Add `cleanupPeriodDays` `0`-value behavior: "Setting to `0` deletes all existing transcripts at startup and disables session persistence entirely" | COMPLETE (added 0-value behavior to description) |
| 4 | HIGH | Permission Syntax | Add evaluation order note to Permissions section: "Rules are evaluated in order: deny rules first, then ask, then allow. The first matching rule wins." | COMPLETE (added evaluation order before Bash wildcard notes) |
| 5 | MED | Changed Description | Add `autoMemoryDirectory` scope restriction: "Not accepted in project settings (`.claude/settings.json`). Accepted from policy, local, and user settings" | COMPLETE (added scope restriction to description) |
| 6 | MED | Changed Description | Add `permissions.defaultMode` Remote environment note: only `acceptEdits` and `plan` are honored in Remote environments (v2.1.70) | COMPLETE (added Remote restriction to description) |
| 7 | MED | Model Config | Add Opus 4.6 1M context default note: as of v2.1.75, 1M context is default for Max/Team/Enterprise plans | COMPLETE (added to Effort Level note) |
| 8 | MED | Settings Hierarchy | Add Windows managed path note: v2.1.75 removed deprecated `C:\ProgramData\ClaudeCode\` fallback | COMPLETE (added deprecation note in hierarchy section) |
| 9 | MED | Display and UX | Add `fileSuggestion` stdin JSON format and 15-path output limit detail | COMPLETE (added stdin format and output limit) |
| 10 | MED | Settings Hierarchy | Update array merge note from "merged" to "concatenated and deduplicated" per official docs | COMPLETE (updated wording in hierarchy Important section) |
| 11 | LOW | Suspect Keys | `sandbox.ignoreViolations`, `sandbox.network.deniedDomains` still not in official docs or JSON schema top-level | ON HOLD (kept in report pending verification -- recurring from 2026-03-05) |
| 12 | LOW | Suspect Keys | `skipWebFetchPreflight`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` -- confirmed in JSON schema but not on official settings page | ON HOLD (kept in report -- valid per schema, recurring from 2026-03-05) |

---

## v2.1.76 -- 2026-03-15 (First Pass)

::: details Items initially placed ON HOLD awaiting user approval
All 12 items from the first pass were placed ON HOLD. They were resolved in the second pass on the same day after user approval.
:::

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `effortLevel` to General Settings or Model Configuration -- persists effort level across sessions (`"low"`, `"medium"`, `"high"`) | ON HOLD (awaiting user approval) |
| 2 | HIGH | New Settings | Add Worktree Settings section with `worktree.sparsePaths` and `worktree.symlinkDirectories` | ON HOLD (awaiting user approval) |
| 3 | HIGH | New Setting | Add `feedbackSurveyRate` to General Settings -- probability (0-1) for session quality survey | ON HOLD (awaiting user approval) |
| 4 | HIGH | Missing Env Vars | Add 20 missing env vars to table including proxy, MCP, Vertex region, and demo vars | ON HOLD (awaiting user approval) |
| 5 | HIGH | Missing Env Vars | Move `ANTHROPIC_DEFAULT_OPUS_MODEL`, `ANTHROPIC_DEFAULT_SONNET_MODEL`, `MAX_THINKING_TOKENS` from code-block-only to table | ON HOLD (awaiting user approval) |
| 6 | HIGH | Broken Link | Fix `https://claudelog.com/configuration/` -- returns ECONNREFUSED | ON HOLD (awaiting user approval) |
| 7 | MED | Changed Description | Update `cleanupPeriodDays` description -- add "hooks receive an empty `transcript_path`" when set to 0 | ON HOLD (awaiting user approval) |
| 8 | MED | Unverified Env Vars | Mark 7 env vars not in official docs as unverified | ON HOLD (awaiting user approval) |
| 9 | MED | New Source | Add official env-vars reference page to Sources section | ON HOLD (awaiting user approval) |
| 10 | MED | Example Update | Update Quick Reference example to include `effortLevel` and `worktree` settings | ON HOLD (awaiting user approval) |
| 11 | LOW | Suspect Keys | `sandbox.ignoreViolations`, `sandbox.network.deniedDomains` still not in official docs | ON HOLD (recurring from 2026-03-05) |
| 12 | LOW | Suspect Keys | `skipWebFetchPreflight`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` -- still in JSON schema but not on official settings page | ON HOLD (recurring from 2026-03-05) |

---

## v2.1.76 -- 2026-03-15 (Second Pass)

All ON HOLD items from the first pass were resolved.

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `effortLevel` to Model Configuration | COMPLETE (added to Model Overrides table, updated how-to, added /effort command) |
| 2 | HIGH | New Settings | Add Worktree Settings section with `worktree.sparsePaths` and `worktree.symlinkDirectories` | COMPLETE (new Worktree Settings subsection with table and example) |
| 3 | HIGH | New Setting | Add `feedbackSurveyRate` to General Settings | COMPLETE (added to General Settings table) |
| 4 | HIGH | Missing Env Vars | Add 23 missing env vars to table (20 genuinely new + 3 from code-block-only) | COMPLETE (added all 23 env vars) |
| 5 | HIGH | Broken Link | Previous run flagged `https://claudelog.com/configuration/` as ECONNREFUSED -- now loads successfully | COMPLETE (link restored, no action needed) |
| 6 | MED | Permission Syntax | Add Read/Edit gitignore-style path patterns, word-boundary wildcard detail, and legacy `:*` deprecation note | COMPLETE (added path patterns table, word-boundary note, and `:*` deprecation) |
| 7 | MED | Changed Description | Update `cleanupPeriodDays` to add "hooks receive an empty `transcript_path`" when set to 0 | COMPLETE (added to description) |
| 8 | MED | Unverified Env Vars | Mark 7 env vars not in official docs as unverified | COMPLETE (added "not in official docs -- unverified" markers) |
| 9 | MED | New Source | Add `/en/env-vars` and `/en/permissions` to Sources section | COMPLETE (added both URLs) |
| 10 | MED | Example Update | Update Quick Reference example to include `effortLevel` and `worktree` settings | COMPLETE (added to example) |
| 11 | LOW | Suspect Keys | `sandbox.ignoreViolations`, `sandbox.network.deniedDomains` still not in official docs sandbox table | ON HOLD (recurring from 2026-03-05) |
| 12 | LOW | Suspect Keys | `skipWebFetchPreflight`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` -- still in JSON schema but not on official settings page | ON HOLD (recurring from 2026-03-05) |

---

## v2.1.77 -- 2026-03-17

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `sandbox.filesystem.allowRead` to Sandbox Settings table -- re-allows read access within `denyRead` regions (array, default `[]`). Confirmed in v2.1.77 changelog | COMPLETE (added to Sandbox Settings table after denyRead row) |
| 2 | HIGH | Changed Description | Update `CLAUDE_CODE_MAX_OUTPUT_TOKENS` description: default for Opus 4.6 increased to 64k, upper bound for Opus 4.6 and Sonnet 4.6 increased to 128k (v2.1.77 changelog) | COMPLETE (description updated with model-specific defaults and bounds) |
| 3 | HIGH | Missing Env Var | Add `CLAUDECODE` to Common Environment Variables table -- set to `1` in spawned shell environments | COMPLETE (added to env var table) |
| 4 | HIGH | Missing Env Var | Add `CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS` to Common Environment Variables table -- allows fast mode when org status check fails | COMPLETE (added to env var table) |
| 5 | MED | Env Var Table | Move `ANTHROPIC_MODEL` and `ANTHROPIC_DEFAULT_HAIKU_MODEL` from code-block-only to Common Environment Variables table | COMPLETE (added both to env var table) |
| 6 | MED | Suspect Key Escalation | `sandbox.network.deniedDomains` -- 8 consecutive ON HOLD runs (since 2026-03-05). NOT in official docs or JSON schema. Per Rule 10B: mark as "not in official docs -- unverified" | COMPLETE (added unverified annotation) |
| 7 | MED | Suspect Key Escalation | `allow_remote_sessions` -- NOT in official docs or JSON schema. Mark as unverified | COMPLETE (added unverified annotation) |
| 8 | LOW | Suspect Key Resolution | `sandbox.ignoreViolations` -- 8 consecutive ON HOLD runs. Confirmed in JSON schema. Annotate accordingly | COMPLETE (added schema annotation) |
| 9 | LOW | Suspect Key Resolution | `skipWebFetchPreflight`, `skippedMarketplaces`, `skippedPlugins`, `pluginConfigs` -- 8 consecutive ON HOLD runs. All confirmed in JSON schema | COMPLETE (added schema annotation to all 4) |
| 10 | LOW | Header Count | Update header env var count from "160+" to "100+" -- actual table has 97 env vars | COMPLETE (header updated) |

::: tip Suspect Key Lifecycle
After 8 runs ON HOLD, suspect keys were either confirmed via JSON schema and annotated, or marked as unverified. This prevents indefinite accumulation of unresolved items (Rule 10B).
:::

---

## v2.1.78 -- 2026-03-18

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Setting | Add `voiceEnabled` to General Settings table -- enable push-to-talk voice dictation (boolean, requires Claude.ai account) | COMPLETE (added to General Settings table) |
| 2 | HIGH | Missing Setting | Add `filesystem.allowManagedReadPathsOnly` to Sandbox Settings table -- managed-only, only managed `allowRead` paths are respected | COMPLETE (added to Sandbox Settings table) |
| 3 | HIGH | Display Location | Move `showTurnDuration` and `terminalProgressBarEnabled` from Display Settings table to a separate "Global Config Settings (~/.claude.json)" subsection. Official docs state: "Adding them to settings.json will trigger a schema validation error" | COMPLETE (created new subsection with table) |
| 4 | HIGH | Changed Default | Fix `MAX_MCP_OUTPUT_TOKENS` default from 50000 to 25000 | COMPLETE (default updated, added warning threshold note) |
| 5 | HIGH | Missing Env Vars | Add `CLAUDE_CODE_NEW_INIT`, `CLAUDE_CODE_PLUGIN_SEED_DIR`, `DISABLE_FEEDBACK_COMMAND` to env vars table | COMPLETE (added all 3) |
| 6 | MED | Verification Fix | Remove "unverified" annotation from `allow_remote_sessions` -- now confirmed on official permissions page as managed-only | COMPLETE (removed annotation) |
| 7 | MED | Env Var Rename | Update `DISABLE_BUG_COMMAND` to `DISABLE_FEEDBACK_COMMAND` -- official docs use the newer name | COMPLETE (renamed with alias note) |
| 8 | MED | Changed Description | Update `CLAUDE_CODE_EFFORT_LEVEL` to include `max` (Opus 4.6 only) and `auto` values | COMPLETE (description updated) |
| 9 | MED | Changed Description | Fix `CLAUDE_CODE_ENABLE_TASKS` description -- official: "Set to true to enable task tracking in non-interactive mode (-p flag)" | COMPLETE (description corrected) |
| 10 | MED | Changed Description | Update `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` to note equivalent vars list | COMPLETE (description updated) |
| 11 | MED | Example Update | Remove `showTurnDuration` from Quick Reference example -- doesn't belong in settings.json | COMPLETE (removed from examples) |
| 12 | LOW | Env Var Default | Verify `MCP_TIMEOUT` default -- official docs don't specify a default | COMPLETE (removed unverified default) |

::: warning File Scope Check
This version introduced Rule 1H: settings listed in the report as `settings.json` keys must actually be `settings.json` keys. Keys that belong only in `~/.claude.json` (like `showTurnDuration`) cause schema validation errors if placed in `settings.json`.
:::

---

## v2.1.79 -- 2026-03-19

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Env Vars | Add `ANTHROPIC_CUSTOM_MODEL_OPTION`, `ANTHROPIC_CUSTOM_MODEL_OPTION_NAME`, `ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION` -- model-config vars for adding custom entries to `/model` picker | COMPLETE (added 3 env vars) |
| 2 | HIGH | Changed Description | Update `CLAUDE_CODE_PLUGIN_SEED_DIR` from singular to plural: "Path to one or more read-only plugin seed directories, separated by `:` on Unix or `;` on Windows" | COMPLETE (updated to multi-directory support) |
| 3 | HIGH | Sandbox Path Prefixes | Fix sandbox.filesystem path prefix documentation: `/` = absolute (standard Unix), `./` = project-relative, `//` = legacy still works. Report had reversed convention. Official docs note: "This syntax differs from Read and Edit permission rules" | COMPLETE (updated all 4 sandbox.filesystem entries, added cross-reference note) |
| 4 | MED | Changed Description | Expand `CLAUDE_CODE_AUTO_COMPACT_WINDOW` description with token capacity, model defaults, AUTOCOMPACT_PCT interaction, and status line decoupling | COMPLETE (expanded description) |

---

## v2.1.80 -- 2026-03-20

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `channelsEnabled` to MCP Settings table -- managed-only boolean, controls channel message delivery for Team and Enterprise users | COMPLETE (added to MCP Settings table) |
| 2 | MED | Version Badge | Update report version from v2.1.79 to v2.1.80 | COMPLETE (badge and header updated) |

---

## v2.1.81 -- 2026-03-21

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Settings (~/.claude.json) | Add `autoConnectIde` (boolean, default `false`) and `autoInstallIdeExtension` (boolean, default `true`) to Global Config Settings table | COMPLETE (added both) |
| 2 | HIGH | Incorrect Setting | `allow_remote_sessions` listed in Permission Keys table as managed-only boolean, but official permissions page states: "Access to Remote Control and web sessions is not controlled by a managed settings key." | COMPLETE (re-added unverified annotation with official docs quote) |
| 3 | MED | Version Bump | Update report version badge from v2.1.80 to v2.1.81 | COMPLETE |
| 4 | MED | New Setting | Add `showClearContextOnPlanAccept` -- confirmed in v2.1.81 changelog. Restores "clear context" option on plan accept (hidden by default) | COMPLETE (added to Global Config Settings table) |
| 5 | MED | Plugin Documentation | Document `source: 'settings'` as a marketplace source type in Plugin Settings section. Official settings page lists 7 source types | COMPLETE (added all 7 source types list) |
| 6 | MED | Status Line Fields | Add `rate_limits` field group to Status Line Input Fields table (five_hour and seven_day used_percentage and resets_at) | COMPLETE (added 4 rate_limits fields) |

---

## v2.1.81 -- 2026-03-23 (Re-audit)

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Setting (~/.claude.json) | Add `editorMode` (string, default `"normal"`, values: `"normal"` or `"vim"`) to Global Config Settings table. Written by `/vim` command | COMPLETE (added to Global Config Settings table) |
| 2 | HIGH | File Scope Fix | Move `showClearContextOnPlanAccept` from Global Config Settings to General Settings. Official docs now list it in the main Available settings table | COMPLETE (moved, removed stale annotation) |
| 3 | MED | Changed Description | Fix `terminalProgressBarEnabled` supported terminals from "Windows Terminal, iTerm2" to "ConEmu, Ghostty 1.2.0+, and iTerm2 3.6.6+" | COMPLETE (terminal list updated) |
| 4 | MED | Changed Description | Add "Config tool" to `availableModels` description -- official docs include it as a configuration method | COMPLETE (added) |

---

## v2.1.83 -- 2026-03-25

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `autoMode` to Permissions section -- object with `environment`, `allow`, `soft_deny` arrays for configuring auto mode classifier | COMPLETE (added to Permission Keys table with full description) |
| 2 | HIGH | New Setting | Add `disableAutoMode` to Permissions section -- string, set to `"disable"` to prevent auto mode activation | COMPLETE (added to Permission Keys table) |
| 3 | HIGH | New Permission Mode | Add `auto` to Permission Modes table -- background classifier replaces manual prompts. Research preview, requires Team plan + Sonnet/Opus 4.6 | COMPLETE (added with classifier details and fallback behavior) |
| 4 | HIGH | New Setting | Add `sandbox.failIfUnavailable` to Sandbox Settings -- boolean, exit with error when sandbox cannot start instead of running unsandboxed | COMPLETE (added to Sandbox Settings table) |
| 5 | HIGH | New Setting | Add `disableDeepLinkRegistration` to General Settings -- boolean, prevent `claude-cli://` protocol handler registration | COMPLETE (added to General Settings table) |
| 6 | HIGH | Missing Env Var | Add `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` -- set to `1` to strip Anthropic and cloud provider credentials from subprocess environments | COMPLETE (added to env vars table) |
| 7 | HIGH | Settings Hierarchy | Add `managed-settings.d/` drop-in directory to Managed Settings section -- independent policy fragments that merge alphabetically | COMPLETE (added as bullet under managed settings delivery methods) |
| 8 | HIGH | Broken Link | Fix `https://claudelog.com/configuration/` in Sources -- returns 403 Forbidden | COMPLETE (replaced with working URL) |
| 9 | MED | Version Badge | Update report version from v2.1.81 to v2.1.83 | COMPLETE |
| 10 | MED | Example Update | Add `autoMode` to Quick Reference example | COMPLETE (added) |
| 11 | MED | Changed Path | Fix Windows registry path from `Software\Anthropic\ClaudeCode` to `SOFTWARE\Policies\ClaudeCode` (HKLM and HKCU) | COMPLETE (updated) |
| 12 | LOW | Missing Alias | Add `opus[1m]` to Model Aliases table | COMPLETE (added after `sonnet[1m]`) |

---

## v2.1.84 -- 2026-03-26

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `defaultShell` to General Settings -- string, default `"bash"`, accepts `"bash"` or `"powershell"`. Requires `CLAUDE_CODE_USE_POWERSHELL_TOOL=1` | COMPLETE (added to General Settings table) |
| 2 | HIGH | New Setting | Add `allowedChannelPlugins` to MCP Settings -- array, managed-only. Allowlist of channel plugins that may push messages | COMPLETE (added to MCP Settings table) |
| 3 | HIGH | New Setting | Add `useAutoModeDuringPlan` to Permission Keys -- boolean, default `true`. Plan mode uses auto mode semantics when auto mode is available | COMPLETE (added to Permission Keys table) |
| 4 | HIGH | Missing Env Vars | Add 9 model customization env vars for `/model` picker customization on Bedrock/Vertex/Foundry | COMPLETE (added 3 vars after each base model var) |
| 5 | HIGH | Missing Env Var | Add `CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK` -- disable non-streaming fallback when streaming fails | COMPLETE (added) |
| 6 | HIGH | Missing Env Var | Add `CLAUDE_CODE_USE_POWERSHELL_TOOL` -- enable PowerShell tool on Windows (opt-in preview) | COMPLETE (added) |
| 7 | HIGH | Broken Link | Fix `https://claudelog.com/claude-code-changelog/` in Sources -- returns 403 Forbidden | COMPLETE (replaced with GitHub changelog URL) |
| 8 | MED | Settings Hierarchy | Update managed tier precedence with file-based tier and cross-tier qualifier. Add drop-in merge note | COMPLETE (updated) |
| 9 | MED | Settings Hierarchy | Expand drop-in directory merge semantics: systemd convention, scalar override, array concat+dedup, deep merge, hidden file exclusion, numeric prefix tip | COMPLETE (expanded) |
| 10 | MED | Annotation | Add "in changelog, not on official settings page" annotation to `disableDeepLinkRegistration` per Rule 1F | COMPLETE (added) |
| 11 | MED | Example Update | Add `defaultShell` to Quick Reference example | COMPLETE (added) |

---

## v2.1.85 -- 2026-03-27

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Env Var | Add `CLAUDE_STREAM_IDLE_TIMEOUT_MS` -- timeout in ms before streaming idle watchdog closes stalled connection (default: 90000). Missed in v2.1.84 run | COMPLETE (added to env vars table) |
| 2 | HIGH | Version Bump | Update report version badge from v2.1.84 to v2.1.85 | COMPLETE |
| 3 | MED | New Env Var | Add `OTEL_LOG_TOOL_DETAILS` -- gates `tool_parameters` in OpenTelemetry events. v2.1.85 changelog only (not yet on official env-vars page) | COMPLETE (added with changelog-source annotation) |
| 4 | MED | New Env Vars (Ownership) | Add `CLAUDE_CODE_MCP_SERVER_NAME` and `CLAUDE_CODE_MCP_SERVER_URL` -- env vars passed to MCP `headersHelper` scripts | COMPLETE (added with changelog annotation) |

---

## v2.1.86 -- 2026-03-28

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | File Scope | Move `teammateMode` from General Settings (settings.json) to Global Config Settings (~/.claude.json). Official settings page lists it under "Global config settings" | COMPLETE (moved to Global Config Settings table) |
| 2 | HIGH | Type + Annotation | Fix `disableDeepLinkRegistration`: change type from `boolean` to `string` (value: `"disable"`), remove stale changelog annotation. Now confirmed on official settings page | COMPLETE (type and description updated, annotation removed) |
| 3 | HIGH | Version Bump | Update report version badge from v2.1.85 to v2.1.86 | COMPLETE |

---

## v2.1.88 -- 2026-03-31

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Env Var | Add `CLAUDE_CODE_NO_FLICKER` -- enable flicker-free alt-screen rendering (v2.1.88) | COMPLETE (added) |
| 2 | HIGH | Missing Env Vars | Add `CLAUDE_CODE_SCROLL_SPEED` and `CLAUDE_CODE_DISABLE_MOUSE` -- fullscreen UI controls | COMPLETE (added) |
| 3 | HIGH | Version Bump | Update report version badge from v2.1.86 to v2.1.88 | COMPLETE |
| 4 | HIGH | Broken Link | Fix `https://www.eesel.ai/blog/settings-json-claude-code` in Sources -- returns CSS-only content, no readable blog post | COMPLETE (removed broken link) |
| 5 | MED | Settings Hierarchy | Add `managed-mcp.json` to file-based managed delivery methods | COMPLETE (added to File delivery method) |
| 6 | MED | Plugin Source Types | Annotate `url`, `npm`, `file` marketplace source types as "not in official docs -- unverified" | COMPLETE (added annotations) |
| 7 | LOW | Header Count | Update header from "60+ settings" to match actual table count | INVALID (count is accurate -- 60+ settings and 125 env vars) |

---

## v2.1.89 -- 2026-04-01

::: warning Major Env Var Addition
This version added approximately 46 missing environment variables confirmed on the official env-vars page. This was the largest single env var batch in the changelog history.
:::

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Missing Setting | Add `skipDangerousModePermissionPrompt` to Permission Keys table -- boolean, skip bypass-mode confirmation prompt | COMPLETE (added) |
| 2 | HIGH | New Setting | Add `showThinkingSummaries` to General Settings -- boolean, default `false`. Thinking summaries no longer generated by default; set `true` to restore | COMPLETE (added with changelog annotation) |
| 3 | HIGH | Changed Behavior | Update `cleanupPeriodDays` description -- v2.1.89 changelog says `0` is now rejected with a validation error. CONTRADICTION with official docs which still describe `0` as valid | COMPLETE (updated with contradiction note) |
| 4 | HIGH | Missing Env Vars | Add ~46 missing env vars confirmed on official /en/env-vars page (Bedrock, Vertex, thinking, compact, file checkpointing, plugin sync, IDE, OTEL, accessibility, and more) | COMPLETE (added all 46 env vars) |
| 5 | HIGH | Version Bump | Update report version badge from v2.1.88 to v2.1.89 | COMPLETE |
| 6 | MED | New Env Var | Add `MCP_CONNECTION_NONBLOCKING` -- set to `true` in `-p` mode to skip MCP connection wait. Changelog only | COMPLETE (added with changelog annotation) |
| 7 | MED | Ownership Boundary | `CLAUDE_CODE_SIMPLE` is in CLI startup flags file as startup-only, but official env-vars page lists it as configurable. Reconcile ownership | COMPLETE (added to settings report; updated CLI file to cross-reference) |
| 8 | MED | Example Update | Update Quick Reference example to include `showThinkingSummaries` | COMPLETE (added to example) |

---

## v2.1.90 -- 2026-04-02

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | Changed Type + Description | Fix `forceLoginOrgUUID`: type from `string` to `string \| string[]`. Expand description to include array behavior, managed settings enforcement, and fail-closed semantics | COMPLETE (type updated, description expanded, example updated) |
| 2 | HIGH | Missing Env Vars | Add `CLAUDE_CODE_OAUTH_TOKEN`, `CLAUDE_CODE_OAUTH_REFRESH_TOKEN`, `CLAUDE_CODE_OAUTH_SCOPES` | COMPLETE (added 3 OAuth env vars) |
| 3 | HIGH | Changed Description + Annotation | Update `showThinkingSummaries`: remove changelog annotation (now confirmed on official settings page), update description to match official wording | COMPLETE (annotation removed, description updated) |
| 4 | HIGH | Sandbox Cross-Merge | Update sandbox filesystem entries to document cross-merge behavior with Edit/Read permission rules | COMPLETE (cross-merge behavior added to all 3 filesystem entries) |
| 5 | HIGH | Changed Description | Simplify `cleanupPeriodDays` description: remove contradiction note, align with official docs which now reject `0` with a validation error | COMPLETE (contradiction note removed, aligned with official docs) |
| 6 | HIGH | Version Bump | Update report version badge from v2.1.89 to v2.1.90 | COMPLETE |
| 7 | MED | New Env Var | Add `CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE` -- keep marketplace cache on git pull failure. Changelog only | COMPLETE (added with changelog annotation) |
| 8 | MED | Hook Redirect Count | Update redirect text from "all 19 hook events" to "all 25 hook events" | COMPLETE (count updated) |
| 9 | MED | Ownership Boundary | `CLAUDE_CODE_TMPDIR` is on official env-vars page as configurable, but CLI startup flags report lists it as startup-only | COMPLETE (added to settings report; updated CLI flags file) |

---

## v2.1.91 -- 2026-04-03

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `disableSkillShellExecution` to General Settings -- boolean, disable inline shell execution in skills, custom slash commands, and plugin commands. Changelog only | COMPLETE (added with changelog annotation) |
| 2 | HIGH | Version Bump | Update report version badge from v2.1.90 to v2.1.91 | COMPLETE |

---

## v2.1.92 -- 2026-04-04

| # | Priority | Type | Action | Status |
|---|----------|------|--------|--------|
| 1 | HIGH | New Setting | Add `forceRemoteSettingsRefresh` to General Settings -- boolean, managed-only, blocks CLI startup until remote managed settings are freshly fetched (fail-closed) | COMPLETE (added to General Settings table) |
| 2 | HIGH | Missing Env Var | Add `CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX` -- prefix for auto-generated Remote Control session names, defaults to machine hostname | COMPLETE (added to env vars table) |
| 3 | MED | Changed Description | Update `disableSkillShellExecution` -- remove changelog annotation, now confirmed on official settings page with expanded description | COMPLETE (annotation removed, description expanded) |
| 4 | MED | Changed Description | Remove "not in official docs -- unverified" tags from marketplace source types `url`, `npm`, and `file`. Official settings page now documents all 8 source types | COMPLETE (unverified annotations removed) |
| 5 | MED | Changed Description | Enrich `cleanupPeriodDays` -- add worktree cleanup detail | COMPLETE (worktree cleanup detail added) |
| 6 | MED | Changed Description | Enrich `disableDeepLinkRegistration` -- add multi-line prompt support via `%0A` | COMPLETE (detail added) |
| 7 | MED | Changed Description | Enrich `includeGitInstructions` -- add git status snapshot and env var precedence | COMPLETE (description expanded) |
| 8 | MED | Changed Description | Enrich `language` -- add "Also sets the voice dictation language" | COMPLETE (detail added) |
| 9 | MED | Changed Description | Enrich `allowUnsandboxedCommands` -- add enterprise policy detail | COMPLETE (expanded) |
| 10 | MED | Changed Default | Fix `teammateMode` default from `"auto"` to `"in-process"` per official settings page | COMPLETE (default updated) |

---

## Verification Checklist

The following rules are checked during every workflow run to catch drift proactively. Rules accumulate over time -- when a new type of drift is caught that an existing rule should have caught, a new rule is appended.

### Depth Levels

| Depth | Meaning | Example |
|-------|---------|---------|
| `exists` | Check if a section/table/file exists | "Does the report have a Sandbox Settings table?" |
| `presence-check` | Check if a specific item is present or absent | "Is the `ConfigChange` event in the Hook Events table?" |
| `content-match` | Compare actual values word-by-word against source | "Does the `model` setting description match official docs?" |
| `field-level` | Verify every individual field is accounted for | "Does each settings key from official docs appear in the correct table?" |
| `cross-file` | Same value must match across multiple files | "Does CLAUDE.md hooks section match the report's hook events?" |

### 1. Settings Keys Tables

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 1A | Key Completeness | For each settings key in official docs, verify it appears in the correct section table | field-level | 2026-03-05 | Initial checklist |
| 1B | Key Types | For each key, verify the Type column matches official docs | content-match | 2026-03-05 | Initial checklist |
| 1C | Key Defaults | For each key with a default, verify the Default column matches | content-match | 2026-03-05 | Initial checklist |
| 1D | Key Descriptions | For each key, verify the Description column accurately reflects official docs | content-match | 2026-03-05 | Initial checklist |
| 1E | Scope Column | For keys with a Scope column, verify the scope value matches official docs | content-match | 2026-03-15 | v2.1.71 caught `extraKnownMarketplaces` scope wrong |
| 1F | Inverse Completeness | For each key in the report, verify it exists in official docs OR is explicitly marked unverified | field-level | 2026-03-15 | Suspect keys stayed ON HOLD for 6 runs |
| 1G | Edge-Case Semantics | For settings with special boundary behavior, verify documentation matches official docs | content-match | 2026-03-15 | v2.1.75 caught `cleanupPeriodDays` zero-value behavior late |
| 1H | File Scope Check | For each key listed as a `settings.json` key, verify it is not a `~/.claude.json`-only preference | content-match | 2026-03-18 | v2.1.78 caught `showTurnDuration` in wrong scope |

### 2. Settings Hierarchy

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 2A | Priority Levels | Verify all priority levels match official docs (5-level chain + managed policy) | field-level | 2026-03-05 | Initial checklist |
| 2B | File Locations | For each priority level, verify file location paths match | content-match | 2026-03-05 | Initial checklist |
| 2C | Merge Semantics | Verify array/object merge behavior wording matches official docs | content-match | 2026-03-15 | v2.1.75 caught "merged" vs "concatenated and deduplicated" |
| 2D | Managed Internals | Verify managed-tier delivery methods and internal precedence order | field-level | 2026-03-15 | v2.1.75 restructured managed tier |

### 3. Permissions

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 3A | Permission Modes | Verify all permission modes match official docs | field-level | 2026-03-05 | Initial checklist |
| 3B | Tool Syntax Patterns | Verify all tool permission syntax patterns and examples match | content-match | 2026-03-05 | Initial checklist |
| 3C | Bidirectional Mode Check | Verify every mode in report exists in docs AND every mode in docs exists in report | field-level | 2026-03-15 | v2.1.74 caught `askEdits`/`viewOnly` not in docs |
| 3D | Evaluation Semantics | Verify permission evaluation order and path-prefix resolution | content-match | 2026-03-15 | v2.1.75 caught missing evaluation order |

### 4. Hooks (Redirected)

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 4A | Hooks Redirect | Verify the hooks section contains a valid redirect link to the claude-code-hooks repo | exists | 2026-03-05 | Hooks externalized to dedicated repo |

### 5. Environment Variables

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 5A | Env Var Completeness | Verify all env-configurable environment variables from official docs appear in the report | field-level | 2026-03-05 | Initial checklist |
| 5B | Ownership Boundary | Verify no env vars from CLI startup flags are duplicated in the settings report, and vice versa | cross-file | 2026-03-05 | Initial checklist |
| 5C | Env Var Descriptions | For each env var, verify the description matches official /en/env-vars page | content-match | 2026-03-15 | v2.1.74 caught wrong `ANTHROPIC_CUSTOM_HEADERS` description |
| 5D | Inverse Env Var Check | For each env var in the report, verify it exists on official page OR is marked unverified | field-level | 2026-03-15 | v2.1.76 found 7 undocumented env vars |

### 6. Examples

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 6A | Quick Reference Example | Verify the Quick Reference example uses valid settings with correct syntax | content-match | 2026-03-05 | Initial checklist |
| 6B | Example URL Validation | Verify any URLs embedded in JSON example blocks resolve correctly | exists | 2026-03-15 | v2.1.74 caught wrong `$schema` URL domain |

### 7. Cross-File Consistency

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 7A | CLAUDE.md Sync | Verify CLAUDE.md's Configuration Hierarchy and Hooks System sections are consistent with the report | cross-file | 2026-03-05 | Initial checklist |

### 8. Process

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 8A | Source Credibility Guard | Only flag items as drift if confirmed by official sources. Third-party blog sources may be outdated -- use them for leads only | content-match | 2026-03-05 | Adopted from subagents workflow |

### 9. Hyperlinks

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 9A | Local File Links | Verify all relative file links resolve to existing files | exists | 2026-03-05 | Initial checklist |
| 9B | External URL Links | Verify all external URLs return valid pages | exists | 2026-03-05 | Initial checklist |
| 9C | Anchor Links | Verify all internal anchor links point to existing headings | exists | 2026-03-05 | Initial checklist |

### 10. Version Metadata and Suspect Key Lifecycle

| # | Category | Check | Depth | Added | Origin |
|---|----------|-------|-------|-------|--------|
| 10A | Version Metadata | Verify report version badge, header settings count, and env var count reflect actual audited version and current table row counts | content-match | 2026-03-15 | v2.1.71 caught version badge mismatch |
| 10B | Suspect Key Escalation | After 5 consecutive runs ON HOLD, suspect keys must be resolved: confirmed via JSON schema and annotated, or removed from the report | exists | 2026-03-15 | Suspect keys stayed ON HOLD across 6 runs with no resolution |
| 10C | Bidirectional Completeness | Every settings key, permission mode, and env var in the report must be traceable to an official source or explicitly marked unverified. Superset of 1F, 3C, 5D | field-level | 2026-03-15 | Cross-cutting rule from research |
