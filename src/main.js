import { createApp } from "vue";
import VueCarousel from "vue-carousel";

import router from "./router.js";
import VueScrollTo from "vue-scrollto";

import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.use(router);
app.use(VueCarousel);
app.use(VueScrollTo);
app.mount("#app");
