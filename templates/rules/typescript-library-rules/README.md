# TypeScript Library Rules

**Project rules** · Backend and APIs · typescript

Project rules for publishing a TypeScript package: exports map, bundled types, semver discipline, tree-shaking and tests against the built output.

## Install

```bash
npx workspacetemplates add typescript-library-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/typescript-library-rules.mdc](cursor/.cursor/rules/typescript-library-rules.mdc) | `.cursor/rules/typescript-library-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Writing a library is different from writing an app, because every exported name becomes a promise to strangers. These rules teach the agent to treat the public surface as a contract.

They cover how the package is described to bundlers and compilers, what a safe change looks like under semver, and how to prove that the built files work before a release.

## Use it when

- You are starting a package meant for npm
- An agent keeps adding exports without thinking about breaking changes
- Consumers report missing types or broken ESM and CJS imports
- You want a release checklist the agent follows every time

## What it can access

- Instructions only; nothing runs until the agent follows them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/typescript-library-rules/
