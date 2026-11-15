# Security Auditor

**Subagent** · Security

Read-only subagent that audits a repo for exploitable vulnerabilities and returns them ranked by severity with evidence and fixes.

## Install

```bash
npx workspacetemplates add security-auditor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/security-auditor.md](claude-code/.claude/agents/security-auditor.md) | `.claude/agents/security-auditor.md` |
| Codex | [codex/.codex/agents/security-auditor.toml](codex/.codex/agents/security-auditor.toml) | `.codex/agents/security-auditor.toml` |
| Cursor | [cursor/.cursor/agents/security-auditor.md](cursor/.cursor/agents/security-auditor.md) | `.cursor/agents/security-auditor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/security-auditor.md](gemini-cli/.gemini/agents/security-auditor.md) | `.gemini/agents/security-auditor.md` |
| GitHub Copilot | [copilot/.github/agents/security-auditor.agent.md](copilot/.github/agents/security-auditor.agent.md) | `.github/agents/security-auditor.agent.md` |

## What it does

A scanner dumps hundreds of warnings. This subagent reads the code like an attacker: it finds where untrusted input enters, follows it to dangerous sinks, and only reports what it can show is reachable.

The report is ranked, each finding has a file and line and a concrete exploit path, and nothing is changed. It is a starting point for a human review, not a certification.

## Use it when

- Before launching a service or opening a repo to the public
- After inheriting a codebase nobody has reviewed
- When a new auth, upload or payment feature lands
- You need a ranked list to plan a security sprint

## What it can access

- Reads files and git history in your project
- Runs read-only commands such as git log and dependency audit commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/security-auditor/
