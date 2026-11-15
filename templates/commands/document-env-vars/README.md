# Document Env Vars

**Command** · DevOps and cloud

Finds every environment variable your code reads and writes an example env file plus a table of what each one does.

## Install

```bash
npx workspacetemplates add document-env-vars
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/document-env-vars.md](claude-code/.claude/commands/document-env-vars.md) | `.claude/commands/document-env-vars.md` |
| Codex | [codex/home/.codex/prompts/document-env-vars.md](codex/home/.codex/prompts/document-env-vars.md) | `~/.codex/prompts/document-env-vars.md` |
| Cursor | [cursor/.cursor/skills/document-env-vars/SKILL.md](cursor/.cursor/skills/document-env-vars/SKILL.md) | `.cursor/skills/document-env-vars/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/document-env-vars.toml](gemini-cli/.gemini/commands/document-env-vars.toml) | `.gemini/commands/document-env-vars.toml` |
| GitHub Copilot | [copilot/.github/skills/document-env-vars/SKILL.md](copilot/.github/skills/document-env-vars/SKILL.md) | `.github/skills/document-env-vars/SKILL.md` |

## What it does

New teammates lose an afternoon to a missing variable that nobody wrote down. This command searches the code, scripts and deployment files for every place the environment is read and builds the documentation from what it finds.

It marks which variables are required, which have defaults and which look like secrets, and it never copies real values from your own env file.

## Use it when

- Onboarding a developer who cannot start the app
- Before moving the service to a new host
- Your .env.example has drifted from what the code reads
- Auditing which variables hold secrets

## What it can access

- Reads source, scripts and config files
- Reads variable names from env files, not values
- Writes .env.example and docs after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/document-env-vars/
