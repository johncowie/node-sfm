var chalk = require('chalk');

module.exports = {
  start: function() {
    log('migrations start');
  },
  migrationStart: function(migration) {
    logMigration(migration, 'started');
  },
  migrationComplete: function(migration) {
    logMigration(migration, 'complete');
  },
  migrationFailed: function(migration, error) {
    logMigration(migration, 'failed: ' + chalk.red(error));
  },
  complete: function(result) {
    log('applied ' + result.applied.length + ' migrations');
  },
  failed: function(error) {
    log('Error: ' + error);
  },
};

function logMigration(migration, message) {
  log(chalk.magenta(migration.name) + ' ' + chalk.yellow(message));
}

function log(message) {
  console.log(chalk.blue(now()) + ' ' + message);
}

function now() {
  return (new Date()).toISOString();
}