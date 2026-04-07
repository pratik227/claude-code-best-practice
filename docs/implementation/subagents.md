# Sub-agents Implementation

> Last Updated: Mar 02, 2026

::: info Implemented
The weather agent is implemented as an example of the **Command > Agent > Skill** architecture pattern, demonstrating two distinct skill patterns.
:::

## Weather Agent

**File**: `.claude/agents/weather-agent.md`

```yaml
---
name: weather-agent
description: Use this agent PROACTIVELY when you need to fetch weather data for
  Dubai, UAE. This agent fetches real-time temperature from Open-Meteo
  using its preloaded weather-fetcher skill.
tools: WebFetch, Read, Write, Edit
model: sonnet
color: green
maxTurns: 5
permissionMode: acceptEdits
memory: project
skills:
  - weather-fetcher
---

# Weather Agent

You are a specialized weather agent that fetches weather data for Dubai,
UAE.

## Your Task

Execute the weather workflow by following the instructions from your preloaded
skill:

1. **Fetch**: Follow the `weather-fetcher` skill instructions to fetch the
   current temperature
2. **Report**: Return the temperature value and unit to the caller
3. **Memory**: Update your agent memory with the reading details for
   historical tracking

...
```

The agent has one preloaded skill (`weather-fetcher`) that provides instructions for fetching from Open-Meteo. It returns the temperature value and unit to the calling command.

## How to Use

```bash
$ claude
> what is the weather in dubai?
```

## How to Implement

You can create an agent using the `/agents` command:

```bash
$ claude
> /agents
```

Or ask Claude to create one for you -- it will generate the markdown file with YAML frontmatter and body in `.claude/agents/<name>.md`

## Orchestration Workflow

The weather agent is the **Agent** in the Command > Agent > Skill orchestration pattern. It receives the workflow from the `/weather-orchestrator` command and fetches temperature using its preloaded skill (`weather-fetcher`). The command then invokes the standalone `weather-svg-creator` skill to create the visual output.

| Component | Role | Example |
|-----------|------|---------|
| **Command** | Entry point, user interaction | `/weather-orchestrator` |
| **Agent** | Fetches data with preloaded skill (agent skill) | `weather-agent` with `weather-fetcher` |
| **Skill** | Creates output independently (skill) | `weather-svg-creator` |
