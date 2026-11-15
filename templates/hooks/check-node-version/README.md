# Check Node Version

**Hook** · DevOps and cloud · node

A Claude Code hook that compares the running Node version with .nvmrc or package.json engines at session start and warns the agent on a mismatch.

## Install

```bash
npx workspacetemplates add check-node-version
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Builds and tests fail in odd ways when the shell runs a different Node major than the project expects. This SessionStart hook reads your .nvmrc, or the engines field in package.json when there is no .nvmrc, and compares it with the Node that Claude Code sees.

On a mismatch it prints one line that goes into the session context, so the agent knows to switch versions before installing or testing. When the versions agree, or no version is declared, it says nothing.

## Use it when

- Work across repos that pin different Node majors
- Avoid native module errors after a Node upgrade
- Start sessions in a team repo with an .nvmrc
- Explain strange install failures early

## What it can access

- Reads .nvmrc and package.json in the project folder
- Prints a warning into the session context and changes nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on SessionStart. Read it above before installing.

More: https://workspacetemplates.com/ai/check-node-version/
