# OpenAPI Spec Authoring

**Skill** · Backend and APIs

Writes or repairs an OpenAPI 3.1 spec that matches the real code, lints it, and checks that a generated client compiles against it.

## Install

```bash
npx workspacetemplates add openapi-spec-authoring
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/openapi-spec-authoring/SKILL.md](claude-code/.claude/skills/openapi-spec-authoring/SKILL.md) | `.claude/skills/openapi-spec-authoring/SKILL.md` |
| Codex | [codex/.agents/skills/openapi-spec-authoring/SKILL.md](codex/.agents/skills/openapi-spec-authoring/SKILL.md) | `.agents/skills/openapi-spec-authoring/SKILL.md` |
| Cursor | [cursor/.cursor/skills/openapi-spec-authoring/SKILL.md](cursor/.cursor/skills/openapi-spec-authoring/SKILL.md) | `.cursor/skills/openapi-spec-authoring/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/openapi-spec-authoring/SKILL.md](gemini-cli/.gemini/skills/openapi-spec-authoring/SKILL.md) | `.gemini/skills/openapi-spec-authoring/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/openapi-spec-authoring/SKILL.md](copilot/.github/skills/openapi-spec-authoring/SKILL.md) | `.github/skills/openapi-spec-authoring/SKILL.md` |

## What it does

A spec that drifts from the code is worse than none, because clients trust it. This skill has the agent derive the spec from the actual routes and responses, reuse shared components and describe errors, rather than guessing from the route names.

It finishes by linting the document and generating a client, since a spec that lints but cannot generate code usually has a modelling problem hiding in it.

## Use it when

- You have an API with no spec, or a spec nobody trusts
- Generated clients come out with ugly or wrong types
- You want contract tests that catch drift
- A new endpoint needs documenting properly

## What it can access

- Reads route handlers, validators and tests
- Writes the spec file and a contract test when approved
- Runs a linter and a client generator through npx

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/openapi-spec-authoring/
