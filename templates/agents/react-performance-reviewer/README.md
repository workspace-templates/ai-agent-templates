# React Performance Reviewer

**Subagent** · Frontend · react

Read-only subagent that finds avoidable re-renders, heavy effects and unvirtualized long lists in React code, ranked by likely impact.

## Install

```bash
npx workspacetemplates add react-performance-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/react-performance-reviewer.md](claude-code/.claude/agents/react-performance-reviewer.md) | `.claude/agents/react-performance-reviewer.md` |
| Codex | [codex/.codex/agents/react-performance-reviewer.toml](codex/.codex/agents/react-performance-reviewer.toml) | `.codex/agents/react-performance-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/react-performance-reviewer.md](cursor/.cursor/agents/react-performance-reviewer.md) | `.cursor/agents/react-performance-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/react-performance-reviewer.md](gemini-cli/.gemini/agents/react-performance-reviewer.md) | `.gemini/agents/react-performance-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/react-performance-reviewer.agent.md](copilot/.github/agents/react-performance-reviewer.agent.md) | `.github/agents/react-performance-reviewer.agent.md` |

## What it does

React slowness usually comes from a handful of patterns: unstable props that defeat memoization, state kept too high in the tree, effects that fetch or compute on every render, and lists that render thousands of rows. This subagent looks for exactly those.

It reads the code and reports findings ranked by how much they are likely to cost, with a suggested change for each. It does not edit anything, because performance fixes should be confirmed in the profiler before they land.

## Use it when

- A screen feels sluggish while typing, scrolling or filtering
- You want a review of a component tree before adding more features to it
- A table or feed renders hundreds of rows at once
- The profiler shows many commits but you cannot tell which components cause them

## What it can access

- Reads component and hook source files
- No file changes and no commands run

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/react-performance-reviewer/
