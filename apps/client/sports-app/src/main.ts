import './styles.scss';
import router from './router';
import { createApp } from 'vue';
import App from './app/RemoteSportsApp.vue';

const app = createApp(App);
app.use(router);
app.mount('#root');
