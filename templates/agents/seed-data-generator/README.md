# Seed Data Generator

**Subagent** · Databases

Subagent that writes realistic, deterministic seed scripts for your schema, with valid relations and a fixed random seed.

## Install

```bash
npx workspacetemplates add seed-data-generator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/seed-data-generator.md](claude-code/.claude/agents/seed-data-generator.md) | `.claude/agents/seed-data-generator.md` |
| Codex | [codex/.codex/agents/seed-data-generator.toml](codex/.codex/agents/seed-data-generator.toml) | `.codex/agents/seed-data-generator.toml` |
| Cursor | [cursor/.cursor/agents/seed-data-generator.md](cursor/.cursor/agents/seed-data-generator.md) | `.cursor/agents/seed-data-generator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/seed-data-generator.md](gemini-cli/.gemini/agents/seed-data-generator.md) | `.gemini/agents/seed-data-generator.md` |
| GitHub Copilot | [copilot/.github/agents/seed-data-generator.agent.md](copilot/.github/agents/seed-data-generator.agent.md) | `.github/agents/seed-data-generator.agent.md` |

## What it does

Seed data like "test1, test2, test3" hides the bugs that real data exposes: long names, empty relations, old dates and uneven distributions. This subagent reads your schema and writes a script that produces varied but plausible rows, in the right order for your foreign keys.

The script is deterministic, so every developer and every CI run gets the same database. It also marks synthetic rows clearly so they can never be mistaken for real customers.

## Use it when

- A new developer needs a working local database in one command
- You want demo data that looks real but contains nothing private
- CI needs the same fixtures on every run
- You need a large dataset to test pagination or query speed

## What it can access

- Reads migrations and models in your project
- Writes a seed script
- Runs it against a local or test database only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/seed-data-generator/
