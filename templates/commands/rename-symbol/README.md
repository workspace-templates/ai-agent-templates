# Rename Symbol

**Command** · Code quality

Renames a function, class or variable everywhere, including strings, docs and tests, then verifies the build still passes.

## Install

```bash
npx workspacetemplates add rename-symbol
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/rename-symbol.md](claude-code/.claude/commands/rename-symbol.md) | `.claude/commands/rename-symbol.md` |
| Codex | [codex/home/.codex/prompts/rename-symbol.md](codex/home/.codex/prompts/rename-symbol.md) | `~/.codex/prompts/rename-symbol.md` |
| Cursor | [cursor/.cursor/skills/rename-symbol/SKILL.md](cursor/.cursor/skills/rename-symbol/SKILL.md) | `.cursor/skills/rename-symbol/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/rename-symbol.toml](gemini-cli/.gemini/commands/rename-symbol.toml) | `.gemini/commands/rename-symbol.toml` |
| GitHub Copilot | [copilot/.github/skills/rename-symbol/SKILL.md](copilot/.github/skills/rename-symbol/SKILL.md) | `.github/skills/rename-symbol/SKILL.md` |

## What it does

A rename that misses one reference becomes a runtime error on a rarely used path. This command finds every use, including those a compiler cannot see: string keys, config files, docs, SQL and templates.

It separates the matches that are really the symbol from lookalikes, applies the change, and finishes by building and testing the project.

## Use it when

- A name no longer says what the thing does
- You are aligning code with new product terms
- A symbol is referenced from config, JSON or templates
- You want a rename that is safe to review in one diff

## What it can access

- Searches the whole repository
- Edits files containing the symbol, then runs build and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rename-symbol/
