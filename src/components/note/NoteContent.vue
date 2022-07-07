<template>
    <div class='title' @click='changeSelect(index,k.note_id)'>
    <span class='title-text' id='article-title'>{{k.title}}</span>
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
    <span class='date' id='date'>{{k.date}}</span>              
    </div>
    <div id="pocket">
        <transition name='article-area'>
            <div class='article' v-show='choseArticle===index'>
                <div class='article-nav'>
                    <div class='block'>
                    <p class='author'>作者:{{k.author_name}}</p>
                    <div class='edit' v-show='isAdmin===k.author_name'>            
                        <button @click='startEdit(k.tag)' v-show='!isEdit'>
                        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6292" width="15" height="15">
                            <path
                            d="M815.8 318.8L705.9 209c-19.5-19.5-19.5-51.2 0-70.7l59.7-59.7c19.5-19.5 51.2-19.5 70.7 0l109.8 109.8c19.5 19.5 19.5 51.2 0 70.7l-59.7 59.7c-19.5 19.6-51.1 19.6-70.6 0zM751.2 453.4c18.8-18.8 23.5-44.5 10.5-57.4L628.1 262.3c-12.9-12.9-38.6-8.2-57.4 10.5L81.3 749.2c-9.4 9.4-15.3 21.4-16.5 33.5l0.2 133.8c-2.4 25.2 17.4 45 42.6 42.6l133.8 1.1c12.1-1.2 24.2-7.1 33.5-16.5l476.3-490.3zM908.9 831.7H559.8c-13.4 0-26.2 5.3-35.6 14.8-17.1 17.2-45.3 46.3-68.8 70.7-15.2 15.8-4 42.1 17.9 42.1h435.3c28 0 50.9-22.9 50.9-50.9v-26.3c-0.2-27.7-22.8-50.4-50.6-50.4z"
                            ></path>
                        </svg>                    
                        编辑</button>
                        <button v-show='!isEdit' @click='deleteNote(k.note_id)'>
                        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139" width="12" height="12">
                            <path d="M96 128h832v64H96zM128 256h768l-89.024 704H217.024z"></path>
                            <path d="M384 64h256v96h-256z"></path>
                        </svg> 
                        删除</button>   
                        <button v-show='isEdit' @click='save(k.note_id)'>
                        <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8403" width="16" height="16">
                            <path d="M640 128H192a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V384z m0 224H192V192h448z"></path>
                        </svg>
                        保存</button> 
                        <button v-show='isEdit' @click='saveDraft(k.note_id)'>
                        <svg  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10345" width="14" height="14">
                            <path
                            d="M731.13 256H292.05a36 36 0 0 0 0 72h439.08a36 36 0 0 0 0-72zM541 475.88H292a36 36 0 0 0 0 72h249a36 36 0 0 0 0-72zM412.39 695.8H292.05a36 36 0 1 0 0 72h120.34a36 36 0 1 0 0-72z"
                            ></path>
                            <path
                            d="M824 64H200a72 72 0 0 0-72 72v752a72 72 0 0 0 72 72h346.18a72 72 0 0 0 50.91-21.09l277.82-277.82A72 72 0 0 0 896 610.18V136a72 72 0 0 0-72-72zM200 888V136h624v432H576a72 72 0 0 0-72 72v248H200z m376-29.82V640h218.18z"
                            ></path>
                        </svg>
                        保存到草稿</button>  
                        <button v-show='isEdit'  @click='takeOut(k.note_id)'>
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
                    <div class='block' id='block2' v-show='isEdit'>
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
                <MdPreview :preContent="nowContent+'\n\n'+nowNote_pic" v-if='!isEdit&&nowContent'/>
                <textarea v-show="isEdit&&!isPreview&&nowContent" v-model='draft'></textarea>  
                <div  class='select' v-show="isEdit&&!isPreview&&nowContent">
                <span id='select-title'>修改分类：</span>
                    <label>
                        <span>算法</span>
                        <input type="radio" value=0 v-model='updateTag'>
                    </label>
                    <label>
                        <span>工具学习</span>
                        <input type="radio" value=1 v-model='updateTag'>
                    </label>
                    <label>
                        <span>项目经验</span>
                        <input type="radio" value=2 v-model='updateTag'>
                    </label>         
                    <label>
                        <span>其他</span>
                        <input type="radio" value=3 v-model='updateTag'>
                    </label>                                 
                </div> 
                <MdPreview :preContent="draft+'\n\n'+draft_pic.join('\n')" v-if='isPreview&&nowContent'/>        
            </div>               
            </div>  
        </transition> 
    </div>         
</template>

<script>
import {compressAccurately} from 'image-conversion'
import axios from 'axios'
import MdPreview from './MdPreview.vue'
import {inject,ref,reactive} from 'vue'
export default {
name:'NoteContent',
components:{
  MdPreview
},
props:['k','index'],
emits:['initial'],
setup(props,context){
    const isAdmin=inject('isAdmin')
    const serverAddress=inject('serverAddress')
    // 标签列表
    const tags=inject('tags')
    // 当前被展开的文章索引
    const choseArticle=inject('choseArticle')
    //文章是否处于编辑状态
    const isEdit=ref(false)
    // 文章是否处于预览状态
    const isPreview=ref(false)
    // 当前选中note的文章和图片和tag
    const nowContent=ref('')
    const nowNote_pic=ref('')
    const updateTag=ref(0)
    // 草稿
    const draft=ref('')
    const draft_pic=reactive([])    
    //选择文章
    function changeSelect(index,id){
        if(choseArticle.value===index){
        if(isEdit.value){
            if(confirm('当前正在编辑，是否撤销此次编辑')){
            isEdit.value=false
            }
        }
        choseArticle.value=-1
        nowContent.value=''
        nowNote_pic.value=''       
        }else{
        choseArticle.value=index
        axios.post(serverAddress+'/api/note/one',{
            note_id:id
            }).then(res=>{
        if(res.data.status===0){
            nowContent.value=res.data.data.content
            nowNote_pic.value=res.data.data.note_pic
        }else{
            alert('获取笔记失败!')
            console.log(res)
        }
        }).catch(err=>{
            console.log(err)
        })  
        }
    }  
    // 开始编辑笔记
    function startEdit(tag){
        isEdit.value=true
        draft.value=nowContent.value
        updateTag.value=tag
        //将字符串展开成数组存在草稿图片中
        const picArr=nowNote_pic.value.split('\n\n')
        for(const k of picArr)draft_pic.push(k)
    }    
    // 删除笔记
    function deleteNote(id){
        if(confirm('确认删除')){
        axios.post(serverAddress+'/my/deletenote',{
            note_id:id
        },{
            headers:{ 
                authorization:localStorage.getItem('token')
            }
            }).then(res=>{
            if(res.data.status===0){
                context.emit('initial')     
                alert('删除成功')
                choseArticle.value=-1
                nowContent.value=''
                nowNote_pic.value=''
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
    // 编辑后保存
    function save(id){
        if(confirm('是否保存更改？')){
        clearPic()
        axios.post(serverAddress+'/my/note/update',{ 
            note_pic:draft_pic.join('\n'),
            content:draft.value,
            note_id:id,
            tag:updateTag.value
        },{
            headers:{ 
                authorization:localStorage.getItem('token')
            }
            }).then(res=>{
            if(res.data.status===0){
                alert('保存成功')
            context.emit('initial')  
            isEdit.value=false;
            nowContent.value  =draft.value          
            }else{
                alert('保存失败')
                console.log(res)
            }
        }).catch(err=>{
            alert('发生错误')
            console.log(err)
        })
        }
    }
    // 编辑时插入图片
    function getPic(e){
        const file=e.target.files[0]
        const reader=new FileReader()
        compressAccurately(file,100).then(res=>{
        reader.readAsDataURL(res)
        reader.onload=(event)=>{
            draft_pic.push(`[pic_${draft_pic.length}]:`+event.target.result+'\n')
            draft.value+=`\n\n![${e.target.files[0].name}][pic_${draft_pic.length-1}]\n`
        }             
        })    
        reader.readAsDataURL(file)
        reader.onload=(event)=>{
            draft_pic.push(`[pic_${draft_pic.length}]:`+event.target.result+'\n')
            draft.value+=`\n\n![${e.target.files[0].name}][pic_${draft_pic.length-1}]\n`
        }
    }   
    // 删除没有被使用的图片
    function clearPic(){
        for(let i=0;i<draft_pic.length;i++){
        if(draft_pic[i]==='')continue
        if(!nowContent.value.includes(`[pic_${i}]`)&&!draft.value.includes(`[pic_${i}]`))draft_pic[i]=''
        }
    }
    //保存到草稿
    function saveDraft(id){
        if(confirm('是否保存到草稿？')){
            clearPic()
            axios.post(serverAddress+'/my/note/save-draft',{ 
            note_pic:draft_pic.join('\n'),
            draft:draft.value,
            note_id:id
            },{
                headers:{ 
                authorization:localStorage.getItem('token')
                }
            }).then(res=>{
            if(res.data.status===0){
                alert('保存草稿成功')
            }else{
                alert('保存草稿失败')
                console.log(res)
            }
            }).catch(err=>{
            alert('发生错误')
            console.log(err)
            })
        }
    }
    //从草稿取出
    function takeOut(id){
        if(confirm('是否取出之前所保存的草稿，这样会覆盖当前编辑界面的内容？')){
            axios.post(serverAddress+'/my/note/get-draft',{ 
            note_id:id
            },{
                headers:{ 
                authorization:localStorage.getItem('token')
                }
            }).then(res=>{
            if(res.data.status===0){
                if(res.data.data.draft===null)alert('当前笔记的草稿为空！')
                else draft.value=res.data.data.draft
            }else{
                alert('保存草稿失败')
                console.log(res)
            }
            }).catch(err=>{
            alert('发生错误')
            console.log(err)
            })
        }
    }
    //取消编辑
    function backOut(){
        if(confirm('是否放弃当前页面的更改？')){
        console.log('撤销了编辑');
        isEdit.value=false;      
        }
    }      
    return {
        choseArticle,
        isAdmin,
        isEdit,
        nowContent,
        nowNote_pic,
        updateTag,
        changeSelect,
        startEdit,
        deleteNote,
        save,
        getPic,
        saveDraft,
        takeOut,
        backOut,
        isPreview,
        tags,
        draft,
        draft_pic

    }
}
}
</script>

<style lang='less' scoped>
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
        height: 870px;
        resize:none;
        width: 100%;
        border:none;
        outline:none;    
        font-size:16px;     
        font-family: '微软雅黑';    
        vertical-align: middle;
        }
        .select{
        height: 40px;
        display: flex;
        align-items: center;
        input{
            margin-right:10px;
        }
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
#pocket{
    width: 100%;
    overflow: hidden;
}
.article-area-enter-active{
    animation: slide-in-blurred-top 0.5s 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;    
}
.article-area-leave-active{
    animation: slide-out-blurred-top 0.5s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
}
@keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-2000px);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-2000px) ;
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) ;
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}

@media (max-width:768px){
   #date{
    display: none;
  }  
}
@media (max-width:500px) {
    .article{
        padding:0 0;      
        .article-nav{
            height: 100px;
            justify-content: flex-start;
            flex-wrap: wrap;
            #block2{
            height:40px;
            }
            .block{
            flex-wrap: wrap;
            height: 60px;
            .edit{
                padding:0;
                margin-left:0;
                button{
                margin-left:0;
                margin-right:10px;
                }
            }
            }
        }  
        .article-content{
            height: 850px;    
            textarea{
            height: 810px;
            }
        }
    }
    .title>.icon{
        margin-right:10px;
    }
  #article-title{
    font-size:12px;
  }
  #select-title{
    display: none;
  }
}
</style>