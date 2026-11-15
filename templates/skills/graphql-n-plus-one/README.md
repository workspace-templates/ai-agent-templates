# GraphQL N+1

**Skill** · Backend and APIs · graphql

Finds resolvers that fire one query per parent object and fixes them with request-scoped dataloaders, batching and proof from query counts.

## Install

```bash
npx workspacetemplates add graphql-n-plus-one
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/graphql-n-plus-one/SKILL.md](claude-code/.claude/skills/graphql-n-plus-one/SKILL.md) | `.claude/skills/graphql-n-plus-one/SKILL.md` |
| Codex | [codex/.agents/skills/graphql-n-plus-one/SKILL.md](codex/.agents/skills/graphql-n-plus-one/SKILL.md) | `.agents/skills/graphql-n-plus-one/SKILL.md` |
| Cursor | [cursor/.cursor/skills/graphql-n-plus-one/SKILL.md](cursor/.cursor/skills/graphql-n-plus-one/SKILL.md) | `.cursor/skills/graphql-n-plus-one/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/graphql-n-plus-one/SKILL.md](gemini-cli/.gemini/skills/graphql-n-plus-one/SKILL.md) | `.gemini/skills/graphql-n-plus-one/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/graphql-n-plus-one/SKILL.md](copilot/.github/skills/graphql-n-plus-one/SKILL.md) | `.github/skills/graphql-n-plus-one/SKILL.md` |

## What it does

A list of 50 orders with a customer on each one can quietly become 51 database queries. It passes review because every resolver looks fine on its own. This skill makes the agent measure first, using query logs, then fix only what it can show.

The usual fix is a dataloader created per request, keyed correctly and returning results in the order the keys came in. The agent adds a test that asserts the number of queries so the regression cannot return unseen.

## Use it when

- A GraphQL query is slow when the list gets long
- Database logs show the same query repeated with different ids
- You are adding a nested field to a type that is returned in lists
- Response time grew after a schema change

## What it can access

- Reads resolvers and data access code
- Runs your tests and may turn on query logging locally
- Edits resolvers and adds loaders when approved

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/graphql-n-plus-one/
