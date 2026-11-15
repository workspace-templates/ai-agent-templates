# Error Handling Reviewer

**Subagent** · Code quality

Read-only subagent that audits a change for swallowed errors, leaked resources and failure paths that leave callers guessing.

## Install

```bash
npx workspacetemplates add error-handling-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/error-handling-reviewer.md](claude-code/.claude/agents/error-handling-reviewer.md) | `.claude/agents/error-handling-reviewer.md` |
| Codex | [codex/.codex/agents/error-handling-reviewer.toml](codex/.codex/agents/error-handling-reviewer.toml) | `.codex/agents/error-handling-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/error-handling-reviewer.md](cursor/.cursor/agents/error-handling-reviewer.md) | `.cursor/agents/error-handling-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/error-handling-reviewer.md](gemini-cli/.gemini/agents/error-handling-reviewer.md) | `.gemini/agents/error-handling-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/error-handling-reviewer.agent.md](copilot/.github/agents/error-handling-reviewer.agent.md) | `.github/agents/error-handling-reviewer.agent.md` |

## What it does

Most outages start as an error that someone caught and ignored. This subagent reads a change with one question in mind: when this fails, who finds out, and is everything left in a sane state? It looks at empty catch blocks, lost stack traces, retries without limits and cleanup that only runs on the happy path.

It reports findings with file and line and does not modify anything, so you can use it as a pre-merge gate on any language.

## Use it when

- A diff adds try/catch, Result types or retry loops
- Production logs show failures nobody was alerted to
- You are reviewing code that opens files, sockets or transactions
- A service returns 200 even when the work failed

## What it can access

- Reads files in your project
- Runs read-only git commands such as git diff

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/error-handling-reviewer/
