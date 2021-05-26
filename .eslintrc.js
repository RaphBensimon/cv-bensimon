module.exports = {
	root : true,

	env : {
		node : true
	},
	extends : ['plugin:vue/essential', 'eslint:recommended', 'plugin:vue/strongly-recommended'],
	rules : {
		'no-console'                         : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger'                        : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		quotes                               : ['error', 'single'],
		semi                                 : ['error', 'always'],
		indent                               : [2, 'tab', { 'VariableDeclarator' : 'first' }],
		'vue/mustache-interpolation-spacing' :  ['error', 'always'],
		'vue/html-self-closing'              : ['error', {
			'html' : {
				'void'      : 'always',
				'normal'    : 'always',
				'component' : 'always'
			},
		}],
		'vue/max-attributes-per-line' : 'off',
		'vue/html-indent'             : ['error', 'tab', {
			'attribute'                 : 1,
			'baseIndent'                : 1,
			'closeBracket'              : 0,
			'alignAttributesVertically' : true,
			'ignores'                   : []
		}],
		'vue/html-closing-bracket-newline' : ['error', {
			'singleline' : 'never',
			'multiline'  : 'never'
		}],
		'no-tabs'                            : 0,
		'no-trailing-spaces'                 : ['error'],
		'semi-spacing'                       : 'error',
		'space-before-blocks'                : ['error', 'always'],
		'space-before-function-paren'        : ['error', 'never'],
		'key-spacing'                        : [
			2,
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true
				},
				multiLine : {
					beforeColon : true,
					afterColon  : true
				},
				align : {
					beforeColon : true,
					afterColon  : true,
					on          : 'colon',
					mode        : 'minimum'
				}
			}
		],
		'padded-blocks'           : ['error', 'never'],
		'brace-style'             : ['error', '1tbs'],
		'func-names'              : ['error', 'never'],
		'max-len'                 : ['error', { 'code'           : 120,
			'tabWidth'       : 4,
			'ignoreComments' : true }],
		'space-infix-ops'         : ['error', { 'int32Hint' : false }],
		'prefer-const'            : 'error',
		'comma-spacing'           : ['error', { 'before' : false,
			'after'  : true }],
		'object-curly-spacing'           : ['error', 'always'],
		'object-property-newline'        : 'error',
	},
};
