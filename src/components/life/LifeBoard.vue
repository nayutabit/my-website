<template>
  <div class='life-board'>
        <div class='header'>
            <h1>生活</h1>
        </div> 
        <div class="nav"></div>
        <ul class='body'>
            <li v-for='k,index of 5' :key='index'>
                 <PieceOfLife/>
            </li>
        </ul>  
        <div class="page-number">
        <span @click='chosePage=chosePage===1?1:chosePage-1'>上一页</span>
        <span v-for='k,index of 10' :key='index' @click='chosePage=k' :class="{active:chosePage===k}">{{k}}</span>
        <span @click='chosePage=chosePage===10?10:chosePage+1'>下一页</span>      
        </div>    
  </div>
</template>

<script>
import PieceOfLife from './PieceOfLife.vue' 
import {ref} from 'vue'
export default {
name:'ProjectBoard',
components:{
    PieceOfLife
},
setup(){
const chosePage=ref(1)
return {
    chosePage
}
}
}
</script>

<style lang='less' scoped>
.life-board{
    position: absolute;
    height: 2000px; 
    top:0;
    left: 0;
    right:0;
    .nav{
        height: 40px;
        width: 100%;
        background: red;
    }
    .header{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        h1{
            display: inline-block;
            height: 100%;
            line-height: 100px;
            color:#fff;
        }
    }
    .body{
        width: 100%;
        height: 1810px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li{
            width: 100%;
            height: 350px;
        }
    }
    .page-number{
      width: 100%;
      height: 50px;
      position: absolute;
      bottom:0;
      left:0;
      display: flex;
      align-items: center;
      justify-content: center;
      font:700 16px/1 "sofia-pro", sans-serif;    
      color:rgba(0, 0, 0, 0.473);  
      cursor: pointer;                  
      span{
        padding:0 5px;
        &.active{
          color:#fff;
        }
      }
    }    
}
</style>