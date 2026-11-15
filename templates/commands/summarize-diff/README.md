# Summarize Diff

**Command** · Workflow

Explains a diff in plain language for a product manager or support lead: what changed, who is affected and what could go wrong.

## Install

```bash
npx workspacetemplates add summarize-diff
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/summarize-diff.md](claude-code/.claude/commands/summarize-diff.md) | `.claude/commands/summarize-diff.md` |
| Codex | [codex/home/.codex/prompts/summarize-diff.md](codex/home/.codex/prompts/summarize-diff.md) | `~/.codex/prompts/summarize-diff.md` |
| Cursor | [cursor/.cursor/skills/summarize-diff/SKILL.md](cursor/.cursor/skills/summarize-diff/SKILL.md) | `.cursor/skills/summarize-diff/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/summarize-diff.toml](gemini-cli/.gemini/commands/summarize-diff.toml) | `.gemini/commands/summarize-diff.toml` |
| GitHub Copilot | [copilot/.github/skills/summarize-diff/SKILL.md](copilot/.github/skills/summarize-diff/SKILL.md) | `.github/skills/summarize-diff/SKILL.md` |

## What it does

Engineers write for engineers, and a pull request description full of function names tells a product manager nothing. This command reads the change and describes it by its effect on users and the business.

It avoids jargon, says when something is a risk and flags anything it could not understand from the code alone.

## Use it when

- A product manager wants to know what a pull request does
- You are writing release notes for customers
- Support needs to know what changed before a complaint arrives
- A stakeholder must approve a change without reading code

## What it can access

- Reads diffs, commit messages and optionally a pull request through gh
- Makes no changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/summarize-diff/
