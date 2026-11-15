# Project rules: Electron

## Process boundaries
- The renderer is untrusted. Keep `contextIsolation: true`, `nodeIntegration: false` and `sandbox: true` on every BrowserWindow. Never turn them off to fix a bug; fix the design.
- Main owns files, shell, network and native APIs. The renderer asks main through IPC.
- Set a strict Content-Security-Policy. Load only local files or known HTTPS origins, and deny `window.open` and navigation with `setWindowOpenHandler` and `will-navigate`.

## Preload and IPC
- Expose a small, named API with `contextBridge.exposeInMainWorld`. Never expose `ipcRenderer` itself or a generic "invoke any channel" function.
- Use `ipcMain.handle` with `ipcRenderer.invoke`. Validate every argument in main (a Zod schema) and check `event.senderFrame` origin before acting.
- Define channel names and payload types once in a shared TypeScript file.

## Packaging and updates
- Package with Electron Forge or electron-builder. Sign and notarize release builds; never ship unsigned.
- Use `electron-updater` or the built-in autoUpdater over HTTPS with signature checks. Keep devtools off in production.

## Quality
- Store settings with `app.getPath('userData')`. Log through one module.
- Run `tsc --noEmit`, lint, unit tests and a Playwright Electron smoke test before finishing.
