<template>
  <div class='body'>
    <ul>
      <li v-for='(p,index) of 18' :key='index' class='one-msg' :class="{lighter:(index%2===1)}">
        <div class='addresser'>
          <div class='avatar'></div>
          <div class='info'>
              <p class='username'>administrator</p>
              <p class='id'>id:001</p>
          </div>
        </div>
        <p class='text'>林动默不作声啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿林动默不作声啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊

</p>
        <div class='annotation'>
          <span class='date'>2022-5-30 18:33</span>          
          <span class='edit' v-show='isAdmin'>编辑</span>
          <span class='edit' v-show='isAdmin'>删除</span>
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
import {inject,ref} from 'vue'
export default {
name:'MessageBody',
setup(){
  const isAdmin=inject('isAdmin')
  let chosePage=ref(1)
  return{
    isAdmin,
    chosePage
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
              height: 60px;
              background-color: red;
            }
            .info{
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
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          font:700 16px/1 "sofia-pro", sans-serif;
          color:rgba(0, 0, 0, 0.473);
          cursor: pointer;
          padding:0 5px;
          &.active{
            color:#fff;
          }
        }
      }
  }
</style>