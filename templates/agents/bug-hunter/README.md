# Bug Hunter

**Subagent** · Code quality

Read-only subagent that traces a reported bug to its root cause, proves it with evidence, and proposes the smallest possible fix.

## Install

```bash
npx workspacetemplates add bug-hunter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/bug-hunter.md](claude-code/.claude/agents/bug-hunter.md) | `.claude/agents/bug-hunter.md` |
| Codex | [codex/.codex/agents/bug-hunter.toml](codex/.codex/agents/bug-hunter.toml) | `.codex/agents/bug-hunter.toml` |
| Cursor | [cursor/.cursor/agents/bug-hunter.md](cursor/.cursor/agents/bug-hunter.md) | `.cursor/agents/bug-hunter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/bug-hunter.md](gemini-cli/.gemini/agents/bug-hunter.md) | `.gemini/agents/bug-hunter.md` |
| GitHub Copilot | [copilot/.github/agents/bug-hunter.agent.md](copilot/.github/agents/bug-hunter.agent.md) | `.github/agents/bug-hunter.agent.md` |

## What it does

A bug report describes a symptom. This subagent works backward from the symptom to the line that causes it, reproducing the failure where it can and reading the code path where it cannot. It separates what it observed from what it guesses.

It never edits files. The output is a root cause with evidence and a minimal patch written out for you to apply, so a hunch cannot turn into a sprawling rewrite.

## Use it when

- A user reported a bug and you do not know where to start
- A test fails and the stack trace points somewhere misleading
- Behavior changed after a deploy and you need the commit that did it
- You want a diagnosis before anyone touches the code

## What it can access

- Reads files in your project
- Runs read-only commands such as git log, git blame and your test runner

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/bug-hunter/
