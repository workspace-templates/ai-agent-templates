# Pandas Performance

**Skill** · Data and AI · python, pandas

Speeds up slow pandas code by measuring first, then vectorizing, shrinking dtypes and chunking reads. Use it when a script is slow or runs out of memory.

## Install

```bash
npx workspacetemplates add pandas-performance
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/pandas-performance/SKILL.md](claude-code/.claude/skills/pandas-performance/SKILL.md) | `.claude/skills/pandas-performance/SKILL.md` |
| Codex | [codex/.agents/skills/pandas-performance/SKILL.md](codex/.agents/skills/pandas-performance/SKILL.md) | `.agents/skills/pandas-performance/SKILL.md` |
| Cursor | [cursor/.cursor/skills/pandas-performance/SKILL.md](cursor/.cursor/skills/pandas-performance/SKILL.md) | `.cursor/skills/pandas-performance/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/pandas-performance/SKILL.md](gemini-cli/.gemini/skills/pandas-performance/SKILL.md) | `.gemini/skills/pandas-performance/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/pandas-performance/SKILL.md](copilot/.github/skills/pandas-performance/SKILL.md) | `.github/skills/pandas-performance/SKILL.md` |

## What it does

Most slow pandas code is slow for one of three reasons: a Python loop over rows, columns stored in a wasteful type, or a file read all at once. This skill finds which one applies by profiling, and only then changes the code.

Each change is checked against the original output so the faster version returns the same numbers. You get timings before and after, not a guess.

## Use it when

- A script that took seconds on a sample takes an hour on the real file
- A DataFrame no longer fits in memory and the process gets killed
- Code uses iterrows or apply with a row-wise lambda on a large table
- You need a before and after number to justify a rewrite

## What it can access

- Reads Python scripts and a sample of your data
- Edits the slow script
- Runs timing and profiling commands locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pandas-performance/
