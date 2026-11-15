# Trim Trailing Whitespace

**Hook** · Code quality

A Claude Code hook that removes spaces and tabs at the end of lines in each file the agent edits, keeping diffs free of invisible changes.

## Install

```bash
npx workspacetemplates add trim-trailing-whitespace
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Invisible trailing spaces create noisy diffs and fail some linters. After every Edit or Write this PostToolUse hook rewrites the file with those spaces and tabs removed from each line.

Windows line endings stay as they are. Markdown, diff and patch files are skipped because trailing spaces can carry meaning there, and files with null bytes are left alone.

## Use it when

- Keep whitespace noise out of pull requests
- Work in a repo without an editorconfig plugin
- Satisfy linters that reject trailing spaces
- Avoid cleanup commits

## What it can access

- Reads the edited file
- Rewrites that file only when trailing whitespace was found

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/trim-trailing-whitespace/
