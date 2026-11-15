# Project rules: Jest and Vitest

## Structure and naming
- Colocate `*.test.ts` next to the source. `describe` the unit; write `it('returns 404 when the user is missing')` as a behavior, not a method name.
- Arrange, act, assert, separated by blank lines. One behavior per test; use `it.each` for tables of inputs.

## Isolation
- Tests must not depend on order or share mutable state. Build data with small factory functions; reset in `beforeEach`, not `afterAll`.
- Control time with fake timers (`vi.useFakeTimers` or `jest.useFakeTimers`) and `setSystemTime`; never wait on real delays. Seed randomness.

## Mocks
- Mock only boundaries: network, filesystem, clock, third-party SDKs. Do not mock the unit under test or its pure helpers.
- Prefer `vi.fn()` or `jest.fn()` with explicit return values, and restore mocks automatically (`restoreMocks: true`). Verify calls with `toHaveBeenCalledWith`, not call counts alone.
- For HTTP, use MSW rather than stubbing fetch by hand.

## Assertions and coverage
- Assert outcomes users see. Use `toEqual` for data, `toThrow` with a message, `await expect(p).rejects` for promises. Avoid snapshots of large objects.
- Treat coverage as a gap finder; set thresholds on branches. Do not add assertion-free tests.
- Run the type check, lint and `npm test -- --coverage` before finishing.
