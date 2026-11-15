# Check Auth

**Command** · Security

Walks every route and handler in an area and confirms each one checks who the caller is and what they may do.

## Install

```bash
npx workspacetemplates add check-auth
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/check-auth.md](claude-code/.claude/commands/check-auth.md) | `.claude/commands/check-auth.md` |
| Codex | [codex/home/.codex/prompts/check-auth.md](codex/home/.codex/prompts/check-auth.md) | `~/.codex/prompts/check-auth.md` |
| Cursor | [cursor/.cursor/skills/check-auth/SKILL.md](cursor/.cursor/skills/check-auth/SKILL.md) | `.cursor/skills/check-auth/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/check-auth.toml](gemini-cli/.gemini/commands/check-auth.toml) | `.gemini/commands/check-auth.toml` |
| GitHub Copilot | [copilot/.github/skills/check-auth/SKILL.md](copilot/.github/skills/check-auth/SKILL.md) | `.github/skills/check-auth/SKILL.md` |

## What it does

Most access-control bugs are a single missing check on one forgotten route. This command lists every handler in the area you name and, for each, shows where authentication happens and where authorization is decided.

It pays special attention to object ownership, since fetching a record by id without checking the owner is the classic leak. The output is a matrix you can review in minutes.

## Use it when

- After adding new endpoints or admin screens
- Before opening an API to outside clients
- When roles or tenants were added to an existing app
- During a review of a multi-tenant feature

## What it can access

- Reads route, middleware and model code
- Edits only after you approve a fix

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/check-auth/
