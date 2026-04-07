# Agent Teams Implementation

> Last Updated: Mar 12, 2026

::: info Implemented
Agent Teams spawn **multiple independent Claude Code sessions** that coordinate via a shared task list. Unlike subagents (isolated context forks within one session), each teammate gets its own full context window with CLAUDE.md, MCP servers, and skills loaded automatically.
:::

## How to Use

The time orchestration workflow was built entirely by an agent team. To run the finished product:

```bash
cd agent-teams
claude
/time-orchestrator
```

This invokes the **Command > Agent > Skill** pipeline: the agent fetches Dubai's current time, and the skill renders an SVG time card to `agent-teams/output/dubai-time.svg`.

## How to Implement

You can create a replica of the weather orchestration workflow using agent teams -- in this example, the time orchestration workflow was built entirely by an agent team.

### 1. Install iTerm2 and tmux

```bash
brew install --cask iterm2
brew install tmux
```

### 2. Start iTerm2, then tmux, then Claude

```bash
tmux new -s dev
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude
```

### 3. Prompt with team structure

Paste a prompt into Claude to bootstrap a complete time orchestrator workflow using agent teams.

### Team Coordination Flow

```
┌──────────────────────────────────────────────────────────────┐
│                         LEAD (You)                           │
│       "Create an agent team to build time orchestration"     │
└──────────────────────────┬───────────────────────────────────┘
                           │ spawns team (all parallel)
              ┌────────────┼────────────┐
              ▼            ▼            ▼
   ┌────────────────┐ ┌──────────┐ ┌──────────────┐
   │ Command        │ │ Agent    │ │ Skill        │
   │ Architect      │ │ Engineer │ │ Designer     │
   │                │ │          │ │              │
   │ agent-teams/   │ │ agent-   │ │ agent-teams/ │
   │ .claude/       │ │ teams/   │ │ .claude/     │
   │ commands/      │ │ .claude/ │ │ skills/      │
   │ time-          │ │ agents/  │ │ time-svg-    │
   │ orchestrator.md│ │ time-    │ │ creator/     │
   │                │ │ agent.md │ │              │
   └───────┬────────┘ └────┬─────┘ └──────┬───────┘
           │               │              │
           ▼               ▼              ▼
   ┌──────────────────────────────────────────────────┐
   │            Shared Task List                      │
   │  ☐ Agree on data contract: {time, tz, formatted} │
   │  ☐ Command uses Agent tool (not bash)            │
   │  ☐ Agent preloads time-fetcher skill             │
   │  ☐ Skill reads time from context (no re-fetch)   │
   │  ☐ All files inside agent-teams/.claude/         │
   └──────────────────────────────────────────────────┘
                       │
                       ▼
          ┌──────────────────────────────┐
          │  cd agent-teams && claude    │
          │    /time-orchestrator        │
          │   Command → Agent → Skill    │
          └──────────────────────────────┘
```
