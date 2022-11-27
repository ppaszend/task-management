import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/main.css";
import {
  faUserSecret,
  faEllipsisVertical,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const pinia = createPinia();
const app = createApp(App);

library.add(faUserSecret, faEllipsisVertical, faChevronDown);

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
