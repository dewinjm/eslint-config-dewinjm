'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/possible-errors',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  }
};
