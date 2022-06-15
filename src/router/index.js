// 这里是路由器

// 引入vue-router
import { createRouter, createWebHistory } from "vue-router";

import MyNotes from "../pages/MyNotes.vue";
import HomePage from "../pages/HomePage.vue";
import MyProject from "../pages/MyProject.vue";
import MyLife from "../pages/MyLife.vue";
import MyMsg from "../pages/MyMsg.vue";
import AdLogin from "../pages/AdLogin.vue";
import ContactMe from "../pages/ContactMe.vue";
const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
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
    },
    {
      path: "/life",
      name: "life",
      component: MyLife
    },
    {
      path: "/msg",
      name: "msg",
      component: MyMsg
    },
    {
      path: "/login",
      name: "login",
      component: AdLogin
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMe
    }
  ],
  // 路由跳转后滚动条如果不在初识位置，会引发页面抖动，为了消除抖动，在跳转前一刻将滚动条手动初始化
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 550);
    });
  }
});

// 全局路由守卫，禁止动画还没播完就给切了
//妈的params和query传进来的东西是JSON格式的，我就说怎么不管是true还是false这个sb守卫怎么都放行
router.beforeEach((to, from, next) => {
  if (JSON.stringify(to.params) === "{}") next();
  else if (JSON.parse(to.params.allowChange)) next();
  // window.scrollTo(0, 0);
});
export default router;
