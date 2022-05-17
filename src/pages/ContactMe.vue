<template>
  <transition name='content' class='my-note' tag='div'>
    <div>Contact页</div>  
  </transition>
  <!-- 左边的门儿 -->
  <transition class='door left-door' tag='div' name='l-door'> 
    <div></div>
  </transition> 
  <!-- 右边的门儿 -->
  <transition class='door right-door' tag='div' name='r-door'> 
    <div></div>
  </transition> 
</template>

<script >
import {inject,onActivated} from 'vue'
export default {
   name:'ContactMe',
   setup(){
    const allowChange=inject('allowChange')     
     const highlight=inject('highlight')
     onActivated(()=>{
       highlight.value=7
       allowChange.value=false
       setTimeout(()=>{
         allowChange.value=true
       },1000)       
     })
   },
}
</script>

<style lang='less' scoped>
@mainColor1:#f87b7b;
@mainColor2:#F76C6C;
// 内容部分
.my-note{
  position: absolute;
  top:0;
  height: 100%;
  left:20%;
  right:20%;    
  background-color: @mainColor1;
  overflow: hidden;
  visibility:hidden;
  animation:delayIn 0.6s 0.6s forwards; 
}
@keyframes delayIn{
  0%{
    visibility:visible;
  }
  100%{
    visibility:visible;
  }
}
.content-leave-active{
  animation:delayOut 0.6s;  
}
@keyframes delayOut{
  0%{
    visibility:visible;
  }
  100%{
    visibility:visible;
  }
}

.door{
  position: absolute;
  height: 100%;
  width:50%; 
  background-color: @mainColor2; 
  visibility: hidden;
}
// 左门样式和动画
.left-door{
  left:0;
  animation: leftGo 0.6s 0.6s forwards;
}
.l-door-leave-active{
  animation: leftCome 0.6s;
}
@keyframes leftGo{
  0%{
    visibility:visible;
    transform: translateX(0);
  }
  100%{
    visibility:visible;
    transform: translateX(-30vw);
  }
}
@keyframes leftCome{
  0%{
    visibility:visible;
    transform: translateX(-30vw);
  }
  100%{
    visibility:visible;
    transform: translateX(0);
  }
}
// 右门样式和动画
.right-door{
  right:0;
  animation: rightGo 0.6s 0.6s forwards;
}
.r-door-leave-active{
  animation: rightCome 0.6s;
}
@keyframes rightGo{
  0%{
    visibility:visible;
    transform: translateX(0);
  }
  100%{
    visibility:visible;
    transform: translateX(30vw);
  }
}
@keyframes rightCome{
  0%{
    visibility:visible;
    transform: translateX(30vw);
  }
  100%{
    visibility:visible;
    transform: translateX(0);
  }
}
</style>