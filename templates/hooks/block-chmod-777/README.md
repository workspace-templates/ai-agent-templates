# Block Chmod 777

**Hook** · Security

A Claude Code hook that refuses chmod calls giving everyone write access, such as 777, 666 or a+w, and suggests tighter modes like 755 and 644.

## Install

```bash
npx workspacetemplates add block-chmod-777
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

World-writable files are a common shortcut for a permission error and a common hole afterwards. This PreToolUse hook parses each chmod call and blocks any mode that lets other users write, in numeric or symbolic form, with or without -R.

Sticky shared folders such as 1777 are allowed, and so are modes like 755, 644 or g+w. When it blocks, the message names the mode and offers safer ones.

## Use it when

- Let an agent fix a permission denied error safely
- Deploy to a shared server with several accounts
- Keep upload folders from becoming writable by anyone
- Catch a recursive chmod on a whole project

## What it can access

- Parses chmod arguments out of each Bash command
- Blocks modes where the other-users write bit is set
- Never touches file permissions itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-chmod-777/
