# Rails Service Objects

**Skill** · Backend and APIs · ruby, rails

Extracts business logic out of fat Rails controllers and models into small service and query objects, with specs that prove behavior stays the same.

## Install

```bash
npx workspacetemplates add rails-service-objects
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/rails-service-objects/SKILL.md](claude-code/.claude/skills/rails-service-objects/SKILL.md) | `.claude/skills/rails-service-objects/SKILL.md` |
| Codex | [codex/.agents/skills/rails-service-objects/SKILL.md](codex/.agents/skills/rails-service-objects/SKILL.md) | `.agents/skills/rails-service-objects/SKILL.md` |
| Cursor | [cursor/.cursor/skills/rails-service-objects/SKILL.md](cursor/.cursor/skills/rails-service-objects/SKILL.md) | `.cursor/skills/rails-service-objects/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/rails-service-objects/SKILL.md](gemini-cli/.gemini/skills/rails-service-objects/SKILL.md) | `.gemini/skills/rails-service-objects/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/rails-service-objects/SKILL.md](copilot/.github/skills/rails-service-objects/SKILL.md) | `.github/skills/rails-service-objects/SKILL.md` |

## What it does

A Rails controller action that creates a record, charges a card, sends mail and enqueues a job is hard to test and harder to change. This skill moves that sequence into a plain Ruby object with one public method and a clear result.

It also pulls tangled scopes and joins into query objects. Each extraction is small, covered by a spec first, and leaves the callers easier to read.

## Use it when

- A controller action is longer than fifteen lines
- A model callback triggers email, payments or other side effects
- A model has grown past 300 lines of mixed concerns
- You cannot test a workflow without hitting the whole request stack

## What it can access

- Reads Rails app code and specs
- Creates and edits Ruby files
- Runs bundle exec rspec

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rails-service-objects/
