# Java Reviewer

**Subagent** · Code quality · java

Read-only subagent that reviews Java for null handling, stream misuse, unclosed resources and poorly designed exceptions.

## Install

```bash
npx workspacetemplates add java-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/java-reviewer.md](claude-code/.claude/agents/java-reviewer.md) | `.claude/agents/java-reviewer.md` |
| Codex | [codex/.codex/agents/java-reviewer.toml](codex/.codex/agents/java-reviewer.toml) | `.codex/agents/java-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/java-reviewer.md](cursor/.cursor/agents/java-reviewer.md) | `.cursor/agents/java-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/java-reviewer.md](gemini-cli/.gemini/agents/java-reviewer.md) | `.gemini/agents/java-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/java-reviewer.agent.md](copilot/.github/agents/java-reviewer.agent.md) | `.github/agents/java-reviewer.agent.md` |

## What it does

Java projects age with their habits: nulls passed around, streams used where a loop is clearer, checked exceptions wrapped into nothing. This subagent reviews a change against the problems that tend to cause production incidents in Java services.

It never edits code. You get findings tied to lines, ranked by what could go wrong.

## Use it when

- A Spring or Jakarta service change is ready for review
- NullPointerException shows up in production logs
- A refactor introduced streams and Optional everywhere
- Database or file handling code was added or changed

## What it can access

- Reads files in your project
- Runs Maven or Gradle tests for touched modules

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/java-reviewer/
