# Block Curl Pipe Shell

**Hook** · Security

A Claude Code hook that refuses commands which pipe curl or wget output into sh or bash, or run a downloaded script through a command substitution.

## Install

```bash
npx workspacetemplates add block-curl-pipe-shell
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

One-line installers are convenient and risky, because the code runs before anyone reads it. This PreToolUse hook inspects each Bash command and stops a download that feeds a shell, whether through a pipe, process substitution or eval.

The agent is told to save the script to a file first, so you or it can read what it does. Plain curl calls that fetch JSON or files, and pipes into tools such as jq or tar, are left alone.

## Use it when

- Run an agent that may follow install instructions from a README
- Review any bootstrap script before it executes
- Work on a machine that holds production credentials
- Keep supply chain surprises out of a build box

## What it can access

- Inspects the command string of every Bash call
- Stops the call when a download would feed a shell
- Does not download, fetch or run anything itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-curl-pipe-shell/
