import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js';
export const i18n = createI18n({
	locale   : 'en',
	messages : {
		en : {
			'web-developer-front-end' : 'Web developer front end',
			'present'                 : 'Present',
			'permanent-position'      : 'Permanent position'
		},
		fr : {
			'web-developer-front-end' : 'Développeur front-end',
			'present'                 : 'Present',
			'permanent-position'      : 'CDI'
		}
	}
});