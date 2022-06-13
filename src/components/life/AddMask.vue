<template>
<div class='add-mask'>
  <div class="piece-of-life">
      <div class="main" >
        <LeftPicturesEdit/>
        <textarea v-model='textEdit' class="content" placeholder="说点什么吧"></textarea>
      </div>
      <div class='upload'>
          <button @click='readyUpload'>确认发表</button>
          <button @click='noUpload'>取消发表</button>
      </div>
  </div>
</div>  
</template>

<script>
import LeftPicturesEdit from './LeftPicturesEdit.vue'
import {inject,reactive,ref,provide} from 'vue'
export default {
name:'PieceOfLife',
components:{
  LeftPicturesEdit
},
setup(){
    const isAdmin=inject('isAdmin')
    const picList=reactive([])
    const textEdit=ref('')
    const isAdd=inject('isAdd')
    const topicColor=inject('topicColor')
    provide('picList',picList)
    function readyUpload(){
        if(confirm('确认发表？')){
            console.log('执行发表操作');
            isAdd.value=false
        }
    }
    function noUpload(){
        if(confirm('确认取消发表？')){
            isAdd.value=false
        }        
    }
    return {
        isAdmin,
        textEdit,
        topicColor,
        readyUpload,
        noUpload
    }
}
}
</script>

<style lang='less' scoped>
.add-mask{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.356);
    display: flex;
    align-items: center;
    .piece-of-life{
        position: relative;
        width: 100%;
        height: 350px;
        background-color: v-bind('topicColor[0]');
        padding:20px;
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
        .upload{
            position: absolute;
            bottom:0;
            left:50%;
            transform: translateX(-50%);
            width: 300px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            button{
                width: 100px;
                height: 30px;
                border:none;
                background: rgba(7, 7, 7, 0.432);
                color:#fff;
                cursor: pointer;
            }
        }
    }
}
</style>