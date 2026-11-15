# Microservice Boundaries

**Skill** · Backend and APIs

Finds real seams in a monolith, assigns data ownership, and proposes a migration order that extracts one service at a time with a clear reason.

## Install

```bash
npx workspacetemplates add microservice-boundaries
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/microservice-boundaries/SKILL.md](claude-code/.claude/skills/microservice-boundaries/SKILL.md) | `.claude/skills/microservice-boundaries/SKILL.md` |
| Codex | [codex/.agents/skills/microservice-boundaries/SKILL.md](codex/.agents/skills/microservice-boundaries/SKILL.md) | `.agents/skills/microservice-boundaries/SKILL.md` |
| Cursor | [cursor/.cursor/skills/microservice-boundaries/SKILL.md](cursor/.cursor/skills/microservice-boundaries/SKILL.md) | `.cursor/skills/microservice-boundaries/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/microservice-boundaries/SKILL.md](gemini-cli/.gemini/skills/microservice-boundaries/SKILL.md) | `.gemini/skills/microservice-boundaries/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/microservice-boundaries/SKILL.md](copilot/.github/skills/microservice-boundaries/SKILL.md) | `.github/skills/microservice-boundaries/SKILL.md` |

## What it does

Most failed service splits cut along technical layers or along the org chart instead of along the data. The result is services that must change together and call each other on every request. This skill has the agent look at coupling in the code and the database first.

It produces a short, evidence-based proposal: which module could move out, who owns which tables, what calls would become network calls, and in what order to extract. It also says when to stay a monolith.

## Use it when

- Someone proposes breaking up the monolith and you need evidence
- One module deploys far more often than the rest
- Two teams block each other in the same code
- You need to know which tables each part of the system really uses

## What it can access

- Reads source files, schema files and git history
- Runs read-only git commands and searches
- Changes code only after you approve a step

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/microservice-boundaries/
