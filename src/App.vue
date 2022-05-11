<template>
   <WebNano/>
  <BackLogo />
</template>

<script>
import BackLogo from './components/BackLogo.vue'
import WebNano from './components/WebNano.vue'
export default {
  name: 'App',
  components: {
    BackLogo,
    WebNano
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
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
