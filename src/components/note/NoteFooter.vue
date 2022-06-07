<template>
  <div class='footer'>
    <p>记笔记啦~</p>
    <div class="content">
      <input class='title' type="text" placeholder="此处输入标题" v-model='title'>
      <div class='text'>
        <textarea v-model='content' v-show='!isPreview'></textarea> 
        <!-- <div class='preview' v-html='preContent' v-show='isPreview'></div> -->
        <!-- 此处必须v-if不能用v-show，否则由于setup不会重新挂载导致prop无法被动态接收 -->
        <MdPreview v-if='isPreview' :preContent="content+'\n\n'+pictures.join('\n')"/>
      </div>
      <div class="foot">
        <div  class='select'>
          <span>分类：</span>
            <label>
                <span>算法</span>
                <input type="radio" value=0 v-model='tag'>
            </label>
            <label>
                <span>工具学习</span>
                <input type="radio" value=1 v-model='tag'>
            </label>
            <label>
                <span>项目经验</span>
                <input type="radio" value=2 v-model='tag'>
            </label>         
            <label>
                <span>其他</span>
                <input type="radio" value=3 v-model='tag'>
            </label>                    
        </div>
        <div class='function'>
          <span class='get-img' @change='getPic'>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13846" width="20" height="20">
              <path
                d="M769.3 154.8H258.7c-92.9 0-168.5 75.6-168.5 168.5v379.8c0 92.9 75.6 168.5 168.5 168.5h510.5c92.9 0 168.5-75.6 168.5-168.5V323.3c0.1-92.9-75.5-168.5-168.4-168.5z m-372 146c48.4 0 87.7 39.2 87.7 87.7 0 48.4-39.2 87.7-87.7 87.7-48.4 0-87.7-39.2-87.7-87.7 0.1-48.4 39.3-87.7 87.7-87.7z m-117 407l120.2-187.3 85.8 121L606.6 460l154.5 247.8H280.3z"
              ></path>
            </svg>            
            <span>添加图片</span>
            <input type="file" accept="image/png, image/jpeg">            
          </span>    
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
    </div>    
    <button class='btn' @click='uploadNote'>添加笔记</button>
  </div>
</template>

<script>
import axios from 'axios'
import MdPreview from './MdPreview.vue'
import {ref,reactive,inject} from 'vue'
export default {
name:'NoteFooter',
components:{
  MdPreview
},
setup(){
  const isAdmin=inject('isAdmin')
  const serverAddress=inject('serverAddress')
  const allNotes=inject('allNotes')
  const isPreview=ref(false)
  //文章内容
  const content=ref('')
  //文章标题
  const title=ref('')
  //文章分类
  const tag=ref(0)
  // 存储每个文章的图片
  const pictures=reactive([])
  // 插入图片:使用base64将图片和文章绑定在一起
  function getPic(e){
    const file=e.target.files[0]
    if(file.size>204800){
      alert('请传入200kb以内的图片')
    }else{
      const reader=new FileReader()
      reader.readAsDataURL(file)
      reader.onload=(event)=>{
          pictures.push(`[pic_${pictures.length}]:`+event.target.result+'\n')
          content.value+=`\n\n![${e.target.files[0].name}][pic_${pictures.length-1}]\n`
      }
    }
  }   
  function initialNotes(){
      axios.get(serverAddress+'/api/note/list').then(res=>{
      if(res.data.status===0){
        allNotes.splice(0)
        for(const k of res.data.data)allNotes.push(k)
        alert('笔记发布成功!')
      }else{
        alert('获取笔记列表失败!')
        console.log(res)
      }
      }).catch(err=>{
        console.log(err)
      })   
  }  
  // 删除没有被使用的图片
  function clearPic(){
    for(let i=0;i<pictures.length;i++){
      if(!content.value.includes(`[pic_${i}]`))pictures[i]=''
    }
  }
  //判断标题长度
  function getLen(t){
    let len=0
    for(let i=0;i<t.length;i++){
      if(t.charCodeAt(i)>=0&&t.charCodeAt(i)<=128)len+=1
      else len+=2
    }
    return len
  }
   function uploadNote(){
     if(!isAdmin.value)alert('管理员才能发布笔记哦')
     else{
       if(content.value===''||title.value==='')alert('笔记内容或者标题不能为空')
       else if (getLen(title.value)>36)alert('标题过长')
       else{
        //  上传前清除没有被用到的图片
         clearPic()
        axios.post(serverAddress+'/my/note',{ 
          content:content.value,
          title:title.value,
          tag:tag.value,
          note_pic:pictures.join('\n\n')
          
        },{
            headers:{ 
              authorization:localStorage.getItem('token')
            }
          }).then(res=>{
          if(res.data.status===0){
              initialNotes()
              content.value=''
              title.value=''
          }else{
              alert('笔记发布失败')
              console.log(res)
          }
        }).catch(err=>{
          alert('发生错误')
          console.log(err)
        })
       }
     }
   }
  return{
    isPreview,
    content,
    getPic,
    pictures,
    uploadNote,
    title,
    tag
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
        background-color: #fff;
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
        .function{
          display:flex;
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
          button{
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
@media (max-width:500px) {
  .footer>.content{
    .text{
      height: 730px;
    }
    .foot{
      height: 60px;
      flex-wrap: wrap;
      font-size:14px;
      .select{
        height: 30px;
      }
      .function>button{
        font-size:14px;
      }
    }
  }
}
  
</style>