# Kotlin Reviewer

**Subagent** · Code quality · kotlin

Read-only subagent that reviews Kotlin for coroutine scope mistakes, unsafe nullability, weak sealed types and collection misuse.

## Install

```bash
npx workspacetemplates add kotlin-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/kotlin-reviewer.md](claude-code/.claude/agents/kotlin-reviewer.md) | `.claude/agents/kotlin-reviewer.md` |
| Codex | [codex/.codex/agents/kotlin-reviewer.toml](codex/.codex/agents/kotlin-reviewer.toml) | `.codex/agents/kotlin-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/kotlin-reviewer.md](cursor/.cursor/agents/kotlin-reviewer.md) | `.cursor/agents/kotlin-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/kotlin-reviewer.md](gemini-cli/.gemini/agents/kotlin-reviewer.md) | `.gemini/agents/kotlin-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/kotlin-reviewer.agent.md](copilot/.github/agents/kotlin-reviewer.agent.md) | `.github/agents/kotlin-reviewer.agent.md` |

## What it does

Kotlin removes a lot of Java boilerplate and adds its own traps: coroutines launched into the wrong scope, double-bang operators standing in for design, and collection chains that copy data over and over. This subagent checks for those traps in a change.

It reads and reports. You decide which findings to act on.

## Use it when

- A change launches coroutines or collects flows
- An Android or server module uses !! in several places
- You are modeling states or results and want sealed types done properly
- Reviewing Kotlin written by developers who came from Java

## What it can access

- Reads files in your project
- Runs Gradle tests for touched modules when asked

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kotlin-reviewer/
