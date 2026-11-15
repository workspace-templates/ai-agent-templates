# Validate JSON After Edit

**Hook** · Code quality

A Claude Code hook that parses every edited .json file and sends the parser error back to the agent when the syntax is broken.

## Install

```bash
npx workspacetemplates add validate-json-after-edit
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

One missing comma in package.json or a data file breaks builds in confusing ways. This PostToolUse hook runs the built-in JSON parser on any .json file the agent just changed and reports the exact parser message if it fails.

Files that allow comments, such as tsconfig and jsconfig, are skipped so they do not raise false alarms.

## Use it when

- Edit package.json or config files with an agent
- Maintain data files like fixtures and translations
- Catch trailing commas right after they appear
- Avoid a failed install caused by a typo

## What it can access

- Reads the edited .json file
- Reports parse errors; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/validate-json-after-edit/
