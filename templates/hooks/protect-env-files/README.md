# Protect Env Files

**Hook** · Security

A Claude Code hook that blocks the agent from reading or writing .env files and private keys such as .pem and id_rsa, while allowing .env.example.

## Install

```bash
npx workspacetemplates add protect-env-files
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Environment files and private keys hold the secrets that matter most, and an agent that reads them can echo them into logs, chats or commits. This hook checks the path of every Read, Edit and Write call.

It blocks .env and .env.* files, .pem, .key, .p12 and .pfx files, and SSH keys such as id_rsa and id_ed25519. Template files ending in .example, .sample or .template stay open.

## Use it when

- Keep production credentials out of the model context
- Share a repository with an agent safely
- Stop accidental edits to deployment keys
- Enforce a no-secrets policy for a team

## What it can access

- Reads the file path of each tool call
- Blocks matching paths; reads no file content

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Edit, Write, Read. Read it above before installing.

More: https://workspacetemplates.com/ai/protect-env-files/
