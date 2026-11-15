# React Component Design

**Skill** · Frontend · react, typescript

Designs and reviews React components for clean state, correct effects, composition and complete loading, empty and error states, in TypeScript.

## Install

```bash
npx workspacetemplates add react-component-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/react-component-design/SKILL.md](claude-code/.claude/skills/react-component-design/SKILL.md) | `.claude/skills/react-component-design/SKILL.md` |
| Codex | [codex/.agents/skills/react-component-design/SKILL.md](codex/.agents/skills/react-component-design/SKILL.md) | `.agents/skills/react-component-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/react-component-design/SKILL.md](cursor/.cursor/skills/react-component-design/SKILL.md) | `.cursor/skills/react-component-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/react-component-design/SKILL.md](gemini-cli/.gemini/skills/react-component-design/SKILL.md) | `.gemini/skills/react-component-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/react-component-design/SKILL.md](copilot/.github/skills/react-component-design/SKILL.md) | `.github/skills/react-component-design/SKILL.md` |

## What it does

React code gets hard to maintain in predictable ways: derived values stored in state, effects that fetch and sync, props lists that keep growing. This skill applies a short set of design rules to a component you are writing or reviewing.

It also insists that every component fed by data has an answer for loading, empty and error, because those are the states users see first and developers forget.

## Use it when

- Writing a new component or a page made of several
- A component has more than seven props or several boolean flags
- A useEffect keeps causing loops or stale values
- A list or form shows a blank screen while loading or on failure

## What it can access

- Reads files in your project
- Creates and edits component files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-component-design/
