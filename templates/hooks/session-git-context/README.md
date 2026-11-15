# Session Git Context

**Hook** · Git and releases

A Claude Code hook that gives each new session the branch, the five latest commits and the changed files as starting context, with no prompt needed.

## Install

```bash
npx workspacetemplates add session-git-context
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

A fresh session knows nothing about what happened yesterday. This SessionStart hook prints a short briefing that Claude Code places in context: the branch, the five newest commit subjects and a list of files with pending changes.

With that in hand the agent can pick up where the last commit left off instead of asking you to explain. In a folder that is not a Git repository the hook stays quiet.

## Use it when

- Resume work the next morning
- Start a session on a branch someone else pushed
- Let the agent see what changed recently without asking
- Open Claude Code in a repo you have not touched for weeks

## What it can access

- Runs git branch, git log and git status in the project folder
- Prints text into the session; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on SessionStart. Read it above before installing.

More: https://workspacetemplates.com/ai/session-git-context/
