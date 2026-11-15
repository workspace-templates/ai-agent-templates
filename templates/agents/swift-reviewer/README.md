# Swift Reviewer

**Subagent** · Code quality · swift

Read-only subagent that reviews Swift changes for retain cycles, unsafe optionals, concurrency bugs and misuse of value types.

## Install

```bash
npx workspacetemplates add swift-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/swift-reviewer.md](claude-code/.claude/agents/swift-reviewer.md) | `.claude/agents/swift-reviewer.md` |
| Codex | [codex/.codex/agents/swift-reviewer.toml](codex/.codex/agents/swift-reviewer.toml) | `.codex/agents/swift-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/swift-reviewer.md](cursor/.cursor/agents/swift-reviewer.md) | `.cursor/agents/swift-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/swift-reviewer.md](gemini-cli/.gemini/agents/swift-reviewer.md) | `.gemini/agents/swift-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/swift-reviewer.agent.md](copilot/.github/agents/swift-reviewer.agent.md) | `.github/agents/swift-reviewer.agent.md` |

## What it does

Swift code compiles long before it is correct. Closures capture self, optionals get force-unwrapped on the happy path, and actors are bypassed with a stray Task. This subagent reads a diff the way a senior iOS engineer would and reports the defects the compiler accepts.

It has no write access. Each finding names a file and line, explains the failure in one sentence, and shows the shortest fix, ranked so you can stop reading when the serious ones are done.

## Use it when

- A pull request touches view models, delegates or closures
- You are moving a codebase to Swift concurrency and want a second pair of eyes
- A crash report mentions an unexpectedly nil optional
- Memory keeps growing after a screen is dismissed

## What it can access

- Reads Swift files in your project
- Runs git diff to find the changed lines

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/swift-reviewer/
