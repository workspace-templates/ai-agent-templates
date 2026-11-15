# Warn Debugger Statements

**Hook** · Code quality

A Claude Code hook that flags debugger, breakpoint() and pdb calls the agent leaves behind in JavaScript, Python and Ruby files after an edit.

## Install

```bash
npx workspacetemplates add warn-debugger-statements
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

A stray breakpoint hangs a test run or ships to production. After each Edit or Write this PostToolUse hook scans the changed file for debugger statements, Python breakpoint and pdb calls, and Ruby pry or byebug lines.

Comment lines are ignored. The message lists up to five lines with file and line number, and the agent removes them before moving on.

## Use it when

- Keep debug calls out of commits
- Avoid CI jobs that hang on a breakpoint
- Review agent output for leftovers automatically
- Work across JavaScript, Python and Ruby code

## What it can access

- Reads the file that was just edited
- Reports findings; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-debugger-statements/
