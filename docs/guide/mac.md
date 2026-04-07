# macOS Setup

[Back to Day 0](./day0)

---

## Terminal

Open Terminal (press `Cmd + Space`, type "Terminal", hit Enter).

## Homebrew

Check if Homebrew is already installed:

```bash
brew --version
```

If you get "command not found", install Homebrew first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install Claude Code

```bash
brew install --cask claude-code
```

## Verify

```bash
claude --version
```

::: tip Next Step
Head back to [Day 0](./day0) for authentication setup.
:::
