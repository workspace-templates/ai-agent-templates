# Block Git Reset Hard

**Hook** · Git and releases

A Claude Code hook that blocks git reset --hard and forced git clean in the shell, so uncommitted work is never wiped without you running it.

## Install

```bash
npx workspacetemplates add block-git-reset-hard
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Two git commands erase work that no commit holds: reset with the hard option and clean with force. This PreToolUse hook refuses both when the agent tries them in Bash.

A clean run with the dry-run flag still passes, since it only lists files. The message points the agent to stash or a scratch branch, which keep the work recoverable.

## Use it when

- Let an agent try risky fixes without losing your edits
- Protect untracked files such as local notes
- Work in a dirty tree on purpose
- Keep a safety net during large refactors

## What it can access

- Reads each Bash command before it runs
- Blocks matching commands and runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-git-reset-hard/
