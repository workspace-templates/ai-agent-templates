# Block Env in Git Add

**Hook** · Security

A Claude Code hook that stops git add from staging .env files, private keys and credential files, and checks wildcard adds against .gitignore.

## Install

```bash
npx workspacetemplates add block-env-in-git-add
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Once a secret is committed it lives in history for good. This PreToolUse hook reads each git add command and refuses names such as .env, .env.production, id_rsa, server.pem or credentials.json. Template files like .env.example are fine.

For broad commands such as git add . or git add -A, it lists the working folder and asks git check-ignore about every secret-looking file. Only files that are not ignored trigger the block.

## Use it when

- Let an agent stage and commit on its own
- Work in a repo whose .gitignore is incomplete
- Keep service account keys out of pull requests
- Guard a project that uses local dotenv files

## What it can access

- Inspects git add commands and lists the working folder
- Runs git check-ignore, which only reads repository rules
- Blocks the add; stages and commits nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Bash. Read it above before installing.

More: https://workspacetemplates.com/ai/block-env-in-git-add/
