const init = require('./init');
const archive = require('./archive');
const ls = require('./ls');
const clean = require('./clean');
const exec = require('./exec');
const edit = require('./edit');
const chdir = require('./goto');

module.exports = {
  init,
  archive,
  a: archive,
  ls,
  clean,
  clear: clean,
  c: clean,
  edit,
  e: edit,
  goto: chdir,
  g: chdir,
  '--': exec,
};
