# Python Type Hints

**Skill** · Code quality · python

Adds and tightens Python type hints, then runs mypy or pyright until clean without blanket ignores. Use it on untyped or loosely typed modules.

## Install

```bash
npx workspacetemplates add python-type-hints
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/python-type-hints/SKILL.md](claude-code/.claude/skills/python-type-hints/SKILL.md) | `.claude/skills/python-type-hints/SKILL.md` |
| Codex | [codex/.agents/skills/python-type-hints/SKILL.md](codex/.agents/skills/python-type-hints/SKILL.md) | `.agents/skills/python-type-hints/SKILL.md` |
| Cursor | [cursor/.cursor/skills/python-type-hints/SKILL.md](cursor/.cursor/skills/python-type-hints/SKILL.md) | `.cursor/skills/python-type-hints/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/python-type-hints/SKILL.md](gemini-cli/.gemini/skills/python-type-hints/SKILL.md) | `.gemini/skills/python-type-hints/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/python-type-hints/SKILL.md](copilot/.github/skills/python-type-hints/SKILL.md) | `.github/skills/python-type-hints/SKILL.md` |

## What it does

Annotating a module with Any everywhere produces a green checker and no safety. This skill asks for real types: precise parameters, return types, generics, TypedDicts and Protocols, checked with the type checker your project already configures.

When the checker complains, the agent fixes the cause. A narrow, commented ignore is the last resort, and every one is listed in the final report so you can review it.

## Use it when

- A Python package has no annotations and bugs keep coming from wrong argument shapes
- mypy or pyright is enabled but half the code is typed as Any
- You want to turn on strict mode one module at a time
- Dict-heavy code needs TypedDict or dataclasses to become readable

## What it can access

- Reads and edits Python files in your project
- Runs mypy or pyright from your environment

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/python-type-hints/
