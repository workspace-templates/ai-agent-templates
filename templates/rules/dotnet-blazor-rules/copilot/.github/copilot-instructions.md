# Project rules: Blazor

## Components
- One component per `.razor` file with a code-behind `.razor.cs` partial class once logic passes a few lines. Keep markup free of business rules.
- Use `[Parameter]` for inputs and `EventCallback<T>` for outputs. Mark required inputs with `[EditorRequired]`. Never mutate a parameter from inside the child.
- Override `OnInitializedAsync` for loading; call `StateHasChanged` only after work done outside the render cycle.

## Services and state
- Inject services with `@inject` or `[Inject]`; never use `new` for a service. Keep HTTP and data access in typed services behind interfaces.
- Share state with a scoped service that raises a change event, and unsubscribe by implementing `IDisposable`. Do not use static fields for user data.
- Pass a `CancellationToken` through async calls.

## Forms
- Use `EditForm` with `DataAnnotationsValidator` or FluentValidation, and show `ValidationMessage`. Disable submit while a request runs.

## Quality
- Enable nullable reference types. Use `@key` on list items. Prefer `<Virtualize>` for long lists.
- Write bUnit tests for each component: render, interact, assert markup and callbacks. Mock services with interfaces.
- Run `dotnet build`, `dotnet test` and `dotnet format --verify-no-changes` before calling work done.
