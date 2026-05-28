## Why

Currently, the backend does not have a persistent data store. Adding SQLite will allow the application to store and retrieve data between restarts, providing a foundation for features like user management and content storage. SQLite is chosen for its simplicity and zero-configuration setup, ideal for this stage of development.

## What Changes

- Add SQLite and an ORM (TypeORM) to the backend dependencies.
- Configure a database connection in the NestJS application.
- Set up initial database schema/entities.
- Update development scripts to handle database migrations or synchronization.

## Capabilities

### New Capabilities
- `database-persistence`: Core capability for connecting to and interacting with a SQLite database.

### Modified Capabilities
(None)

## Impact

- `apps/api/package.json`: New dependencies (`@nestjs/typeorm`, `typeorm`, `better-sqlite3`).
- `apps/api/src/app.module.ts`: Database module integration.
- New entity files and configuration files in `apps/api`.
