# RAG Evaluator

**Subagent** · Data and AI

Subagent that builds a small retrieval test set and measures recall and answer quality of a RAG pipeline with a repeatable script.

## Install

```bash
npx workspacetemplates add rag-evaluator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/rag-evaluator.md](claude-code/.claude/agents/rag-evaluator.md) | `.claude/agents/rag-evaluator.md` |
| Codex | [codex/.codex/agents/rag-evaluator.toml](codex/.codex/agents/rag-evaluator.toml) | `.codex/agents/rag-evaluator.toml` |
| Cursor | [cursor/.cursor/agents/rag-evaluator.md](cursor/.cursor/agents/rag-evaluator.md) | `.cursor/agents/rag-evaluator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/rag-evaluator.md](gemini-cli/.gemini/agents/rag-evaluator.md) | `.gemini/agents/rag-evaluator.md` |
| GitHub Copilot | [copilot/.github/agents/rag-evaluator.agent.md](copilot/.github/agents/rag-evaluator.agent.md) | `.github/agents/rag-evaluator.agent.md` |

## What it does

Most RAG systems are tuned by looking at three examples. This subagent replaces that with a small, written test set: questions drawn from your actual documents, each with the passage that should be found and a reference answer.

It then runs retrieval and measures how often the right passage comes back, and grades answers against the reference. You get numbers per failure type, and a script you can rerun after every change to chunking or embeddings.

## Use it when

- You changed chunk size or embedding model and need to know if it helped
- Users report wrong answers and you cannot tell if retrieval or generation is at fault
- You are building a RAG feature and have no way to measure it
- Comparing two vector stores or rerankers on your own documents

## What it can access

- Reads your pipeline code and source documents
- Writes test cases and a script under evals/
- Runs the retriever, which may call your embedding service

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rag-evaluator/
