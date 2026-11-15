# Mutation Testing

**Skill** · Testing

Runs mutation testing, reads the surviving mutants and strengthens the tests whose assertions failed to notice a deliberate code change.

## Install

```bash
npx workspacetemplates add mutation-testing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/mutation-testing/SKILL.md](claude-code/.claude/skills/mutation-testing/SKILL.md) | `.claude/skills/mutation-testing/SKILL.md` |
| Codex | [codex/.agents/skills/mutation-testing/SKILL.md](codex/.agents/skills/mutation-testing/SKILL.md) | `.agents/skills/mutation-testing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/mutation-testing/SKILL.md](cursor/.cursor/skills/mutation-testing/SKILL.md) | `.cursor/skills/mutation-testing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/mutation-testing/SKILL.md](gemini-cli/.gemini/skills/mutation-testing/SKILL.md) | `.gemini/skills/mutation-testing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/mutation-testing/SKILL.md](copilot/.github/skills/mutation-testing/SKILL.md) | `.github/skills/mutation-testing/SKILL.md` |

## What it does

Line coverage says a test executed the code. Mutation testing says whether the test would notice if the code were wrong. The tool flips operators and removes statements, and every mutant that survives marks an assertion gap.

The agent focuses the run on a small, important area, sorts survivors into real gaps and harmless equivalents, and tightens the tests until the meaningful ones are killed.

## Use it when

- Your dashboard shows high coverage yet defects keep escaping
- You are about to rely on a core module and want proof its tests work
- Reviewing a test suite that seems to assert very little
- Setting up a quality gate for new code

## What it can access

- Reads source and test files
- Runs the mutation tool and your tests, and edits test files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/mutation-testing/
