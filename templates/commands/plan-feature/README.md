# Plan Feature

**Command** · Workflow

Plans a feature before any code is written: files to touch, ordered steps, risks and the exact checks that prove it works.

## Install

```bash
npx workspacetemplates add plan-feature
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/plan-feature.md](claude-code/.claude/commands/plan-feature.md) | `.claude/commands/plan-feature.md` |
| Codex | [codex/home/.codex/prompts/plan-feature.md](codex/home/.codex/prompts/plan-feature.md) | `~/.codex/prompts/plan-feature.md` |
| Cursor | [cursor/.cursor/skills/plan-feature/SKILL.md](cursor/.cursor/skills/plan-feature/SKILL.md) | `.cursor/skills/plan-feature/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/plan-feature.toml](gemini-cli/.gemini/commands/plan-feature.toml) | `.gemini/commands/plan-feature.toml` |
| GitHub Copilot | [copilot/.github/skills/plan-feature/SKILL.md](copilot/.github/skills/plan-feature/SKILL.md) | `.github/skills/plan-feature/SKILL.md` |

## What it does

Starting to code before the shape is clear leads to rewrites. This command reads the relevant parts of the repository first and then lays out a plan grounded in the code that actually exists.

The plan is a short document you can edit or approve. No files change until you say go.

## Use it when

- You are about to start a feature that touches several modules
- You want a second opinion on the approach before spending hours
- A task needs to be split into small reviewable commits
- You need to hand a clear plan to a teammate or another agent

## What it can access

- Reads source files, tests and configuration
- Makes no changes until you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/plan-feature/
