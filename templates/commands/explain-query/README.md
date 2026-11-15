# Explain Query

**Command** · Databases

Explains what a SQL query returns, how the database plans to run it and which parts will be slow, using the real plan if allowed.

## Install

```bash
npx workspacetemplates add explain-query
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/explain-query.md](claude-code/.claude/commands/explain-query.md) | `.claude/commands/explain-query.md` |
| Codex | [codex/home/.codex/prompts/explain-query.md](codex/home/.codex/prompts/explain-query.md) | `~/.codex/prompts/explain-query.md` |
| Cursor | [cursor/.cursor/skills/explain-query/SKILL.md](cursor/.cursor/skills/explain-query/SKILL.md) | `.cursor/skills/explain-query/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/explain-query.toml](gemini-cli/.gemini/commands/explain-query.toml) | `.gemini/commands/explain-query.toml` |
| GitHub Copilot | [copilot/.github/skills/explain-query/SKILL.md](copilot/.github/skills/explain-query/SKILL.md) | `.github/skills/explain-query/SKILL.md` |

## What it does

Reading a long query with several joins and subqueries is slow even for experts. This command breaks it into steps in plain words, then shows how the database will most likely run it.

If you allow it, it fetches the actual execution plan with EXPLAIN and points to the specific node that costs the most, such as a sequential scan over a large table.

## Use it when

- You inherited a query nobody can describe
- A report page takes seconds to load
- You need to review a query in a pull request
- Learning how joins and subqueries are executed

## What it can access

- Reads the query, schema and index definitions
- Runs EXPLAIN on a read-only connection only if you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/explain-query/
