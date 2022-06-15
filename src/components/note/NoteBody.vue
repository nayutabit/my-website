<template>
  <div class='body'>
    <!-- 导航栏 -->
    <div class='nav'>
      <div class="classify">
        <span class='classify-title'>显示分类 : </span>
        <ul>
          <li class='label' v-for='k,index of tags' :key='index' @click='changeShow(index)'>
            <span>{{k}}</span>  
            <svg t="1654138721746" class="option" :class='{show:tagNum[index]}' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20888">
              <path d="M176 299.4h672v336H176z"></path>
              <path
                d="M885.3 187.4H138.7C97.6 187.4 64 221 64 262.1v410.6c0 41.1 33.6 74.7 74.7 74.7h298.7v51.8h-37.3c-37.3 0-37.3 37.3-37.3 37.3h298.7c0-37.3-37.3-37.3-37.3-37.3h-37.3v-51.8h298.7c41.1 0 74.7-33.6 74.7-74.7V262.1c-0.3-41.1-33.9-74.7-75-74.7z m0 485.3H138.7V262.1h746.7v410.6z"
                fill='#fff'
              ></path>
            </svg>
          </li>   
        </ul>
                      
      </div>
      <div class="search">
        <span class='search-icon'>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9274">
            <path
              d="M512 14.222222C786.915556 14.222222 1009.777778 237.084444 1009.777778 512c0 125.866667-46.705778 240.810667-123.733334 328.476444 1.422222 1.024 2.787556 2.218667 4.067556 3.527112l100.551111 100.551111a42.666667 42.666667 0 1 1-60.302222 60.330666l-100.579556-100.551111a42.951111 42.951111 0 0 1-4.608-5.404444A495.559111 495.559111 0 0 1 512 1009.777778C237.084444 1009.777778 14.222222 786.915556 14.222222 512S237.084444 14.222222 512 14.222222z m0 85.333334C284.216889 99.555556 99.555556 284.216889 99.555556 512S284.216889 924.444444 512 924.444444 924.444444 739.783111 924.444444 512 739.783111 99.555556 512 99.555556z m-115.911111 141.482666A28.444444 28.444444 0 0 1 386.844444 280.177778c-50.119111 31.004444-84.593778 72.647111-104.163555 125.553778a28.444444 28.444444 0 1 1-53.361778-19.740445c24.007111-64.938667 66.787556-116.565333 127.601778-154.168889a28.444444 28.444444 0 0 1 39.168 9.216z"
            ></path>
          </svg>
        </span>        
        <input type="text" placeholder="请输入关键词" v-model='keywords'>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="content">
      <ul>
        <transition-group name='note-content'>
          <li v-for='k,index of presentNotes' :key='k.note_id' :class="{lighter:(index%2===1)}" v-show='choseArticle===index||choseArticle===-1'>
            <NoteContent :k='k' :index='index' @initial='initialNotes'/>
          </li>
        </transition-group>        
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
import axios from 'axios'
import NoteContent from './NoteContent.vue'
import {ref,reactive,watchEffect,inject,onMounted,provide} from 'vue'
export default {
name:'NoteBody',
components:{
  NoteContent
},
setup(){
  //所有标签
  const tags=reactive(['算法','工具学习','项目经验','其它','全选'])
  //标签编号
  const tagNum=reactive(new Array(tags.length).fill(true))
  //页码
  const chosePage=ref(1)
  //改变导航栏标签的选择情况
  const choseArticle=ref(-1) 
  // 当前页面显示的信息
  const presentNotes=reactive(new Array(20))
  //一次从数据库申请来的所有信息
  const allNotes=inject('allNotes')
  //符合筛选条件的信息
  const okNotes=reactive(new Array)
  //确定展开搜索的关键词
  const keywords=ref('');
  const isAdmin=inject('isAdmin')
  const serverAddress=inject('serverAddress')
  provide('choseArticle',choseArticle)
  provide('tags',tags)
  function initialNotes(){
      axios.get(serverAddress+'/api/note/list').then(res=>{
      if(res.data.status===0){
        allNotes.splice(0)
        for(const k of res.data.data)allNotes.push(k)
      }else{
        alert('获取笔记列表失败!')
        console.log(res)
      }
      }).catch(err=>{
        console.log(err)
      })   
  }
  // 挂载笔记列表
  onMounted(()=>{
   initialNotes()   
  })
  //搜索条件变化后自动更新页面内容
  watchEffect(()=>{
    okNotes.splice(0)
    //通过标签和关键词从所有数据中筛选
    for(const k of allNotes){
      if(tagNum[k.tag]&&k.title.includes(keywords.value))okNotes.push(k)
    }
    //显示对应页面的笔记
    presentNotes.splice(0)
    for(let i=0;i<20;i++){
      if(okNotes[i+(chosePage.value-1)*20]){
        presentNotes[i]=okNotes[i+(chosePage.value-1)*20]
      }
    }    
  })
  //顶部复选框逻辑
  function changeShow(index){
    tagNum[index]=!tagNum[index]    
    if(index===tagNum.length-1){
      for(let i=0;i<index;i++)tagNum[i]=tagNum[index]
    }else{
      if(!tagNum[index])tagNum[tagNum.length-1]=false
      else{
        let totalTrue=true
        for(let i=0;i<tagNum.length-1;i++){
          if(!tagNum[i]){
            totalTrue=false
            break
          }
        }
        if(totalTrue)tagNum[tagNum.length-1]=true
      }
    }
  }
  return{
    chosePage,
    tags,
    tagNum,
    changeShow,
    choseArticle,
    presentNotes,
    keywords,
    isAdmin,
    initialNotes,
  }
},
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
        display: flex;
        align-items: center;
        user-select: none;
        ul{
          display: flex;
          align-items: center;          
          .label{
            display: flex;
            align-items: center;
            cursor: pointer;
            margin-left:10px;
            .option{
              width: 20px;
              height: 20px;
              fill:transparent;
              &.show{
                fill:#fff;
              }
            }
          }
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
          background-color:#fff;
          svg{
            position: relative;
            left:5px;
            top:5px;
            width: 20px;
            height: 20px;
            fill:gray;
          }
        }
      }
    }
    .content{
      height: 1000px;
      ul{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;  
        li{
          width: 100%;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.2);   
          transition:all 0.5s; 
          &.lighter{
            background-color: rgba(255, 255, 255, 0.4);
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
.note-content-enter-active{
  animation: slide-in-blurred-left 0.5s 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}
.note-content-leave-active{
  animation: slide-out-blurred-left 0.5s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}
@keyframes slide-in-blurred-left {
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-out-blurred-left {
  0% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
}
@media (max-width:1200px){
  .body{
    .nav{
      font-size:14px;
      .search{
        input{
          width: 250px;
        }
      }
    }
  }
}
@media (max-width:768px){
  .body{
    .nav{
      display:block;
      font-size:12px;
      .search{
        input{
          width: 100%;
        }
      }
      .classify>ul>.label{
        margin-left:3px;
      }      
    }
  } 
}
@media (max-width:500px) {
  .body{
    .page-number>span{
      padding:0 3px;
    }
    .nav{
      .classify{
        .classify-title{
          display: none;
        }
      }
    }
  } 
}
</style>