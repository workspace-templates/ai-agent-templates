# Block Dangerous Commands

**Hook** · Security

A Claude Code hook that refuses rm -rf on the root or home folder, force pushes to main or master, and DROP DATABASE before the shell runs.

## Install

```bash
npx workspacetemplates add block-dangerous-commands
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Most shell mistakes are cheap, but a few are not. This PreToolUse hook reads each Bash command and stops the ones that wipe a home folder, rewrite the main branch or drop a database.

The check is a plain pattern match on the command text. It is a guard rail for slips, not a sandbox, so keep your normal permission rules too.

## Use it when

- Run an agent with wide Bash permission
- Protect main from force pushes
- Work near a database you cannot restore
- Stop a typo from deleting your home folder

## What it can access

- Reads each shell command before it runs
- Blocks matching commands; runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-dangerous-commands/
