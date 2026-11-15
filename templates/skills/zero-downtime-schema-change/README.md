# Zero Downtime Schema Change

**Skill** · Databases

Plans schema changes as expand, migrate and contract steps with batched backfills, so old and new code both work during every deploy.

## Install

```bash
npx workspacetemplates add zero-downtime-schema-change
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/zero-downtime-schema-change/SKILL.md](claude-code/.claude/skills/zero-downtime-schema-change/SKILL.md) | `.claude/skills/zero-downtime-schema-change/SKILL.md` |
| Codex | [codex/.agents/skills/zero-downtime-schema-change/SKILL.md](codex/.agents/skills/zero-downtime-schema-change/SKILL.md) | `.agents/skills/zero-downtime-schema-change/SKILL.md` |
| Cursor | [cursor/.cursor/skills/zero-downtime-schema-change/SKILL.md](cursor/.cursor/skills/zero-downtime-schema-change/SKILL.md) | `.cursor/skills/zero-downtime-schema-change/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/zero-downtime-schema-change/SKILL.md](gemini-cli/.gemini/skills/zero-downtime-schema-change/SKILL.md) | `.gemini/skills/zero-downtime-schema-change/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/zero-downtime-schema-change/SKILL.md](copilot/.github/skills/zero-downtime-schema-change/SKILL.md) | `.github/skills/zero-downtime-schema-change/SKILL.md` |

## What it does

A migration that locks a big table or breaks the running version takes the site down. This skill has the agent split each change into steps that are individually safe and that you can roll back.

Backfills run in small batches with pauses, and the final destructive step waits until nothing reads the old shape.

## Use it when

- You must rename or retype a column on a busy table
- A migration would add a NOT NULL column or an index to a huge table
- Deploys run old and new code side by side
- You need a plan the on-call person can follow and reverse

## What it can access

- Reads your code and migration history
- Writes migration files and scripts, and does not run them against production

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/zero-downtime-schema-change/
