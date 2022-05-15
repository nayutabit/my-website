// 这里是路由器

// 引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

import MyNotes from "../pages/MyNotes.vue";
import HomePage from "../pages/HomePage.vue";

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "homepage",
      component: HomePage
    },
    {
      path: "/note",
      name: "note",
      component: MyNotes
    }
  ]
});
