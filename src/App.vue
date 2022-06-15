<template>
  <div class='app'>
  <!-- 路由页面显示  -->
  <!-- <router-view></router-view> -->
    <router-view v-slot='{Component}'>
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>  
  <!-- 右上角导航栏和动画效果 -->
  <NavPart/>
  <!-- 左上角nab.图标 -->
  <WebNano/>
  </div>
</template>

<script>
import WebNano from './components/WebNano.vue'
import NavPart from './components/NavPart.vue'
import {ref,provide,reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let allowChange=ref(false)
    let highlight=ref(0)
    let isAdmin=ref(false)
    let topicColor=reactive(['#f87b7b','#F76C6C',"#cf6363"])
    let avatar=ref('')
    let msgData=reactive([])
    let allNotes=reactive([])
    const serverAddress='http://127.0.0.1:3007'
    //是否允许切换路由
    provide("allowChange",allowChange)
    //导航栏高光位置
    provide("highlight",highlight)
    //背景主题颜色
    provide("topicColor",topicColor)
    // 服务器地址
    provide("serverAddress",serverAddress)
    //当前管理员头像
    provide('avatar',avatar)
   //是否拥有管理员权限
    provide("isAdmin",isAdmin)  
    //留言数据
    provide('msgData',msgData)
    //笔记数据
    provide('allNotes',allNotes)
    return{
      topicColor
    }
  },
  components: {
    WebNano,
    NavPart
  },
  // 刷新后页面重定向到首页
  created() {
    if(this.$router.currentRoute.path!=='/'){
      this.$router.replace('/')
    }
  },

}
</script>

<style lang='less'>
*{
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
#app{
  width: 100%;
  height: 100%;
}
.app{
   width: 100%;
  height: 100%;
  background-color:v-bind('topicColor[1]');
}
body {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
}
.reference{
  position: absolute;
  width: 100%;
  bottom:10px;
  text-align: center;
  color:rgba(255, 255, 255, 0.5);
  font: 300 12px/1 "sofia-pro", sans-serif;
  animation: slide-in-blurred-bottom 0.5s 4s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  cursor: default;
  a{
     color:rgba(255, 255, 255, 0.5);
  }
}
@keyframes slide-in-blurred-bottom {
  0% {
    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 100%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
@media (max-width: 500px){
  .reference{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
