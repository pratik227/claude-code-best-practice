---
layout: home

hero:
  name: "Claude Code"
  text: "Best Practices"
  tagline: Comprehensive guide to Claude Code configuration, workflows, and best practices
  image:
    src: /claude-jumping.svg
    alt: Claude Code
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Best Practices
      link: /best-practices/subagents
    - theme: alt
      text: GitHub
      link: https://github.com/pratik227/claude-code-best-practice

features:
  - icon: 🤖
    title: Subagents
    details: Spawn specialized agents with custom tools, models, and permissions for parallel task execution.
    link: /best-practices/subagents
    linkText: Learn more
  - icon: ⌘
    title: Commands
    details: Custom slash commands with YAML frontmatter to orchestrate complex multi-step workflows.
    link: /best-practices/commands
    linkText: Learn more
  - icon: ⚡
    title: Skills
    details: Reusable capability modules that extend Claude Code with domain-specific knowledge.
    link: /best-practices/skills
    linkText: Learn more
  - icon: 🔧
    title: Settings
    details: 60+ settings and 170+ environment variables across 5 configuration levels.
    link: /best-practices/settings
    linkText: Learn more
  - icon: 🧠
    title: Memory (CLAUDE.md)
    details: Persistent context via CLAUDE.md files with ancestor and descendant loading in monorepos.
    link: /best-practices/memory
    linkText: Learn more
  - icon: 🔌
    title: MCP Servers
    details: Extend Claude Code with Model Context Protocol servers for browser automation, search, and more.
    link: /best-practices/mcp
    linkText: Learn more
  - icon: 🎯
    title: Orchestration
    details: Command → Agent → Skill architecture pattern for composable, multi-step workflows.
    link: /workflows/orchestration
    linkText: See pattern
  - icon: 📚
    title: Implementation Guides
    details: Step-by-step implementation guides with real working examples from this repository.
    link: /implementation/commands
    linkText: View guides
  - icon: 📝
    title: Tips & Tricks
    details: 60+ tips from Boris Cherny and the Claude Code team on getting the most out of Claude Code.
    link: /tips/boris-13-tips-jan-26
    linkText: Browse tips
  - icon: 📊
    title: Deep Dive Reports
    details: In-depth analysis of advanced tool use, agent memory, rate limits, and more.
    link: /reports/agent-command-skill
    linkText: Read reports
  - icon: 🎥
    title: Video Transcripts
    details: Key insights from talks by Boris Cherny at Y Combinator, Lenny's Podcast, and more.
    link: /videos/boris-y-combinator
    linkText: Watch & read
  - icon: 🚀
    title: Power-Ups
    details: Interactive lessons built into Claude Code that teach features step by step.
    link: /best-practices/power-ups
    linkText: Explore
---

## At a Glance

<StatsGrid :stats="[
  { icon: 'tabler:file-text', value: '52', label: 'Doc Pages', color: '#D97706' },
  { icon: 'tabler:settings', value: '60+', label: 'Settings', color: '#2563eb' },
  { icon: 'tabler:terminal-2', value: '65', label: 'Commands', color: '#16a34a' },
  { icon: 'tabler:variable', value: '170+', label: 'Env Vars', color: '#9333ea' },
  { icon: 'tabler:bulb', value: '69', label: 'Tips', color: '#ea580c' },
  { icon: 'tabler:video', value: '6', label: 'Video Talks', color: '#dc2626' },
]" />

## Concepts

<ConceptTable :concepts="[
  { name: 'Subagents', icon: 'tabler:robot', description: 'Spawn specialized agents with custom tools, models, and permissions', link: '/best-practices/subagents' },
  { name: 'Commands', icon: 'tabler:terminal-2', description: 'Custom slash commands (.claude/commands/) with YAML frontmatter', link: '/best-practices/commands' },
  { name: 'Skills', icon: 'tabler:bolt', description: 'Reusable capabilities (.claude/skills/) with context files', link: '/best-practices/skills' },
  { name: 'Workflows', icon: 'tabler:git-merge', description: 'Multi-step orchestration: Command → Agent → Skill', link: '/workflows/orchestration' },
  { name: 'Hooks', icon: 'tabler:webhook', description: 'Event-driven handlers triggered by Claude Code lifecycle events', link: '/best-practices/settings' },
  { name: 'MCP Servers', icon: 'tabler:plug', description: 'Model Context Protocol integrations (Playwright, Context7, DeepWiki)', link: '/best-practices/mcp' },
  { name: 'Settings', icon: 'tabler:adjustments', description: '5-level configuration hierarchy from managed to global', link: '/best-practices/settings' },
  { name: 'Memory', icon: 'tabler:brain', description: 'Persistent context via CLAUDE.md with monorepo loading strategies', link: '/best-practices/memory' },
  { name: 'CLI Flags', icon: 'tabler:flag', description: '40+ startup flags and environment variables', link: '/best-practices/cli-startup-flags' },
  { name: 'Power-Ups', icon: 'tabler:rocket', description: 'Interactive lessons teaching Claude Code features', link: '/best-practices/power-ups' },
]" />

## Orchestration Pattern

The **Command → Agent → Skill** pattern is the recommended architecture:

```mermaid
graph LR
  A["<b>Command</b><br/>/weather-orchestrator<br/><i>Entry point</i>"] --> B["<b>Agent</b><br/>weather-agent<br/><i>Fetches data</i>"]
  B --> C["<b>Skill</b><br/>weather-svg-creator<br/><i>Creates output</i>"]
  B -.->|preloaded| D["weather-fetcher<br/><i>Agent Skill</i>"]

  style A fill:#f59e0b,stroke:#d97706,color:#fff
  style B fill:#3b82f6,stroke:#2563eb,color:#fff
  style C fill:#10b981,stroke:#059669,color:#fff
  style D fill:#8b5cf6,stroke:#7c3aed,color:#fff
```

| Component | Role | Example |
|-----------|------|---------|
| **Command** | Entry point, handles user interaction | `/weather-orchestrator` |
| **Agent** | Fetches data with preloaded skills | `weather-agent` + `weather-fetcher` |
| **Skill** | Creates output independently | `weather-svg-creator` |

[Learn more about the orchestration pattern →](/workflows/orchestration)

<SponsorCard />
