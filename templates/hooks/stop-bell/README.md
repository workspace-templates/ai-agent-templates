# Stop Bell

**Hook** · Workflow

Sounds a bell in your terminal at the end of every Claude turn, which lets you look away while a long task runs in the background.

## Install

```bash
npx workspacetemplates add stop-bell
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Waiting on a long refactor wastes attention. This Stop hook writes the bell character straight to your terminal when Claude ends its turn, which most terminals turn into a sound or a flashing tab.

It writes to the terminal device directly, because hook output is otherwise captured, and falls back to standard error when no terminal is available. It reads no files and has no side effects.

## Use it when

- Run long builds or refactors in the background
- Work in another window while the agent thinks
- Hear when a big task is finished
- Pair with a terminal that flashes on bell

## What it can access

- Writes one bell character to the terminal
- Reads nothing from the project

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on Stop. Read it above before installing.

More: https://workspacetemplates.com/ai/stop-bell/
