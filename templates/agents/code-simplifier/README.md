# Code Simplifier

**Subagent** · Code quality

Subagent that simplifies recently changed code for clarity and reuse without altering behavior, then runs the tests to prove it.

## Install

```bash
npx workspacetemplates add code-simplifier
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/code-simplifier.md](claude-code/.claude/agents/code-simplifier.md) | `.claude/agents/code-simplifier.md` |
| Codex | [codex/.codex/agents/code-simplifier.toml](codex/.codex/agents/code-simplifier.toml) | `.codex/agents/code-simplifier.toml` |
| Cursor | [cursor/.cursor/agents/code-simplifier.md](cursor/.cursor/agents/code-simplifier.md) | `.cursor/agents/code-simplifier.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/code-simplifier.md](gemini-cli/.gemini/agents/code-simplifier.md) | `.gemini/agents/code-simplifier.md` |
| GitHub Copilot | [copilot/.github/agents/code-simplifier.agent.md](copilot/.github/agents/code-simplifier.agent.md) | `.github/agents/code-simplifier.agent.md` |

## What it does

Fresh code tends to be a little too long: a variable used once, a helper that duplicates an existing one, a nested branch that wants an early return. This subagent looks at what you just changed and tidies it in place.

It only touches code from the current diff or the files you name, and it only makes changes that cannot alter what the program does. The test run at the end is the evidence.

## Use it when

- You finished a feature and want a cleanup pass before review
- A pull request reads like a first draft
- You suspect you re-implemented something the project already has
- You want smaller diffs from a cleaner starting point

## What it can access

- Reads your diff and the files in it
- Edits files within the changed scope
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-simplifier/
