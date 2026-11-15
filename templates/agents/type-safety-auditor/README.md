# Type Safety Auditor

**Subagent** · Code quality · typescript

Read-only subagent that finds any-casts, unchecked assertions and unsafe narrowing in TypeScript and proposes properly typed replacements.

## Install

```bash
npx workspacetemplates add type-safety-auditor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/type-safety-auditor.md](claude-code/.claude/agents/type-safety-auditor.md) | `.claude/agents/type-safety-auditor.md` |
| Codex | [codex/.codex/agents/type-safety-auditor.toml](codex/.codex/agents/type-safety-auditor.toml) | `.codex/agents/type-safety-auditor.toml` |
| Cursor | [cursor/.cursor/agents/type-safety-auditor.md](cursor/.cursor/agents/type-safety-auditor.md) | `.cursor/agents/type-safety-auditor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/type-safety-auditor.md](gemini-cli/.gemini/agents/type-safety-auditor.md) | `.gemini/agents/type-safety-auditor.md` |
| GitHub Copilot | [copilot/.github/agents/type-safety-auditor.agent.md](copilot/.github/agents/type-safety-auditor.agent.md) | `.github/agents/type-safety-auditor.agent.md` |

## What it does

TypeScript only protects the code that it can see. A single `as any`, a non-null assertion or a JSON.parse result used as a typed value turns the checker off for everything downstream. This subagent finds those holes and shows how to close them.

It sorts findings by what they can break at runtime, not by how ugly they look. The proposed fix for each is real typed code: a type guard, a schema parse at the boundary, a discriminated union, or a tighter generic.

## Use it when

- You are turning on strict mode and need to know the cost
- A runtime error slipped past the compiler
- You want to review data boundaries such as API responses and JSON input
- The codebase accumulated casts to silence errors

## What it can access

- Reads TypeScript source and tsconfig files
- Runs the TypeScript compiler with no output to count errors

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/type-safety-auditor/
