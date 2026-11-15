# Block npm Publish

**Hook** · DevOps and cloud · node

A Claude Code hook that blocks npm publish, pnpm publish and yarn publish in the shell, so shipping a package always stays a human decision.

## Install

```bash
npx workspacetemplates add block-npm-publish
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

A published package cannot be fully taken back, and the registry keeps the version number forever. This hook watches Bash commands and refuses any publish call from npm, pnpm or yarn.

Dry runs are let through, so the agent can still check what would be packed. Everything else about releases, such as version bumps and changelogs, stays open to the agent.

## Use it when

- Prepare a release without risking an early publish
- Run an agent in a repo that owns a public package
- Keep registry tokens from being used by mistake
- Let the agent test npm pack but not push the result

## What it can access

- Reads each Bash command before it runs
- Blocks publish commands and runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-npm-publish/
