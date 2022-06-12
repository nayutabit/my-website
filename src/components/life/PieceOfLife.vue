<template>
  <div class="piece-of-life">
      <span class="edit" v-show='isAdmin' @click='isEdit=!isEdit'>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292" width="15" height="15">
          <path
            d="M815.8 318.8L705.9 209c-19.5-19.5-19.5-51.2 0-70.7l59.7-59.7c19.5-19.5 51.2-19.5 70.7 0l109.8 109.8c19.5 19.5 19.5 51.2 0 70.7l-59.7 59.7c-19.5 19.6-51.1 19.6-70.6 0zM751.2 453.4c18.8-18.8 23.5-44.5 10.5-57.4L628.1 262.3c-12.9-12.9-38.6-8.2-57.4 10.5L81.3 749.2c-9.4 9.4-15.3 21.4-16.5 33.5l0.2 133.8c-2.4 25.2 17.4 45 42.6 42.6l133.8 1.1c12.1-1.2 24.2-7.1 33.5-16.5l476.3-490.3zM908.9 831.7H559.8c-13.4 0-26.2 5.3-35.6 14.8-17.1 17.2-45.3 46.3-68.8 70.7-15.2 15.8-4 42.1 17.9 42.1h435.3c28 0 50.9-22.9 50.9-50.9v-26.3c-0.2-27.7-22.8-50.4-50.6-50.4z"
          ></path>
        </svg>  
        编辑       
      </span>
      <div class="main" >
        <LeftPictures/>
        <p class="content" v-show='!isEdit'>{{textContent}}</p>
        <textarea v-model='textContent' v-show='isEdit' class="content"></textarea>
      </div>
      <div class="info">
        <span class='author'>administrator</span>        
        <span class='date'>2022-6-10 15:19:45</span>
      </div>

  </div>
</template>

<script>
import LeftPictures from './LeftPicturs.vue'
import {inject,reactive,ref,provide} from 'vue'
export default {
name:'PieceOfLife',
components:{
  LeftPictures
},
setup(){
  const isAdmin=inject('isAdmin')
  const picList=reactive([])
  const isEdit=ref(false)
  const textContent=ref('谁是我们的敌人？谁是我们的朋友？这个问题是革命的首要问题。中国过去一切革命斗争成效甚少，其基本原因就是因为不能团结真正的朋友，以攻击真正的敌人。革命党是群众的向导，在革命中未有革命党领错了路而革命不失败的。我们的革命要有不领错路和一定成功的把握，不可不注意团结我们的真正的朋友，以攻击我们的真正的敌人。我们要分辨真正的敌友，不可不将中国社会各阶级的经济地位及其对于革命的态度，作一个大概的分析。')
  for(let i=0;i<9;i++)picList.push(`./shenzi${i}.jpg`)
  provide('isEdit',isEdit)
  provide('picList',picList)
  return {
    isAdmin,
    picList,
    textContent,
    isEdit
  }
}
}
</script>

<style lang='less' scoped>
.piece-of-life{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding:20px;
  .edit{
    position: absolute;
    display: flex;
    align-items: center;
    top:10px;
    right:2%;
    color:#263366;
    fill:#263366;
    cursor: pointer;

  }
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content{
      margin:15px 0 25px 0;
      width: 57%;
      height:250px;
      font:400 16px/18px "微软雅黑";      
      outline:none;
      resize:none;
      border:none;
    }
  }
  .info{
    position: absolute;
    bottom:25px;
    right:2%;
    .author{
      margin:0 10px;
      font-size: 18px;
    }
  } 
}
</style>