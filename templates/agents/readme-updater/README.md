# README Updater

**Subagent** · Documentation

Subagent that checks a README against the current code and fixes outdated setup steps, commands, options and examples, without rewriting its voice.

## Install

```bash
npx workspacetemplates add readme-updater
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/readme-updater.md](claude-code/.claude/agents/readme-updater.md) | `.claude/agents/readme-updater.md` |
| Codex | [codex/.codex/agents/readme-updater.toml](codex/.codex/agents/readme-updater.toml) | `.codex/agents/readme-updater.toml` |
| Cursor | [cursor/.cursor/agents/readme-updater.md](cursor/.cursor/agents/readme-updater.md) | `.cursor/agents/readme-updater.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/readme-updater.md](gemini-cli/.gemini/agents/readme-updater.md) | `.gemini/agents/readme-updater.md` |
| GitHub Copilot | [copilot/.github/agents/readme-updater.agent.md](copilot/.github/agents/readme-updater.agent.md) | `.github/agents/readme-updater.agent.md` |

## What it does

READMEs rot quietly. The install command changes, a flag is renamed, an example imports a function that moved. This subagent runs the README's claims against the repository and corrects only what is wrong or missing.

It keeps your structure and tone, edits in small precise changes, and lists every correction so you can review the diff. It does not invent features or marketing text.

## Use it when

- A new teammate followed the setup steps and they failed
- You renamed commands, scripts or environment variables
- Several releases passed without anyone touching the docs
- Before publishing a package or opening a repository to outsiders

## What it can access

- Reads the whole repository to verify claims
- Edits README.md only
- Runs harmless commands such as help output

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/readme-updater/
