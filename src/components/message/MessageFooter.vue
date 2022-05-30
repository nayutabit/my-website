<template>
  <div class='footer'>
    <p v-if='isAdmin'>欢迎！{{isAdmin}}，留下你的想法吧~</p>
    <p v-else>管理员才能发布留言!</p>
    <div class='text'>
      <textarea maxlength="92" v-model='content'></textarea>
      <span class='statistic'>{{content.length}}/100</span>
    </div>
    <button class='btn'>发布留言</button>
  </div>
</template>

<script>
import {inject,ref} from 'vue'
export default {
name:'MessageFooter',
setup(){
   const isAdmin=inject('isAdmin')
   let content=ref('')
   return {
     isAdmin,
     content
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
    }
}
</style>