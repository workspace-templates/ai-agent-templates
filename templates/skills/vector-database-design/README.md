# Vector Database Design

**Skill** · Data and AI

Chooses the index type, embedding dimensions, chunking and metadata filters for a vector store, with recall checked against a test set.

## Install

```bash
npx workspacetemplates add vector-database-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/vector-database-design/SKILL.md](claude-code/.claude/skills/vector-database-design/SKILL.md) | `.claude/skills/vector-database-design/SKILL.md` |
| Codex | [codex/.agents/skills/vector-database-design/SKILL.md](codex/.agents/skills/vector-database-design/SKILL.md) | `.agents/skills/vector-database-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/vector-database-design/SKILL.md](cursor/.cursor/skills/vector-database-design/SKILL.md) | `.cursor/skills/vector-database-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/vector-database-design/SKILL.md](gemini-cli/.gemini/skills/vector-database-design/SKILL.md) | `.gemini/skills/vector-database-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/vector-database-design/SKILL.md](copilot/.github/skills/vector-database-design/SKILL.md) | `.github/skills/vector-database-design/SKILL.md` |

## What it does

Most vector search problems come from decisions made early and never measured: chunk size, which embedding model, which index. This skill walks the agent through each choice and ends with a recall number rather than a hunch.

It treats metadata filtering as a first-class design question, since filters decide both correctness and speed in production.

## Use it when

- You are adding semantic search or retrieval to an app
- Search results look relevant but miss obvious matches
- Queries slow down as the collection grows
- You must filter by tenant, date or permission and still search by meaning

## What it can access

- Reads files and schema in your project
- May write a small evaluation script

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/vector-database-design/
