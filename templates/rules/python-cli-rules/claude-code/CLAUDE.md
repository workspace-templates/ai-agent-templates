# Project rules: Python CLI

## Layout and packaging
- Use a `src/<package>` layout and `pyproject.toml` with a `[project.scripts]` entry point. Keep `cli.py` thin; put logic in importable modules that take plain arguments.
- Pin the supported Python range and type-hint public functions. Run `mypy` or `pyright` in strict mode.

## Arguments and I/O
- Parse with `argparse` or Typer, never `sys.argv` by hand. Every option has help text; offer `--version` and `--help`.
- Write results to stdout and diagnostics to stderr. Offer `--json` for machine output. Read stdin when a path is `-`.
- Honor `NO_COLOR`; do not prompt when stdin is not a TTY.

## Errors and exit codes
- Return `0` on success, `1` for runtime failures, `2` for usage errors. Define a small exception hierarchy, catch it once in `main()` and print one clear line; show tracebacks only with `--debug`.
- Use `logging` configured from `-v` flags, not `print`, for diagnostics.

## Quality
- Make `main(argv=None) -> int` and call `sys.exit(main())` only under `__main__`.
- Test with pytest, `capsys` and `tmp_path`; assert exit codes and stderr text.
- Run `ruff check`, `ruff format --check` and `pytest` before finishing.
