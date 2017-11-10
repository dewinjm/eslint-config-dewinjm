'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');
const cliEngine = new eslint.CLIEngine(conf);

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

// best-practices rules Unit Test
// validate no-empty-function rule
const bestPracticeReport = cliEngine.executeOnText("function foo() {} foo()");
assert.equal(bestPracticeReport.warningCount, 0);
assert.equal(bestPracticeReport.errorCount, 1); //should fail when has a error

// possible-error rules Unit Test
// validate use of console: rules: { 'no-console': 'warn' }
const possibleErrorReport = cliEngine.executeOnText("console.log(the);");
assert.equal(possibleErrorReport.warningCount, 1); //should fail when has a warn
assert.equal(repoReport.errorCount, 0);

// variable rules Unit Test
// validate no-unused-vars rule
const variableReport = cliEngine.executeOnText("var foo = 1;");
assert.equal(variableReport.warningCount, 0);
assert.equal(variableReport.errorCount, 1); //should fail when has a error
