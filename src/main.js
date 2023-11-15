import { createApp } from "vue";
import VueCarousel from "vue-carousel";

import router from "./router.js";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

app.use(router);
app.use(VueCarousel);

app.mount("#app");
