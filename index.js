'use strict';

module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/es6',
		'./rules/imports',
		'./rules/node',
		'./rules/possible-errors',
		'./rules/stylistic',
		'./rules/strict',
		'./rules/variables',
	].map(require.resolve),
	env: {
		browser: true,
		amd: false,
		mocha: false,
		jasmine: false,
	},
};
