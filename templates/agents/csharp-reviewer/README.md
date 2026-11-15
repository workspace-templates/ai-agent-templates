# C# Reviewer

**Subagent** · Code quality · csharp, dotnet

Read-only subagent that reviews C# and .NET code for async pitfalls, missing disposal, nullable warnings and costly LINQ.

## Install

```bash
npx workspacetemplates add csharp-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/csharp-reviewer.md](claude-code/.claude/agents/csharp-reviewer.md) | `.claude/agents/csharp-reviewer.md` |
| Codex | [codex/.codex/agents/csharp-reviewer.toml](codex/.codex/agents/csharp-reviewer.toml) | `.codex/agents/csharp-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/csharp-reviewer.md](cursor/.cursor/agents/csharp-reviewer.md) | `.cursor/agents/csharp-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/csharp-reviewer.md](gemini-cli/.gemini/agents/csharp-reviewer.md) | `.gemini/agents/csharp-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/csharp-reviewer.agent.md](copilot/.github/agents/csharp-reviewer.agent.md) | `.github/agents/csharp-reviewer.agent.md` |

## What it does

C# code that compiles cleanly can still deadlock on async, leak a database connection or run a query a hundred times. This subagent reviews a .NET change for those defects and for places where nullable annotations were switched off to quiet the compiler.

It uses the build output as evidence, reads the rest, and leaves the source untouched.

## Use it when

- A change mixes async and sync code or calls .Result
- An ASP.NET Core endpoint or EF Core query was added
- Nullable reference types are being enabled in a project
- A service shows high memory or too many open connections

## What it can access

- Reads files in your project
- Runs dotnet build on touched projects

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/csharp-reviewer/
