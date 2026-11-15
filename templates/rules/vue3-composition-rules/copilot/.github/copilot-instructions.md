# Project rules: Vue 3 with Composition API

## Components
- Use `<script setup lang="ts">` in every single-file component. Do not write new Options API components or mixins.
- Type props with `defineProps<{ ... }>()` and defaults with `withDefaults`. Type events with `defineEmits<{ (e: 'save', id: string): void }>()`. Never mutate a prop; emit an event instead.
- Use `v-model` through `defineModel` for two-way bindings on form components.
- Give `v-for` a stable `:key`, and never put `v-if` and `v-for` on the same element.
- Component files are PascalCase and multi-word, with `Base` or `App` prefixes for shared primitives.

## Reactivity
- Prefer `ref` for values and `computed` for derived state. Use `watch` only for side effects, with `watchEffect` for simple cases.
- Do not destructure a reactive object without `toRefs` or `storeToRefs`; it loses reactivity.

## Composables and state
- Put reusable stateful logic in `composables/useThing.ts`, return refs and functions, and clean up listeners in `onScopeDispose` or `onUnmounted`.
- Use Pinia setup stores for cross-component state, one store per domain. Keep server data and local form state out of global stores when a composable does the job.

## Testing and checks
- Test with Vitest and Vue Test Utils: mount, act through the DOM, assert on rendered output and emitted events.
- Run `vue-tsc --noEmit`, the ESLint run and `vitest run` before finishing.
