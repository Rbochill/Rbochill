module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'], //prettier 플러그인을 사용한다.
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
	},
};
