# Audit Dependencies

**Command** · Security

Runs your package manager audit, explains which advisories really matter and proposes the smallest safe upgrade for each.

## Install

```bash
npx workspacetemplates add audit-dependencies
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/audit-dependencies.md](claude-code/.claude/commands/audit-dependencies.md) | `.claude/commands/audit-dependencies.md` |
| Codex | [codex/home/.codex/prompts/audit-dependencies.md](codex/home/.codex/prompts/audit-dependencies.md) | `~/.codex/prompts/audit-dependencies.md` |
| Cursor | [cursor/.cursor/skills/audit-dependencies/SKILL.md](cursor/.cursor/skills/audit-dependencies/SKILL.md) | `.cursor/skills/audit-dependencies/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/audit-dependencies.toml](gemini-cli/.gemini/commands/audit-dependencies.toml) | `.gemini/commands/audit-dependencies.toml` |
| GitHub Copilot | [copilot/.github/skills/audit-dependencies/SKILL.md](copilot/.github/skills/audit-dependencies/SKILL.md) | `.github/skills/audit-dependencies/SKILL.md` |

## What it does

Audit output is long and mostly noise: dev-only packages, unreachable code paths and advisories with no fix. This command runs the audit for your ecosystem, then sorts the real risks from the rest.

For each real finding it names the lowest version that fixes it and flags whether the jump is a patch, minor or major change. Nothing is installed until you agree.

## Use it when

- Weekly or before every release
- When CI starts failing on a new advisory
- After adding several packages in one pull request
- When you need to explain risk to a non-technical manager

## What it can access

- Runs the package audit command, which may contact the registry
- Edits manifests only after you choose upgrades

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/audit-dependencies/
