# Log Session End

**Hook** · Workflow

A Claude Code hook that appends a timestamped line with the working folder and session id to a local log file each time a turn ends.

## Install

```bash
npx workspacetemplates add log-session-end
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

A plain log answers questions like when you last worked on a project and which session to resume. This Stop hook adds one line to session-log.txt inside your .claude folder at the end of every turn.

Each line holds an ISO timestamp, the working directory and the session id. The file stays on your machine, is never sent anywhere and can be deleted at any time.

## Use it when

- Keep a record of when you used the agent
- Find the session id to resume later
- Track which folders you worked in today
- Estimate how long a task took

## What it can access

- Appends a line to session-log.txt in your home .claude folder
- Reads the clock and the event data only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on Stop. Read it above before installing.

More: https://workspacetemplates.com/ai/log-session-end/
