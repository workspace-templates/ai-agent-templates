# ASP.NET Core Web API Rules

**Project rules** · Backend and APIs · dotnet, csharp

Project rules for ASP.NET Core APIs, minimal APIs or controllers: DTOs, async all the way, ProblemDetails errors and EF Core discipline.

## Install

```bash
npx workspacetemplates add dotnet-webapi-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/dotnet-webapi-rules.mdc](cursor/.cursor/rules/dotnet-webapi-rules.mdc) | `.cursor/rules/dotnet-webapi-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules keep an ASP.NET Core API consistent whether you use minimal APIs or controllers. They decide where validation, mapping and data access live, so generated endpoints follow one shape.

They also set the habits that prevent common production problems: blocking async calls, tracked queries that bloat memory and exceptions that leak internals to clients.

## Use it when

- You start a new .NET API
- Generated code returns EF entities from endpoints
- Errors come back in different formats
- You need a clear rule for minimal APIs versus controllers

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dotnet-webapi-rules/
