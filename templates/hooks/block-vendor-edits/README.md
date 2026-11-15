# Block Vendor Edits

**Hook** · Code quality

A Claude Code hook that denies edits to files inside node_modules, vendor and dist folders, so fixes go to your own source and not copies.

## Install

```bash
npx workspacetemplates add block-vendor-edits
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Changes made inside an installed package or a build folder disappear on the next install or build. This PreToolUse hook checks the path of each Edit or Write and refuses it when a folder named node_modules, vendor or dist is part of it.

The error text points the agent back at your own sources. Windows and Unix paths are both handled.

## Use it when

- Stop agents from patching a dependency in place
- Keep compiled output out of your diffs
- Work in a repo with a checked-in vendor folder
- Make bug fixes land in real source files

## What it can access

- Reads the file path of each edit
- Blocks matching paths; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/block-vendor-edits/
