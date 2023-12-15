import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./views/HomePage.vue";
import HistoryPage from "./views/HistoryPage.vue";
import ActivitiesPage from "./views/ActivitiesPage.vue";
import EventsPage from "./views/EventsPage.vue";
import ContactPage from "./views/ContactPage.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/activities", component: ActivitiesPage },
    { path: "/events", component: EventsPage },
    { path: "/history", component: HistoryPage },
    { path: "/contact", component: ContactPage },

    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
