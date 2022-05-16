// 这里是路由器

// 引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

import MyNotes from "../pages/MyNotes.vue";
import HomePage from "../pages/HomePage.vue";
import MyProject from "../pages/MyProject.vue";
const router = new createRouter({
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
    },
    {
      path: "/project",
      name: "project",
      component: MyProject
    }
  ]
});

// 全局路由守卫，禁止动画还没播完就给切了
//妈的params和query传进来的东西是JSON格式的，我就说怎么不管是true还是false这个sb守卫怎么都放行
router.beforeEach((to, from, next) => {
  if (JSON.stringify(to.params) === "{}") next();
  else if (JSON.parse(to.params.allowChange)) next();
});

export default router;
