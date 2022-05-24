<template>
<!--  管理员账号登录后，页面上方头像和按钮部分 -->
  <div class='info'>
    <div class='avatar'></div>
    <p class='adName'>{{isAdmin}}</p>
    <span class='line'></span>
    <div class='select'>
      <button class='btn' @click='logout'>退出登录</button>
      <button class='btn'>修改头像</button>
      <button class='btn'>修改密码</button>
    </div>
</div>
</template>

<script>
import {inject} from 'vue'
export default {
    name:'AdminInfo',
   setup(){
    const isAdmin=inject('isAdmin')
    // 点击退出登录
    function logout(){
      localStorage.removeItem('token')
      isAdmin.value=false
    }       
    return{
        isAdmin,
        logout
    }
   }
}
</script> 

<style lang='less' scoped>
.info{
    width: 700px;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color:#fff;
    padding:40px 0;
    .avatar{
      width: 250px;
      height: 250px;
      background-color: #fff;
      border-radius: 50%;
    }
    .adName{
      width: 100%;
      text-align: center;
      font:400 36px/2 "sofia-pro", sans-serif;
      border-bottom:1px solid #fff;
    }  
    .select{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .btn{
      width: 200px;
      height: 50px;
      background-color: rgba(0,0,0,0.4);
      font:400 20px/1 "sofia-pro", sans-serif;
      color:#fff;
      border:none;
      cursor: pointer;
    }     
  }
</style>