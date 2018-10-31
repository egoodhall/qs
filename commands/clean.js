const fs = require('fs');
const path = require('path');
const rmdir = require('rimraf').sync;
var ncp = require('ncp').ncp;

const { dirs } = require('./constants');

const genRoot = path.join(__dirname, '..', 'gen');

module.exports = lang => {
  if (fs.existsSync(dirs.script)) {
    rmdir(dirs.script);
  }
  fs.mkdirSync(dirs.script);
  if (lang) {
    const genDir = path.join(genRoot, lang);
    if (!fs.existsSync(genDir)) {
      return console.error(`Cannot generate structure for ${lang}`);
    }
    ncp(genDir, dirs.script, err => {
      if (err) {
        return console.error(err);
      }
    });
  }
};
