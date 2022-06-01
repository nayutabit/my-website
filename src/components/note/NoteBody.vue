<template>
  <div class='body'>
    <!-- 导航栏 -->
    <div class='nav'>
      <div class="classify">
        <span>显示分类 : </span>
        <label>
          <span>算法</span>  
          <input type="checkbox">    
        </label>  
        <label>
          <span> 工具学习</span>  
          <input type="checkbox">    
        </label>     
        <label>
          <span> 项目经验</span>  
          <input type="checkbox">    
        </label>  
        <label>
          <span> 其它</span>  
          <input type="checkbox">    
        </label>       
        <label>
          <span> 全选</span>  
          <input type="checkbox">    
        </label>                         
      </div>
      <div class="search">
        <input type="text" placeholder="请输入关键词">
        <span class='search-icon'>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9274">
            <path
              d="M512 14.222222C786.915556 14.222222 1009.777778 237.084444 1009.777778 512c0 125.866667-46.705778 240.810667-123.733334 328.476444 1.422222 1.024 2.787556 2.218667 4.067556 3.527112l100.551111 100.551111a42.666667 42.666667 0 1 1-60.302222 60.330666l-100.579556-100.551111a42.951111 42.951111 0 0 1-4.608-5.404444A495.559111 495.559111 0 0 1 512 1009.777778C237.084444 1009.777778 14.222222 786.915556 14.222222 512S237.084444 14.222222 512 14.222222z m0 85.333334C284.216889 99.555556 99.555556 284.216889 99.555556 512S284.216889 924.444444 512 924.444444 924.444444 739.783111 924.444444 512 739.783111 99.555556 512 99.555556z m-115.911111 141.482666A28.444444 28.444444 0 0 1 386.844444 280.177778c-50.119111 31.004444-84.593778 72.647111-104.163555 125.553778a28.444444 28.444444 0 1 1-53.361778-19.740445c24.007111-64.938667 66.787556-116.565333 127.601778-154.168889a28.444444 28.444444 0 0 1 39.168 9.216z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="content">
      <ul>
        <li v-for='k,index of 10' :key='index' :class="{lighter:(index%2===1)}">
          <span class='title'>来了！就在今天！我滴夜阑！</span>
          <span class='class'>| 算法 |</span>
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1300">
            <path
              d="M832 340.992l-320 312-320-312a28.8 28.8 0 0 0-41.984 0 28.8 28.8 0 0 0-8.96 20.992c0 8 2.624 14.72 7.936 19.968l340.992 332.032c6.016 6.016 13.376 8.96 22.016 8.96 8.704 0 16-2.944 22.016-8.96l341.056-331.008a31.232 31.232 0 0 0 7.936-21.504c0-8.32-2.944-15.36-8.96-20.992a29.76 29.76 0 0 0-41.984 0.448L832 340.992z"
            ></path>
          </svg>   
          <span class='date'>2022-6-1 21:21:36</span>                 
        </li>
      </ul>
    </div>
    <!-- 页码 -->
    <div class="page-number">
      <span @click='chosePage=chosePage===1?1:chosePage-1'>上一页</span>
      <span v-for='k,index of 10' :key='index' @click='chosePage=k' :class="{active:chosePage===k}">{{k}}</span>
      <span @click='chosePage=chosePage===10?10:chosePage+1'>下一页</span>      
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
name:'NoteBody',
setup(){
  const chosePage=ref(1)
  return{
    chosePage
  }
}
}
</script>

<style lang='less' scoped>
.body{
    position: relative;
    width: 100%;
    height: 1100px;
    padding:0 10px;
    .nav{
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      line-height: 18px;
      .classify{
        color:#fff;
        input{
          vertical-align: middle;
        }
      }
      .search{
        display: flex;
        align-items: center;
        input{
          text-align: center;
          outline: none;
          border:none;
          height: 30px;
          width: 300px;
          font-size: 18px;
          &::placeholder{
            color:rgb(216, 216, 216);
          }          
        }
        .search-icon{
          display: inline-block;
          height: 30px;
          width: 30px;
          background-color: rgba(0,0,0,0.4);
          cursor: pointer;
          svg{
            position: relative;
            left:2px;
            top:2px;
            width: 26px;
            height: 26px;
            fill:#fff;
          }
        }
      }
    }
    .content{
      height: 1000px;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow: hidden;  
        li{
          width: 100%;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.2);    
          padding-left:10px; 
          padding-right:30px;
          cursor: pointer;
          &.lighter{
            background-color: rgba(255, 255, 255, 0.4);
          }   
          .title{
            display: inline-block;
            height: 100%;
            font:700 18px/50px "sofia-pro", sans-serif;            
          }       
          .class{
            margin-left:15px;
            font:700 12px/50px "sofia-pro", sans-serif;      
            color:rgb(255, 61, 61);        
          } 
          .date{
            color:rgba(0, 0, 0, 0.678);
            font:500 14px/50px "sofia-pro", sans-serif;    
            float:right;
            padding-right:30px;            
          }    
          .icon{
            float:right;
            width: 30px;
            height: 50px;
            fill:rgba(0, 0, 0, 0.7);
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
}
</style>