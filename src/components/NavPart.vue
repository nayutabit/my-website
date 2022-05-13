<template>
  <div class='nav' >
    <!-- 菜单图标：点击显示和隐藏显示所有导航标题 --> 
    <div class='nav-icon'>
      <svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" @click="changeShow" :class='startBeat'>
        <path
          d="M380.194762 56.65699H34.370367A34.443495 34.443495 0 0 0 0 91.173614v365.642202c0 19.159651 15.576358 34.370367 34.443495 34.370367h345.458753a34.443495 34.443495 0 0 0 34.443495-34.370367v-365.642202a34.077853 34.077853 0 0 0-34.22411-34.516624z m0 552.777881H34.370367A34.443495 34.443495 0 0 0 0 643.73211v345.751266c0 19.159651 15.576358 34.443495 34.443495 34.443496h345.458753a34.443495 34.443495 0 0 0 34.443495-34.443496V643.878367a34.22411 34.22411 0 0 0-34.22411-34.443496z m552.704752 0H587.440762a34.443495 34.443495 0 0 0-34.370367 34.370367v345.751267c0 19.159651 15.503229 34.443495 34.370367 34.443495h345.458752a34.443495 34.443495 0 0 0 34.443496-34.443495V643.878367a34.443495 34.443495 0 0 0-34.370367-34.443496z m71.300229-390.505871L805.144129 19.873385a66.693138 66.693138 0 0 0-94.847587 0L511.314055 218.929a66.620009 66.620009 0 0 0 0 94.847587l198.982487 198.909358a66.693138 66.693138 0 0 0 94.847587 0l199.055614-198.909358a67.05878 67.05878 0 0 0 0-94.847587z m-246.442844 231.085871L573.985129 266.389358l183.77177-183.698643 183.698643 183.698643-183.698643 183.698642z"
        ></path>
      </svg>
    </div>
       <!-- 导航栏：点击跳转到不同的页面 -->
       <ul>
         <li v-for="p,index of navList" :key='index' >
            <transition :name='`title-list${index}`'>
            <a href="#" v-show='showWord' :class='classList[index]' @click='changeHighlight(index)'>{{p}}</a>
            </transition>
         </li>                      
      </ul>  
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
   name:'NavPart',
   emits:["getIndex"],
   setup(props,context){
      // 控制导航栏显示和隐藏
      let showWord=ref(false)
      // 控制导航栏图标动画效果
      let startBeat=ref('')
      let changeable=true;
      const navList=["首页","笔记","项目","生活","碎碎念","登录","设置","联系我"]

      //控制导航标题上的高亮显示位置
      const classList=reactive(['active','','','','','','',''])
      // 存储当前高亮位置
      let nowIndex=0
      // 点击后触发的高亮位置显示的修改
      function changeHighlight(index){
          if(index!==nowIndex){
            classList[nowIndex]=''
            classList[index]='active'
            nowIndex=index
            context.emit('getIndex',index)
          }
      }
      

      //开局动画
      setTimeout(()=>{
         startBeat.value='jello-horizontal'
         showWord.value=true
      },4000)
      function changeShow(){
        // 判断能否改变导航标题的显示
        if(changeable){
           // 每次点击重新触发导航图标的动画效果 
          startBeat.value=''
          setTimeout(()=>{
            startBeat.value='jello-horizontal'
          },100)
          showWord.value=!showWord.value
          changeable=false
          setTimeout(()=>{
            changeable=true
          },1000)
        }
      }
      return {
         showWord,
         navList,
         startBeat,
         changeShow,
         classList,
         changeHighlight
      }
   },
}
</script>

<style scoped lang='less'>
.nav{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right:50px;
  top:50px;
  width: 150px;
  .nav-icon{
    position: relative;
    width: 45px;
    fill:#fff;
    svg{
      cursor: pointer;
    }
  }
  ul{
   padding-top:10px;
   display: flex;
   flex-direction: column;
   align-items:flex-end;
   overflow: hidden;
   li{
      padding:5px 0;
      a{
         display: block;
         color:rgba(0,0,0,0.4);
         font:700 16px/1 "sofia-pro", sans-serif;
         letter-spacing: 0.15em;
         &:hover{
         color:#fff;
         }
         &.active{
         color:#fff;
         }
      }
      
   }
  }
}

// 每个标题的进场和离场动画，从上到下排序
.title-list0-enter-active{
  animation: bounce-in-top 1s both;
}
.title-list0-leave-active{
  animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list1-enter-active{
  animation: bounce-in-top 1s 0.05s both;
}
.title-list1-leave-active{
  animation: slide-out-blurred-top 0.45s 0.05s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list2-enter-active{
  animation: bounce-in-top 1s 0.1s both;
}
.title-list2-leave-active{
  animation: slide-out-blurred-top 0.45s 0.1s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list3-enter-active{
  animation: bounce-in-top 1s 0.15s both;
}
.title-list3-leave-active{
  animation: slide-out-blurred-top 0.45s 0.15s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list4-enter-active{
  animation: bounce-in-top 1s 0.2s both;
}
.title-list4-leave-active{
  animation: slide-out-blurred-top 0.45s 0.2s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list5-enter-active{
  animation: bounce-in-top 1s 0.25s both;
}
.title-list5-leave-active{
  animation: slide-out-blurred-top 0.45s 0.25s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list6-enter-active{
  animation: bounce-in-top 1s 0.3s both;
}
.title-list6-leave-active{
  animation: slide-out-blurred-top 0.45s 0.3s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

.title-list7-enter-active{
  animation: bounce-in-top 1s 0.35s both;
}
.title-list7-leave-active{
  animation: slide-out-blurred-top 0.45s 0.35s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}

// 导航标题进场动画
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

.jello-horizontal {
	animation: jello-horizontal 0.9s both;
}
// 导航图标点击动画
@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>