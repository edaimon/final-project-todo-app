import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/HomePage.vue"
// import ProjectPage from "../views/ProjectPage.vue"
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Dashboard },
    // { path: "/", name: "root", component: HomePage },
    // { path: "/", name: "projects.index", component: ProjectPage },
  ],
});

export default router;
