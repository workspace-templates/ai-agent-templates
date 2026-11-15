# Inject Current Date

**Hook** · Workflow

A Claude Code hook that tells the agent today's date, weekday and time zone on each prompt, so date math and changelog entries come out right.

## Install

```bash
npx workspacetemplates add inject-current-date
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Models often guess the date from their training data. This UserPromptSubmit hook reads the system clock and adds one line to every prompt: the weekday, the date in year-month-day form and your time zone.

That is enough for correct release notes, migration file names, license years and phrases like 'last Friday'. The hook never reads your prompt text and sends nothing anywhere.

## Use it when

- Write changelog entries with the real date
- Name migration files with a timestamp prefix
- Ask for deadlines relative to today
- Update copyright years and expiry dates

## What it can access

- Reads the system clock
- Prints one line of context; touches no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on UserPromptSubmit. Read it above before installing.

More: https://workspacetemplates.com/ai/inject-current-date/
