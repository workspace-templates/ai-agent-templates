# CI Fixer

**Subagent** · DevOps and cloud · github-actions

Reads a failing CI log, finds the real cause behind the first error, fixes it and reruns the same steps locally before reporting.

## Install

```bash
npx workspacetemplates add ci-fixer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/ci-fixer.md](claude-code/.claude/agents/ci-fixer.md) | `.claude/agents/ci-fixer.md` |
| Codex | [codex/.codex/agents/ci-fixer.toml](codex/.codex/agents/ci-fixer.toml) | `.codex/agents/ci-fixer.toml` |
| Cursor | [cursor/.cursor/agents/ci-fixer.md](cursor/.cursor/agents/ci-fixer.md) | `.cursor/agents/ci-fixer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/ci-fixer.md](gemini-cli/.gemini/agents/ci-fixer.md) | `.gemini/agents/ci-fixer.md` |
| GitHub Copilot | [copilot/.github/agents/ci-fixer.agent.md](copilot/.github/agents/ci-fixer.agent.md) | `.github/agents/ci-fixer.agent.md` |

## What it does

A red pipeline hides its cause in 3,000 lines of log. This subagent finds the first real failure, separates it from the noise that follows, and works out whether the problem is the code, the config or the environment.

It reproduces the failing step on your machine, makes the smallest fix, and reruns the step. It never disables a test or lowers a check to make the build green.

## Use it when

- A pull request is red and the log is a wall of text
- A job passes locally and fails in CI
- A pipeline broke after a dependency or runner image update
- You want the cause explained, not just a rerun

## What it can access

- Reads CI logs, workflow files and source
- Edits files to fix the failure
- Runs build and test commands and the GitHub CLI for logs

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/ci-fixer/
