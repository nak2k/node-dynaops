const { access } = require('fs');
const { exitOnError } = require('../exitOnError');

exports.command = 'init';

exports.desc = 'create a dynaops.yaml file';

exports.builder = yargs => {
};

exports.handler = argv => {
  access('dynaops.yaml', err => {
    if (!err) {
      return exitOnError(Error(`dynaops.yaml exists already`));
    }

    console.dir(argv);
  });
};
