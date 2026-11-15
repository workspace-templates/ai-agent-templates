# Property Based Testing

**Skill** · Testing

Writes property-based tests with generators, invariants and shrinking for parsers, serializers and pure logic where example tests miss edge cases.

## Install

```bash
npx workspacetemplates add property-based-testing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/property-based-testing/SKILL.md](claude-code/.claude/skills/property-based-testing/SKILL.md) | `.claude/skills/property-based-testing/SKILL.md` |
| Codex | [codex/.agents/skills/property-based-testing/SKILL.md](codex/.agents/skills/property-based-testing/SKILL.md) | `.agents/skills/property-based-testing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/property-based-testing/SKILL.md](cursor/.cursor/skills/property-based-testing/SKILL.md) | `.cursor/skills/property-based-testing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/property-based-testing/SKILL.md](gemini-cli/.gemini/skills/property-based-testing/SKILL.md) | `.gemini/skills/property-based-testing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/property-based-testing/SKILL.md](copilot/.github/skills/property-based-testing/SKILL.md) | `.github/skills/property-based-testing/SKILL.md` |

## What it does

Example tests check the inputs you thought of. Property tests check a rule across thousands of generated inputs and hand back the smallest input that breaks it. This skill teaches the agent to find the rule first, then pick a library and write the generator.

It focuses on properties that pay off: round trips, idempotence, ordering and conservation laws, plus comparison against a slow but obviously correct model.

## Use it when

- You wrote a parser, encoder or serializer
- A function has too many edge cases to list by hand
- A bug came from an input nobody thought to test
- You are replacing an algorithm with a faster one and need proof it agrees

## What it can access

- Reads source files
- Adds test files and may add a dev dependency if none is present, after asking

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/property-based-testing/
