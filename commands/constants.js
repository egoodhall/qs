const path = require('path');
const os = require('os');

const qsRootName = '.qs';
const qsArchiveName = 'archives';
const qsWorkingName = 'script';

const qsRootDir = path.join(os.homedir(), qsRootName);
const qsArchiveDir = path.join(qsRootDir, qsArchiveName);
const qsWorkingDir = path.join(qsRootDir, qsWorkingName);

module.exports = {
  dirs: {
    root: qsRootDir,
    archive: qsArchiveDir,
    script: qsWorkingDir,
  },
  names: {
    root: qsRootName,
    archive: qsArchiveName,
    script: qsWorkingName,
  },
};
