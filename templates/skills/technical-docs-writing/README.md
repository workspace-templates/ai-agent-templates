# Technical Docs Writing

**Skill** · Documentation

Writes READMEs and how-to guides a stranger can follow, by running every step itself and cutting anything the reader does not need on first use.

## Install

```bash
npx workspacetemplates add technical-docs-writing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/technical-docs-writing/SKILL.md](claude-code/.claude/skills/technical-docs-writing/SKILL.md) | `.claude/skills/technical-docs-writing/SKILL.md` |
| Codex | [codex/.agents/skills/technical-docs-writing/SKILL.md](codex/.agents/skills/technical-docs-writing/SKILL.md) | `.agents/skills/technical-docs-writing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/technical-docs-writing/SKILL.md](cursor/.cursor/skills/technical-docs-writing/SKILL.md) | `.cursor/skills/technical-docs-writing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/technical-docs-writing/SKILL.md](gemini-cli/.gemini/skills/technical-docs-writing/SKILL.md) | `.gemini/skills/technical-docs-writing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/technical-docs-writing/SKILL.md](copilot/.github/skills/technical-docs-writing/SKILL.md) | `.github/skills/technical-docs-writing/SKILL.md` |

## What it does

Documentation fails when it describes what the author remembers, not what a new reader must do. This skill writes from the reader side: who they are, what they want done, and the shortest path from nothing to a working result.

It runs the commands it documents. A step that fails on a clean checkout gets fixed or removed before the doc is delivered.

## Use it when

- A project has no README, or one nobody trusts
- You are adding a feature that needs a how-to
- Onboarding takes a week because setup steps are missing
- An API or CLI needs a reference and a quick start

## What it can access

- Reads files in your project
- Creates or edits documentation files and runs the commands it documents

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/technical-docs-writing/
