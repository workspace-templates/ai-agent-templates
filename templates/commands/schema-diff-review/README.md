# Schema Diff Review

**Command** · Databases

Reviews a schema change or migration diff for risk, missing indexes and rollback, and returns a verdict with line references.

## Install

```bash
npx workspacetemplates add schema-diff-review
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/schema-diff-review.md](claude-code/.claude/commands/schema-diff-review.md) | `.claude/commands/schema-diff-review.md` |
| Codex | [codex/home/.codex/prompts/schema-diff-review.md](codex/home/.codex/prompts/schema-diff-review.md) | `~/.codex/prompts/schema-diff-review.md` |
| Cursor | [cursor/.cursor/skills/schema-diff-review/SKILL.md](cursor/.cursor/skills/schema-diff-review/SKILL.md) | `.cursor/skills/schema-diff-review/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/schema-diff-review.toml](gemini-cli/.gemini/commands/schema-diff-review.toml) | `.gemini/commands/schema-diff-review.toml` |
| GitHub Copilot | [copilot/.github/skills/schema-diff-review/SKILL.md](copilot/.github/skills/schema-diff-review/SKILL.md) | `.github/skills/schema-diff-review/SKILL.md` |

## What it does

Schema changes are the riskiest part of a pull request because they cannot be undone as easily as code. This command reads the diff and the schema around it, then judges it the way a careful database engineer would.

You get a verdict of approve, change or block, each finding tied to a file and line, and a plan for how to roll back if the deploy goes wrong.

## Use it when

- A pull request contains a migration file
- You are about to run a schema change on a large table
- A teammate changed an ORM model and you want the SQL impact
- You want a second opinion on foreign keys and constraints

## What it can access

- Reads the git diff, migrations and models
- Makes no changes until you ask for fixes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/schema-diff-review/
