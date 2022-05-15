<template>
  <transition appear="">
    <div class='my-note'>这里是NOTE页面</div>
  </transition>
</template>

<script >
export default {
   name:'MyNote'
}
</script>

<style lang='less' scoped>
.my-note{
  position: absolute;
  top:50vh;
  left:50vw;
}
.v-enter-active{
  animation: bounce-in-top 1s both;
}
.v-leave-active{
  animation: slide-out-blurred-top 0.45s  cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}


@keyframes bounce-in-top {
  0% {
    transform: translateY(-200px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-15px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-5px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
// 导航标题离场动画
@keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}

</style>