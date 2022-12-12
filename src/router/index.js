import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import ProjectPage from "../views/ProjectPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "root", componantent: HomePage },
    { path: "/", name: "projects.index", componantent: ProjectPage },

  ]
  });




export default 
