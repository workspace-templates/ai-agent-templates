# React State Management

**Skill** · Frontend · react

Chooses local state, context, a reducer or a store for each piece of React state and removes prop drilling without adding a library by habit.

## Install

```bash
npx workspacetemplates add react-state-management
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/react-state-management/SKILL.md](claude-code/.claude/skills/react-state-management/SKILL.md) | `.claude/skills/react-state-management/SKILL.md` |
| Codex | [codex/.agents/skills/react-state-management/SKILL.md](codex/.agents/skills/react-state-management/SKILL.md) | `.agents/skills/react-state-management/SKILL.md` |
| Cursor | [cursor/.cursor/skills/react-state-management/SKILL.md](cursor/.cursor/skills/react-state-management/SKILL.md) | `.cursor/skills/react-state-management/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/react-state-management/SKILL.md](gemini-cli/.gemini/skills/react-state-management/SKILL.md) | `.gemini/skills/react-state-management/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/react-state-management/SKILL.md](copilot/.github/skills/react-state-management/SKILL.md) | `.github/skills/react-state-management/SKILL.md` |

## What it does

Teams reach for a global store on day one, then wonder why every change touches five files. This skill puts each piece of state where it belongs: as close to its users as possible, and in the server cache if it came from a server.

The agent sorts the state it finds into kinds, picks the lightest tool for each, and migrates one slice at a time so the app keeps working between commits.

## Use it when

- Props pass through four components that do not use them
- A context provider re-renders the whole app on every change
- Server data is copied into Redux and goes out of date
- You are deciding between Context, Zustand and Redux Toolkit

## What it can access

- Reads and edits React source and tests
- Runs your tests
- May change package.json if you approve a new library

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-state-management/
