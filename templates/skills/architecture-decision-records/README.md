# Architecture Decision Records

**Skill** · Documentation

Writes architecture decision records that capture the context, the options weighed, the decision and its consequences in a short, numbered file.

## Install

```bash
npx workspacetemplates add architecture-decision-records
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/architecture-decision-records/SKILL.md](claude-code/.claude/skills/architecture-decision-records/SKILL.md) | `.claude/skills/architecture-decision-records/SKILL.md` |
| Codex | [codex/.agents/skills/architecture-decision-records/SKILL.md](codex/.agents/skills/architecture-decision-records/SKILL.md) | `.agents/skills/architecture-decision-records/SKILL.md` |
| Cursor | [cursor/.cursor/skills/architecture-decision-records/SKILL.md](cursor/.cursor/skills/architecture-decision-records/SKILL.md) | `.cursor/skills/architecture-decision-records/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/architecture-decision-records/SKILL.md](gemini-cli/.gemini/skills/architecture-decision-records/SKILL.md) | `.gemini/skills/architecture-decision-records/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/architecture-decision-records/SKILL.md](copilot/.github/skills/architecture-decision-records/SKILL.md) | `.github/skills/architecture-decision-records/SKILL.md` |

## What it does

Six months after a technical choice, nobody remembers why the team picked it, and the same debate starts again. An architecture decision record (ADR) is a one-page answer: what forced the decision, what else was considered, what was chosen and what it will cost.

This skill drafts the record from the code, the discussion and your constraints, keeps it short, and files it in a numbered folder so the history stays readable.

## Use it when

- The team just chose a database, framework or API style
- A new hire asks why something is built the way it is
- You are about to reverse an earlier decision and need its reasoning
- A design review ended with agreement but no written record

## What it can access

- Reads project files and docs for context
- Creates one markdown file and edits the status of the record it supersedes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/architecture-decision-records/
