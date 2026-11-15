# Design System Auditor

**Subagent** · Frontend

Read-only subagent that finds colors, spacing and one-off components that bypass your design system, and counts each deviation.

## Install

```bash
npx workspacetemplates add design-system-auditor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/design-system-auditor.md](claude-code/.claude/agents/design-system-auditor.md) | `.claude/agents/design-system-auditor.md` |
| Codex | [codex/.codex/agents/design-system-auditor.toml](codex/.codex/agents/design-system-auditor.toml) | `.codex/agents/design-system-auditor.toml` |
| Cursor | [cursor/.cursor/agents/design-system-auditor.md](cursor/.cursor/agents/design-system-auditor.md) | `.cursor/agents/design-system-auditor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/design-system-auditor.md](gemini-cli/.gemini/agents/design-system-auditor.md) | `.gemini/agents/design-system-auditor.md` |
| GitHub Copilot | [copilot/.github/agents/design-system-auditor.agent.md](copilot/.github/agents/design-system-auditor.agent.md) | `.github/agents/design-system-auditor.agent.md` |

## What it does

A design system only works when people use it. Over time hardcoded hex values, magic pixel numbers and look-alike components creep in, and the system stops describing the product. This subagent measures that gap.

It compares the code against your tokens and shared components, then reports every deviation with the closest token or component to use instead. It never edits files, so the report can drive a cleanup you plan deliberately.

## Use it when

- You are about to roll out a rebrand or dark mode and need to know the blast radius
- A team asks how well the product follows the design system
- You want a prioritized cleanup list of off-token styles
- New components keep reinventing buttons and cards

## What it can access

- Reads source, style and config files
- No file changes and no commands run

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/design-system-auditor/
