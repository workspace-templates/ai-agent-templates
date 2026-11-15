# React Performance Optimization

**Skill** · Frontend · react

Finds needless React re-renders with the Profiler and adds memoization only where a measurement shows it pays off.

## Install

```bash
npx workspacetemplates add react-performance-optimization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/react-performance-optimization/SKILL.md](claude-code/.claude/skills/react-performance-optimization/SKILL.md) | `.claude/skills/react-performance-optimization/SKILL.md` |
| Codex | [codex/.agents/skills/react-performance-optimization/SKILL.md](codex/.agents/skills/react-performance-optimization/SKILL.md) | `.agents/skills/react-performance-optimization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/react-performance-optimization/SKILL.md](cursor/.cursor/skills/react-performance-optimization/SKILL.md) | `.cursor/skills/react-performance-optimization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/react-performance-optimization/SKILL.md](gemini-cli/.gemini/skills/react-performance-optimization/SKILL.md) | `.gemini/skills/react-performance-optimization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/react-performance-optimization/SKILL.md](copilot/.github/skills/react-performance-optimization/SKILL.md) | `.github/skills/react-performance-optimization/SKILL.md` |

## What it does

Wrapping every component in memo makes code harder to read and often changes nothing. This skill starts with a measurement: what renders, how often, and how long it takes, and only then touches the code.

The agent fixes state placement and unstable props first, since that removes most work for free. Memoization, virtualization or code splitting follow only for the hot spots the profile identifies.

## Use it when

- Typing in an input makes the whole page lag
- A list of hundreds of rows scrolls badly
- The React DevTools flame graph shows the same component rendering constantly
- Someone wants to add useMemo everywhere "just in case"

## What it can access

- Reads and edits React components
- May run your dev server, tests and a profiling script

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-performance-optimization/
