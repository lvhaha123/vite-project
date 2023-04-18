import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import router from "./router";
import '../mock/index.js';

// if (process.env.NODE_ENV === "development") {
//   require('../mock/index')
// };
const app = createApp(App);
app.use(createPinia()).use(router).use(ElementPlus);
app.mount('#app');