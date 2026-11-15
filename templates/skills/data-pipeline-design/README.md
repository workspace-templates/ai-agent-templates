# Data Pipeline Design

**Skill** · Data and AI

Designs idempotent, testable batch pipelines with safe backfills and data quality checks. Use it when planning or reviewing a scheduled data job.

## Install

```bash
npx workspacetemplates add data-pipeline-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/data-pipeline-design/SKILL.md](claude-code/.claude/skills/data-pipeline-design/SKILL.md) | `.claude/skills/data-pipeline-design/SKILL.md` |
| Codex | [codex/.agents/skills/data-pipeline-design/SKILL.md](codex/.agents/skills/data-pipeline-design/SKILL.md) | `.agents/skills/data-pipeline-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/data-pipeline-design/SKILL.md](cursor/.cursor/skills/data-pipeline-design/SKILL.md) | `.cursor/skills/data-pipeline-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/data-pipeline-design/SKILL.md](gemini-cli/.gemini/skills/data-pipeline-design/SKILL.md) | `.gemini/skills/data-pipeline-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/data-pipeline-design/SKILL.md](copilot/.github/skills/data-pipeline-design/SKILL.md) | `.github/skills/data-pipeline-design/SKILL.md` |

## What it does

A pipeline that cannot be rerun safely will eventually double-count a day of revenue. This skill designs batch jobs around three properties: the same input always yields the same output, any date range can be reprocessed, and bad data is stopped before it reaches consumers.

The agent produces a design with named stages, partition keys, checks and a backfill procedure, or reviews an existing job against those properties.

## Use it when

- You are about to schedule a new daily or hourly batch job
- A job failed halfway and rerunning it produced duplicate rows
- You need to reprocess three months after a bug fix
- A downstream report broke because upstream data arrived late or malformed

## What it can access

- Reads the existing job code and configuration
- Writes design notes and pipeline code when asked

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/data-pipeline-design/
