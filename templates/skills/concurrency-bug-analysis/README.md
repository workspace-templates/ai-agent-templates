# Concurrency Bug Analysis

**Skill** · Code quality

Finds races, deadlocks and lost updates by mapping shared state and lock order, then proposes the narrowest lock, queue or atomic operation that fixes them.

## Install

```bash
npx workspacetemplates add concurrency-bug-analysis
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/concurrency-bug-analysis/SKILL.md](claude-code/.claude/skills/concurrency-bug-analysis/SKILL.md) | `.claude/skills/concurrency-bug-analysis/SKILL.md` |
| Codex | [codex/.agents/skills/concurrency-bug-analysis/SKILL.md](codex/.agents/skills/concurrency-bug-analysis/SKILL.md) | `.agents/skills/concurrency-bug-analysis/SKILL.md` |
| Cursor | [cursor/.cursor/skills/concurrency-bug-analysis/SKILL.md](cursor/.cursor/skills/concurrency-bug-analysis/SKILL.md) | `.cursor/skills/concurrency-bug-analysis/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/concurrency-bug-analysis/SKILL.md](gemini-cli/.gemini/skills/concurrency-bug-analysis/SKILL.md) | `.gemini/skills/concurrency-bug-analysis/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/concurrency-bug-analysis/SKILL.md](copilot/.github/skills/concurrency-bug-analysis/SKILL.md) | `.github/skills/concurrency-bug-analysis/SKILL.md` |

## What it does

Concurrency bugs resist the usual debugging: they vanish under a debugger and show up on a busy Tuesday. This skill reasons about them on paper first, listing what is shared, who writes it and what ordering the code assumes.

The fix it proposes is the smallest one that closes the window, with a test or stress loop that makes the failure reproducible. It avoids the reflex of adding a global lock.

## Use it when

- A counter, balance or stock level occasionally ends up wrong
- The service hangs under load and a thread dump shows blocked threads
- A test passes alone and fails when run in parallel
- You are adding background workers to code that was single-threaded

## What it can access

- Reads source files and thread dumps or logs you provide
- Adds stress tests
- Runs your tests, including race detectors where available

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/concurrency-bug-analysis/
