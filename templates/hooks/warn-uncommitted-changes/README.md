# Warn Uncommitted Changes

**Hook** · Git and releases

A Claude Code hook that shows which files are still uncommitted whenever the agent finishes a turn, so finished work is not left unsaved.

## Install

```bash
npx workspacetemplates add warn-uncommitted-changes
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

It is easy to close a terminal with edits that never reached a commit. This Stop hook checks the working tree at the end of every turn and, when files are modified or untracked, shows you a short list of them.

The notice goes to you as a system message and never blocks the agent, so it cannot cause a loop. A clean tree or a folder without Git produces no output.

## Use it when

- Finish a task and want a reminder to commit
- Run long agent sessions that touch many files
- Avoid losing work when you close the terminal
- Check that a turn left only the files you expected

## What it can access

- Runs git status in the project folder
- Prints a notice; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on Stop. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-uncommitted-changes/
