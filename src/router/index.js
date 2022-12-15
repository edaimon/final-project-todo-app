import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import SignUp from "../views/SignUp.vue";
import { supabase } from "../supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path:"/", name:"signup", component: SignUp},
  { path: "/Dashboard", name:"dashboard", component: Dashboard },

],

});

router.beforeEach(async (to) => {
  console.log(to);
  const userAuth = await supabase.auth.getUser();
  console.log(userAuth);
  const isLoggedIn = userAuth.data.user !== null;

  if (isLoggedIn && to.name === "signup") {
    return "/dashboard";
  }
  if (!isLoggedIn && to.name !== "signup") {
    return "/";
  } 
})

 
export default router;
