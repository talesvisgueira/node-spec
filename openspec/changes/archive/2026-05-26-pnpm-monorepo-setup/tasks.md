## 1. Workspace Initialization

- [x] 1.1 Create `pnpm-workspace.yaml` in the root directory.
- [x] 1.2 Define `packages/*` in `pnpm-workspace.yaml`.

## 2. Package Relocation

- [x] 2.1 Create the `packages/core` directory.
- [x] 2.2 Move existing source code, `package.json`, and `tsconfig.json` to `packages/core`.
- [x] 2.3 Adjust package name in `packages/core/package.json` to `@node-spec/core`.

## 3. Configuration and Scripts

- [x] 3.1 Update root `package.json` with workspace-wide scripts (`build:all`, `test:all`, `lint:all`).
- [x] 3.2 Update root `package.json` to remove project-specific logic that was moved to `packages/core`.
- [x] 3.3 Ensure root `tsconfig.json` acts as a base configuration for the workspace.

## 4. Verification

- [x] 4.1 Run `pnpm install` to regenerate the lockfile and link packages.
- [x] 4.2 Verify that workspace scripts successfully execute across the new structure.
