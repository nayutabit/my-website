<template>
  <!-- 左上角nab.图标 -->
   <WebNano/>
   <!-- 底图和动画效果 -->
  <BackLogo />
  <!-- 右上角导航栏和动画效果 -->
  <NavPart />
</template>

<script>
import BackLogo from './components/BackLogo.vue'
import WebNano from './components/WebNano.vue'
import NavPart from './components/NavPart.vue'
export default {
  name: 'App',
  components: {
    BackLogo,
    WebNano,
    NavPart
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
