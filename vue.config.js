const webpack = require('webpack');
module.exports = {
	css : {
		loaderOptions : {
			sass : {
				prependData : `@import "@/assets/style/variables.scss";
            `
			}
		}
	},
	pluginOptions : {
		i18n : {
			locale         : 'en',
			fallbackLocale : 'en',
			localeDir      : 'locales',
			enableInSFC    : true
		}
	},
	chainWebpack : config => {
		config.module
			.rule('i18n')
			.resourceQuery(/blockType=i18n/)
			.type('javascript/auto')
			.use('i18n', webpack.DefinePlugin, [{
				__INTLIFY_PROD_DEVTOOLS__ : false
			}])
			.loader('@intlify/vue-i18n-loader');
	},
	publicPath : './'
};