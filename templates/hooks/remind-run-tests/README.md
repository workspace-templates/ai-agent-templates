# Remind Run Tests

**Hook** · Testing

A Claude Code hook that holds back the end of a turn once, asking the agent to run the test suite when source files changed since the last commit.

## Install

```bash
npx workspacetemplates add remind-run-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |
| Codex | [codex/.codex/hooks.json](codex/.codex/hooks.json) | `.codex/hooks.json` (merge) |

## What it does

Agents sometimes finish a change and declare victory without running anything. This Stop hook asks git which files differ from the last commit, ignores tests and non-code files, and when real source files remain it sends the agent back to run the suite.

It speaks only once per stop, because it respects the stop_hook_active flag, so there is no endless loop. Outside a git repository, or with a clean tree, it stays silent.

## Use it when

- Want proof that tests ran before a task is called done
- Hand an agent a wide refactor across many modules
- Work in a repo with a fast test command
- Replace a reminder you keep typing by hand

## What it can access

- Runs git status in the working folder
- Lists changed file names only, never contents
- Asks the agent to continue; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on Stop. Read it above before installing.

More: https://workspacetemplates.com/ai/remind-run-tests/
