const { readFile } = require('fs');
const yaml = require('yaml');

function loadOpsFile(path, callback) {
  readFile(path, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    const doc = yaml.parseDocument(data);

    callback(null, doc.toJSON());
  });
}

exports.loadOpsFile = loadOpsFile;
