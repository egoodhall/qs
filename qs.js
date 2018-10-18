#! /usr/bin/env node
const cli = require('commander');

cli.command(
  'archive [name]',
  'archive the current script. if name is undefined, a name will be generated',
);
cli.command('edit', 'edit the current script');
cli.command('exec', 'execute the quick script');
cli.command(
  'gen [type]',
  'generate a new quick script - this will obliterate any existing one',
);
cli.command('init', 'initialize the qs directory');
cli.command('ls', 'list archives');
cli.command('open <name>', 'open a given archive');
cli.command(
  'restore <name>',
  'restore an archived script - this will obliterate any existing one',
);
cli.command('rm <name>', 'remove an archive');

cli.parse(process.argv);
