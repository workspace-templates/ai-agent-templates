# Merge Conflict Resolver

**Subagent** · Git and releases

Subagent that resolves merge and rebase conflicts file by file, explains why it kept each side, and runs the tests before finishing.

## Install

```bash
npx workspacetemplates add merge-conflict-resolver
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/merge-conflict-resolver.md](claude-code/.claude/agents/merge-conflict-resolver.md) | `.claude/agents/merge-conflict-resolver.md` |
| Codex | [codex/.codex/agents/merge-conflict-resolver.toml](codex/.codex/agents/merge-conflict-resolver.toml) | `.codex/agents/merge-conflict-resolver.toml` |
| Cursor | [cursor/.cursor/agents/merge-conflict-resolver.md](cursor/.cursor/agents/merge-conflict-resolver.md) | `.cursor/agents/merge-conflict-resolver.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/merge-conflict-resolver.md](gemini-cli/.gemini/agents/merge-conflict-resolver.md) | `.gemini/agents/merge-conflict-resolver.md` |
| GitHub Copilot | [copilot/.github/agents/merge-conflict-resolver.agent.md](copilot/.github/agents/merge-conflict-resolver.agent.md) | `.github/agents/merge-conflict-resolver.agent.md` |

## What it does

A conflict marker shows two edits but not the intent behind them. This subagent reads both branches' history for the conflicted lines, works out what each side was trying to do, and writes a resolution that keeps both intents where possible.

It resolves one file at a time, explains each choice in plain words, and runs the build and tests at the end. It stages nothing and commits nothing, so you review the result before it becomes history.

## Use it when

- Git halted a merge or rebase and left several files marked
- Long-lived branches diverged and the conflicts are semantic, not just textual
- You want a second opinion on a resolution before committing
- A lockfile or generated file conflicts and you are unsure how to handle it

## What it can access

- Reads and edits the conflicted files in your working tree
- Runs git inspection commands, your build and your tests
- Does not stage, commit or push

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/merge-conflict-resolver/
