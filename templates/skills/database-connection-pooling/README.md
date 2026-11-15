# Database Connection Pooling

**Skill** · Databases

Sizes and configures database connection pools, and diagnoses exhausted pools, leaked connections and idle-in-transaction sessions.

## Install

```bash
npx workspacetemplates add database-connection-pooling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/database-connection-pooling/SKILL.md](claude-code/.claude/skills/database-connection-pooling/SKILL.md) | `.claude/skills/database-connection-pooling/SKILL.md` |
| Codex | [codex/.agents/skills/database-connection-pooling/SKILL.md](codex/.agents/skills/database-connection-pooling/SKILL.md) | `.agents/skills/database-connection-pooling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/database-connection-pooling/SKILL.md](cursor/.cursor/skills/database-connection-pooling/SKILL.md) | `.cursor/skills/database-connection-pooling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/database-connection-pooling/SKILL.md](gemini-cli/.gemini/skills/database-connection-pooling/SKILL.md) | `.gemini/skills/database-connection-pooling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/database-connection-pooling/SKILL.md](copilot/.github/skills/database-connection-pooling/SKILL.md) | `.github/skills/database-connection-pooling/SKILL.md` |

## What it does

When an app hangs under load with a healthy database, the cause is often the pool: too small, too large, or full of connections that were never returned. This skill finds out which.

It gives a sizing method based on cores and query time instead of a round number, and covers serverless and multi-instance setups where pools multiply.

## Use it when

- Requests time out waiting for a connection
- The database reports too many connections
- Sessions sit idle in transaction and hold locks
- You deploy many app instances or serverless functions against one database

## What it can access

- Reads application and configuration files
- Suggests read-only statements to run against the database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/database-connection-pooling/
