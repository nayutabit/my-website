<template>
  <transition name='content' class='my-note' tag='div'>
    <div>
      <ProjectBoard/>
    </div>
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
import ProjectBoard from '../components/project/ProjectBoard.vue'
import {inject,onActivated} from 'vue'
export default {
   name:'MyProject',
   components:{
     ProjectBoard
   },
   setup(){
    const allowChange=inject('allowChange')     
     const highlight=inject('highlight')
     const topicColor=inject('topicColor')
     onActivated(()=>{
       highlight.value=2
       allowChange.value=false
       setTimeout(()=>{
         allowChange.value=true
       },1000)       
     })
     return {
       topicColor
     }
   },
}
</script>

<style lang='less' scoped>

// 进场和离场动画
.my-note{
  display: flex;
  align-items: center;
  position: absolute;
  top:0;
  height: 2000px;
  left:20%;
  right:20%;    
  background-color: v-bind('topicColor[0]');
  // overflow: hidden;
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
  height: 2000px;
  width:50%; 
  background-color: v-bind('topicColor[1]'); 
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
    width:50%;
  }
  100%{
    visibility:visible;
    width:20%;
  }
}
@keyframes leftCome{
  0%{
    visibility:visible;
    width:20%;
  }
  100%{
    visibility:visible;
    width:50%;
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
    width:50%;
  }
  100%{
    visibility:visible;
    width:20%;
  }
}
@keyframes rightCome{
  0%{
    visibility:visible;
    width:20%;
  }
  100%{
    visibility:visible;
    width:50%;
  }
}

//小屏幕留白减少
@media (max-width:1920px){
.my-note{
  left:12%;
  right:12%;    
}
@keyframes leftGo{
  0%{
    visibility:visible;
    width:50%;
  }
  100%{
    visibility:visible;
    width:12%;
  }
}
@keyframes leftCome{
  0%{
    visibility:visible;
    width:12%;
  }
  100%{
    visibility:visible;
    width:50%;
  }
}
@keyframes rightGo{
  0%{
    visibility:visible;
    width:50%;
  }
  100%{
    visibility:visible;
    width:12%;
  }
}
@keyframes rightCome{
  0%{
    visibility:visible;
    width:12%;
  }
  100%{
    visibility:visible;
    width:50%;
  }
}
}

// 平板和手机上两边不留白
@media (max-width:992px){
.my-note{
  left:0%;
  right:0%;    
}
@keyframes leftGo{
  0%{
    visibility:visible;
    width:50%;
  }
  100%{
    visibility:visible;
    width:0%;
  }
}
@keyframes leftCome{
  0%{
    visibility:visible;
    width:0%;
  }
  100%{
    visibility:visible;
    width:50%;
  }
}
@keyframes rightGo{
  0%{
    visibility:visible;
    width:50%;
  }
  100%{
    visibility:visible;
    width:0%;
  }
}
@keyframes rightCome{
  0%{
    visibility:visible;
    width:0%;
  }
  100%{
    visibility:visible;
    width:50%;
  }
}
}

</style>