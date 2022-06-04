<template>
  <div class='footer'>
    <p>记笔记啦~</p>
    <div class="content">
      <input class='title' type="text" placeholder="此处输入标题">
      <div class='text'>
        <textarea v-model='content' v-show='!isPreview'></textarea> 
        <!-- <div class='preview' v-html='preContent' v-show='isPreview'></div> -->
        <!-- 此处必须v-if不能用v-show，否则由于setup不会重新挂载导致prop无法被动态接收 -->
        <MdPreview v-if='isPreview' :preContent="content"/>
      </div>
      <div class="foot">
        <div  class='select'>
          <span>分类标签选择：</span>
            <label>
                <span>算法</span>
                <input type="radio" name='classify' checked>
            </label>
            <label>
                <span>工具学习</span>
                <input type="radio" name='classify'>
            </label>
            <label>
                <span>项目经验</span>
                <input type="radio" name='classify'>
            </label>         
            <label>
                <span>其他</span>
                <input type="radio" name='classify'>
            </label>                    
        </div>
        <button @click='isPreview=!isPreview'>
          预览
          <svg  :class="{close:!isPreview}" viewBox="0 0 1792 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10824" width="20" height="20">
            <path
              d="M1694.74304 320A1344 1344 0 0 0 896.02304 0 1344 1344 0 0 0 97.30304 320a238.08 238.08 0 0 0 0 384A1344 1344 0 0 0 896.02304 1024a1344 1344 0 0 0 798.72-320 238.08 238.08 0 0 0 0-384zM896.02304 896a384 384 0 1 1 384-384 384 384 0 0 1-384 384z"
              fill='#000'
            ></path>
            <path d="M896.02304 512m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" ></path>
          </svg>
          </button>            
      </div>
    </div>    
    <button class='btn'>添加笔记</button>
  </div>
</template>

<script>
import MdPreview from './MdPreview.vue'
import {ref} from 'vue'
export default {
name:'NoteFooter',
components:{
  MdPreview
},
setup(){
  const isPreview=ref(false)
  const content=ref('')
  return{
    isPreview,
    content,
  }
}
}
</script>

<style lang='less' scoped>
.footer{
    width: 100%;
    height: 900px;
    padding:0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .content{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;      
      .title{
        width: 100%;
        height: 40px;
        border:none;
        outline:none;     
        border-bottom:1px solid rgb(194, 194, 194);    
        font-size:24px;
        padding:0 10px;
        &::placeholder{
          color:rgb(180, 180, 180);
        }           
      }  
      .text{
        width: 100%;
        height: 750px;
        overflow: auto;
        background-color: #fff;
        textarea{
          padding:0 10px;
          height: 1000px;
          resize:none;
          width: 100%;
          border:none;
          outline:none;    
          font-size:16px;     
          font-family: '微软雅黑';    
        }
      }
      .foot{
        width: 100%;
        height: 40px;
        background: #fff;
        display: flex;
        align-items: center;
        padding:0 10px;
        border-top:1px solid rgb(194, 194, 194);  
        justify-content: space-between;                      
        .select{
          height: 40px;
          display: flex;
          align-items: center;
          input{
            margin-right:10px;
          }
        }
        button{
          cursor: pointer;
          border:none;
          background-color: transparent;
          display:flex;
          align-items: center;   
          font-size: 18px;    
          .close{
            fill:#fff;
          }   
        }
      }
    }
    p{
      align-self: flex-start;      
      color:#fff;
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