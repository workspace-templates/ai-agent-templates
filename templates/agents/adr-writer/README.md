# ADR Writer

**Subagent** · Documentation

Subagent that drafts an architecture decision record from a decision you describe and the code around it, including options weighed and consequences.

## Install

```bash
npx workspacetemplates add adr-writer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/adr-writer.md](claude-code/.claude/agents/adr-writer.md) | `.claude/agents/adr-writer.md` |
| Codex | [codex/.codex/agents/adr-writer.toml](codex/.codex/agents/adr-writer.toml) | `.codex/agents/adr-writer.toml` |
| Cursor | [cursor/.cursor/agents/adr-writer.md](cursor/.cursor/agents/adr-writer.md) | `.cursor/agents/adr-writer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/adr-writer.md](gemini-cli/.gemini/agents/adr-writer.md) | `.gemini/agents/adr-writer.md` |
| GitHub Copilot | [copilot/.github/agents/adr-writer.agent.md](copilot/.github/agents/adr-writer.agent.md) | `.github/agents/adr-writer.agent.md` |

## What it does

Teams make a decision, then forget why. An architecture decision record keeps the context, the alternatives and the trade-offs next to the code. This subagent writes the first draft from your description and from what it finds in the repository.

It follows the format of the ADRs you already have, numbers the new one correctly, and records real consequences instead of praise. You review and edit; it does not decide for you.

## Use it when

- You just chose a database, queue, framework or pattern and want it recorded
- A new teammate keeps asking why something is built this way
- You are about to change a past decision and need its original reasoning
- A pull request makes a structural change with no written rationale

## What it can access

- Reads source and existing decision records
- Writes one new file in the ADR folder

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/adr-writer/
