# Windows Setup

[Back to Day 0](./day0)

---

## Node.js

1. Go to [nodejs.org](https://nodejs.org)
2. Click the **"Download Node.js (LTS)"** button -- this downloads the `.msi` installer
3. Run the `.msi` file and click **Next** through the wizard
4. Accept the defaults, click **Install**, wait for it to finish

## Verify Node.js

Open a **new** terminal (PowerShell or Windows Terminal) and run:

```powershell
node --version
npm --version
```

## Install Claude Code

```powershell
npm install -g @anthropic-ai/claude-code
```

::: warning Permission Error?
If you get a permission error, run your terminal as **Administrator** (right-click > Run as administrator).
:::

## Verify

```powershell
claude --version
```

::: tip Next Step
Head back to [Day 0](./day0) for authentication setup.
:::
