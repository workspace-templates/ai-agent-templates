# Privacy Data Flow Reviewer

**Subagent** · Security

Read-only subagent that maps where personal data is collected, stored, logged and sent to third parties, then flags the privacy risks.

## Install

```bash
npx workspacetemplates add privacy-data-flow-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/privacy-data-flow-reviewer.md](claude-code/.claude/agents/privacy-data-flow-reviewer.md) | `.claude/agents/privacy-data-flow-reviewer.md` |
| Codex | [codex/.codex/agents/privacy-data-flow-reviewer.toml](codex/.codex/agents/privacy-data-flow-reviewer.toml) | `.codex/agents/privacy-data-flow-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/privacy-data-flow-reviewer.md](cursor/.cursor/agents/privacy-data-flow-reviewer.md) | `.cursor/agents/privacy-data-flow-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/privacy-data-flow-reviewer.md](gemini-cli/.gemini/agents/privacy-data-flow-reviewer.md) | `.gemini/agents/privacy-data-flow-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/privacy-data-flow-reviewer.agent.md](copilot/.github/agents/privacy-data-flow-reviewer.agent.md) | `.github/agents/privacy-data-flow-reviewer.agent.md` |

## What it does

Privacy reviews fail when nobody knows where the data actually goes. This subagent reads the code and builds a map: which personal fields come in, which tables and caches keep them, which log lines print them, and which outside services receive them.

The result is a data-flow inventory plus a list of risks, useful before a GDPR or CCPA review, a new analytics vendor, or a breach drill.

## Use it when

- Preparing a privacy impact assessment or records of processing
- Adding an analytics, error tracking or email vendor
- A support ticket shows an email address in the logs
- You must answer a data deletion or export request and are unsure where the data lives

## What it can access

- Reads source code, schemas and configuration in your project
- Cannot edit files or run commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/privacy-data-flow-reviewer/
