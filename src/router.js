import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import HistoryPage from "./views/HistoryPage.vue";
import AdventuresPage from "./views/AdventuresPage.vue";
import EventsPage from "./views/EventsPage.vue";
import ContactPage from "./views/ContactPage.vue";
import NotFound from "./views/NotFound.vue";
import FormData from "./views/FormData.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/adventures", component: AdventuresPage },
    { path: "/events", component: EventsPage },
    { path: "/history", component: HistoryPage },
    { path: "/contact", component: ContactPage },
    { path: "/formData", component: FormData },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
