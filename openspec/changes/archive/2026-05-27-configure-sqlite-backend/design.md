## Context

The current NestJS backend in `apps/api` lacks a persistence layer. Data is currently transient. To support future features, we need a reliable way to store data. SQLite provides a lightweight, file-based database that requires no external server setup, making it ideal for the current scale and local development.

## Goals / Non-Goals

**Goals:**
- Integrate TypeORM into the NestJS `apps/api` application.
- Configure SQLite as the database engine.
- Provide a clear pattern for adding new entities and repositories.
- Ensure the database file is excluded from version control but its schema is managed.

**Non-Goals:**
- Implement complex migrations for this initial setup (we will use `synchronize: true` for development).
- Support multiple database types (PostgreSQL, MySQL) at this time.
- Implement a full-featured UI for data management.

## Decisions

- **ORM: TypeORM**: Chosen for its first-class support in NestJS and mature ecosystem. Alternatives considered: Prisma (very powerful but requires more setup/CLI usage which might be overkill for a simple SQLite setup right now), Drizzle (gaining popularity but TypeORM is the "standard" in NestJS circles).
- **Driver: better-sqlite3**: Required for TypeORM v1.0.0 support of local SQLite databases.
- **Auto-Sync**: Use `synchronize: true` in development for rapid prototyping.

## Risks / Trade-offs

- **Concurrency**: SQLite has limitations with high concurrent writes. **Mitigation**: Not a concern for the current expected load; can migrate to PostgreSQL later if needed.
- **Data Loss**: `synchronize: true` can drop data if entities are changed significantly. **Mitigation**: Only use in development; development data is considered ephemeral for now.
