# Block Secrets in Edits

**Hook** · Security

A Claude Code hook that stops edits and new files containing API keys, tokens or private keys before they reach your repository.

## Install

```bash
npx workspacetemplates add block-secrets-in-edits
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Agents sometimes paste a key they were shown into source code. This PreToolUse hook scans the text of every Edit and Write for common key shapes and refuses the change.

It looks for AWS access keys, GitHub tokens, OpenAI-style sk- keys, Slack tokens, Google API keys and PEM private key headers. The block message tells the agent to use an environment variable.

## Use it when

- Keep keys out of commits
- Work on a project that has real credentials nearby
- Run an agent with broad write permission
- Add a cheap safety net before a public repository

## What it can access

- Reads the text of each edit the agent proposes
- Blocks the edit; changes no files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/block-secrets-in-edits/
