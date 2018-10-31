const fs = require('fs');
const path = require('path');

const { dirs } = require('./constants');

const ls = archive => {
  const dir = path.join(dirs.archive, archive || '');
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      console.log(file);
    });
  } else {
    console.error(`Archive '${archive}' does not exist`);
  }
};

module.exports = ls;
