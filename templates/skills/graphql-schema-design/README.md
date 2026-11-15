# GraphQL Schema Design

**Skill** · Backend and APIs · graphql

Designs a GraphQL schema around the product domain, with honest nullability, input types and mutation payloads that report errors as data.

## Install

```bash
npx workspacetemplates add graphql-schema-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/graphql-schema-design/SKILL.md](claude-code/.claude/skills/graphql-schema-design/SKILL.md) | `.claude/skills/graphql-schema-design/SKILL.md` |
| Codex | [codex/.agents/skills/graphql-schema-design/SKILL.md](codex/.agents/skills/graphql-schema-design/SKILL.md) | `.agents/skills/graphql-schema-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/graphql-schema-design/SKILL.md](cursor/.cursor/skills/graphql-schema-design/SKILL.md) | `.cursor/skills/graphql-schema-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/graphql-schema-design/SKILL.md](gemini-cli/.gemini/skills/graphql-schema-design/SKILL.md) | `.gemini/skills/graphql-schema-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/graphql-schema-design/SKILL.md](copilot/.github/skills/graphql-schema-design/SKILL.md) | `.github/skills/graphql-schema-design/SKILL.md` |

## What it does

A GraphQL schema is a contract that is hard to change once clients depend on it. This skill makes the agent design the types from what screens need, not from database tables, and decide nullability on purpose, since every wrongly non-null field can null out its whole parent.

Mutations get dedicated input and payload types that carry user errors, connections replace bare lists, and breaking changes are replaced with deprecations.

## Use it when

- You are starting a new GraphQL API
- The schema mirrors database tables and clients need many round trips
- A failing field keeps nulling out entire responses
- You need to add a mutation and want it shaped consistently

## What it can access

- Reads schema files and resolvers in your project
- Edits SDL and resolvers when approved
- Runs your schema lint and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/graphql-schema-design/
