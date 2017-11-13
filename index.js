'use strict';

module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/node',
		'./rules/possible-errors',
		'./rules/stylistic',
		'./rules/strict',
		'./rules/variables',
	].map(require.resolve),
	env: {
		browser: true,
		node: true,
		amd: false,
		mocha: false,
		jasmine: false,
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
};
