# Angular Signals Migration

**Skill** · Frontend · angular

Moves Angular components to signals, signal inputs and standalone APIs one component at a time, with a build and test run after each step.

## Install

```bash
npx workspacetemplates add angular-signals-migration
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/angular-signals-migration/SKILL.md](claude-code/.claude/skills/angular-signals-migration/SKILL.md) | `.claude/skills/angular-signals-migration/SKILL.md` |
| Codex | [codex/.agents/skills/angular-signals-migration/SKILL.md](codex/.agents/skills/angular-signals-migration/SKILL.md) | `.agents/skills/angular-signals-migration/SKILL.md` |
| Cursor | [cursor/.cursor/skills/angular-signals-migration/SKILL.md](cursor/.cursor/skills/angular-signals-migration/SKILL.md) | `.cursor/skills/angular-signals-migration/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/angular-signals-migration/SKILL.md](gemini-cli/.gemini/skills/angular-signals-migration/SKILL.md) | `.gemini/skills/angular-signals-migration/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/angular-signals-migration/SKILL.md](copilot/.github/skills/angular-signals-migration/SKILL.md) | `.github/skills/angular-signals-migration/SKILL.md` |

## What it does

A big-bang move to signals breaks templates in ways the compiler only reveals late. This skill migrates a single component, runs the build, and only then moves on, so every commit leaves the app working.

It covers inputs, outputs, queries, derived state and RxJS interop, and it names the cases where leaving an observable alone is the better choice.

## Use it when

- You want to modernize an Angular app without a feature freeze
- A component uses @Input setters and ngOnChanges to derive state
- You are removing NgModules in favor of standalone components
- Change detection bugs point at mutable component fields

## What it can access

- Reads and edits Angular components, templates and specs
- Runs ng build and ng test

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/angular-signals-migration/
