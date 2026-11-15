# gRPC Service Design

**Skill** · Backend and APIs · go

Designs protobuf services with evolution-safe fields, proper status codes and deadlines, then checks changes with buf for breaking compatibility.

## Install

```bash
npx workspacetemplates add grpc-service-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/grpc-service-design/SKILL.md](claude-code/.claude/skills/grpc-service-design/SKILL.md) | `.claude/skills/grpc-service-design/SKILL.md` |
| Codex | [codex/.agents/skills/grpc-service-design/SKILL.md](codex/.agents/skills/grpc-service-design/SKILL.md) | `.agents/skills/grpc-service-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/grpc-service-design/SKILL.md](cursor/.cursor/skills/grpc-service-design/SKILL.md) | `.cursor/skills/grpc-service-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/grpc-service-design/SKILL.md](gemini-cli/.gemini/skills/grpc-service-design/SKILL.md) | `.gemini/skills/grpc-service-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/grpc-service-design/SKILL.md](copilot/.github/skills/grpc-service-design/SKILL.md) | `.github/skills/grpc-service-design/SKILL.md` |

## What it does

A protobuf file is easy to write and painful to change: reusing a field number or renaming carelessly corrupts data between services running different versions. This skill has the agent treat the schema as a long-lived contract.

It shapes request and response messages, picks the right status codes, propagates deadlines through Go handlers, and runs buf lint and breaking checks so incompatible edits are caught before deployment.

## Use it when

- You are adding a new gRPC service or method
- A proto change might break services deployed at older versions
- Calls hang because nothing sets a deadline
- Errors all come back as UNKNOWN or INTERNAL

## What it can access

- Reads .proto files and Go source
- Edits proto files, handlers and generated code through your build when approved
- Runs buf and your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/grpc-service-design/
