# Review Permissions

**Command** · Security

Reviews roles, scopes and access lists in a config or manifest and proposes a trimmed version that keeps only what is used.

## Install

```bash
npx workspacetemplates add review-permissions
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/review-permissions.md](claude-code/.claude/commands/review-permissions.md) | `.claude/commands/review-permissions.md` |
| Codex | [codex/home/.codex/prompts/review-permissions.md](codex/home/.codex/prompts/review-permissions.md) | `~/.codex/prompts/review-permissions.md` |
| Cursor | [cursor/.cursor/skills/review-permissions/SKILL.md](cursor/.cursor/skills/review-permissions/SKILL.md) | `.cursor/skills/review-permissions/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/review-permissions.toml](gemini-cli/.gemini/commands/review-permissions.toml) | `.gemini/commands/review-permissions.toml` |
| GitHub Copilot | [copilot/.github/skills/review-permissions/SKILL.md](copilot/.github/skills/review-permissions/SKILL.md) | `.github/skills/review-permissions/SKILL.md` |

## What it does

Permissions grow by accident: a wildcard added to get past an error, a scope nobody remembers asking for. This command reads the file you point at and compares what is granted with what the code actually needs.

You get a before-and-after proposal with the risk of each removal, so you can cut access without breaking the app.

## Use it when

- Reviewing an IAM policy, Kubernetes role or CI token
- Auditing app manifest permissions on Android or a browser extension
- After a security incident or a compliance request
- When a service account has more access than anyone can explain

## What it can access

- Reads the named config and the code that uses it
- Writes the trimmed file only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/review-permissions/
