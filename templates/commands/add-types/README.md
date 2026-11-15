# Add Types

**Command** · Code quality

Adds precise type annotations to one file and fixes the checker errors that show up, without leaning on any or ignores.

## Install

```bash
npx workspacetemplates add add-types
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-types.md](claude-code/.claude/commands/add-types.md) | `.claude/commands/add-types.md` |
| Codex | [codex/home/.codex/prompts/add-types.md](codex/home/.codex/prompts/add-types.md) | `~/.codex/prompts/add-types.md` |
| Cursor | [cursor/.cursor/skills/add-types/SKILL.md](cursor/.cursor/skills/add-types/SKILL.md) | `.cursor/skills/add-types/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-types.toml](gemini-cli/.gemini/commands/add-types.toml) | `.gemini/commands/add-types.toml` |
| GitHub Copilot | [copilot/.github/skills/add-types/SKILL.md](copilot/.github/skills/add-types/SKILL.md) | `.github/skills/add-types/SKILL.md` |

## What it does

Loose types such as any or untyped dicts defeat the point of a type checker. This command annotates one file with specific types, reading call sites to learn what values really flow through.

It runs your configured checker, mypy, pyright or tsc, and fixes the errors at the source. If a real bug appears, it reports it rather than hiding it with a cast.

## Use it when

- A file is full of any or missing annotations
- You are turning on strict mode one file at a time
- Autocomplete is useless on a core module
- A runtime error was caused by an unexpected shape

## What it can access

- Reads the file, its callers and library types
- Edits the file and sometimes direct callers, runs the checker and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-types/
