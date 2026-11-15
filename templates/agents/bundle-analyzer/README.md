# Bundle Analyzer

**Subagent** · Frontend · javascript

Read-only subagent that analyzes your build output, lists the heaviest modules and suggests cheaper alternatives or lazy loading.

## Install

```bash
npx workspacetemplates add bundle-analyzer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/bundle-analyzer.md](claude-code/.claude/agents/bundle-analyzer.md) | `.claude/agents/bundle-analyzer.md` |
| Codex | [codex/.codex/agents/bundle-analyzer.toml](codex/.codex/agents/bundle-analyzer.toml) | `.codex/agents/bundle-analyzer.toml` |
| Cursor | [cursor/.cursor/agents/bundle-analyzer.md](cursor/.cursor/agents/bundle-analyzer.md) | `.cursor/agents/bundle-analyzer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/bundle-analyzer.md](gemini-cli/.gemini/agents/bundle-analyzer.md) | `.gemini/agents/bundle-analyzer.md` |
| GitHub Copilot | [copilot/.github/agents/bundle-analyzer.agent.md](copilot/.github/agents/bundle-analyzer.agent.md) | `.github/agents/bundle-analyzer.agent.md` |

## What it does

Slow first loads often trace back to a few large dependencies: a date library pulled in for one format call, a charting package loaded on every page. This subagent reads your bundle stats and points at them.

It works from the actual build output, not from guesses, and suggests concrete swaps such as a lighter package, a subpath import or a dynamic import. It does not change code or config, so you can weigh each trade-off.

## Use it when

- The JavaScript bundle keeps growing and load time is suffering
- Lighthouse reports unused JavaScript and you need to know where it comes from
- You are choosing between dependencies and want their real cost
- You want to know what to lazy load on the first route

## What it can access

- Reads package.json, build config and source files
- May run your production build to produce a size report

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/bundle-analyzer/
