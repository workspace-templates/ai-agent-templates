# Coverage Gaps

**Command** · Testing

Runs coverage, ranks the riskiest untested code by what breaks if it fails, and writes tests for the top items.

## Install

```bash
npx workspacetemplates add coverage-gaps
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/coverage-gaps.md](claude-code/.claude/commands/coverage-gaps.md) | `.claude/commands/coverage-gaps.md` |
| Codex | [codex/home/.codex/prompts/coverage-gaps.md](codex/home/.codex/prompts/coverage-gaps.md) | `~/.codex/prompts/coverage-gaps.md` |
| Cursor | [cursor/.cursor/skills/coverage-gaps/SKILL.md](cursor/.cursor/skills/coverage-gaps/SKILL.md) | `.cursor/skills/coverage-gaps/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/coverage-gaps.toml](gemini-cli/.gemini/commands/coverage-gaps.toml) | `.gemini/commands/coverage-gaps.toml` |
| GitHub Copilot | [copilot/.github/skills/coverage-gaps/SKILL.md](copilot/.github/skills/coverage-gaps/SKILL.md) | `.github/skills/coverage-gaps/SKILL.md` |

## What it does

A coverage percentage says little; what matters is which uncovered lines carry risk. This command runs the coverage tool, then ranks the gaps by how important and how complicated the code is.

It writes tests for the top few gaps and reports the numbers before and after, so you see the change instead of a vanity figure.

## Use it when

- When the coverage figure looks poor and the first target is unclear
- Before touching a module with weak tests
- After a production bug in an untested area
- When setting a sensible coverage target for a team

## What it can access

- Runs the coverage command and reads git history
- Adds test files; commits only after you confirm

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/coverage-gaps/
