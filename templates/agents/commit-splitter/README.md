# Commit Splitter

**Subagent** · Git and releases

Subagent that turns one big uncommitted change into a series of small logical commits, each building and each with a clear message.

## Install

```bash
npx workspacetemplates add commit-splitter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/commit-splitter.md](claude-code/.claude/agents/commit-splitter.md) | `.claude/agents/commit-splitter.md` |
| Codex | [codex/.codex/agents/commit-splitter.toml](codex/.codex/agents/commit-splitter.toml) | `.codex/agents/commit-splitter.toml` |
| Cursor | [cursor/.cursor/agents/commit-splitter.md](cursor/.cursor/agents/commit-splitter.md) | `.cursor/agents/commit-splitter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/commit-splitter.md](gemini-cli/.gemini/agents/commit-splitter.md) | `.gemini/agents/commit-splitter.md` |
| GitHub Copilot | [copilot/.github/agents/commit-splitter.agent.md](copilot/.github/agents/commit-splitter.agent.md) | `.github/agents/commit-splitter.agent.md` |

## What it does

After a long afternoon the working tree holds a refactor, a bug fix and a new feature all mixed together. Reviewers hate it and bisecting it is worse. This subagent separates the change into commits that each tell one story.

It plans the split first and shows you the plan, stages hunks precisely, and checks that every commit builds on its own. Nothing is pushed, and your original work is saved on a backup branch before it starts.

## Use it when

- You have hundreds of changed lines and want reviewable commits
- A fix and an unrelated cleanup ended up in the same files
- You want a history that bisects cleanly
- A pull request is too large and needs splitting before review

## What it can access

- Reads your working tree and diffs
- Creates a backup branch and local commits
- Runs your build or tests between commits

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/commit-splitter/
