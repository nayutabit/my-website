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
    const serverAddress='http://127.0.0.1:3007'
    //是否允许切换路由
    provide("allowChange",allowChange)
    //导航栏高光位置
    provide("highlight",highlight)
    //是否拥有管理员权限
    provide("isAdmin",isAdmin)
    //背景主题颜色
    provide("topicColor",topicColor)
    // 服务器地址
    provide("serverAddress",serverAddress)
    //管理员头像
    provide('avatar',avatar)
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
    if(this.$router.currentRoute.path!=='/home'){
      this.$router.replace('/home')
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

li{
  list-style: none;
}
a{
  text-decoration: none;
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
</style>
