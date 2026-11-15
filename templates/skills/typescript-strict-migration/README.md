# TypeScript Strict Migration

**Skill** · Code quality · typescript

Moves a TypeScript project to strict mode one compiler flag at a time, fixing each wave of errors with real types instead of any casts or ts-ignore.

## Install

```bash
npx workspacetemplates add typescript-strict-migration
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/typescript-strict-migration/SKILL.md](claude-code/.claude/skills/typescript-strict-migration/SKILL.md) | `.claude/skills/typescript-strict-migration/SKILL.md` |
| Codex | [codex/.agents/skills/typescript-strict-migration/SKILL.md](codex/.agents/skills/typescript-strict-migration/SKILL.md) | `.agents/skills/typescript-strict-migration/SKILL.md` |
| Cursor | [cursor/.cursor/skills/typescript-strict-migration/SKILL.md](cursor/.cursor/skills/typescript-strict-migration/SKILL.md) | `.cursor/skills/typescript-strict-migration/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/typescript-strict-migration/SKILL.md](gemini-cli/.gemini/skills/typescript-strict-migration/SKILL.md) | `.gemini/skills/typescript-strict-migration/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/typescript-strict-migration/SKILL.md](copilot/.github/skills/typescript-strict-migration/SKILL.md) | `.github/skills/typescript-strict-migration/SKILL.md` |

## What it does

Switching on "strict" in one step gives you thousands of errors and a pull request nobody can review. This skill enables the flags one by one, in an order that keeps each batch small, and commits a clean build after every flag.

The fixes are honest ones: narrowing, proper types and handled null cases. Casting to any or silencing with a comment is treated as a failure, not a shortcut.

## Use it when

- tsconfig has strict set to false and you want it on
- A new package must start strict while the old code stays as is
- Runtime errors keep coming from undefined values the compiler could catch
- You want the migration split into reviewable steps

## What it can access

- Reads and edits TypeScript files and tsconfig.json
- Runs tsc, your linter and your tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/typescript-strict-migration/
