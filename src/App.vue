<template>
  <!-- 左上角nab.图标 -->
   <WebNano/>
  <!-- 路由页面显示  -->
  <!-- <router-view></router-view> -->
    <router-view v-slot='{Component}'>
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>  
  <!-- 右上角导航栏和动画效果 -->
  <NavPart/>
</template>

<script>
import WebNano from './components/WebNano.vue'
import NavPart from './components/NavPart.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let index=ref(0)
    return {
      index,
    }
  },
  components: {
    WebNano,
    NavPart
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
  height: 100vh;
}
body {
  position: relative;
  background-color: #F76C6C;
}
</style>
