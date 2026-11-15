# Rust Reviewer

**Subagent** · Code quality · rust

Read-only subagent that reviews Rust code for unclear ownership, needless clones, unwrap in library paths and weak error types.

## Install

```bash
npx workspacetemplates add rust-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/rust-reviewer.md](claude-code/.claude/agents/rust-reviewer.md) | `.claude/agents/rust-reviewer.md` |
| Codex | [codex/.codex/agents/rust-reviewer.toml](codex/.codex/agents/rust-reviewer.toml) | `.codex/agents/rust-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/rust-reviewer.md](cursor/.cursor/agents/rust-reviewer.md) | `.cursor/agents/rust-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/rust-reviewer.md](gemini-cli/.gemini/agents/rust-reviewer.md) | `.gemini/agents/rust-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/rust-reviewer.agent.md](copilot/.github/agents/rust-reviewer.agent.md) | `.github/agents/rust-reviewer.agent.md` |

## What it does

The compiler guarantees memory safety, but not good design. Rust code written to satisfy the borrow checker often ends up cloning everything, unwrapping in the wrong places and returning stringly typed errors. This subagent looks for those patterns and explains the structure that removes them.

It runs clippy when available, then reads for what lints do not catch. No file is edited.

## Use it when

- A crate is getting clone() calls to make the borrow checker quiet
- A library panics on bad input instead of returning an error
- You are adding unsafe code or an FFI boundary
- Reviewing a pull request from someone new to Rust

## What it can access

- Reads files in your project
- Runs cargo check, clippy and test locally

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rust-reviewer/
