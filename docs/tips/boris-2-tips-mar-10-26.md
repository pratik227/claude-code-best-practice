---
title: "Code Review & Test Time Compute — Tips from Boris Cherny"
description: "A summary of insights on code review and test time compute shared by Boris Cherny, creator of Claude Code, on March 10, 2026."
---

# Code Review & Test Time Compute — Tips from Boris Cherny

A summary of insights shared by Boris Cherny ([@bcherny](https://x.com/bcherny)), creator of Claude Code, on March 10, 2026.

---

## 1/ Introducing Code Review

New in Claude Code: **Code Review**. A team of agents runs a deep review on every PR.

- Built for Anthropic's own team first — code output per engineer is up **200% this year**, and reviews were the bottleneck
- Boris has been using it for a few weeks and found it catches many real bugs he would not have noticed otherwise
- When a PR opens, Claude dispatches a team of agents to hunt for bugs

::: info Why Code Review?
Code output per engineer is up 200% this year, and reviews were the bottleneck. Claude Code Review dispatches a team of agents to hunt for bugs on every PR.
:::

---

## 2/ Test Time Compute & Multiple Context Windows

Roughly, the more tokens you throw at a coding problem, the better the result. Boris calls this **test time compute**.

- Using **separate context windows** makes the result even better — this is what makes subagents work, and why one agent can cause bugs and another (using the same exact model) can find them
- Similar to engineering teams: if Boris causes a bug, his coworker reviewing the code might find it more reliably than he can
- In the limit, agents will probably write perfect bug-free code — until then, **multiple uncorrelated context windows** tends to be a good approach

::: tip Key Insight
Using separate context windows makes the result even better. One agent can cause bugs and another (using the same exact model) can find them — just like how a coworker reviewing your code catches bugs you missed.
:::

---

## Sources

- [Boris Cherny (@bcherny) on X — March 10, 2026](https://x.com/bcherny)
