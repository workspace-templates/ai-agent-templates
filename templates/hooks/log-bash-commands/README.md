# Log Bash Commands

**Hook** · Workflow

A Claude Code hook that appends every shell command the agent runs to .claude/command-log.txt with a timestamp, for review afterward.

## Install

```bash
npx workspacetemplates add log-bash-commands
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

When an agent works for a while it is hard to remember what it ran. This PreToolUse hook writes each Bash command to a plain text log next to your project settings.

Each line holds an ISO timestamp and the command as a JSON string, so multi-line commands stay on one line. Nothing leaves your machine.

## Use it when

- Audit what an agent ran during a long session
- Reconstruct the steps that fixed a problem
- Review commands before you trust a workflow
- Keep a record for a team or compliance

## What it can access

- Reads each shell command
- Writes to .claude/command-log.txt

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/log-bash-commands/
