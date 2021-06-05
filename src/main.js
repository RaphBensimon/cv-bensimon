import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Icon from './components/Icon.vue';
import { createMetaManager } from 'vue-meta';
const app = createApp(App)
	.use(router)
	.use(createMetaManager());
app.component('Icon', Icon);
app.mount('#app');
