# Secrets Hunter

**Subagent** · Security

Read-only subagent that searches the working tree and git history for leaked keys, tokens, and credentials and reports each with where it lives.

## Install

```bash
npx workspacetemplates add secrets-hunter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/secrets-hunter.md](claude-code/.claude/agents/secrets-hunter.md) | `.claude/agents/secrets-hunter.md` |
| Codex | [codex/.codex/agents/secrets-hunter.toml](codex/.codex/agents/secrets-hunter.toml) | `.codex/agents/secrets-hunter.toml` |
| Cursor | [cursor/.cursor/agents/secrets-hunter.md](cursor/.cursor/agents/secrets-hunter.md) | `.cursor/agents/secrets-hunter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/secrets-hunter.md](gemini-cli/.gemini/agents/secrets-hunter.md) | `.gemini/agents/secrets-hunter.md` |
| GitHub Copilot | [copilot/.github/agents/secrets-hunter.agent.md](copilot/.github/agents/secrets-hunter.agent.md) | `.github/agents/secrets-hunter.agent.md` |

## What it does

A key committed once stays in history long after the file is cleaned. This subagent searches both the current files and past commits for credentials, judges which hits are real, and tells you what to rotate and in what order.

It never prints a full secret. Each finding shows the location, the kind of credential, and a masked preview, so the report itself is safe to share.

## Use it when

- Before open sourcing or sharing a repository
- A contractor had access and you want to check what they could see
- A secret scanner alert fired and you need to confirm it
- You are cleaning up after an accidental commit of a .env file

## What it can access

- Reads the working tree and the full git history
- Runs read-only grep and git commands, no network calls

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/secrets-hunter/
