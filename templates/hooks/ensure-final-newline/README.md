# Ensure Final Newline

**Hook** · Code quality

A Claude Code hook that makes sure each edited text file ends with exactly one newline, matching the line endings the file already uses.

## Install

```bash
npx workspacetemplates add ensure-final-newline
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Many tools complain when a file has no newline at the end, and extra blank lines at the end show up in review. This PostToolUse hook fixes both after every Edit or Write.

It keeps CRLF for files that already use it, leaves empty and binary files alone, and skips diff, patch and minified files.

## Use it when

- Stop "no newline at end of file" warnings in diffs
- Keep POSIX tools happy with agent-written files
- Remove stacked blank lines at the end of a file
- Match the line endings of an existing file

## What it can access

- Reads the edited file
- Rewrites it only when the ending differs

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/ensure-final-newline/
