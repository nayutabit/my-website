<template>
  <div class='life-board'>
        <div class='header'>
            <h1>生活</h1>
        </div> 
        <div class="nav">
            <div class='add' @click='isAdd=true' v-show='isAdmin'>
                <span>添加</span>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2833" width="24" height="24">
                    <path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667z m32-394.666667h128a32 32 0 0 1 0 64H544v128a32 32 0 0 1-64 0V544H352a32 32 0 0 1 0-64h128V352a32 32 0 0 1 64 0v128z"
                    ></path>
                </svg>                
            </div>
        </div>
        <ul class='body'>
            <li v-for='k of lifeList' :key='k.id' >
                 <PieceOfLife :lifeInfo='k' @update1='initialLifeList'/>
            </li>
        </ul>  
        <div class="page-number">
        <span @click='chosePage=chosePage===1?1:chosePage-1'>上一页</span>
        <span v-for='k,index of 10' :key='index' @click='chosePage=k' :class="{active:chosePage===k}">{{k}}</span>
        <span @click='chosePage=chosePage===10?10:chosePage+1'>下一页</span>      
        </div>  
        <AddMask v-if='isAdd' @update='initialLifeList'/>
        <PictureMask v-if='isGrow>=0' />        
  </div>
</template>

<script>
import axios from 'axios'
import AddMask from './AddMask.vue'
import PictureMask from './PictureMask.vue'
import PieceOfLife from './PieceOfLife.vue' 
import {ref,provide,reactive,inject,onMounted,watchEffect} from 'vue'
export default {
name:'ProjectBoard',
components:{
    PieceOfLife,
    PictureMask,
    AddMask
},
setup(){
const isAdmin=inject('isAdmin')
const serverAddress=inject('serverAddress')
const chosePage=ref(1)
    //  实现点击图片全屏放大的效果
    const isGrow=ref(-1)
    // 存储的是需要被放大展示出来的那组图片
    const picUrl=reactive([])
    const isAdd=ref(false)
    // 通过一次请求得到前50条
    const allLifeInfo=reactive([])
    // 展示在当前页面的5条
    const lifeList=reactive([])
    provide('isGrow',isGrow)
    provide('picUrl',picUrl)
    provide('isAdd',isAdd)
    function initialLifeList(){
      axios.get(serverAddress+'/api/life/list').then(res=>{
      if(res.data.status===0){
        allLifeInfo.splice(0,allLifeInfo.length,...res.data.data)
      }else{
        alert('获取生活列表失败!')
        console.log(res)
      }
      }).catch(err=>{
        console.log(err)
      })          
    }
    onMounted(()=>{
        initialLifeList()
    })
    watchEffect(()=>{
        lifeList.splice(0,lifeList.length,...allLifeInfo.slice((chosePage.value-1)*5,chosePage.value*5))
    })
return {
    chosePage,
    isGrow,
    isAdd,
    isAdmin,
    lifeList,
    initialLifeList
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
    padding:0 1.5%;
    .nav{
        height: 40px;
        width: 100%;
        .add{
            display: flex;
            align-items: center; 
            width: 60px;          
            height: 100%;
            font:700 16px/40px "sofia-pro", sans-serif;   
            color:#fff;          
            fill:#fff;
            cursor: pointer;
        }
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
        display:grid;
        grid-template-rows: repeat(5,1fr);
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