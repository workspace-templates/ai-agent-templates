# Mutation Test Analyst

**Subagent** · Testing

Read-only subagent that interprets mutation testing output and lists the exact assertions that must be strengthened to kill surviving mutants.

## Install

```bash
npx workspacetemplates add mutation-test-analyst
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/mutation-test-analyst.md](claude-code/.claude/agents/mutation-test-analyst.md) | `.claude/agents/mutation-test-analyst.md` |
| Codex | [codex/.codex/agents/mutation-test-analyst.toml](codex/.codex/agents/mutation-test-analyst.toml) | `.codex/agents/mutation-test-analyst.toml` |
| Cursor | [cursor/.cursor/agents/mutation-test-analyst.md](cursor/.cursor/agents/mutation-test-analyst.md) | `.cursor/agents/mutation-test-analyst.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/mutation-test-analyst.md](gemini-cli/.gemini/agents/mutation-test-analyst.md) | `.gemini/agents/mutation-test-analyst.md` |
| GitHub Copilot | [copilot/.github/agents/mutation-test-analyst.agent.md](copilot/.github/agents/mutation-test-analyst.agent.md) | `.github/agents/mutation-test-analyst.agent.md` |

## What it does

Mutation testing changes your code on purpose and checks whether the tests notice. The raw report is long and hard to act on. This subagent reads it and turns each surviving mutant into a specific missing check.

It sorts the survivors into real gaps and harmless noise, so you spend time on assertions that matter and ignore equivalent mutants.

## Use it when

- You ran Stryker, mutmut, PIT or cargo-mutants and have a wall of survivors
- Coverage is high but you doubt the assertions
- You want to know which module deserves test work first
- A mutation score gate in CI failed

## What it can access

- Reads mutation reports, source files and tests
- Runs report-reading commands, and a single-file rerun only on request

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mutation-test-analyst/
