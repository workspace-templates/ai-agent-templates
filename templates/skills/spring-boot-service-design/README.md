# Spring Boot Service Design

**Skill** · Backend and APIs · java, spring-boot

Structures a Spring Boot service into thin controllers, transactional services and typed config, tested with slice tests instead of full context starts.

## Install

```bash
npx workspacetemplates add spring-boot-service-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/spring-boot-service-design/SKILL.md](claude-code/.claude/skills/spring-boot-service-design/SKILL.md) | `.claude/skills/spring-boot-service-design/SKILL.md` |
| Codex | [codex/.agents/skills/spring-boot-service-design/SKILL.md](codex/.agents/skills/spring-boot-service-design/SKILL.md) | `.agents/skills/spring-boot-service-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/spring-boot-service-design/SKILL.md](cursor/.cursor/skills/spring-boot-service-design/SKILL.md) | `.cursor/skills/spring-boot-service-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/spring-boot-service-design/SKILL.md](gemini-cli/.gemini/skills/spring-boot-service-design/SKILL.md) | `.gemini/skills/spring-boot-service-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/spring-boot-service-design/SKILL.md](copilot/.github/skills/spring-boot-service-design/SKILL.md) | `.github/skills/spring-boot-service-design/SKILL.md` |

## What it does

Spring Boot makes it easy to put everything in one controller class with field injection and a test that boots the whole application. This skill has the agent lay out the layers so each piece can be understood and tested alone.

You get constructor injection, validated configuration properties, transactions at the service boundary, and tests that use `@WebMvcTest` and `@DataJpaTest` so the suite stays fast.

## Use it when

- You are starting a new Spring Boot service
- A controller has grown business logic and database calls
- Tests take minutes because each one starts the full context
- Configuration is scattered across @Value annotations

## What it can access

- Reads Java source, build files and configuration
- Edits classes and tests when approved
- Runs your Maven or Gradle test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/spring-boot-service-design/
