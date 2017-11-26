'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = sendToGitCLI;

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _sendToGit = require('send-to-git');

var _sendToGit2 = _interopRequireDefault(_sendToGit);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function sendToGitCLI(argv) {
  const parsedArgv = (0, _yargs2.default)(argv)
    .option('s', {
      alias: 'source',
      demandOption: true,
      describe: 'Glob or array of globs to read',
      type: 'string'
    })
    .option('d', {
      alias: 'destination',
      demandOption: true,
      describe: 'Relative destination path',
      type: 'string'
    })
    .option('r', {
      alias: 'remote',
      demandOption: true,
      describe: 'git repository url',
      type: 'string'
    })
    .option('b', {
      alias: 'branch',
      default: 'master',
      describe: 'Branch to add and push the changes',
      type: 'string'
    })
    .option('cm', {
      alias: 'commit-message',
      default: 'Release',
      describe: 'Commit message for the changes',
      type: 'string'
    })
    .usage(`${_package2.default.description}.\nUsage: $0 <command> [options]`)
    .version(() => _package2.default.version)
    .alias('version', 'v')
    .help()
    .alias('help', 'h').argv;

  (0, _sendToGit2.default)(parsedArgv.s, parsedArgv.d, parsedArgv.r, {
    branch: parsedArgv.b,
    commitMessage: parsedArgv.cm
  });
}
//# sourceMappingURL=index.js.map
