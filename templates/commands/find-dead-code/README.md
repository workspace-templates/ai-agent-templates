# Find Dead Code

**Command** · Code quality

Finds unused exports, files and dependencies and shows the evidence for each, so you can delete with confidence.

## Install

```bash
npx workspacetemplates add find-dead-code
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/find-dead-code.md](claude-code/.claude/commands/find-dead-code.md) | `.claude/commands/find-dead-code.md` |
| Codex | [codex/home/.codex/prompts/find-dead-code.md](codex/home/.codex/prompts/find-dead-code.md) | `~/.codex/prompts/find-dead-code.md` |
| Cursor | [cursor/.cursor/skills/find-dead-code/SKILL.md](cursor/.cursor/skills/find-dead-code/SKILL.md) | `.cursor/skills/find-dead-code/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/find-dead-code.toml](gemini-cli/.gemini/commands/find-dead-code.toml) | `.gemini/commands/find-dead-code.toml` |
| GitHub Copilot | [copilot/.github/skills/find-dead-code/SKILL.md](copilot/.github/skills/find-dead-code/SKILL.md) | `.github/skills/find-dead-code/SKILL.md` |

## What it does

Dead code costs reading time and hides real structure, but deleting it by guess breaks things that load code dynamically. This command looks for unused exports, orphan files and unused packages, then proves each claim with searches.

Every result carries its evidence and a confidence level. Anything reached by reflection, string imports or a public package interface is flagged instead of listed as safe.

## Use it when

- Before a cleanup or a major refactor
- The bundle or image size keeps growing
- You suspect packages in the manifest are no longer used
- You are removing a feature and need to find what it left behind

## What it can access

- Reads and searches the repository
- Edits files only after you pick what to remove

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/find-dead-code/
