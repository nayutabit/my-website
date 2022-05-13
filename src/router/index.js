// 这里是路由器

// 引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

import MyNotes from "../pages/MyNotes.vue";

export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/note",
      component: MyNotes
    }
  ]
});
