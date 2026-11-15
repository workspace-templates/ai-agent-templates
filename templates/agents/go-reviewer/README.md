# Go Reviewer

**Subagent** · Code quality · go

Read-only subagent that reviews Go code for ignored errors, goroutine leaks, context misuse and oversized interfaces.

## Install

```bash
npx workspacetemplates add go-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/go-reviewer.md](claude-code/.claude/agents/go-reviewer.md) | `.claude/agents/go-reviewer.md` |
| Codex | [codex/.codex/agents/go-reviewer.toml](codex/.codex/agents/go-reviewer.toml) | `.codex/agents/go-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/go-reviewer.md](cursor/.cursor/agents/go-reviewer.md) | `.cursor/agents/go-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/go-reviewer.md](gemini-cli/.gemini/agents/go-reviewer.md) | `.gemini/agents/go-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/go-reviewer.agent.md](copilot/.github/agents/go-reviewer.agent.md) | `.github/agents/go-reviewer.agent.md` |

## What it does

Go is simple to read and easy to get subtly wrong. A forgotten error, a goroutine with no way to stop or a context stored in a struct will compile fine and misbehave in production. This subagent knows where Go code usually breaks and checks those places first.

It runs the standard tooling for a baseline, then reads for what vet cannot see. The files are never modified.

## Use it when

- A change adds goroutines, channels or worker pools
- An HTTP service has slow shutdowns or leaking goroutines
- You are designing interfaces for a new package
- Reviewing code from a team that mostly writes another language

## What it can access

- Reads files in your project
- Runs go build, go vet and go test locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/go-reviewer/
