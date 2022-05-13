<template>
  <!-- 左上角nab.图标 -->
   <WebNano/>
   <!-- 底图和动画效果 -->
  <BackLogo />
  <!-- 右上角导航栏和动画效果 -->
  <NavPart @getIndex='routeRedirection'/>
  <router-view></router-view>
</template>

<script>
import BackLogo from './components/BackLogo.vue'
import WebNano from './components/WebNano.vue'
import NavPart from './components/NavPart.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let index=ref(0)
    return {
      index
    }
  },
  components: {
    BackLogo,
    WebNano,
    NavPart
  },
  methods:{
    routeRedirection(index){
         console.log('当前需要跳转的路由索引是：',index)
    }
  }
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
  height: 100vh;
}
body {
  position: relative;
  background-color: #F76C6C;
}
</style>
