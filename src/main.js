import { createApp } from "vue";
import App from "./App.vue";
// 导入自己配置好的路由模块
import router from "./router/index";

createApp(App).use(router).mount("#app");
