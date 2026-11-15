# Threat Modeler

**Subagent** · Security

Read-only subagent that builds a threat model for a feature from its real code and data flows, with ranked threats and the controls to add.

## Install

```bash
npx workspacetemplates add threat-modeler
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/threat-modeler.md](claude-code/.claude/agents/threat-modeler.md) | `.claude/agents/threat-modeler.md` |
| Codex | [codex/.codex/agents/threat-modeler.toml](codex/.codex/agents/threat-modeler.toml) | `.codex/agents/threat-modeler.toml` |
| Cursor | [cursor/.cursor/agents/threat-modeler.md](cursor/.cursor/agents/threat-modeler.md) | `.cursor/agents/threat-modeler.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/threat-modeler.md](gemini-cli/.gemini/agents/threat-modeler.md) | `.gemini/agents/threat-modeler.md` |
| GitHub Copilot | [copilot/.github/agents/threat-modeler.agent.md](copilot/.github/agents/threat-modeler.agent.md) | `.github/agents/threat-modeler.agent.md` |

## What it does

A threat model made from a whiteboard drifts from the code in a month. This subagent reads the feature as it exists, lists the data it handles and the trust boundaries it crosses, and applies STRIDE to each crossing to find what could go wrong.

Each threat is tied to a file and rated by likelihood and impact, with the control that would reduce it and whether that control already exists. The output works as a review document or a ticket list.

## Use it when

- A new feature handles uploads, payments, or personal data
- You need a design review artifact for a security sign-off
- A major integration is being added and you want to see the new attack surface
- You want to decide where limited security effort should go

## What it can access

- Reads source, config, and schema files
- Runs read-only searches

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/threat-modeler/
