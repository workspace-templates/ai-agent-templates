# Refactor

**Command** · Code quality

Refactors the code you name for clarity in small steps, running the tests after each step so behavior never changes.

## Install

```bash
npx workspacetemplates add refactor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/refactor.md](claude-code/.claude/commands/refactor.md) | `.claude/commands/refactor.md` |
| Codex | [codex/home/.codex/prompts/refactor.md](codex/home/.codex/prompts/refactor.md) | `~/.codex/prompts/refactor.md` |
| Cursor | [cursor/.cursor/skills/refactor/SKILL.md](cursor/.cursor/skills/refactor/SKILL.md) | `.cursor/skills/refactor/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/refactor.toml](gemini-cli/.gemini/commands/refactor.toml) | `.gemini/commands/refactor.toml` |
| GitHub Copilot | [copilot/.github/skills/refactor/SKILL.md](copilot/.github/skills/refactor/SKILL.md) | `.github/skills/refactor/SKILL.md` |

## What it does

Big-bang refactors break things and are hard to review. This command works in small steps, each one a change that keeps behavior identical, and runs the tests between them so a failure points at one edit.

If the code has no tests, it writes a few that pin down current behavior before touching anything. Each step is commit-sized, so you can stop at any point with working code.

## Use it when

- A function has grown too long to follow
- You must change code that nobody dares touch
- Duplicate logic has spread over several files
- Before adding a feature to a messy area

## What it can access

- Reads the target code and its callers
- Edits source files and adds tests, then runs the suite

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/refactor/
