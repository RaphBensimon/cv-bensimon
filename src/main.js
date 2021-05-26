import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Icon from './components/Icon.vue';
const app = createApp(App);
app.component('Icon', Icon);
app.use(router);
app.mount('#app');
