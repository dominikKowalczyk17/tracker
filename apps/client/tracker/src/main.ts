import './styles.scss';
import { createApp } from 'vue';
import DashboardView from './app/DashboardView.vue';

const app = createApp(DashboardView);
app.mount('#root');
