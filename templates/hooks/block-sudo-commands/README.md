# Block Sudo Commands

**Hook** · Security

A Claude Code hook that blocks any Bash command starting with sudo or doas and tells the agent to hand the exact command to you for a manual run.

## Install

```bash
npx workspacetemplates add block-sudo-commands
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Root access should be a decision you make, not a side effect of a long task. This PreToolUse hook looks at the first word of every command in a chain and refuses sudo and doas, even after env assignments or time and nohup prefixes.

It also catches sudo tucked inside a sh -c string. The message asks the agent to print the command and the reason, so you can run it in your own terminal when it is truly needed.

## Use it when

- Run an agent on a laptop where sudo has no password prompt
- Keep package installs inside the user account
- Make elevated steps an explicit human choice
- Review system changes before they happen

## What it can access

- Reads the Bash command text before execution
- Refuses commands whose first word is sudo or doas
- Executes nothing and writes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-sudo-commands/
