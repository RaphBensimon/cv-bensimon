import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Icon from './components/Icon.vue';
import { createMetaManager } from 'vue-meta';
import { i18n } from './translation/i18n';
const app = createApp(App)
	.use(router)
	.use(createMetaManager())
	.use(i18n);
app.component('Icon', Icon);
app.mount('#app');
