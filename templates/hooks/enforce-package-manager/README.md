# Enforce Package Manager

**Hook** · Workflow · node

A Claude Code hook that blocks npm and npx when the project has a pnpm, Yarn or Bun lockfile, and tells the agent which tool to use instead.

## Install

```bash
npx workspacetemplates add enforce-package-manager
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Running npm install in a pnpm repo creates a second lockfile and a node_modules tree nobody asked for. This PreToolUse hook reads each shell command and, when it starts with npm or npx, looks for the lockfile that shows which manager the project uses.

A pnpm-lock.yaml, yarn.lock or bun lockfile triggers exit code 2 and a message naming the right tool and its runner. If a package-lock.json is present, or no lockfile exists, npm is allowed.

## Use it when

- Work in a pnpm or Yarn monorepo
- Stop duplicate lockfiles from appearing in diffs
- Onboard an agent to a repo with a strict tooling choice
- Keep CI installs reproducible

## What it can access

- Reads the shell command and checks for lockfiles in the project folder
- Blocks matching commands; runs nothing itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/enforce-package-manager/
