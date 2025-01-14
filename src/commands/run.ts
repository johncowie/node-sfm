import { applyMigration } from '../applyMigration'
import { DatabaseClient } from '../db'
import { Logger } from '../logger'
import migrationHistory from '../migrationHistory'

export async function runMigrations(
  client: DatabaseClient,
  source: any,
  logger: Logger
) {
  const history = migrationHistory(client)

  const migrations = await source()

  await history.ensureMigrationsTableCreated()

  const unapplied = await history.filterAlreadyApplied(migrations)

  const applier = applyMigration(client, history, logger)

  for (const migration of unapplied) {
    await applier(migration)
  }

  return { applied: unapplied }
}
