import {createApp} from 'vue'
import App from './App.vue'
import textTransform from "@/plugins/textTransform";

import './assets/main.css'
import {createPinia} from "pinia";
import routes from "@/router";
import {createRouter, createWebHistory} from "vue-router";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

app.use(pinia);
app.use(textTransform)
app.use(router)
app.mount('#app');
