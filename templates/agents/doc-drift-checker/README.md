# Doc Drift Checker

**Subagent** · Documentation

Read-only subagent that compares your docs with the code and lists every statement that is no longer true, with proof from the source.

## Install

```bash
npx workspacetemplates add doc-drift-checker
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/doc-drift-checker.md](claude-code/.claude/agents/doc-drift-checker.md) | `.claude/agents/doc-drift-checker.md` |
| Codex | [codex/.codex/agents/doc-drift-checker.toml](codex/.codex/agents/doc-drift-checker.toml) | `.codex/agents/doc-drift-checker.toml` |
| Cursor | [cursor/.cursor/agents/doc-drift-checker.md](cursor/.cursor/agents/doc-drift-checker.md) | `.cursor/agents/doc-drift-checker.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/doc-drift-checker.md](gemini-cli/.gemini/agents/doc-drift-checker.md) | `.gemini/agents/doc-drift-checker.md` |
| GitHub Copilot | [copilot/.github/agents/doc-drift-checker.agent.md](copilot/.github/agents/doc-drift-checker.agent.md) | `.github/agents/doc-drift-checker.agent.md` |

## What it does

Docs rot quietly. A flag gets renamed, a default changes, an endpoint moves, and the README keeps promising the old behavior. This subagent reads a doc and checks each factual claim against the code that implements it.

It reports only drift it can prove, quoting the doc line next to the source line that contradicts it. It never rewrites the docs, so you decide what the fix should say.

## Use it when

- A release changed behavior and the README or guides may be stale
- You inherited a project whose setup instructions fail on a clean machine
- Config options or CLI flags were renamed and docs were not updated
- You want a drift report in CI review before a doc update PR

## What it can access

- Reads documentation and source files
- Runs read-only git commands to see when code changed

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/doc-drift-checker/
