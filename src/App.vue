<template>

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
</template>

<script>
import WebNano from './components/WebNano.vue'
import NavPart from './components/NavPart.vue'
import {ref,provide} from 'vue'
export default {
  name: 'App',
  setup(){
    let allowChange=ref(false)
    let highlight=ref(0)
    let isAdmin=ref(false)
    provide("allowChange",allowChange)
    provide("highlight",highlight)
    provide("isAdmin",isAdmin)
  },
  components: {
    WebNano,
    NavPart
  },
  created() {
    if(this.$router.currentRoute.path!=='/home'){
      this.$router.replace('/home')
    }
  },

}
</script>

<style lang='less'>
@mainColor1:#f87b7b;
@mainColor2:#F76C6C;
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
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: @mainColor2;
  overflow: hidden;
}
</style>
