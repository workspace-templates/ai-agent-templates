# Triage CI Failure

**Command** · DevOps and cloud

Reads a failing CI log, finds the first real error behind the noise and proposes a specific fix you can approve.

## Install

```bash
npx workspacetemplates add triage-ci-failure
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/triage-ci-failure.md](claude-code/.claude/commands/triage-ci-failure.md) | `.claude/commands/triage-ci-failure.md` |
| Codex | [codex/home/.codex/prompts/triage-ci-failure.md](codex/home/.codex/prompts/triage-ci-failure.md) | `~/.codex/prompts/triage-ci-failure.md` |
| Cursor | [cursor/.cursor/skills/triage-ci-failure/SKILL.md](cursor/.cursor/skills/triage-ci-failure/SKILL.md) | `.cursor/skills/triage-ci-failure/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/triage-ci-failure.toml](gemini-cli/.gemini/commands/triage-ci-failure.toml) | `.gemini/commands/triage-ci-failure.toml` |
| GitHub Copilot | [copilot/.github/skills/triage-ci-failure/SKILL.md](copilot/.github/skills/triage-ci-failure/SKILL.md) | `.github/skills/triage-ci-failure/SKILL.md` |

## What it does

A red pipeline usually prints thousands of lines, and the last error is often a side effect of an earlier one. This command works from the top of the failure down to the step that actually broke.

It separates real code failures from flaky tests, expired caches and missing secrets, and tells you which kind you have before touching any file.

## Use it when

- A pull request check turned red and the log is huge
- The same job passes locally but fails in CI
- A test fails only sometimes and you suspect flakiness
- You inherited a pipeline and do not know its steps

## What it can access

- Reads CI logs and workflow files
- Runs read-only gh and git commands
- Edits files only after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/triage-ci-failure/
