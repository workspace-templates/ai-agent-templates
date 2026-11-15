# Inject Git Branch

**Hook** · Git and releases

A Claude Code hook that adds the current Git branch and a count of uncommitted files to every prompt you send, so the agent always knows where it is.

## Install

```bash
npx workspacetemplates add inject-git-branch
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Long sessions drift: you switch branches in another terminal and the agent keeps assuming the old one. This UserPromptSubmit hook runs two quick Git queries before each prompt and prints one line that Claude Code adds to the context.

The line names the branch, or the short commit when HEAD is detached, and says how many files are modified or untracked. Outside a Git repository it prints nothing.

## Use it when

- Switch branches often during one session
- Ask for commit messages that should name the branch
- Stop the agent from assuming it is on main
- Work in several worktrees at once

## What it can access

- Runs git branch and git status in the project folder
- Writes one line of context; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on UserPromptSubmit. Read it above before installing.

More: https://workspacetemplates.com/ai/inject-git-branch/
