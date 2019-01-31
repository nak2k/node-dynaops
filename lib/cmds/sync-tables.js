const { exitOnError } = require('../exitOnError');
const { loadOpsFile } = require('../loadOpsFile');
const { syncTables } = require('dynaops-core');
const AWS = require('aws-sdk');

exports.command = 'sync-tables';

exports.desc = 'sync tables';

exports.builder = yargs => {
  yargs
    .options({
      'dry-run': {
        alias: 'n',
        desc: 'Do not make any changes',
        type: 'boolean',
      },
    });
};

exports.handler = argv => {
  const {
    path = 'dynaops.yaml',
    dryRun,
    verbose,
  } = argv;

  loadOpsFile(path, (err, tableDefs) => {
    if (err) {
      return exitOnError(err);
    }

    const dynamodb = new AWS.DynamoDB();

    syncTables({
      tableDefs,
      dynamodb,
      dryRun,
      verbose,
    }, exitOnError);
  });
};
