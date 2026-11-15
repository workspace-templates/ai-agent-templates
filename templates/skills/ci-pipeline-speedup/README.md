# CI Pipeline Speedup

**Skill** · DevOps and cloud

Measures where a CI pipeline spends its time, then cuts minutes with caching, parallel jobs and skipping work that did not change.

## Install

```bash
npx workspacetemplates add ci-pipeline-speedup
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/ci-pipeline-speedup/SKILL.md](claude-code/.claude/skills/ci-pipeline-speedup/SKILL.md) | `.claude/skills/ci-pipeline-speedup/SKILL.md` |
| Codex | [codex/.agents/skills/ci-pipeline-speedup/SKILL.md](codex/.agents/skills/ci-pipeline-speedup/SKILL.md) | `.agents/skills/ci-pipeline-speedup/SKILL.md` |
| Cursor | [cursor/.cursor/skills/ci-pipeline-speedup/SKILL.md](cursor/.cursor/skills/ci-pipeline-speedup/SKILL.md) | `.cursor/skills/ci-pipeline-speedup/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/ci-pipeline-speedup/SKILL.md](gemini-cli/.gemini/skills/ci-pipeline-speedup/SKILL.md) | `.gemini/skills/ci-pipeline-speedup/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/ci-pipeline-speedup/SKILL.md](copilot/.github/skills/ci-pipeline-speedup/SKILL.md) | `.github/skills/ci-pipeline-speedup/SKILL.md` |

## What it does

A slow pipeline is rarely slow everywhere. Usually two or three steps eat most of the clock, and the rest is waiting. This skill starts from timings, not hunches: it reads recent run durations, ranks the steps, and only then proposes changes.

Each change comes with an estimate of the minutes it saves and the risk it adds. Nothing that weakens a check is applied without saying so.

## Use it when

- Developers wait more than ten minutes for a green check
- The CI bill or queue time keeps climbing
- Documentation-only changes still run the full test suite
- You suspect dependencies are downloaded from scratch on every run

## What it can access

- Reads CI configuration files and project scripts
- Can run read-only CI provider CLI commands to list recent runs

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/ci-pipeline-speedup/
