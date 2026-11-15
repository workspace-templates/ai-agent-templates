# Java Maven Library Rules

**Project rules** · Backend and APIs · java

Project rules for Java libraries built with Maven: a small public API, semantic versions, null contracts, Javadoc and a repeatable release.

## Install

```bash
npx workspacetemplates add java-maven-library-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/java-maven-library-rules.mdc](cursor/.cursor/rules/java-maven-library-rules.mdc) | `.cursor/rules/java-maven-library-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

A library is judged by what it exposes, not by how it works inside. These rules make an agent treat every public type as a promise to users and keep the surface as small as it can be.

They also set up versioning, documentation and a release routine, so a change never breaks a downstream build by accident.

## Use it when

- You maintain a Java library published to Maven Central or an internal repository
- An agent keeps making internal classes public
- You want a consistent policy for nullability and exceptions
- Release steps differ every time someone cuts a version

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/java-maven-library-rules/
