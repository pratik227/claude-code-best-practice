# Commands Implementation

> Last Updated: Mar 02, 2026

::: info Implemented
The weather orchestrator command is implemented as the entry point of the **Command > Agent > Skill** architecture pattern, demonstrating how commands orchestrate multi-step workflows.
:::

## Weather Orchestrator

**File**: `.claude/commands/weather-orchestrator.md`

```yaml
---
description: Fetch weather data for Dubai and create an SVG weather card
model: haiku
---

# Weather Orchestrator Command

Fetch the current temperature for Dubai, UAE and create a visual SVG weather card.

## Workflow

### Step 1: Ask User Preference
Use the AskUserQuestion tool to ask the user whether they want the temperature
in Celsius or Fahrenheit.

### Step 2: Fetch Weather Data
Use the Agent tool to invoke the weather agent:
- subagent_type: weather-agent
- prompt: Fetch the current temperature for Dubai, UAE in [unit]...

### Step 3: Create SVG Weather Card
Use the Skill tool to invoke the weather-svg-creator skill:
- skill: weather-svg-creator

...
```

The command orchestrates the entire workflow: it asks the user for their temperature unit preference, invokes the `weather-agent` via the Agent tool, and then invokes the `weather-svg-creator` skill via the Skill tool.

## How to Use

```bash
$ claude
> /weather-orchestrator
```

## How to Implement

Ask Claude to create one for you -- it will generate the markdown file with YAML frontmatter and body in `.claude/commands/<name>.md`

## Orchestration Workflow

The weather orchestrator is the **Command** in the Command > Agent > Skill orchestration pattern. It serves as the entry point -- handling user interaction (temperature unit preference), delegating data fetching to the `weather-agent`, and invoking the `weather-svg-creator` skill for visual output.

| Component | Role | Example |
|-----------|------|---------|
| **Command** | Entry point, user interaction | `/weather-orchestrator` |
| **Agent** | Fetches data with preloaded skill (agent skill) | `weather-agent` with `weather-fetcher` |
| **Skill** | Creates output independently (skill) | `weather-svg-creator` |
