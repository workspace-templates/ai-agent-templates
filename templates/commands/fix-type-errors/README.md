# Fix Type Errors

**Command** · Code quality

Runs your type checker and fixes each reported error at its root cause, never with casts, any or suppression comments.

## Install

```bash
npx workspacetemplates add fix-type-errors
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/fix-type-errors.md](claude-code/.claude/commands/fix-type-errors.md) | `.claude/commands/fix-type-errors.md` |
| Codex | [codex/home/.codex/prompts/fix-type-errors.md](codex/home/.codex/prompts/fix-type-errors.md) | `~/.codex/prompts/fix-type-errors.md` |
| Cursor | [cursor/.cursor/skills/fix-type-errors/SKILL.md](cursor/.cursor/skills/fix-type-errors/SKILL.md) | `.cursor/skills/fix-type-errors/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/fix-type-errors.toml](gemini-cli/.gemini/commands/fix-type-errors.toml) | `.gemini/commands/fix-type-errors.toml` |
| GitHub Copilot | [copilot/.github/skills/fix-type-errors/SKILL.md](copilot/.github/skills/fix-type-errors/SKILL.md) | `.github/skills/fix-type-errors/SKILL.md` |

## What it does

A wall of type errors tempts people to add casts until it goes quiet. This command works through them properly, grouping errors by cause, since one wrong type often explains dozens of messages.

Where an error points at a real bug, it tells you. The checker output at the end is the proof that the work is done.

## Use it when

- A dependency upgrade produced dozens of type errors
- The build fails in CI on tsc, mypy or pyright
- You are migrating a project to strict mode
- A refactor left mismatched types behind

## What it can access

- Runs the type checker and tests
- Edits source files to fix the errors, public types only after you agree

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/fix-type-errors/
