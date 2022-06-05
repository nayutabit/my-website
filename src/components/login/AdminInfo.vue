<template>
<!--  管理员账号登录后，页面上方头像和按钮部分 -->
  <div class='info'>
    <img :src="avatar" class='avatar'>
    <p class='adName'>{{isAdmin}}</p>
    <span class='line'></span>
    <div class='select'>
      <button class='btn' @click='logout'>退出登录</button>
      <button class='btn' @click='resetAvatar=true,resetPassword=false'>修改头像</button>
      <button class='btn' @click='resetAvatar=false,resetPassword=true'>修改密码</button>
    </div>
    <!-- 修改头像和密码的悬浮弹窗 -->
    <div  class='reset' v-show='resetAvatar||resetPassword'>
         <!-- 关闭弹窗按钮 -->
        <span class='close' @click='resetAvatar=false,resetPassword=false'>X</span>
    
        <div class='flex'>
          <!-- 上传图片部分 -->
          <div class='chose-file' v-show='resetAvatar'>
            <span >选择图片</span>
            <input type="file" accept="image/png, image/jpeg" @change='getAvatar'>
          </div>
          <button class='upload' v-show='resetAvatar' @click='uploadAvatar'>上传图片</button>
          <!-- 重置密码部分 -->
          <input type="password" v-model='oldPassword' placeholder="请输入现在的密码" v-show='resetPassword' class='password'>
          <input type="password" v-model='newPassword' placeholder="请输入新的密码" v-show='resetPassword' class='password'>
          <button class='upload' v-show='resetPassword' @click='changePassword'>确认</button>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import {inject,ref} from 'vue'
export default {
    name:'AdminInfo',
   setup(){
    const isAdmin=inject('isAdmin')
    const topicColor=inject('topicColor')
    let resetAvatar=ref(false)
    let resetPassword=ref(false)
    let oldPassword=ref('')
    let newPassword=ref('')
    const serverAddress=inject('serverAddress')
    // 点击退出登录
    function logout(){
      localStorage.removeItem('token')
      isAdmin.value=false
    }    
    // 修改密码的异步请求   
    function changePassword(){
        if(oldPassword.value===''||newPassword.value===''){
            alert('密码不能为空')
        }else if(oldPassword.value===newPassword.value){
           alert('新旧密码不能相同')
        }else{
            //服务器地址暂定本机，上线后改云服务器
            axios.post(serverAddress+'/my/updatepwd',{
              oldPwd:oldPassword.value,
              newPwd:newPassword.value
            },{
              headers:{
                authorization:localStorage.getItem('token')
              }              
            }
            ).then(res=>{
              if(res.data.status===0){
                  alert('密码修改成功')
                  resetPassword.value=false
                  oldPassword.value=''
                  newPassword.value=''
              }else{
                  alert('原始密码错误')
              }
            }).catch(err=>{
              alert('发生错误')
              console.log(err)
            })
        }        
    }
    
    // 从本地选择图片文件
    let dataUrl=''
    function getAvatar(e){
      const file=e.target.files[0]
      if(file.size>204800){
        alert('请传入200kb以内的图片')
      }else{
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=(event)=>{
            dataUrl=event.target.result
        }
      }
    }
    function uploadAvatar(){
        if(dataUrl===''){
            alert('图片不能为空')
        }else{
            //服务器地址暂定本机，上线后改云服务器
            axios.post(serverAddress+'/my/update/avatar',{
              avatar:dataUrl
            },{
              headers:{
                authorization:localStorage.getItem('token')
              }              
            }
            ).then(res=>{
              if(res.data.status===0){
                  alert('头像修改成功')
                  avatar.value=dataUrl
                  dataUrl=''
                  resetAvatar.value=false
              }else{
                  alert('头像修改失败')
              }
              console.log(res)
            }).catch(err=>{
              alert('发生错误')
              console.log(err)
              console.log(dataUrl)
            })
        }   
    }
    // 挂载时读取数据库上的头像数据
    let avatar=inject('avatar')
    return{
        isAdmin,
        logout,
        topicColor,
        resetAvatar,
        resetPassword,
        oldPassword,
        newPassword,
        changePassword,
        getAvatar,
        uploadAvatar,
        avatar
    }
   }
}
</script> 

<style lang='less' scoped>
.info{
    position: relative;
    width: 700px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color:#fff;
    padding:30px 0;
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
    .reset{
      position: absolute;
      width: 80%;
      height: 50%;
      background-color: rgba(255, 255, 255, 0.66);
      .flex{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;        
        .chose-file{
          position: relative;
          background-color: v-bind('topicColor[1]');
          border:none;
          width: 140px;
          height: 40px;
          input{
            opacity: 0;
            height: 100%;
            width: 100%;
          }
          span{
            position: absolute;
            height: 100%;
            width: 100%;
            text-align: center;
            font:400 16px/40px "sofia-pro", sans-serif;
          }
        }
        .upload{
          color:#fff;
          border:none;
          width: 140px;
          height: 40px;
          background-color: v-bind('topicColor[1]');
          font:400 16px/40px "sofia-pro", sans-serif;
        }
        .password{
          width: 80%;
          height: 40px;
          outline: none;
          margin-top:10px;
          border:none;
          text-align: center;
          font-size:20px;
          &::placeholder{
            color:rgb(216, 216, 216);
          }
        }          
      }
    
      .close{
        position: absolute;
        right:5px;
        color:v-bind('topicColor[1]');
        cursor: pointer;
        font-size:20px;
      }
    }   
  }

  @media (max-width: 1200px){
    .info{
      width:500px;
      height:400px;
      .avatar{
        width: 200px;
        height: 200px;
      }
      .adName{
        font-size:28px;
      }
      .btn{
        width: 150px;
        font-size:16px;
      }
    }
  }
  @media (max-width: 500px){
    .info{
      width:250px;
      height:400px;
      .avatar{
        width: 120px;
        height: 120px;
      }
      .adName{
        font-size:24px;
      }
      .select{
        flex-direction: column;
        align-items: center;
        height:130px;
      }
      .btn{
        width: 200px;
        font-size:16px;
        height: 40px;
      }
    }
  }  
</style>