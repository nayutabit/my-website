<template>
<div class='add-mask'>
  <div class="piece-of-life">
      <div class="main" >
        <LeftPicturesEdit/>
        <textarea v-model='textEdit' class="content" placeholder="说点什么吧" maxlength="150"></textarea>
      </div>
      <div class='upload'>
          <button @click='readyUpload'>确认发表</button>
          <button @click='noUpload'>取消发表</button>
      </div>
      <div class="count">{{textEdit.length}}/150</div>
  </div>
</div>  
</template>

<script>
import axios from 'axios'
import LeftPicturesEdit from './LeftPicturesEdit.vue'
import {inject,reactive,ref,provide} from 'vue'
export default {
name:'PieceOfLife',
components:{
  LeftPicturesEdit
},
emits:['update'],
setup(props,context){
    const isAdmin=inject('isAdmin')
    const serverAddress=inject('serverAddress')
    const picList=reactive([])
    // 用于预览的图片数组
    const editList=reactive([])
    const textEdit=ref('')
    const isAdd=inject('isAdd')
    const topicColor=inject('topicColor')
    provide('picList',picList)
    provide('editList',editList)
    function readyUpload(){
      if(confirm('确认发表？')){
        if(textEdit.value.trim()===''||editList.length===0)alert('文字和图片都不能为空')
        else{
          const picString=[]
          for(const k of editList)picString.push(k.url)
          axios.post(serverAddress+'/my/life',{ 
            content:textEdit.value,
            pic:picString.join('\n'), 
          },{
              headers:{ 
                authorization:localStorage.getItem('token')
              }
            }).then(res=>{
            if(res.data.status===0){
                alert('发布成功')            
                isAdd.value=false
                context.emit('update')
            }else{
                alert('笔记发布失败')
                console.log(res)
            }
          }).catch(err=>{
            alert('发生错误')
            console.log(err)
          })
        }
      }
    }
    function noUpload(){
        if(confirm('确认取消发表？')){
            isAdd.value=false
        }        
    }
    // 固定在视口中
    let scroll=ref('')
    window.addEventListener('scroll',()=>{
    scroll.value=document.documentElement.scrollTop+'px'
    })    
    return {
        isAdmin,
        textEdit,
        topicColor,
        readyUpload,
        noUpload,
        scroll
    }
}
}
</script>

<style lang='less' scoped>
.add-mask{
    position: absolute;
    top:0;
    transform: translateY(v-bind(scroll));    
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
        .count{
          position: absolute;
          bottom:53px;
          right:20px;    
        }         
    }
}
@media (max-width: 500px){
.add-mask{
  .piece-of-life{
    height:380px;
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
      justify-content: flex-end;
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
    .count{
      bottom: 225px;
    }
  }
}
    
}
</style>