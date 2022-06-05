<template>
  <div class='body'>
    <!-- 导航栏 -->
    <div class='nav'>
      <div class="classify">
        <span>显示分类 : </span>
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
        <li v-for='k,index of presentNotes' :key='index' :class="{lighter:(index%2===1),fly:choseArticle===index}" v-show='choseArticle===index||choseArticle===-1'>
          <div class='title' @click='changeSelect(index)'>
            <span class='title-text'>{{k.title}}</span>
            <span class='class'>| {{tags[k.tag]}} |</span>
            <svg class="icon" v-show='choseArticle!==index' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1300">
              <path
                d="M832 340.992l-320 312-320-312a28.8 28.8 0 0 0-41.984 0 28.8 28.8 0 0 0-8.96 20.992c0 8 2.624 14.72 7.936 19.968l340.992 332.032c6.016 6.016 13.376 8.96 22.016 8.96 8.704 0 16-2.944 22.016-8.96l341.056-331.008a31.232 31.232 0 0 0 7.936-21.504c0-8.32-2.944-15.36-8.96-20.992a29.76 29.76 0 0 0-41.984 0.448L832 340.992z"
              ></path>
            </svg>   
            <svg class="icon" v-show='choseArticle===index' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1313" width="200" height="200">
              <path
                d="M488.96 344l-339.968 356.992a32.256 32.256 0 0 0-8.96 22.016c0 8 2.944 15.36 8.96 22.016v0.96c6.016 6.016 13.184 9.024 21.504 9.024 8.32 0 15.488-3.008 21.504-8.96l320-336 320 336c6.016 5.952 13.184 8.96 21.504 8.96 8.32 0 15.488-3.008 21.504-8.96v-1.024a32.256 32.256 0 0 0 8.96-22.016 32.256 32.256 0 0 0-8.96-22.016L534.976 344A31.168 31.168 0 0 0 512 335.04a31.168 31.168 0 0 0-23.04 8.96z"
              ></path>
            </svg>
            <span class='date'>{{k.date}}</span>              
          </div>
          <div class='article' v-show='choseArticle===index'>
            <div class='article-nav'>
              <div class='block'>
                <p class='author'>作者:{{k.author_name}}</p>
                <div class='edit' v-show='isAdmin===k.author_name'>            
                  <button @click='isEdit=!isEdit' v-show='!isEdit'>
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292" width="15" height="15">
                      <path
                        d="M815.8 318.8L705.9 209c-19.5-19.5-19.5-51.2 0-70.7l59.7-59.7c19.5-19.5 51.2-19.5 70.7 0l109.8 109.8c19.5 19.5 19.5 51.2 0 70.7l-59.7 59.7c-19.5 19.6-51.1 19.6-70.6 0zM751.2 453.4c18.8-18.8 23.5-44.5 10.5-57.4L628.1 262.3c-12.9-12.9-38.6-8.2-57.4 10.5L81.3 749.2c-9.4 9.4-15.3 21.4-16.5 33.5l0.2 133.8c-2.4 25.2 17.4 45 42.6 42.6l133.8 1.1c12.1-1.2 24.2-7.1 33.5-16.5l476.3-490.3zM908.9 831.7H559.8c-13.4 0-26.2 5.3-35.6 14.8-17.1 17.2-45.3 46.3-68.8 70.7-15.2 15.8-4 42.1 17.9 42.1h435.3c28 0 50.9-22.9 50.9-50.9v-26.3c-0.2-27.7-22.8-50.4-50.6-50.4z"
                      ></path>
                    </svg>                    
                    编辑</button>
                  <button v-show='!isEdit'>
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139" width="12" height="12">
                      <path d="M96 128h832v64H96zM128 256h768l-89.024 704H217.024z"></path>
                      <path d="M384 64h256v96h-256z"></path>
                    </svg> 
                    删除</button>   
                  <button v-show='isEdit' @click='save'>
                    <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8403" width="16" height="16">
                      <path d="M640 128H192a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V384z m0 224H192V192h448z"></path>
                    </svg>
                    保存</button> 
                  <button v-show='isEdit' @click='saveDraft'>
                    <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10345" width="14" height="14">
                      <path
                        d="M731.13 256H292.05a36 36 0 0 0 0 72h439.08a36 36 0 0 0 0-72zM541 475.88H292a36 36 0 0 0 0 72h249a36 36 0 0 0 0-72zM412.39 695.8H292.05a36 36 0 1 0 0 72h120.34a36 36 0 1 0 0-72z"
                      ></path>
                      <path
                        d="M824 64H200a72 72 0 0 0-72 72v752a72 72 0 0 0 72 72h346.18a72 72 0 0 0 50.91-21.09l277.82-277.82A72 72 0 0 0 896 610.18V136a72 72 0 0 0-72-72zM200 888V136h624v432H576a72 72 0 0 0-72 72v248H200z m376-29.82V640h218.18z"
                      ></path>
                    </svg>
                    保存到草稿</button>  
                  <button v-show='isEdit'  @click='takeOut'>
                    <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="45495" width="15" height="15">
                      <path
                        d="M671.288889 818.3808c-46.648889 0-124.404622 13.744356-136.533333 45.4656l0 0.705422c-27.0336 0.705422-33.427911 0-45.511111 0-12.105956-31.766756-89.884444-45.511111-136.533333-45.511111l-250.311111 0 0-659.911111 272.156444 0c58.732089 0 109.522489 30.173867 137.4208 74.706489 27.898311-44.532622 78.711467-74.706489 137.466311-74.706489L921.6 159.1296l0 659.2512L671.288889 818.3808zM489.244444 295.662933c0-53.202489-57.457778-91.022222-113.777778-91.022222l-227.555556 0 0 568.888889c0 0 162.178844 0 204.8 0 45.147022-0.796444 116.349156 0.477867 136.533333 33.723733l0-25.486222c-0.864711-31.493689-0.045511-74.501689 0-76.276622L489.244444 310.340267c0-0.022756 0-0.022756 0-0.045511L489.244444 295.662933zM876.088889 204.5952l-227.555556 0c-56.32 0-113.777778 37.796978-113.777778 90.9312l0 14.904889c0 0.022756 0 0.022756 0 0.045511l0 394.467556c0.045511 1.752178 0.864711 44.760178 0 76.1856l0 25.463467c20.184178-33.200356 91.386311-34.497422 136.533333-33.678222 42.621156 0 204.8 0 204.8 0L876.088889 204.5952z"
                      ></path>
                    </svg>
                    取出草稿</button>   
                  <button v-show='isEdit' @click='backOut'>
                    <svg class="icon" viewBox="0 0 1140 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46316" width="15" height="15">
                      <path
                        d="M474.133828 76.681372c-261.931418 0-474.133828 212.297312-474.133828 474.133828 0 261.836515 212.20241 474.133828 474.133828 474.133828s474.133828-212.297312 474.133828-474.133828C948.267655 288.978684 735.970343 76.681372 474.133828 76.681372zM521.774977 637.271548 521.774977 521.774977c-57.321223 0-203.471362 1.328638-203.471362 158.487488 0 82.28063 55.80278 150.990176 130.016682 166.838925C329.217424 830.208712 237.066914 724.487118 237.066914 595.134754c0-240.293605 245.228545-242.286562 284.708063-242.286562L521.774977 254.529008l189.330862 192.08304L521.774977 637.271548z"
                      ></path>
                    </svg>
                    取消编辑</button>                                                                                
                </div>  
              </div>
              <div class='block' v-show='isEdit'>
                <span class='get-img' @change='getPic'>
                  <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13846" width="20" height="20">
                    <path
                      d="M769.3 154.8H258.7c-92.9 0-168.5 75.6-168.5 168.5v379.8c0 92.9 75.6 168.5 168.5 168.5h510.5c92.9 0 168.5-75.6 168.5-168.5V323.3c0.1-92.9-75.5-168.5-168.4-168.5z m-372 146c48.4 0 87.7 39.2 87.7 87.7 0 48.4-39.2 87.7-87.7 87.7-48.4 0-87.7-39.2-87.7-87.7 0.1-48.4 39.3-87.7 87.7-87.7z m-117 407l120.2-187.3 85.8 121L606.6 460l154.5 247.8H280.3z"
                    ></path>
                  </svg>            
                  <span>添加图片</span>
                  <input type="file" accept="image/png, image/jpeg">            
                </span>    
                <button @click='isPreview=!isPreview' class='pr'>
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
            <div class='article-content'>
             <MdPreview :preContent="k.content+'\n\n'+k.pic" v-if='!isEdit'/>
             <textarea v-else v-model='k.content'></textarea>           
            </div>               
          </div>            
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
import MdPreview from './MdPreview.vue'
import {ref,reactive,watchEffect,inject} from 'vue'
export default {
name:'NoteBody',
components:{
  MdPreview
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
  const allNotes=new Array(42).fill({title:'来了！就在今天！我滴夜阑！',tag:1,date:'2022-6-2 14:18:52',noteId:0,author_name:'administrator',author_id:0,content:'### 测试一下 \n 1. 今天',pic:''})
  //符合筛选条件的信息
  const okNotes=new Array
  //确定展开搜索的关键词
  const keywords=ref('');
  const isAdmin=inject('isAdmin')
  //文章是否处于编辑状态
  const isEdit=ref(false)
  // 文章是否处于预览状态
  const isPreview=ref(true)


  //自动更新页面内容
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
  //选择文章
  function changeSelect(index){
    if(choseArticle.value===index){
      if(isEdit.value){
        if(confirm('是否撤销编辑')){
          console.log('撤销了编辑')
          isEdit.value=false
          choseArticle.value=-1
        }
      }else choseArticle.value=-1
    }else{
      choseArticle.value=index
    }
  }


  // 编辑后保存
  function save(){
    if(confirm('是否保存更改？')){
      console.log('保存了');
      isEdit.value=false;
    }
  }
  //保存到草稿
  function saveDraft(){
    if(confirm('是否保存到草稿？')){
      console.log('保存到草稿了');
    }
  }
  //从草稿取出
  function takeOut(){
    if(confirm('是否取出之前所保存的草稿，这样会覆盖当前编辑界面的内容？')){
      console.log('取出了草稿');
    }
  }
  //取消编辑
  function backOut(){
    if(confirm('是否放弃当前页面的更改？')){
      console.log('撤销了编辑');
      isEdit.value=false;      
    }
  }
  // 根据关键词筛选
  return{
    chosePage,
    tags,
    tagNum,
    changeShow,
    choseArticle,
    presentNotes,
    keywords,
    isAdmin,
    isEdit,
    isPreview,
    save,
    saveDraft,
    takeOut,
    backOut,
    changeSelect
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
          // height: 50px;
          background-color: rgba(255, 255, 255, 0.2);    
          &.lighter{
            background-color: rgba(255, 255, 255, 0.4);
          }   
          &.fly{
            position: absolute;
            top:0;
          }
          .title{
            cursor: pointer;
            height:50px;
            .title-text{
              margin-left:10px;
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
              margin-right:30px;
            }
          }
          .article{
            width: 100%;
            height: 950px;
            background:rgba(255, 255, 255, 0.819);
            padding:10px 20px;
            .article-content{
              height: 910px;
              textarea{
                padding:0 10px;
                height: 100%;
                resize:none;
                width: 100%;
                border:none;
                outline:none;    
                font-size:16px;     
                font-family: '微软雅黑';    
              }
            }
            .article-nav{
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              height: 30px;
              border-bottom:1px solid gray;
              .block{
                display: flex;
                align-items: center; 
                .get-img{  
                  position: relative;
                  width: 100px;
                  overflow: hidden;
                  display:flex;
                  align-items: center;  
                  input{
                    opacity: 0;  
                    position: absolute;
                    left:0;
                  }
                }   
              .pr{
                padding:0 5px;
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
                .edit{
                  padding-left:10px;
                  display: flex;
                  button{
                    cursor: pointer;
                    border:none;
                    background-color: transparent;
                    margin-left:10px;
                    display:flex;
                    align-items: center;
                  }
                }                           
              }

            }

            .text{
              margin-top:10px;
            }
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