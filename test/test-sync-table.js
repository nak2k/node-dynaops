const test = require('tape');
const { handler } = require('../lib/cmds/sync-tables');

test('test sync-table', t => {
  t.plan(1);

  handler({
    path: __dirname + '/fixtures/dynaops.yaml',
    dryRun: true,
    verbose: true,
  });

  t.ok(true);
});
