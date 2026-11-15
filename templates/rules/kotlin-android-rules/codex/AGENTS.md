# Project rules: Android with Kotlin

## Architecture
- One feature per package with `ui`, `domain` and `data` layers. Composables render a single immutable `UiState`; they send events up as lambdas.
- A `ViewModel` exposes `StateFlow<UiState>` built with `stateIn` or `MutableStateFlow` and a `.asStateFlow()` view. One-off effects go through a `Channel` or are modeled as state.
- Repositories return `Flow` or suspend results and hide Room, Retrofit and DataStore details.

## Compose
- Hoist state. Keep composables stateless and previewable. Collect with `collectAsStateWithLifecycle()`.
- Use `remember` and `derivedStateOf` deliberately; give lazy list items stable `key`s. Take a `Modifier` parameter as the first optional one.

## Injection and coroutines
- Use Hilt with constructor injection. Inject `CoroutineDispatcher`s instead of hard-coding `Dispatchers.IO`.
- Launch from `viewModelScope` or `lifecycleScope`; never `GlobalScope`. Rethrow `CancellationException`.

## Quality
- Keep secrets out of source; read them from `local.properties` or CI.
- Unit-test ViewModels with `runTest` and Turbine; test composables with `createComposeRule`.
- Run `./gradlew ktlintCheck lint testDebugUnitTest assembleDebug` before finishing.
