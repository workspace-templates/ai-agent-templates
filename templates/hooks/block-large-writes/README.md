# Block Large Writes

**Hook** · Code quality

A Claude Code hook that rejects Write calls over a size limit, which catches runaway generated files before they land in your repository.

## Install

```bash
npx workspacetemplates add block-large-writes
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

A model that loops can paste a huge blob into a single file, such as a minified bundle or a repeated table. This PreToolUse hook measures the content of each Write call and refuses anything over 200 KB.

Set the MAX_WRITE_KB environment variable to move the limit. Smaller writes and Edit calls are untouched.

## Use it when

- Stop a stuck loop from filling a file with repeated text
- Keep pasted data dumps out of the repo
- Catch an agent writing a bundle by hand
- Add a cheap size cap on every new file

## What it can access

- Reads the content sent to the Write tool
- Blocks oversized writes; writes nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Write. Read it above before installing.

More: https://workspacetemplates.com/ai/block-large-writes/
