# Block Git No Verify

**Hook** · Git and releases

A Claude Code hook that blocks git commit and git push calls using --no-verify, so pre-commit and pre-push checks always run.

## Install

```bash
npx workspacetemplates add block-git-no-verify
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

When a pre-commit hook fails, an agent may try to get past it with a flag. This hook reads each Bash command and refuses any git call that carries --no-verify, plus the short -n form on commit.

The push flag -n means a dry run in git, so it is left alone. Text inside quotes, such as a commit message that mentions the flag, is ignored.

## Use it when

- Make sure lint and tests run before every commit
- Stop the agent from bypassing a failing check
- Enforce team hooks on local work
- Keep secret scanners in the commit path

## What it can access

- Reads each Bash command before it runs
- Blocks matching commands and runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-git-no-verify/
