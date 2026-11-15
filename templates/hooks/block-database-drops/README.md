# Block Database Drops

**Hook** · Databases

A Claude Code hook that stops shell commands containing DROP DATABASE, DROP TABLE, DROP SCHEMA or TRUNCATE, so SQL cleanup never runs unreviewed.

## Install

```bash
npx workspacetemplates add block-database-drops
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Agents like to reset a database when a migration misbehaves. This PreToolUse hook reads every Bash command and refuses the ones that carry a DROP or TRUNCATE statement, whether they come from psql, mysql, sqlite3 or a script argument.

The match is on the command text only, so a statement hidden in a separate SQL file is not seen. Use it next to a read-only database user for stronger protection.

## Use it when

- Let an agent run migrations against a shared dev database
- Work near data that has no recent backup
- Stop a reset script from emptying tables
- Review destructive SQL before it reaches a server

## What it can access

- Reads each Bash command before it runs
- Blocks matching commands and runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-database-drops/
