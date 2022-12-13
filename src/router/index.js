import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path:"/", component: SignUp},
  { path: "/Dashboard", component: Dashboard },

],

});

export default router;
