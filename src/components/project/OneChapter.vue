<template>
  <div class='chapter'>
        <div class='nav'>
            <p class='chapter-title'>{{title}}项目</p>
            <div class='edit'>
                <svg class="icon" @click='isAdd=true' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2833" width="26" height="26">
                    <path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667z m32-394.666667h128a32 32 0 0 1 0 64H544v128a32 32 0 0 1-64 0V544H352a32 32 0 0 1 0-64h128V352a32 32 0 0 1 64 0v128z"
                    ></path>
                </svg>
                <svg class="icon" @click='readyDel=true' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2985" width="26" height="26">
                    <path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667zM352 480h320a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
                    ></path>
                </svg>   
                <button v-show='readyDel' @click='confirmDel'>确认删除</button>       
                <button v-show='readyDel' @click='delBack'>取消</button>      
            </div>
            <div class='fold2' v-show='!isFold' @click='fold'>
                <div >收起</div>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1313" width="20" height="20">
                <path
                    d="M488.96 344l-339.968 356.992a32.256 32.256 0 0 0-8.96 22.016c0 8 2.944 15.36 8.96 22.016v0.96c6.016 6.016 13.184 9.024 21.504 9.024 8.32 0 15.488-3.008 21.504-8.96l320-336 320 336c6.016 5.952 13.184 8.96 21.504 8.96 8.32 0 15.488-3.008 21.504-8.96v-1.024a32.256 32.256 0 0 0 8.96-22.016 32.256 32.256 0 0 0-8.96-22.016L534.976 344A31.168 31.168 0 0 0 512 335.04a31.168 31.168 0 0 0-23.04 8.96z"
                ></path>
                </svg>          
            </div>             
        </div>
        <div class='list'>
            <ul class='items'>
                <li v-for='k,index in 10' :key='index' :class='{nogap:(index+1)%4===0}'>
                    <a href="#"> 
                        <div class="img"></div>
                        <div class='title'>神仔！我滴神仔！</div>
                    </a>
                    <div class="mask" v-show='readyDel' @click='updateDelList(index)'>
                            <svg v-show='delList.has(index)' class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2866" >
                            <path
                                d="M447.711811 862.823134 127.068024 528.812921l82.21242-67.503417 185.41285 148.896168c76.017324-92.443435 244.701165-276.0655 477.455229-422.048315l19.565615 46.298466C678.076456 435.323667 503.19445 718.258621 447.711811 862.823134L447.711811 862.823134 447.711811 862.823134zM447.711811 862.823134"
                                fill='#fff'
                            ></path>
                            </svg>                          
                    </div>
                </li>
            </ul>  
        </div>    
        <div class="foot">
            <div class='more' v-show='isFold' @click='unfold'>
                展开更多
                <svg t="1654592147160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5999" width="20" height="20">
                <path
                    d="M533.333333 388.266667L358.4 213.333333 298.666667 277.333333l234.666666 234.666667L768 277.333333 708.266667 213.333333l-174.933334 174.933334z m0 260.266666l-174.933333-174.933333L298.666667 533.333333l234.666666 234.666667 234.666667-234.666667-59.733333-59.733333-174.933334 174.933333z"
                ></path>
                </svg>                
            </div>
            <div class='more' v-show='!isFold' @click='fold'>
                收起
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1313" width="20" height="20">
                <path
                    d="M488.96 344l-339.968 356.992a32.256 32.256 0 0 0-8.96 22.016c0 8 2.944 15.36 8.96 22.016v0.96c6.016 6.016 13.184 9.024 21.504 9.024 8.32 0 15.488-3.008 21.504-8.96l320-336 320 336c6.016 5.952 13.184 8.96 21.504 8.96 8.32 0 15.488-3.008 21.504-8.96v-1.024a32.256 32.256 0 0 0 8.96-22.016 32.256 32.256 0 0 0-8.96-22.016L534.976 344A31.168 31.168 0 0 0 512 335.04a31.168 31.168 0 0 0-23.04 8.96z"
                ></path>
                </svg>               
            </div>            
        </div>  
        <div class='mask' v-show='isAdd'>
            <div class="add">
                <input type="text" placeholder="输入项目网址" class='url' v-model='url'>                
                <!-- 上传图片部分 -->
                <div class='chose-file'>
                    <span >选择封面</span>
                    <input type="file" accept="image/png, image/jpeg" @change='getSurface'>
                </div>
                <button class='upload' @click='upload'>确认</button>                
            </div>
            <div class="close" @click='isAdd=false'>X</div>            
        </div>
  </div>
</template>

<script>
import {ref,inject,reactive} from 'vue'
export default {
name:'OneChapter',
props:['title','tag'],
emits:['select'],
setup(props,context){
    const isAdmin=inject('isAdmin')
    const isFold=ref(true)
    const height=ref('400px')    
    const readyDel=ref(false)
    const delList=reactive(new Set)
    const topicColor=inject('topicColor')  
    const isAdd=ref(false)  
    const url=ref('')
    let surface64=''
    function unfold(){
        isFold.value=false
        height.value='1830px'
        context.emit('select',props.tag)
    }
    function fold(){
        isFold.value=true
        height.value='400px'
        context.emit('select',-1)
    }
    function updateDelList(index){
        if(delList.has(index))delList.delete(index)
        else delList.add(index)
    }
    function delBack(){
        if(confirm('是否取消删除')){
            readyDel.value=false
            delList.clear()
        }
    }
    function confirmDel(){
        if(confirm('是否删除选中内容')){
            console.log('已执行删除操作');
            delList.clear()
            readyDel.value=false
        }
    }
    function upload(){
        
    }
    // 从本地选择封面图片并转成base64
    function getSurface(e){
      const file=e.target.files[0]
      if(file.size>204800){
        alert('请传入200kb以内的图片')
      }else{
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=(event)=>{
            surface64=event.target.result
        }
      }
    }
    return{
        isFold,
        unfold,
        height,
        fold,
        isAdmin,
        readyDel,
        delList,
        updateDelList,
        delBack,
        confirmDel,
        topicColor,
        isAdd,
        url,
        getSurface,
        upload
    }
}
}
</script>

<style lang='less' scoped>
.chapter{
    position: relative;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    padding:0 15px;
    .nav{
        position: relative;
        width: 100%;
        height: 40px;
        .fold2{
            position: absolute;
            top:0;
            right:0;
            height: 40px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color:#fff;
            fill:#fff;
        }        
        .chapter-title{
            height: 100%;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #fff;
            font:700 20px/40px "sofia-pro", sans-serif;    
            color:#fff;       
            margin:0 auto;
        }
        .edit{
            display: flex;
            align-items: center;
            position: absolute;
            top:5px;
            left:0;
            height: 30px;
            padding:2px;
            button{
                border:none;
                background: none;
                margin:0 5px;
              font:700 16px/40px "sofia-pro", sans-serif;     
              color:#fff;     
              cursor: pointer;         
            }
            .icon{
                fill:#fff;
                cursor: pointer;
            }
        }
    }
    .list{
        height:v-bind(height);
        overflow: hidden;
        padding-top:10px;
        .items{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            li{
                position: relative;
                width: 23.5%;
                height: 190px;
                margin-right:2%;
                margin-bottom:10px;
                &.nogap{
                    margin-right:0;
                }
                a{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    transition:all 0.5s;
                    .img{
                        width: 100%;
                        height: 150px;
                        background-image: url('../../assets/shenzai.png');
                        background-size: cover;
                    }
                    .title{
                        padding-left:10px;
                        width: 100%;
                        height: 40px;
                        background-color: rgba(255, 255, 255, 0.733);
                        font:700 14px/40px "sofia-pro", sans-serif;   
                        color:#000;                        
                    }
                    &:hover{
                        transform: translateY(-5px);
                        box-shadow: 0 5px 5px #000;
                    }
                }
                .mask{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.479);
                    top:0;
                    left:0;
                }
            }
        }
    }
    .foot{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        &:hover{
           background-color: rgba(255, 255, 255, 0.089);
        }
        .more{
            display: flex;
            align-items: center;
            height: 100%;
            font:700 14px/30px "sofia-pro", sans-serif;    
            color:#fff;    
            .icon{
                fill:#fff;
            }     
        }
    }
    .mask{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        .close,.add{
            position: absolute;
            top:150px;
            left:50%;
            transform: translateX(-50%);
        }
        .close{
            transform: translateX(185px);
            cursor: pointer;
        }
        .add{
            width: 400px;
            height: 150px;
            background-color: rgba(255, 255, 255, 0.66);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .url{
                width: 300px;
                height: 30px;
                outline: none;
                border:none;
                &::placeholder{
                    text-align: center;
                }
            }
            .chose-file{
                position: relative;
                border:none;
                width: 100px;
                height: 30px;
                input{
                     position: absolute;
                    top:0;
                    left:0;
                    opacity: 0;
                    height: 100%;
                    width: 100%;
                } 
            } 
            .upload,.chose-file>span{
                cursor: pointer;
                border:none;
                display: inline-block;
                height: 30px;
                width: 100px;
                text-align: center;
                font:400 14px/30px "sofia-pro", sans-serif;
                color:#fff;
                background-color: v-bind('topicColor[1]');                
            }       
        }
    }
}
</style>