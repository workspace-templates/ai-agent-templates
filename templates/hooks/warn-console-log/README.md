# Warn Console Log

**Hook** · Frontend · javascript

A Claude Code hook that warns the agent when an edit adds console.log to a JavaScript, TypeScript, Vue or Svelte file, so debug output is not left behind.

## Install

```bash
npx workspacetemplates add warn-console-log
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Debug prints have a way of surviving into commits. This PostToolUse hook looks at the text each Edit or Write call adds, and when it contains console.log it sends the agent a message with the file and the line numbers.

The file has already been saved, so the message works as a nudge, not a block. Test, spec and stories files are skipped, since logging there is often deliberate.

## Use it when

- Keep debug prints out of production bundles
- Clean up after the agent traced a bug
- Review front-end diffs with less noise
- Push the team toward a real logger

## What it can access

- Reads the edited text and then the saved file to find line numbers
- Prints a warning and changes no file

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-console-log/
