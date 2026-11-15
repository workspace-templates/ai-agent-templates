# Warn Long Files

**Hook** · Code quality

A Claude Code hook that flags any edited source file longer than 500 lines, so the agent splits the code before the file gets unwieldy.

## Install

```bash
npx workspacetemplates add warn-long-files
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Agents tend to keep adding to the same file. This PostToolUse hook counts the lines of each edited source file and speaks up once the count passes the limit, which is 500 unless you set WARN_LINES.

Only code extensions are counted, and minified files are skipped. The message asks for a split by responsibility or a reason to leave it.

## Use it when

- Keep modules small as an agent adds features
- Enforce a soft size budget without a linter
- Spot god files early in a long session
- Prompt a split before review starts

## What it can access

- Reads the edited source file to count lines
- Reports a message; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-long-files/
