import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'CC Best Practices',
  description: 'Comprehensive guide to Claude Code configuration, workflows, and best practices',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/claude-jumping.svg' }],
  ],
  themeConfig: {
    logo: '/claude-jumping.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Best Practices', link: '/best-practices/subagents' },
      { text: 'Implementation', link: '/implementation/commands' },
      {
        text: 'Workflows',
        items: [
          { text: 'Orchestration Pattern', link: '/workflows/orchestration' },
          { text: 'RPI Workflow', link: '/workflows/rpi' },
          { text: 'Cross-Model Workflow', link: '/workflows/cross-model' },
          { text: 'Agent Teams', link: '/workflows/agent-teams' },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Reports', link: '/reports/agent-command-skill' },
          { text: 'Tips & Tricks', link: '/tips/boris-13-tips-jan-26' },
          { text: 'Videos', link: '/videos/boris-y-combinator' },
          { text: 'Changelog', link: '/changelog/' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Day 0 - Setup', link: '/guide/day0' },
          { text: 'macOS Setup', link: '/guide/mac' },
          { text: 'Windows Setup', link: '/guide/windows' },
          { text: 'Linux Setup', link: '/guide/linux' },
        ]
      },
      {
        text: 'Best Practices',
        collapsed: true,
        items: [
          { text: 'Subagents', link: '/best-practices/subagents' },
          { text: 'Commands', link: '/best-practices/commands' },
          { text: 'Skills', link: '/best-practices/skills' },
          { text: 'Settings', link: '/best-practices/settings' },
          { text: 'Memory (CLAUDE.md)', link: '/best-practices/memory' },
          { text: 'MCP Servers', link: '/best-practices/mcp' },
          { text: 'Power-Ups', link: '/best-practices/power-ups' },
          { text: 'CLI Startup Flags', link: '/best-practices/cli-startup-flags' },
        ]
      },
      {
        text: 'Implementation Guides',
        collapsed: true,
        items: [
          { text: 'Commands', link: '/implementation/commands' },
          { text: 'Skills', link: '/implementation/skills' },
          { text: 'Subagents', link: '/implementation/subagents' },
          { text: 'Agent Teams', link: '/implementation/agent-teams' },
          { text: 'Scheduled Tasks', link: '/implementation/scheduled-tasks' },
        ]
      },
      {
        text: 'Workflows',
        collapsed: true,
        items: [
          { text: 'Orchestration Pattern', link: '/workflows/orchestration' },
          { text: 'RPI Workflow', link: '/workflows/rpi' },
          { text: 'Cross-Model Workflow', link: '/workflows/cross-model' },
          { text: 'Agent Teams', link: '/workflows/agent-teams' },
        ]
      },
      {
        text: 'Deep Dive Reports',
        collapsed: true,
        items: [
          { text: 'Agents vs Commands vs Skills', link: '/reports/agent-command-skill' },
          { text: 'Advanced Tool Use', link: '/reports/advanced-tool-use' },
          { text: 'Agent Memory', link: '/reports/agent-memory' },
          { text: 'SDK vs CLI System Prompts', link: '/reports/sdk-vs-cli-prompts' },
          { text: 'Global vs Project Settings', link: '/reports/global-vs-project-settings' },
          { text: 'Chrome vs DevTools MCP', link: '/reports/chrome-vs-devtools-mcp' },
          { text: 'Skills in Monorepos', link: '/reports/skills-monorepos' },
          { text: 'Usage & Rate Limits', link: '/reports/usage-rate-limits' },
          { text: 'LLM Day-to-Day Degradation', link: '/reports/llm-degradation' },
        ]
      },
      {
        text: 'Tips & Tricks',
        collapsed: true,
        items: [
          { text: '13 Tips - Jan 2026 (Boris)', link: '/tips/boris-13-tips-jan-26' },
          { text: '10 Tips - Feb 2026 (Boris)', link: '/tips/boris-10-tips-feb-26' },
          { text: '12 Ways to Customize - Feb 2026 (Boris)', link: '/tips/boris-12-tips-feb-26' },
          { text: '2 Tips - Mar 10, 2026 (Boris)', link: '/tips/boris-2-tips-mar-10-26' },
          { text: 'Skills Best Practices - Mar 2026 (Thariq)', link: '/tips/thariq-tips-mar-26' },
          { text: '2 Tips - Mar 25, 2026 (Boris)', link: '/tips/boris-2-tips-mar-25-26' },
          { text: '15 Hidden Features - Mar 2026 (Boris)', link: '/tips/boris-15-tips-mar-26' },
        ]
      },
      {
        text: 'Video Transcripts',
        collapsed: true,
        items: [
          { text: 'Cat - Every (Oct 2025)', link: '/videos/cat-every-oct-25' },
          { text: 'Boris x Ryan Peterman (Dec 2025)', link: '/videos/boris-ryan-peterman' },
          { text: 'Boris x Y Combinator (Feb 2026)', link: '/videos/boris-y-combinator' },
          { text: 'Boris x Lenny\'s Podcast (Feb 2026)', link: '/videos/boris-lennys-podcast' },
          { text: 'Boris x Pragmatic Engineer (Mar 2026)', link: '/videos/boris-pragmatic-engineer' },
          { text: 'Dex x MLOps Community (Mar 2026)', link: '/videos/dex-mlops-community' },
        ]
      },
      {
        text: 'Changelog',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/changelog/' },
          { text: 'Commands', link: '/changelog/commands' },
          { text: 'Skills', link: '/changelog/skills' },
          { text: 'Subagents', link: '/changelog/subagents' },
          { text: 'Settings', link: '/changelog/settings' },
          { text: 'Concepts', link: '/changelog/concepts' },
          { text: 'Dev Workflows', link: '/changelog/development-workflows' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pratik227/claude-code-best-practice' },
      { icon: 'x', link: 'https://x.com/PratikPatel_227' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.94s4.18 1.36 4.18 3.85c0 1.89-1.44 2.95-3.12 3.19z"/></svg>'
        },
        link: 'https://github.com/sponsors/pratik227',
        ariaLabel: 'Sponsor'
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    },

    footer: {
      message: 'Claude Code Best Practices Documentation',
      copyright: 'Made by <a href="https://github.com/pratik227">Pratik Patel</a> | <a href="https://github.com/sponsors/pratik227">Sponsor</a>'
    }
  },
  mermaid: {
    theme: 'neutral'
  }
}))
