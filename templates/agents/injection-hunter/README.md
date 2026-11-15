# Injection Hunter

**Subagent** · Security

Read-only subagent that traces untrusted input to SQL, shell, template and HTML sinks and reports each unsafe path with a proof.

## Install

```bash
npx workspacetemplates add injection-hunter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/injection-hunter.md](claude-code/.claude/agents/injection-hunter.md) | `.claude/agents/injection-hunter.md` |
| Codex | [codex/.codex/agents/injection-hunter.toml](codex/.codex/agents/injection-hunter.toml) | `.codex/agents/injection-hunter.toml` |
| Cursor | [cursor/.cursor/agents/injection-hunter.md](cursor/.cursor/agents/injection-hunter.md) | `.cursor/agents/injection-hunter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/injection-hunter.md](gemini-cli/.gemini/agents/injection-hunter.md) | `.gemini/agents/injection-hunter.md` |
| GitHub Copilot | [copilot/.github/agents/injection-hunter.agent.md](copilot/.github/agents/injection-hunter.agent.md) | `.github/agents/injection-hunter.agent.md` |

## What it does

Injection bugs live in the gap between where data enters and where it is used. This subagent starts at the entry points (request params, headers, uploaded files, queue messages) and follows each value until it reaches a sink that interprets text as code.

It reports only paths it can walk from source to sink, with the line numbers on each hop. It does not write fixes into your files, so the review stays separate from the patch.

## Use it when

- A new endpoint takes user input and builds a query or command
- You inherited a codebase with string-built SQL
- Before a pentest, to clear the obvious holes first
- A dependency upgrade changed how templates escape output

## What it can access

- Reads source files in your project
- Runs search and listing commands only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/injection-hunter/
