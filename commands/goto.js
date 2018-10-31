const spawn = require('child_process').spawn;
const { dirs } = require('./constants');

const cd = dir => {
  spawn('bash', ['-i'], {
    cwd: dir,
    stdio: 'inherit',
  });
};

module.exports = dir => {
  if (!dir || dir === 'script') {
    cd(dirs.script);
  } else if (dir === 'archive') {
    cd(dirs.archive);
  } else {
    return console.error("Invalid goto. Valid options are 'script', 'archive'");
  }
};
