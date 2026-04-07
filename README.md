# CC Best Practices

Claude Code Best Practices documentation site built with [VitePress](https://vitepress.dev/).

## Quick Start

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

Configured for Netlify via `netlify.toml`. Push to main to auto-deploy.

## Structure

```
docs/
├── guide/              # Getting started & setup
├── best-practices/     # Core concepts (subagents, commands, skills, settings, memory, MCP, power-ups, CLI flags)
├── implementation/     # Step-by-step implementation guides
├── workflows/          # Orchestration, RPI, cross-model, agent teams
├── reports/            # Deep dive analysis reports
├── tips/               # Tips & tricks from Boris Cherny & team
├── videos/             # Video transcript summaries
├── changelog/          # Version tracking & verification
└── .vitepress/
    ├── config.mjs      # VitePress config
    └── theme/           # Custom theme, components, CSS
```

## Tech Stack

- **VitePress** -- Static site generator
- **@iconify/vue** -- Tabler icons
- **vitepress-plugin-mermaid** -- Flowcharts & diagrams
- **Custom Vue components** -- SponsorCard, StatsGrid, ConceptTable, FeatureCard, BadgeRow

## Links

- [GitHub](https://github.com/pratik227/claude-code-best-practice)
- [Twitter](https://x.com/PratikPatel_227)
- [Sponsor](https://github.com/sponsors/pratik227)
