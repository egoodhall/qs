#! /usr/bin/env node

const CLI = require('./cli');
const commands = require('./commands');

new CLI(commands).parse(process.argv);
