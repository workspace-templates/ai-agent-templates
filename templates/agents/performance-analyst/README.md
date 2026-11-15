# Performance Analyst

**Subagent** · Code quality

Read-only subagent that reads hot paths, queries and loops to find likely performance bottlenecks and ranks them with evidence.

## Install

```bash
npx workspacetemplates add performance-analyst
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/performance-analyst.md](claude-code/.claude/agents/performance-analyst.md) | `.claude/agents/performance-analyst.md` |
| Codex | [codex/.codex/agents/performance-analyst.toml](codex/.codex/agents/performance-analyst.toml) | `.codex/agents/performance-analyst.toml` |
| Cursor | [cursor/.cursor/agents/performance-analyst.md](cursor/.cursor/agents/performance-analyst.md) | `.cursor/agents/performance-analyst.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/performance-analyst.md](gemini-cli/.gemini/agents/performance-analyst.md) | `.gemini/agents/performance-analyst.md` |
| GitHub Copilot | [copilot/.github/agents/performance-analyst.agent.md](copilot/.github/agents/performance-analyst.agent.md) | `.github/agents/performance-analyst.agent.md` |

## What it does

Guessing at performance problems wastes days. This subagent starts from the symptom you give it, such as a slow page or a heavy job, finds the code path, and reads it for the usual culprits: repeated work, accidental quadratic loops, blocking calls and unbounded data.

It labels every finding as measured, derived from the code, or a hunch, and says what to measure next. It leaves your code alone and does not trade readability away for guesses.

## Use it when

- A page, endpoint or job got slower and you need a starting point
- You want a review of a hot path before traffic grows
- A profiler shows a wide flame and you need help reading the code
- You are deciding which optimization is worth doing first

## What it can access

- Reads source files, queries and migrations
- May run an existing benchmark or profile command, read-only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/performance-analyst/
