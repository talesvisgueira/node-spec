## ADDED Requirements

### Requirement: Workspace-wide Commands
The system SHALL provide scripts in the root `package.json` that allow executing commands across all workspace members.

#### Scenario: Build All Packages
- **WHEN** `pnpm run build:all` is executed from the root
- **THEN** it shall trigger the `build` command in every package within the workspace.

### Requirement: Dependency Management Protocol
The system SHALL use the `workspace:*` protocol for internal package dependencies.

#### Scenario: Internal Dependency Linking
- **WHEN** one package depends on another in the same workspace
- **THEN** its `package.json` must reference it with `workspace:*` to ensure local linking.
