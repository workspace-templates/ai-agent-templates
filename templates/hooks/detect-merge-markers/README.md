# Detect Merge Markers

**Hook** · Git and releases

A Claude Code hook that blocks an edit when Git conflict markers are still sitting in the file the agent just wrote or changed.

## Install

```bash
npx workspacetemplates add detect-merge-markers
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Agents sometimes resolve a merge conflict halfway and leave the angle-bracket lines behind. This PostToolUse hook opens the file that was just edited and looks for a line starting with seven less-than signs and another starting with seven greater-than signs.

When both are present it exits with code 2, which feeds the message back to the agent so it cleans the file before continuing. Files over 2 MB, missing files and files with no markers pass without a sound.

## Use it when

- Rebase or merge with an agent doing the conflict fixes
- Catch a half-resolved file before it is committed
- Keep a broken build out of a pull request
- Review a branch that was recently merged

## What it can access

- Reads the file the agent just edited
- Exit code 2 sends a message to the agent; nothing is changed on disk

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/detect-merge-markers/
