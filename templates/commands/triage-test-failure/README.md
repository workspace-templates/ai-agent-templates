# Triage Test Failure

**Command** · Testing

Diagnoses one failing test from its output and tells you whether the test or the code is wrong, with the evidence.

## Install

```bash
npx workspacetemplates add triage-test-failure
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/triage-test-failure.md](claude-code/.claude/commands/triage-test-failure.md) | `.claude/commands/triage-test-failure.md` |
| Codex | [codex/home/.codex/prompts/triage-test-failure.md](codex/home/.codex/prompts/triage-test-failure.md) | `~/.codex/prompts/triage-test-failure.md` |
| Cursor | [cursor/.cursor/skills/triage-test-failure/SKILL.md](cursor/.cursor/skills/triage-test-failure/SKILL.md) | `.cursor/skills/triage-test-failure/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/triage-test-failure.toml](gemini-cli/.gemini/commands/triage-test-failure.toml) | `.gemini/commands/triage-test-failure.toml` |
| GitHub Copilot | [copilot/.github/skills/triage-test-failure/SKILL.md](copilot/.github/skills/triage-test-failure/SKILL.md) | `.github/skills/triage-test-failure/SKILL.md` |

## What it does

When a single test is red the real question is who is at fault. This command reads the failure, the test and the code under it, then gives a verdict with the reasoning behind it, instead of jumping to an edit.

It also checks the history for what changed last, and looks for flakiness signs such as shared state or time dependence.

## Use it when

- When CI fails on a test you did not touch
- When a test passes locally but fails in the pipeline
- Before deciding whether to revert a commit
- To explain a failure to a teammate quickly

## What it can access

- Runs the named test and reads git history
- Edits nothing until you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/triage-test-failure/
