# Project rules: SwiftUI for iOS

## Views and state
- Keep views small and declarative. Move logic into an `@Observable` model marked `@MainActor`. Use `@State` to own a model, `@Bindable` for bindings, `@Environment` for shared dependencies.
- Extract a subview when a body passes about 40 lines. Avoid `AnyView`; prefer generics and `@ViewBuilder`.
- Use stable `Identifiable` ids in `ForEach`; never index-based identity for mutable lists.

## Navigation
- Use `NavigationStack` with a typed path and `navigationDestination(for:)`. Present sheets from state, not from imperative calls.

## Concurrency and data
- Use async/await. Call services from `.task { }`, which cancels with the view. Isolate shared mutable state in an `actor`. Make model types `Sendable`.
- Never force-unwrap or use `try!` outside tests. Surface failures as state the view renders.
- Put networking behind a protocol so tests can inject a fake. Keep secrets in Keychain.

## Quality
- Every view has a `#Preview` with sample data, including an empty and an error case.
- Write XCTest or Swift Testing tests for each model. Add accessibility labels and support Dynamic Type.
- Run `swift-format lint` and `xcodebuild test` on a simulator before finishing.
