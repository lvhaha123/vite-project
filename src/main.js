import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import router from "./router";
import './router/permission.js'
import '../mock/index.js';
import 'virtual:svg-icons-register'
const app = createApp(App);
app.use(createPinia()).use(router);
app.use(ElementPlus);
app.mount('#app');