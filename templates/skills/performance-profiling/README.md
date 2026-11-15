# Performance Profiling

**Skill** · Code quality

Finds why code is slow by measuring first: sets a baseline, profiles the hot path, changes one thing and verifies the gain with repeatable numbers.

## Install

```bash
npx workspacetemplates add performance-profiling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/performance-profiling/SKILL.md](claude-code/.claude/skills/performance-profiling/SKILL.md) | `.claude/skills/performance-profiling/SKILL.md` |
| Codex | [codex/.agents/skills/performance-profiling/SKILL.md](codex/.agents/skills/performance-profiling/SKILL.md) | `.agents/skills/performance-profiling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/performance-profiling/SKILL.md](cursor/.cursor/skills/performance-profiling/SKILL.md) | `.cursor/skills/performance-profiling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/performance-profiling/SKILL.md](gemini-cli/.gemini/skills/performance-profiling/SKILL.md) | `.gemini/skills/performance-profiling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/performance-profiling/SKILL.md](copilot/.github/skills/performance-profiling/SKILL.md) | `.github/skills/performance-profiling/SKILL.md` |

## What it does

Guessing at performance wastes time on code that was never the problem. This skill refuses to optimize until there is a number, a profile that points at the real cost, and a benchmark you can run again.

Each change is measured against the baseline, and changes that do not pay off are reverted. You get a short record of what was slow, what was done and how much faster it is.

## Use it when

- A request, build, test run or script is slower than it should be
- Memory use grows over time
- Someone suggests a clever optimization with no measurements
- You need a before and after for a pull request

## What it can access

- Reads files in your project
- Runs benchmarks and profilers locally, and edits code to apply each fix

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/performance-profiling/
