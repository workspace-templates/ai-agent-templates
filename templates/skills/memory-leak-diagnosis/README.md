# Memory Leak Diagnosis

**Skill** · Code quality

Locates memory leaks by measuring growth, comparing heap snapshots and tracing the reference that keeps objects alive, then fixes that reference.

## Install

```bash
npx workspacetemplates add memory-leak-diagnosis
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/memory-leak-diagnosis/SKILL.md](claude-code/.claude/skills/memory-leak-diagnosis/SKILL.md) | `.claude/skills/memory-leak-diagnosis/SKILL.md` |
| Codex | [codex/.agents/skills/memory-leak-diagnosis/SKILL.md](codex/.agents/skills/memory-leak-diagnosis/SKILL.md) | `.agents/skills/memory-leak-diagnosis/SKILL.md` |
| Cursor | [cursor/.cursor/skills/memory-leak-diagnosis/SKILL.md](cursor/.cursor/skills/memory-leak-diagnosis/SKILL.md) | `.cursor/skills/memory-leak-diagnosis/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/memory-leak-diagnosis/SKILL.md](gemini-cli/.gemini/skills/memory-leak-diagnosis/SKILL.md) | `.gemini/skills/memory-leak-diagnosis/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/memory-leak-diagnosis/SKILL.md](copilot/.github/skills/memory-leak-diagnosis/SKILL.md) | `.github/skills/memory-leak-diagnosis/SKILL.md` |

## What it does

A leak is an object that should be gone but is still reachable. Guessing at it wastes days; measuring it takes an hour. This skill starts by proving there is growth, then finds which type of object grows and who holds it.

The result is the retaining path in plain words, a small fix at the point where the reference should have been released, and a measurement that shows the curve flatten.

## Use it when

- A service restarts every few days after running out of memory
- Memory climbs steadily under constant traffic and never comes back down
- A long-running browser tab or worker becomes slow over time
- A fix for a suspected leak was shipped and you need proof it worked

## What it can access

- Reads source files and heap snapshot output
- Runs your workload script and profiling tools locally
- Edits code once the cause is proven

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/memory-leak-diagnosis/
