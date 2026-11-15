# Auth Flow Reviewer

**Subagent** · Security

Read-only subagent that traces login, session, and permission paths through your code and flags missing checks and object-level access holes.

## Install

```bash
npx workspacetemplates add auth-flow-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/auth-flow-reviewer.md](claude-code/.claude/agents/auth-flow-reviewer.md) | `.claude/agents/auth-flow-reviewer.md` |
| Codex | [codex/.codex/agents/auth-flow-reviewer.toml](codex/.codex/agents/auth-flow-reviewer.toml) | `.codex/agents/auth-flow-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/auth-flow-reviewer.md](cursor/.cursor/agents/auth-flow-reviewer.md) | `.cursor/agents/auth-flow-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/auth-flow-reviewer.md](gemini-cli/.gemini/agents/auth-flow-reviewer.md) | `.gemini/agents/auth-flow-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/auth-flow-reviewer.agent.md](copilot/.github/agents/auth-flow-reviewer.agent.md) | `.github/agents/auth-flow-reviewer.agent.md` |

## What it does

Most access bugs are not in the login form. They are in the one endpoint that forgot to ask who is calling, or that trusts an ID from the URL. This subagent follows each route from the request to the data and checks that identity and permission are enforced on the way.

It lists every unprotected route, every place a user-supplied ID reaches a query without an ownership check, and weaknesses in session and token handling. It does not change code.

## Use it when

- You added new endpoints and want to know if they are properly protected
- A pentest or customer report mentions access to other users data
- You are moving from one auth library or session scheme to another
- Before launch you want an independent look at roles and permissions

## What it can access

- Reads route, middleware, and data access code
- Runs read-only searches

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/auth-flow-reviewer/
