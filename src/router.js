import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import History from "./views/History.vue";
import Adventures from "./views/Adventures.vue";
import Events from "./views/Events.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/adventures", component: Adventures },
    { path: "/events", component: Events },
    { path: "/history", component: History },
    { path: "/contact", component: Contact },
    { path: "/:notFound(.*)", component: null },
  ],
});

export default router;
