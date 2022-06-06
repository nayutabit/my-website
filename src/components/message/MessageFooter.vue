<template>
  <div class='footer'>
    <p v-if='isAdmin'>欢迎！{{isAdmin}}，留下你的想法吧~</p>
    <p v-else>管理员才能发布留言!</p>
    <div class='text'>
      <textarea maxlength="92" v-model='content'></textarea>
      <span class='statistic'>{{content.length}}/92</span>
    </div>
    <button class='btn' @click='uploadMsg' v-if='isAdmin'>发布留言</button>
    <button class='btn cant' v-else>无发布权限</button>
  </div>
</template>

<script>
import axios from 'axios'
import {inject,ref} from 'vue'
export default {
name:'MessageFooter',
setup(){
   const isAdmin=inject('isAdmin')
   let content=ref('')
   const msgData=inject('msgData')
   const serverAddress=inject('serverAddress')    
   function updateMsg(){
         axios.get(serverAddress+'/api/msg').then(res=>{
        if(res.data.status===0){
          msgData.splice(0,msgData.length)
          for(const k of res.data.data){
              msgData.push(k)
          }
        }else{
          console.log(res)
        }
        }).catch(err=>{
          console.log(err)
        })   
   }
   function uploadMsg(){
     if(!isAdmin.value)alert('管理员才能发布留言哦')
     else{
       if(content.value==='')alert('留言不能为空')
       else{
        axios.post(serverAddress+'/my/msg',{
          content:content.value
        },{
            headers:{ 
              authorization:localStorage.getItem('token')
            }
          }).then(res=>{
          if(res.data.status===0){
              alert('留言发布成功')
              updateMsg()
              content.value=''
          }else{
              alert('留言发布失败')
          }
        }).catch(err=>{
          alert('发生错误')
          console.log(err)
        })
       }
     }
   }
   return {
     isAdmin,
     content,
     uploadMsg
   }
}
}
</script>

<style lang='less' scoped>
.footer{
    height: 250px;
    width: 100%;
    padding:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p{
      color:#fff;
      align-self: flex-start;
    }
    .text{
      width: 100%;
      height: 150px;
      position: relative;
      textarea{
        width: 100%;
        height: 100%;
        outline: none;
        resize: none;
        font-size: 20px;        
      }
      .statistic{
        position: absolute;
        right:5px;
        bottom:0;
        cursor: default;
        color:gray;
      }
    }
    .btn{
      width: 150px;
      height: 30px;
      background-color: rgba(0,0,0,0.4);
      font:400 16px/1 "sofia-pro", sans-serif;
      color:#fff;
      border:none;
      cursor: pointer;    
      &.cant{
       background-color: rgb(97, 97, 97);  
       cursor: default;
      }  
    }
}
</style>