const fs = require('fs');
const path = require('path');
const os = require('os');
var ncp = require('ncp').ncp;
const rmdir = require('rimraf');

const { dirs, names } = require('./constants');

const getDateTime = () => {
  const date = new Date();
  const hour = date.getHours();
  hour = (hour < 10 ? '0' : '') + hour;
  const min = date.getMinutes();
  min = (min < 10 ? '0' : '') + min;
  const sec = date.getSeconds();
  sec = (sec < 10 ? '0' : '') + sec;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  month = (month < 10 ? '0' : '') + month;
  const day = date.getDate();
  day = (day < 10 ? '0' : '') + day;
  return year + '-' + month + '-' + day + '_' + hour + ':' + min + ':' + sec;
};

const ls = () => {
  fs.readdirSync(dirs.script).forEach(file => {
    console.log(file);
  });
};

module.exports = ls;
