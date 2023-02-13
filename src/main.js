import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from "./router";
import '../mock/index.js';


// if(process.env.NODE_ENV==="development") Mock()
const app = createApp(App);
app.use(createPinia()).use(router);
app.mount('#app');