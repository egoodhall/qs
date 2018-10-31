const fs = require('fs');
const path = require('path');
const os = require('os');
var ncp = require('ncp').ncp;
const rmdir = require('rimraf');

const { dirs, names } = require('./constants');

const getDateTime = () => {
  const date = new Date();
  let hour = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;
  let min = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;
  let sec = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;
  let day = date.getDate();
  day = (day < 10 ? '0' : '') + day;
  return year + '-' + month + '-' + day + '_' + hour + ':' + min + ':' + sec;
};

const overwrite = (origin, destination) => {
  ncp(origin, destination, err => {
    if (err) {
      return console.error(err);
    }
  });
};

const archive = name => {
  const archiveName = name || getDateTime();
  const archiveDir = path.join(dirs.archive, archiveName);
  if (fs.existsSync(archiveDir)) {
    console.log(`An archive named ${name} already exists`);
  } else {
    overwrite(dirs.script, archiveDir);
  }
};

const restore = archive => {
  if (!archive) {
    return console.error('No archive specified');
  }
  const archiveDir = path.join(dirs.archive, archive);
  if (!fs.existsSync(archiveDir)) {
    console.log(`No archive named '${archive}' found`);
  } else {
    overwrite(archiveDir, dirs.script);
  }
};

const rm = archive => {
  if (!archive) {
    return console.error('No archive specified');
  }
  const archiveDir = path.join(dirs.archive, archive);
  if (!fs.existsSync(archiveDir)) {
    console.log(`No archive named '${archive}' found`);
  } else {
    rmdir(archiveDir, err => err && console.error(err));
  }
};

module.exports = {
  restore,
  rs: restore,
  remove: rm,
  rm,
  save: archive,
  '--': archive,
};
