<template>
  <div class="piece-of-life">
      <div class="edit" v-show='isAdmin' >
          <span v-show='!isEdit' @click='del'>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139" width="15" height="15">
              <path d="M96 128h832v64H96zM128 256h768l-89.024 704H217.024z"></path>
              <path d="M384 64h256v96h-256z"></path>
            </svg>  
            删除             
          </span>
          <span v-show='!isEdit' @click='startEdit()'>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292" width="15" height="15">
              <path
                d="M815.8 318.8L705.9 209c-19.5-19.5-19.5-51.2 0-70.7l59.7-59.7c19.5-19.5 51.2-19.5 70.7 0l109.8 109.8c19.5 19.5 19.5 51.2 0 70.7l-59.7 59.7c-19.5 19.6-51.1 19.6-70.6 0zM751.2 453.4c18.8-18.8 23.5-44.5 10.5-57.4L628.1 262.3c-12.9-12.9-38.6-8.2-57.4 10.5L81.3 749.2c-9.4 9.4-15.3 21.4-16.5 33.5l0.2 133.8c-2.4 25.2 17.4 45 42.6 42.6l133.8 1.1c12.1-1.2 24.2-7.1 33.5-16.5l476.3-490.3zM908.9 831.7H559.8c-13.4 0-26.2 5.3-35.6 14.8-17.1 17.2-45.3 46.3-68.8 70.7-15.2 15.8-4 42.1 17.9 42.1h435.3c28 0 50.9-22.9 50.9-50.9v-26.3c-0.2-27.7-22.8-50.4-50.6-50.4z"
              ></path>
            </svg >  
            编辑    
          </span>       
          <span v-show='isEdit' @click='saveEdit()'>
            <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8403" width="15" height="15">
              <path d="M640 128H192a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V384z m0 224H192V192h448z"></path>
            </svg> 
            保存   
          </span>     
          <span v-show='isEdit' @click='exitEdit()'>
            <svg class="icon" viewBox="0 0 1140 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46316" width="15" height="15">
              <path
                d="M474.133828 76.681372c-261.931418 0-474.133828 212.297312-474.133828 474.133828 0 261.836515 212.20241 474.133828 474.133828 474.133828s474.133828-212.297312 474.133828-474.133828C948.267655 288.978684 735.970343 76.681372 474.133828 76.681372zM521.774977 637.271548 521.774977 521.774977c-57.321223 0-203.471362 1.328638-203.471362 158.487488 0 82.28063 55.80278 150.990176 130.016682 166.838925C329.217424 830.208712 237.066914 724.487118 237.066914 595.134754c0-240.293605 245.228545-242.286562 284.708063-242.286562L521.774977 254.529008l189.330862 192.08304L521.774977 637.271548z"
              ></path>
            </svg>
            取消   
          </span>                    
      </div>
      <div class="main" >
        <LeftPictures v-if="!isEdit"/>
        <LeftPicturesEdit v-else/>
        <p class="content" v-show='!isEdit'>{{textContent}}</p>
        <textarea v-model='textEdit' v-show='isEdit' class="content"></textarea>
      </div>
      <div class="info">
        <span class='author'>administrator</span>        
        <span class='date'>2022-6-10 15:19:45</span>
      </div>

  </div>
</template>

<script>
import LeftPicturesEdit from './LeftPicturesEdit.vue'
import LeftPictures from './LeftPicturs.vue'
import {inject,reactive,ref,provide} from 'vue'
export default {
name:'PieceOfLife',
components:{
  LeftPictures,
  LeftPicturesEdit
},
setup(){
  const isAdmin=inject('isAdmin')
  const picList=reactive([])
  const isEdit=ref(false)
  const textContent=ref('谁是我们的敌人？谁是我们的朋友？这个问题是革命的首要问题。中国过去一切革命斗争成效甚少，其基本原因就是因为不能团结真正的朋友，以攻击真正的敌人。革命党是群众的向导，在革命中未有革命党领错了路而革命不失败的。')
  const textEdit=ref('')
  for(let i=0;i<8;i++)picList.push(`./shenzi${i}.jpg`)
  provide('isEdit',isEdit)
  provide('picList',picList)
  // 编辑
  function startEdit(){
    isEdit.value=true
    textEdit.value=textContent.value
  }
  // 删除
  function del(){
    if(confirm('确认删除此条？')){
      console.log('已执行删除操作');
    }
  }
  function saveEdit(){
    if(confirm('确认保存更改？')){
      console.log('已执行保存操作');
    }    
  }
  function exitEdit(){
    if(confirm('确认取消更改？')){
      isEdit.value=false
      console.log('已执行取消操作');
    }    
  }  
  return {
    isAdmin,
    picList,
    textContent,
    isEdit,
    textEdit,
    startEdit,
    del,
    saveEdit,
    exitEdit
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
    span{
      cursor: pointer;  
      display: flex;
      align-items: center;  
      margin-left:10px;
      .icon{
        width: 20px;
        height: 20px;

      }
    }
  }
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    textarea{
      background-color: rgba(255, 255, 255, 0.664);
    }
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
@media (max-width: 500px){
  .piece-of-life{
    .edit{
      top:5px;
      font-size:14px;
      span>.icon{
        width: 12px;
        height: 12px;
      }
    }
    .main{
      flex-direction: column-reverse;
      .content{
        width: 100%;
        height:130px;
        font:400 14px/18px "微软雅黑";  
        margin:5px 0 0 0;       
      }
    }
    .info{
      bottom:5px;
      left:2%;
      font-size:14px;
      .author{
        font-size: 14px;
      }
    }
  }
}
</style>