# Git History Investigator

**Subagent** · Git and releases

Read-only subagent that explains why a line or behavior exists by tracing its commits, merges, and the discussions linked to them.

## Install

```bash
npx workspacetemplates add git-history-investigator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/git-history-investigator.md](claude-code/.claude/agents/git-history-investigator.md) | `.claude/agents/git-history-investigator.md` |
| Codex | [codex/.codex/agents/git-history-investigator.toml](codex/.codex/agents/git-history-investigator.toml) | `.codex/agents/git-history-investigator.toml` |
| Cursor | [cursor/.cursor/agents/git-history-investigator.md](cursor/.cursor/agents/git-history-investigator.md) | `.cursor/agents/git-history-investigator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/git-history-investigator.md](gemini-cli/.gemini/agents/git-history-investigator.md) | `.gemini/agents/git-history-investigator.md` |
| GitHub Copilot | [copilot/.github/agents/git-history-investigator.agent.md](copilot/.github/agents/git-history-investigator.agent.md) | `.github/agents/git-history-investigator.agent.md` |

## What it does

Code often looks wrong until you learn what it was protecting. This subagent takes a line, function, or odd behavior and walks its history to find the commit that introduced it, the reason given, and any later change that altered the intent.

It only reads. It follows renames, squashed merges, and issue references, then tells you whether the code is still needed or is a leftover. You get a short story with commit hashes you can check yourself.

## Use it when

- A strange guard clause has no comment and nobody remembers why it exists
- You want to delete a workaround but fear it fixes something
- A behavior changed and you need the change that caused it
- You are new to a file and want its backstory before editing

## What it can access

- Reads your files and git history
- Runs read-only git commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/git-history-investigator/
