## 1. Dependencies and Environment

- [x] 1.1 Install `@nestjs/typeorm`, `typeorm`, and `better-sqlite3` in `apps/api`.
- [x] 1.2 Add `*.sqlite` to `.gitignore` if not already present.

## 2. Configuration and Boilerplate

- [x] 2.1 Configure `TypeOrmModule` in `apps/api/src/app.module.ts` for SQLite.
- [x] 2.2 Define a base directory for the SQLite database file (e.g., `db/database.sqlite`).

## 3. Verification

- [x] 3.1 Verify that the application starts without database connection errors.
- [x] 3.2 Create a dummy entity and verify that TypeORM synchronizes it to the SQLite file.
