'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/possible-errors',
    './rules/variables',
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  }
};
