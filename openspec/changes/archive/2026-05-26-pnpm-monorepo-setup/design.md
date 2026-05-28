## Context

The current project is a standalone package. To improve scalability and modularity, we are transitioning to a pnpm monorepo. This allows us to manage multiple packages (like the CLI, subagents, and core logic) within a single repository while sharing common configurations and dependencies.

## Goals / Non-Goals

**Goals:**
- Initialize a functional pnpm workspace.
- Reorganize existing source code into a `packages/` directory.
- Establish a pattern for root-level scripts that manage the entire workspace.
- Ensure zero-config local development with `workspace:*` protocols.

**Non-Goals:**
- Implementing a full CI/CD pipeline (only providing the necessary hooks).
- Adding new features beyond the structural reorganization.
- Changing the build tool (e.g., sticking with `tsc`).

## Decisions

- **Folder Structure**: Move all existing logic into `packages/core`. This keeps the root clean and prepares for additional packages like `packages/cli` or `packages/ui` in the future.
- **pnpm-workspace.yaml**: Define `packages/*` as the workspace member pattern. This is the industry standard for pnpm monorepos.
- **Shared Configs**: Root `tsconfig.json` will serve as a base for package-level TypeScript configurations to ensure consistency.
- **Root package.json**: Will contain scripts like `test:all`, `build:all`, and `lint:all` using `pnpm --filter "*" <command>`.

## Risks / Trade-offs

- **[Risk] Broken Paths**: Moving files will break relative imports. → **[Mitigation]** Use a migration script or thorough global search/replace to update imports to use the new package names or adjusted relative paths.
- **[Risk] Dependency Conflicts**: Packages might start depending on different versions of the same library. → **[Mitigation]** Use pnpm's `workspace:*` protocol and root-level `pnpm-lock.yaml` to enforce consistency.
