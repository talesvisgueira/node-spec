## ADDED Requirements

### Requirement: Database Connection
The backend system SHALL establish a persistent connection to a SQLite database file upon application startup.

#### Scenario: Successful connection
- **WHEN** the NestJS application starts
- **THEN** it successfully connects to the SQLite database specified in the configuration.

### Requirement: Entity Persistence
The system SHALL provide a mechanism to define data entities that map to database tables and allow CRUD operations.

#### Scenario: Save entity
- **WHEN** a new entity is created and saved through the ORM
- **THEN** it is persisted in the SQLite database file.

#### Scenario: Retrieve entity
- **WHEN** an entity is queried from the database
- **THEN** it returns the data previously persisted.
