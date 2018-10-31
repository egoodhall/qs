const exec = require('child_process').execFile;
const path = require('path');

const { dirs } = require('./constants');

module.exports = (...args) => {
  exec(`${path.join(dirs.script, '.qs')}`, args, (err, stdout, stderr) => {
    if (!err) {
      process.stdout.write(stdout || stderr);
    }
  });
};
