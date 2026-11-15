# Warn Skipped Tests

**Hook** · Testing · javascript

Claude Code hook that flags an edit to a JavaScript or TypeScript test file when it adds .skip, .only, xit, xdescribe, fit or fdescribe.

## Install

```bash
npx workspacetemplates add warn-skipped-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

A quiet way to turn a red test green is to switch it off. This PostToolUse hook inspects edits to test files, counts the skip and focus markers in the new text against the old text, and complains when there are more than before.

The check applies to files named .test or .spec with a JavaScript or TypeScript extension, and to anything inside a __tests__ folder. The agent gets the warning right after the edit and must restore the test or explain.

## Use it when

- Ask an agent to make a failing suite pass
- Stop a leftover .only from hiding the rest of the tests
- Review test changes made while you were away
- Keep a Jest or Vitest suite honest

## What it can access

- Reads the edited text sent with each Edit, MultiEdit or Write
- Only looks at test file names and test markers
- Reports back to the agent; changes no file

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write, MultiEdit. Read it above before installing.

More: https://workspacetemplates.com/ai/warn-skipped-tests/
