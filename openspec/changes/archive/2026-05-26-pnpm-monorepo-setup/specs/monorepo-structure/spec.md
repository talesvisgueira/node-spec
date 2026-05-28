## ADDED Requirements

### Requirement: Workspace Configuration
The system SHALL have a `pnpm-workspace.yaml` file in the root directory that defines the workspace layout.

#### Scenario: Valid Workspace Layout
- **WHEN** the `pnpm-workspace.yaml` file is read
- **THEN** it must include `packages/*` as a member of the workspace.

### Requirement: Package Organization
The system SHALL move all existing source code and package files into a new `packages/core` directory.

#### Scenario: Package Relocation
- **WHEN** the monorepo setup is complete
- **THEN** the root directory should not contain a `src` directory (if one existed) or project-specific logic outside of `packages/`.
