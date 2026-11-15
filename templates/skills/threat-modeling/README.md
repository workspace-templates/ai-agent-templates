# Threat Modeling

**Skill** · Security

Builds a STRIDE threat model for a feature, with data flows, trust boundaries, abuse cases and ranked mitigations tied to real code.

## Install

```bash
npx workspacetemplates add threat-modeling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/threat-modeling/SKILL.md](claude-code/.claude/skills/threat-modeling/SKILL.md) | `.claude/skills/threat-modeling/SKILL.md` |
| Codex | [codex/.agents/skills/threat-modeling/SKILL.md](codex/.agents/skills/threat-modeling/SKILL.md) | `.agents/skills/threat-modeling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/threat-modeling/SKILL.md](cursor/.cursor/skills/threat-modeling/SKILL.md) | `.cursor/skills/threat-modeling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/threat-modeling/SKILL.md](gemini-cli/.gemini/skills/threat-modeling/SKILL.md) | `.gemini/skills/threat-modeling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/threat-modeling/SKILL.md](copilot/.github/skills/threat-modeling/SKILL.md) | `.github/skills/threat-modeling/SKILL.md` |

## What it does

Security review at the end of a project finds problems that are expensive to change. A threat model done while a feature is still a design finds them when the fix is a paragraph of text. This skill has the agent draw the feature as data flows, mark where trust changes and walk each crossing through the six STRIDE categories.

The output is a short list of specific threats, each with who attacks, how, what it costs you and what stops it, mapped to files so the mitigations can be built and tested.

## Use it when

- You design a feature that handles logins, payments, uploads or user data
- A new integration lets a third party call your API
- A review asks 'what could go wrong here' and nobody has an answer
- You are about to expose an internal service to the internet

## What it can access

- Reads files and configuration in your project
- Runs read-only search commands
- Writes a model file only when you name one

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/threat-modeling/
