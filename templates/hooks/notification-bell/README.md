# Notification Bell

**Hook** · Workflow

Beeps in your terminal whenever Claude Code asks for permission or waits on you, so an agent that is blocked never sits unnoticed.

## Install

```bash
npx workspacetemplates add notification-bell
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

An agent that waits for a yes can sit idle for an hour. This Notification hook fires whenever Claude Code raises an alert, such as a permission request or a long idle wait, and sounds the terminal bell.

The bell character goes to the terminal device itself, with standard error as a fallback. It does not read the alert text and it never blocks anything.

## Use it when

- Leave an agent running with approvals on
- Know when a permission request is waiting
- Stay in another window without missing a prompt
- Run several sessions and tell when one needs you

## What it can access

- Writes one bell character to the terminal
- Reads nothing from the project

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on Notification. Read it above before installing.

More: https://workspacetemplates.com/ai/notification-bell/
