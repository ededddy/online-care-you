import { createApp } from 'vue';
import VueMobileDetection from "vue-mobile-detection";
import naive from "naive-ui";
import App from './App.vue';

const app = createApp(App);
app.use(naive);
app.use(VueMobileDetection);
app.mount('#app');
