# PR Triager

**Subagent** · Git and releases

Read-only subagent that sorts open pull requests by size, risk and staleness and proposes the order in which to review them.

## Install

```bash
npx workspacetemplates add pr-triager
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/pr-triager.md](claude-code/.claude/agents/pr-triager.md) | `.claude/agents/pr-triager.md` |
| Codex | [codex/.codex/agents/pr-triager.toml](codex/.codex/agents/pr-triager.toml) | `.codex/agents/pr-triager.toml` |
| Cursor | [cursor/.cursor/agents/pr-triager.md](cursor/.cursor/agents/pr-triager.md) | `.cursor/agents/pr-triager.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/pr-triager.md](gemini-cli/.gemini/agents/pr-triager.md) | `.gemini/agents/pr-triager.md` |
| GitHub Copilot | [copilot/.github/agents/pr-triager.agent.md](copilot/.github/agents/pr-triager.agent.md) | `.github/agents/pr-triager.agent.md` |

## What it does

A long list of open pull requests hides the ones that matter: the small fix blocking a release, the risky change nobody has looked at, the draft that went quiet in September. This subagent reads the list and puts it in a sensible order.

It scores each pull request on size, risk, age and review state, and groups them into review now, review soon and needs author action. It only reads from GitHub and posts nothing, so triage never surprises a contributor.

## Use it when

- The open pull request list is long and you are not sure where to start
- You want to find stale pull requests to nudge or close
- A release is near and you need the blocking pull requests first
- You are rotating reviewer duty and want a fair starting queue

## What it can access

- Reads pull request metadata through the GitHub CLI
- No file changes, comments or merges

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pr-triager/
