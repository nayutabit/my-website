<template>
    <transition name='personal-action'>
    <div class='personal'  v-show='isAdmin'>
         <AdminInfo/>
        <WebSettings/>
        <WebWatcher/>
    </div>      
    </transition>  
</template>

<script>
import AdminInfo from './AdminInfo.vue'
import WebWatcher from './WebWatcher.vue'
import WebSettings from './WebSettings.vue'
import {inject} from 'vue'
export default {
   name:'WebInfo',
   components:{
       AdminInfo,
       WebWatcher,
       WebSettings
   },
   setup(){
    const isAdmin=inject('isAdmin')
    return{
        isAdmin,
    }
   }
}
</script>

<style lang='less'>
@mainColor1:#f87b7b;
@mainColor2:#F76C6C;
// 登录之后的界面样式
.door{
  height:1600px;
}
.personal{
  position: absolute;
  height: 1600px; 
  top:0;
  left: 0;
  right:0;
  padding:0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center; 
  background-color: @mainColor1;
}

.personal-action-enter-active{
   animation: slide-in-fwd-center 0.4s 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>