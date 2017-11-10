'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');
const cliEngine = new eslint.CLIEngine(conf);
const linter = require("eslint").linter;

// The source files to lint.
const repoFiles = [
  'index.js',
  'test/test.js'
];

// Runs the linter on the repository files and asserts no errors were found.
const repoReport = cliEngine.executeOnFiles(repoFiles);
assert.equal(repoReport.errorCount, 0);
assert.equal(repoReport.warningCount, 0);

repoFiles.forEach((file, index) => {
  assert(repoReport.results[index].filePath.endsWith(file));
});

// possible-error rules Unit Test
// validate use of console: rules: { 'no-console': 'warn' }
let possibleErrorReport = cliEngine.executeOnText("console.log(the);");
assert.equal(possibleErrorReport.warningCount, 1);
