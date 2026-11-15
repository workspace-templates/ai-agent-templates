# Block Force Push

**Hook** · Security

A Claude Code hook that stops git push --force, -f and --force-with-lease aimed at main or master, including bare pushes made from those branches.

## Install

```bash
npx workspacetemplates add block-force-push
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Rewriting shared history is the git mistake your teammates feel first. This PreToolUse hook reads each Bash command, finds git push calls carrying a force flag or a plus refspec, and refuses them when the target is main or master.

When a push names no branch at all, the hook opens .git/HEAD in the working folder to learn which branch is checked out. Force pushes to feature branches pass through untouched, so rebasing your own work stays easy.

## Use it when

- Let an agent rebase and push without risking trunk
- Protect main on a repo with no branch rules
- Stop a pasted force push from landing on master
- Keep release history linear and intact

## What it can access

- Looks at the text of each shell command before it runs
- Opens .git/HEAD in the working folder when no branch is named
- Only blocks; it never pushes or changes anything

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-force-push/
