const exec = require('child_process').execFile;
const path = require('path');
var commandExistsSync = require('command-exists').sync;

const { dirs } = require('./constants');

const editors = ['code', 'sublime', 'subl'];

module.exports = editor => {
  if (editor && !commandExistsSync(editor)) {
    return console.error(`'${editor}' not found in path`);
  }
  const validEditors = editors.filter(cmd => commandExistsSync(cmd));
  if (!editor && validEditors.length === 0) {
    console.log(
      `No supported editors found. Please install one of ${validEditors.join(
        ', ',
      )} in your path`,
    );
  }
  const toLaunch = editor || validEditors[0];
  exec(toLaunch, [dirs.script]);
};
