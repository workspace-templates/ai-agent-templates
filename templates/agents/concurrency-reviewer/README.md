# Concurrency Reviewer

**Subagent** · Code quality

Read-only subagent that reviews threads, async code and locks for data races, deadlocks and unsafe shared state.

## Install

```bash
npx workspacetemplates add concurrency-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/concurrency-reviewer.md](claude-code/.claude/agents/concurrency-reviewer.md) | `.claude/agents/concurrency-reviewer.md` |
| Codex | [codex/.codex/agents/concurrency-reviewer.toml](codex/.codex/agents/concurrency-reviewer.toml) | `.codex/agents/concurrency-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/concurrency-reviewer.md](cursor/.cursor/agents/concurrency-reviewer.md) | `.cursor/agents/concurrency-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/concurrency-reviewer.md](gemini-cli/.gemini/agents/concurrency-reviewer.md) | `.gemini/agents/concurrency-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/concurrency-reviewer.agent.md](copilot/.github/agents/concurrency-reviewer.agent.md) | `.github/agents/concurrency-reviewer.agent.md` |

## What it does

Concurrency bugs pass tests and fail under load. This subagent reads the code the way a scheduler would: it asks which pieces of state are touched by more than one thread, task or request, and what guarantees the order of those accesses.

It reports concrete interleavings that go wrong, not vague warnings about thread safety, and it never changes the code.

## Use it when

- A bug appears only under load or only in production
- You introduced threads, workers or a task queue
- A change adds locks, channels or shared caches
- Tests pass but are flaky in CI

## What it can access

- Reads files in your project
- Runs read-only commands such as git diff

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/concurrency-reviewer/
