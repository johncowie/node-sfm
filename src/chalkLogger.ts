var chalk = require('chalk')

const logger = {
  start: function () {
    log('migrations start')
  },
  migrationStart: function (migration) {
    logMigration(migration, 'started')
  },
  migrationComplete: function (migration) {
    logMigration(migration, 'complete')
  },
  migrationFailed: function (migration, error) {
    logMigration(migration, 'failed: ' + chalk.red(error))
  },
  complete: function (result) {
    log('applied ' + result.applied.length + ' migrations')
  },
  info: function (info) {
    log(info)
  },
  failed: function (error) {
    log('Error: ' + error)
  },
}

function logMigration(migration, message) {
  log(chalk.magenta(migration.name) + ' ' + chalk.yellow(message))
}

function log(message) {
  console.log(chalk.blue(now()) + ' ' + message)
}

function now() {
  return new Date().toISOString()
}

export default logger
