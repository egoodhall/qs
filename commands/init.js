const fs = require('fs');

const { dirs } = require('./constants');

module.exports = () => {
  [dirs.root, dirs.archive, dirs.script].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
};
