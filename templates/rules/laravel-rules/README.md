# Laravel Rules

**Project rules** · Backend and APIs · php, laravel

Project rules for Laravel apps: form request validation, Eloquent query hygiene, queued jobs, policies for authorization and Pest feature tests.

## Install

```bash
npx workspacetemplates add laravel-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/laravel-rules.mdc](cursor/.cursor/rules/laravel-rules.mdc) | `.cursor/rules/laravel-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Laravel offers a built-in place for almost everything, and these rules make the agent use those places: form requests for input, policies for permissions, jobs for slow work.

The goal is controllers that stay short and queries that stay cheap, with tests that describe behavior in plain Pest syntax.

## Use it when

- You are adding features to a Laravel application
- Controllers validate and authorize inline
- Pages run hundreds of queries
- Slow work such as email blocks the request

## What it can access

- Instructions only; no files are read or commands run by it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/laravel-rules/
