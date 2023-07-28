module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'], // prettier 플러그인을 사용한다.
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
		'spaced-comment': ['error', 'always'],
		'no-var': 'error', // var 변수를 사용할수 없다.
		camelcase: [
			// 카멜케이스를 강제한다.
			'error',
			{
				properties: 'always',
				ignoreDestructuring: false,
			},
		],
		'no-array-constructor': 'error', // 배열과 객체는 반드시 리터럴로 선언한다.
		'no-new-object': 'error', // 배열과 객체는 반드시 리터럴로 선언한다.
		'padding-line-between-statements': ['error', {blankLine: 'always', prev: '*', next: 'return'}], // return문 바로 위는 한 칸 비워 놓는다
		curly: ['error', 'all'], // 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.
		'keyword-spacing': [
			// 키워드, 연산자와 다른 코드 사이에 공백이 있어야 한다.
			'error',
			{
				before: true,
				after: true,
				overrides: {},
			},
		],
		'space-before-blocks': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': [
			// 키워드, 연산자와 다른 코드 사이에 공백이 있어야 한다.
			'error',
			{
				words: true,
				nonwords: false,
			},
		],
		'space-in-parens': ['error', 'never'], // 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.
		'comma-spacing': [
			// 콤마 다음에 값이 올 경우 공백이 있어야 한다.
			'error',
			{
				before: false,
				after: true,
			},
		],
		// indent: [
		//   // 주석은 설명하려는 구문에 맞춰 들여쓰기 한다.
		//   'error',
		//   2,
		//   {
		//     ignoreComments: false,
		//   },
		// ],
	},
};
