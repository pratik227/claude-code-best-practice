# Guide Overview

*Practice makes Claude perfect.*

This guide is a community-driven reference for Claude Code configuration, demonstrating patterns for skills, subagents, hooks, and commands.

## What You Will Learn

Whether you are just getting started or looking to optimize your workflow, this guide covers everything from initial setup to advanced orchestration patterns.

- **[Day 0 -- Setup](./day0)** -- Install Claude Code and authenticate on your machine
- **[macOS Setup](./mac)** -- macOS-specific installation steps
- **[Windows Setup](./windows)** -- Windows-specific installation steps
- **[Linux Setup](./linux)** -- Linux-specific installation steps

## Core Concepts

Claude Code is built around a set of composable primitives. Understanding these concepts is the key to getting the most out of it.

| Concept | Location | Description |
|---------|----------|-------------|
| **Subagents** | `.claude/agents/<name>.md` | Autonomous actor in a fresh isolated context with custom tools, permissions, model, memory, and persistent identity |
| **Commands** | `.claude/commands/<name>.md` | Knowledge injected into existing context -- simple user-invoked prompt templates for workflow orchestration |
| **Skills** | `.claude/skills/<name>/SKILL.md` | Knowledge injected into existing context -- configurable, preloadable, auto-discoverable, with context forking and progressive disclosure |
| **Workflows** | `.claude/commands/` | Orchestrated multi-step patterns combining commands, agents, and skills |
| **Hooks** | `.claude/hooks/` | User-defined handlers (scripts, HTTP, prompts, agents) that run outside the agentic loop on specific events |
| **MCP Servers** | `.claude/settings.json`, `.mcp.json` | Model Context Protocol connections to external tools, databases, and APIs |
| **Plugins** | distributable packages | Bundles of skills, subagents, hooks, MCP servers, and LSP servers |
| **Settings** | `.claude/settings.json` | Hierarchical configuration system for permissions, model config, output styles, sandboxing, keybindings, and more |
| **Status Line** | `.claude/settings.json` | Customizable status bar showing context usage, model, cost, and session info |
| **Memory** | `CLAUDE.md`, `.claude/rules/` | Persistent context via CLAUDE.md files and `@path` imports |
| **Checkpointing** | automatic (git-based) | Automatic tracking of file edits with rewind (`Esc Esc` or `/rewind`) and targeted summarization |
| **CLI Startup Flags** | `claude [flags]` | Command-line flags, subcommands, and environment variables for launching Claude Code |

::: tip Legend
**A** = Agents, **C** = Commands, **S** = Skills. These three primitives compose together to form orchestration workflows.
:::

## Hot Features

These are some of the most notable and recently shipped features in Claude Code:

- **Power-ups** -- Interactive lessons teaching Claude Code features with animated demos (`/powerup`)
- **Ultraplan** -- Draft plans in the cloud with browser-based review, inline comments, and flexible execution (`/ultraplan`)
- **Claude Code Web** -- Run tasks on cloud infrastructure with long-running tasks, PR auto-fix, and parallel sessions
- **No Flicker Mode** -- Flicker-free alt-screen rendering with mouse support and stable memory (`CLAUDE_CODE_NO_FLICKER=1`)
- **Computer Use** -- Let Claude control your screen -- open apps, click, type, and screenshot your display
- **Auto Mode** -- Background safety classifier replaces manual permission prompts (`claude --enable-auto-mode`)
- **Channels** -- Push events from Telegram, Discord, or webhooks into a running session
- **Slack** -- Mention `@Claude` in team chat with a coding task for web-based sessions
- **Code Review** -- Multi-agent PR analysis that catches bugs, security vulnerabilities, and regressions
- **GitHub Actions** -- Automate PR reviews, issue triage, and code generation in CI/CD pipelines
- **Chrome** -- Browser automation via Claude in Chrome for testing, debugging, and data extraction
- **Scheduled Tasks** -- `/loop` runs prompts locally on a recurring schedule; `/schedule` runs them in the cloud
- **Voice Dictation** -- Push-to-talk speech input with 20-language support (`/voice`)
- **Simplify and Batch** -- Built-in skills for code quality (`/simplify`) and bulk operations (`/batch`)
- **Agent Teams** -- Multiple agents working in parallel on the same codebase with shared task coordination
- **Remote Control** -- Continue local sessions from any device (`/remote-control`)
- **Git Worktrees** -- Isolated git branches for parallel development

## Orchestration Pattern

The core architectural pattern in Claude Code is **Command --> Agent --> Skill**:

1. A **Command** serves as the entry point (user types a slash command)
2. The command invokes an **Agent** (subagent) to perform the work
3. The agent uses **Skills** (preloaded or invoked) for specialized tasks

This pattern provides clean separation of concerns: commands handle user interaction, agents manage execution context, and skills encapsulate domain knowledge.

::: info Example: Weather Orchestrator
The repository includes a working example of this pattern:
- `/weather-orchestrator` command asks for C/F preference, invokes the weather agent, then invokes the SVG skill
- `weather-agent` fetches temperature data using its preloaded `weather-fetcher` skill
- `weather-svg-creator` skill creates an SVG weather card from the data

Try it: run `claude` then type `/weather-orchestrator`
:::

## Development Workflows

All major workflows converge on the same architectural pattern: **Research --> Plan --> Execute --> Review --> Ship**.

The community has produced several notable workflow frameworks:

| Workflow | Highlights |
|----------|------------|
| [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) | Instinct scoring, AgentShield, multi-lang rules |
| [Superpowers](https://github.com/obra/superpowers) | TDD-first, Iron Laws, whole-plan review |
| [Spec Kit](https://github.com/github/spec-kit) | Spec-driven, constitution, 22+ tools |
| [gstack](https://github.com/garrytan/gstack) | Role personas, /codex review, parallel sprints |
| [Get Shit Done](https://github.com/gsd-build/get-shit-done) | Fresh 200K contexts, wave execution, XML plans |
| [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Full SDLC, agent personas, 22+ platforms |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | Delta specs, brownfield, artifact DAG |
| [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Teams orchestration, tmux workers, skill auto-inject |
| [Compound Engineering](https://github.com/EveryInc/compound-engineering-plugin) | Compound Learning, Multi-Platform CLI, Plugin Marketplace |
| [HumanLayer](https://github.com/humanlayer/humanlayer) | RPI, context engineering, 300k+ LOC |

### Other Notable Workflows

- **Cross-Model Workflow** -- Claude Code + Codex working together
- **RPI (Research-Plan-Implement)** -- Structured phased approach
- **Ralph Wiggum Loop** -- Autonomous development loop for long-running tasks
- **Boris Cherny's Workflow** -- Tips from the creator of Claude Code
- **Andrej Karpathy's Workflow** -- AutoResearch approach
- **Peter Steinberger's Workflow** -- OpenClaw development approach

## How to Use This Guide

```
1. Read through the guide like a course -- learn what commands, agents, skills,
   and hooks are before trying to use them.
2. Clone the best-practice repo and play with the examples: try /weather-orchestrator,
   listen to the hook sounds, run agent teams.
3. Go to your own project and ask Claude to suggest what best practices you should
   add, giving it the best-practice repo as a reference.
```

::: tip Getting Started
Head to [Day 0 -- Setup](./day0) to install Claude Code and authenticate.
:::
