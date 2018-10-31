module.exports = class CLI {
  constructor(structure) {
    this.structure = structure;
  }

  _parse(args, tree) {
    const next = tree[args[0]];
    const defaultNext = tree['--'];
    this.traversed.push(args[0]);
    if (next) {
      if (typeof next === 'function') {
        return next(...args.slice(1));
      } else {
        return this._parse(args.slice(1), next);
      }
    } else if (defaultNext && typeof defaultNext === 'function') {
      return defaultNext(...args);
    }
    console.log(`Invalid command: '${this.traversed.join('')}'`);
  }

  parse(argv) {
    this.traversed = [];
    this._parse(argv.slice(2), this.structure);
  }
};
