# React Hooks Patterns

**Skill** · Frontend · react

Writes custom React hooks with honest dependency arrays, proper cleanup and no stale closures, and fixes effects that misuse useEffect.

## Install

```bash
npx workspacetemplates add react-hooks-patterns
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/react-hooks-patterns/SKILL.md](claude-code/.claude/skills/react-hooks-patterns/SKILL.md) | `.claude/skills/react-hooks-patterns/SKILL.md` |
| Codex | [codex/.agents/skills/react-hooks-patterns/SKILL.md](codex/.agents/skills/react-hooks-patterns/SKILL.md) | `.agents/skills/react-hooks-patterns/SKILL.md` |
| Cursor | [cursor/.cursor/skills/react-hooks-patterns/SKILL.md](cursor/.cursor/skills/react-hooks-patterns/SKILL.md) | `.cursor/skills/react-hooks-patterns/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/react-hooks-patterns/SKILL.md](gemini-cli/.gemini/skills/react-hooks-patterns/SKILL.md) | `.gemini/skills/react-hooks-patterns/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/react-hooks-patterns/SKILL.md](copilot/.github/skills/react-hooks-patterns/SKILL.md) | `.github/skills/react-hooks-patterns/SKILL.md` |

## What it does

Hook bugs are quiet: a callback reads yesterday's state, a subscription never unsubscribes, an effect runs twice in development and nobody knows why. This skill gives the agent a checklist that catches those before they ship.

It extracts repeated logic into small hooks with a clear contract, and moves work out of useEffect when an event handler or a derived value is the right tool.

## Use it when

- A component has an effect with a long dependency list or an eslint-disable comment
- You see stale values inside timers, listeners or async callbacks
- The same fetch, subscription or debounce logic is copied across components
- Strict Mode runs your effect twice and something breaks

## What it can access

- Reads and edits React source and tests
- Runs your test and lint commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-hooks-patterns/
