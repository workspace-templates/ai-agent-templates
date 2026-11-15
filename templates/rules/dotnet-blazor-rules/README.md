# .NET Blazor Rules

**Project rules** · Frontend · csharp, dotnet

Project rules for Blazor apps: small components, scoped state, injected services, EditForm validation and bUnit component tests.

## Install

```bash
npx workspacetemplates add dotnet-blazor-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/dotnet-blazor-rules.mdc](cursor/.cursor/rules/dotnet-blazor-rules.mdc) | `.cursor/rules/dotnet-blazor-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules guide an agent building Blazor Server or WebAssembly interfaces. They keep components small, move logic into injected services and make forms and state behave the same way across the app.

They also cover the test side, so every new component arrives with a bUnit test that renders it and checks the markup and events.

## Use it when

- You add pages to a Blazor app
- Components grow into hundreds of lines with logic inline
- Forms validate in different ways on each page
- You want component tests from day one

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dotnet-blazor-rules/
