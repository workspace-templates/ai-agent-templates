# Express Middleware Design

**Skill** · Backend and APIs · node

Orders Express and Fastify middleware correctly, centralizes error handling and validates requests at the edge, so handlers only see clean input.

## Install

```bash
npx workspacetemplates add express-middleware-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/express-middleware-design/SKILL.md](claude-code/.claude/skills/express-middleware-design/SKILL.md) | `.claude/skills/express-middleware-design/SKILL.md` |
| Codex | [codex/.agents/skills/express-middleware-design/SKILL.md](codex/.agents/skills/express-middleware-design/SKILL.md) | `.agents/skills/express-middleware-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/express-middleware-design/SKILL.md](cursor/.cursor/skills/express-middleware-design/SKILL.md) | `.cursor/skills/express-middleware-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/express-middleware-design/SKILL.md](gemini-cli/.gemini/skills/express-middleware-design/SKILL.md) | `.gemini/skills/express-middleware-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/express-middleware-design/SKILL.md](copilot/.github/skills/express-middleware-design/SKILL.md) | `.github/skills/express-middleware-design/SKILL.md` |

## What it does

Node servers tend to collect middleware in whatever order it was added, with try/catch in every handler and validation scattered through the code. This skill puts the stack in a deliberate order and gives errors one place to end up.

It reviews or builds the pipeline from the outside in: request id, logging, security headers, body parsing, auth, validation, handlers, then one error handler that decides the status code and the response shape.

## Use it when

- You are starting a new Express or Fastify API
- Handlers repeat the same try/catch and res.status(500) code
- An unhandled promise rejection takes your server down
- Requests reach handlers with missing or wrongly typed fields

## What it can access

- Reads server source and package.json
- Edits JavaScript or TypeScript files
- Runs your test script

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/express-middleware-design/
