# Warn New Todos

**Hook** · Code quality

A Claude Code hook that reports to-do and fix-me marker comments the agent just added, so unfinished work gets finished or called out.

## Install

```bash
npx workspacetemplates add warn-new-todos
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

An agent in a hurry may leave a marker comment instead of doing the hard part. Once a change is saved, this PostToolUse hook compares the text that went in with the text that came out and lists any to-do or fix-me lines that are new.

Markers already present are not counted when an edit only moves them. Whole-file writes list every marker in the content, since the old text is not available.

## Use it when

- Catch placeholders left in finished code
- Audit agent output without reading every diff
- Keep a project free of new fix-me notes
- Make unfinished work visible in the session

## What it can access

- Reads the text of each edit from the event
- Reports findings; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-new-todos/
