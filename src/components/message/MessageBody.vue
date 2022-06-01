<template>
  <div class='body'>
    <ul>
      <li v-for='(p,index) of msgData' :key='index' class='one-msg' :class="{lighter:(index%2===1)}" v-show='index>=(chosePage-1)*20'>
        <div class='addresser'>
          <img class='avatar' :src='avatarMap.get(p.author_id)'>
          <div class='info'>
              <p class='username'>{{p.author_name}}</p>
              <p class='id'>id:{{p.author_id}}</p>
          </div>
        </div>
        <p class='text'>{{p.content}}</p>
        <div class='annotation'>
          <span class='date'>{{p.date}}</span>          
          <span class='edit' v-show='isAdmin' @click='deleteMsg(index,p.id)' >删除</span>
        </div>
      </li>    
    </ul>
    <div class='page-number'>
      <span @click='chosePage=chosePage===1?1:chosePage-1'>上一页</span>
      <span v-for='k,index of 10' :key='index' @click='chosePage=k' :class="{active:chosePage===k}">{{k}}</span>
      <span @click='chosePage=chosePage===10?10:chosePage+1'>下一页</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {inject,ref,onMounted,reactive} from 'vue'
export default {
name:'MessageBody',
setup(){
  const isAdmin=inject('isAdmin')
  const serverAddress=inject('serverAddress')
  let chosePage=ref(1)
  const msgData=inject('msgData')
  const avatarMap=reactive(new Map())
  function deleteMsg(index,msgId){
    if(confirm('确认删除')){
      axios.post(serverAddress+'/my/deletemsg',{
        id:msgId
      },{
          headers:{ 
            authorization:localStorage.getItem('token')
          }
        }).then(res=>{
        if(res.data.status===0){
            msgData.splice(index,1)       
        }else{
            console.log(res)
            alert('删除失败')
        }
      }).catch(err=>{
        alert('发生错误')
        console.log(err)
      })
    }
  }
  onMounted(()=>{
      axios.get(serverAddress+'/api/msg').then(res=>{
        if(res.data.status===0){
          for(const k of res.data.data){
              msgData.push(k)
          }
        }else{
          console.log(res)
        }
        }).catch(err=>{
          console.log(err)
        }) 
      axios.get(serverAddress+'/api/admin_pic').then(res=>{
        if(res.data.status===0){
          for(const k of res.data.data){
              avatarMap.set(k.id,k.user_pic)
          }
        }else{
          console.log(res)
        }
        }).catch(err=>{
          console.log(err)
        }) 
  })
  return{
    isAdmin,
    chosePage,
    msgData,
    avatarMap,
    deleteMsg
  }
}
}
</script>

<style lang='less' scoped>
  .body{
      position: relative;
      width: 100%;
      height: 1650px;
      padding:0 10px;
      ul{
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 1600px;
        overflow: hidden;
        .one-msg{
          position: relative;          
          height: 80px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          padding:10px;
          &.lighter{
            background-color: rgba(255, 255, 255, 0.4);
          }
          .addresser{
            float:left;
            width: 200px;
            height:60px;
            .avatar{
              display: inline-block;
              width: 60px;
              height: 100%;
              background-color: red;
            }
            .info{
              color:#263366;
              position: relative;
              top:-10px;
              height: 60px;
              display: inline-block;
              margin-left:5px;
              .username{
                margin-bottom:10px;
              }
            }
          }
          .msg{
            float:left;
            height: 100%;
            background-color: yellow;
          }
          .text{
            margin-top:-5px;
            font-size:15px;
          }
          .annotation{
            position: absolute;
            height: 20px;
            width: 210px;
            right:0;
            bottom:0;
            text-align: center;
            padding-right:5px;
            font-size:12px;
            cursor: default;
            .edit{
              margin-right:5px;
              color: #263366;
              cursor: pointer;
              float:right;
            }
            .date{
              float: right;

            }
          }
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
      .page-M{    
        display: none;        
      }
      .page-S{
        display: none;
      }
      .page-L{
        display: flex;
      }
  }
  @media (max-width:992px){
    .body{
      width: 87%;
      height:2050px;
      ul{
        height:2000px;
        .one-msg{
          height: 100px;
          .addresser{
            height:80px;
            .avatar{
              width: 80px;
            }
            .info{
              .username{
                margin-bottom:30px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width:768px){
    .body{
      width: 100%;
      height:3250px;
      ul{
        height:3200px;
        .one-msg{
        height: 160px;
        padding-left:0;
        .addresser{
          height:140px;
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .avatar{
            width: 80px;
            height: 80px;;
          }
          .info{
            font-size:12px;
            top:15px;
            height: 40px;
            margin-left:5px;
            .username{
              margin-bottom:5px;
            }
          }
        }
        .text{
          font-size:14px;
        }
      }   
      }
    }
  }  
</style>