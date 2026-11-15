# License Compliance Checker

**Subagent** · Security

Read-only subagent that lists every dependency license and flags the ones that conflict with your project license or distribution model.

## Install

```bash
npx workspacetemplates add license-compliance-checker
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/license-compliance-checker.md](claude-code/.claude/agents/license-compliance-checker.md) | `.claude/agents/license-compliance-checker.md` |
| Codex | [codex/.codex/agents/license-compliance-checker.toml](codex/.codex/agents/license-compliance-checker.toml) | `.codex/agents/license-compliance-checker.toml` |
| Cursor | [cursor/.cursor/agents/license-compliance-checker.md](cursor/.cursor/agents/license-compliance-checker.md) | `.cursor/agents/license-compliance-checker.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/license-compliance-checker.md](gemini-cli/.gemini/agents/license-compliance-checker.md) | `.gemini/agents/license-compliance-checker.md` |
| GitHub Copilot | [copilot/.github/agents/license-compliance-checker.agent.md](copilot/.github/agents/license-compliance-checker.agent.md) | `.github/agents/license-compliance-checker.agent.md` |

## What it does

Open source licenses carry obligations, and a few of them clash with how you ship. This subagent builds an inventory of the licenses in your dependency tree and compares each one to your own license and the way you distribute the code.

It is a first pass for engineers, not legal advice. Anything ambiguous goes in a separate list for a lawyer instead of being waved through.

## Use it when

- Your private repository is going public next month
- A customer asked for a third-party license list
- A new dependency has no obvious license
- You ship a mobile app or a binary and need to know what copyleft applies

## What it can access

- Reads manifests, lockfiles and installed package license files
- Runs dependency listing commands that change nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/license-compliance-checker/
