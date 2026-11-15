# MongoDB Schema Modeling

**Skill** · Databases · mongodb

Decides between embedding and referencing in MongoDB and shapes documents around the actual read and write patterns of the app.

## Install

```bash
npx workspacetemplates add mongodb-schema-modeling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/mongodb-schema-modeling/SKILL.md](claude-code/.claude/skills/mongodb-schema-modeling/SKILL.md) | `.claude/skills/mongodb-schema-modeling/SKILL.md` |
| Codex | [codex/.agents/skills/mongodb-schema-modeling/SKILL.md](codex/.agents/skills/mongodb-schema-modeling/SKILL.md) | `.agents/skills/mongodb-schema-modeling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/mongodb-schema-modeling/SKILL.md](cursor/.cursor/skills/mongodb-schema-modeling/SKILL.md) | `.cursor/skills/mongodb-schema-modeling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/mongodb-schema-modeling/SKILL.md](gemini-cli/.gemini/skills/mongodb-schema-modeling/SKILL.md) | `.gemini/skills/mongodb-schema-modeling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/mongodb-schema-modeling/SKILL.md](copilot/.github/skills/mongodb-schema-modeling/SKILL.md) | `.github/skills/mongodb-schema-modeling/SKILL.md` |

## What it does

In MongoDB the document shape is the performance plan. This skill starts from how the app reads and updates data, then chooses what to nest, what to link and what to precompute.

It also flags the usual traps: arrays that grow without bound, documents near the 16 MB limit and indexes that do not match the query.

## Use it when

- You are designing collections for a new service
- A document keeps growing and updates are getting slow
- You are moving a relational model into MongoDB
- Aggregation pipelines have become hard to read and slow

## What it can access

- Reads code and sample documents in your project
- Runs explain and read-only queries if you give it a connection

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mongodb-schema-modeling/
