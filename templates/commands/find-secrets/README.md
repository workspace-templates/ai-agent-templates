# Find Secrets

**Command** · Security

Searches the working tree for API keys, tokens, private keys and risky config files and reports where each one lives.

## Install

```bash
npx workspacetemplates add find-secrets
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/find-secrets.md](claude-code/.claude/commands/find-secrets.md) | `.claude/commands/find-secrets.md` |
| Codex | [codex/home/.codex/prompts/find-secrets.md](codex/home/.codex/prompts/find-secrets.md) | `~/.codex/prompts/find-secrets.md` |
| Cursor | [cursor/.cursor/skills/find-secrets/SKILL.md](cursor/.cursor/skills/find-secrets/SKILL.md) | `.cursor/skills/find-secrets/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/find-secrets.toml](gemini-cli/.gemini/commands/find-secrets.toml) | `.gemini/commands/find-secrets.toml` |
| GitHub Copilot | [copilot/.github/skills/find-secrets/SKILL.md](copilot/.github/skills/find-secrets/SKILL.md) | `.github/skills/find-secrets/SKILL.md` |

## What it does

Leaked credentials usually hide in places nobody looks: an old .env copy, a test fixture, a Dockerfile argument or a commented-out line. This command sweeps the tree with patterns for the common key formats and checks which files git actually tracks.

The report names location and type but masks the value itself, so the output is safe to paste into a ticket. It does not rotate or delete anything.

## Use it when

- Before making a private repository public
- After a contractor or intern pushed code
- When a scanner in CI flags something and you need to see the context
- When onboarding to a legacy project

## What it can access

- Reads files across the working tree and git metadata
- Changes nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/find-secrets/
