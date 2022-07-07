<template>
    <div class='lefter' ref='picBox' @selectstart.prevent @mouseleave="moveEnd()">
        <div v-show='picList.length===0' class='none'>添加点图片吧</div>        
        <ul class="pic">
            <transition-group name="flip-list">
                <li class='item' v-for='k,index of picList' :key='k.id' :class='{transparent:transparentIndex===index}' >
                    <span class='img' :style="`background-image:url(${k.url})`" @mousedown="readyMove(index,$event)" @touchstart='mobileMove(index,$event)'></span>
                    <svg class="delete" @click.stop='readyDel(index)' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139" >
                      <path d="M96 128h832v64H96zM128 256h768l-89.024 704H217.024z"></path>
                      <path d="M384 64h256v96h-256z"></path>
                    </svg>                     
                </li>
            </transition-group>    
            <li v-show='picList.length<9' class='add' >
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7132" >
                <path
                    d="M487.11 22.62C234.37 35.27 32.08 239.41 22.37 492.91c-11.08 289.13 219.6 519.8 508.73 508.73 253.5-9.71 457.64-212.01 470.29-464.75C1016.18 241.05 782.95 7.82 487.11 22.62z m316.93 489.47c0 16.57-13.43 30-30 30h-229c-0.94 0-1.69 0.76-1.69 1.69v228.94c0 16.57-13.43 30-30 30h-0.06c-16.57 0-30-13.43-30-30V543.78c0-0.94-0.76-1.69-1.69-1.69h-229c-16.57 0-30-13.43-30-30v-0.06c0-16.57 13.43-30 30-30h229c0.94 0 1.69-0.76 1.69-1.69V251.28c0-16.57 13.43-30 30-30h0.06c16.57 0 30 13.43 30 30v229.06c0 0.94 0.76 1.69 1.69 1.69h229c16.57 0 30 13.43 30 30v0.06z"
                ></path>
                </svg>   
                <input type="file" accept="image/png, image/jpeg" @change='getPic'>                             
            </li>
        </ul>
        <!-- 长按图片后生成一个可拖动的图片 -->
        <transition name='move-cube'>
             <div class='mover' v-if='transparentIndex>=0' :style="`background-image:url(${nowPic})`"  @mouseup="moveEnd()" @mouseleave="moveEnd()" @touchend='moveEnd()'></div>
        </transition> 
    </div>  
</template>

<script>
import axios from 'axios'
import {compressAccurately} from 'image-conversion'
import {nanoid} from 'nanoid'
import {inject,reactive,ref} from 'vue'
export default {
name:'LeftPicturesEdit',
setup(){ 
    const mainList=inject('picList')  
    const picList=inject('editList') 
    const serverAddress=inject('serverAddress') 
    picList.splice(0)
    for(const k of mainList){
        picList.push({url:k,id:nanoid()})
    }
    const isGrow=inject('isGrow')
    //放大查看的图片们
    const picUrl=inject('picUrl')  
    //长按后可拖动图片的坐标
    const coord=reactive([0,0]) 
    //长按后可拖动图片的长宽
    const figure=reactive([0,0])     
    //关联整个图片区域，获取其长宽信息 
    let picBox=ref(null)
    // 需要变成透明的格子的索引号
    const transparentIndex=ref(-1)   
    // 当前拖动图片的路径
    const nowPic=ref('')
    // 目前是空白的区域的索引号
    let nowWhite=ref(-1)
    //监听鼠标移动的函数
    function mouseMove(e){
        const nowX=picOriginCoord[0]+e.clientX-mouseOriginCoord[0]
        const nowY=picOriginCoord[1]+e.clientY-mouseOriginCoord[1]
        if(nowX<0)coord[0]=0+'px'
        else if(nowX>(picBox.value.clientWidth-5)/3*2)coord[0]=(picBox.value.clientWidth-5)/3*2+'px'
        else coord[0]=picOriginCoord[0]+e.clientX-mouseOriginCoord[0]+'px'
        if(nowY<0)coord[1]=0+'px'
        else if(nowY>(picBox.value.clientHeight-5)/3*2)coord[1]=(picBox.value.clientHeight-5)/3*2+'px'
        else coord[1]=picOriginCoord[1]+e.clientY-mouseOriginCoord[1]+'px'
        nowWhite.value=getArea(nowX,nowY)
        // 如果当前位置没有图片，则指向最后图片的位置
        nowWhite.value=Math.min(nowWhite.value,picList.length-1)
        // 当移动到一个新的区域时，图片的顺序发生改变
        // 核心
        if(nowWhite.value!==transparentIndex.value){
            picList.splice(transparentIndex.value,1)               
            picList.splice(nowWhite.value,0,{url:nowPic.value,id:nanoid()})              
            transparentIndex.value=nowWhite.value
        }
    }
    // 根据图片目前的坐标计算其所属的区域
    function getArea(x,y){
        // 计算X轴方向每个格子的宽度
        const W=(picBox.value.clientWidth-5)/3
        // 计算X轴方向每个格子的宽度   
        const H=(picBox.value.clientHeight-5)/ 3
        if(x<0.5*W&&y<0.5*H)return 0
        else if(x>=0.5*W&&x<1.5*W&&y<0.5*H)return 1
        else if(x>=1.5*W&&y<0.5*H)return 2
        else if(x<0.5*W&&y>=0.5*H&&y<1.5*H)return 3
        else if(x>=0.5*W&&x<1.5*W&&y>=0.5*H&&y<1.5*H)return 4
        else if(x>=1.5*W&&y>=0.5*H&&y<1.5*H)return 5     
        else if(x<0.5*W&&y>=1.5*H)return 6
        else if(x>=0.5*W&&x<1.5*W&&y>=1.5*H)return 7
        else if(x>=1.5*W&&y>=1.5*H)return 8          
    }
    // 鼠标点击位置的坐标
    const mouseOriginCoord=reactive([0,0])
    // 点击图片那一瞬间图片的位置
    const picOriginCoord=[0,0]
    // 判断是否为点按,点按需要放大图片
    let isClick=true    
    //长按后保存所按住的图片的索引，并生成其左上角坐标和放大图片的长宽,并保存鼠标点击位置的原始坐标  
    function readyMove(index,event){
        picBox.value.timer=setTimeout(()=>{isClick=false},200)
        nowPic.value=picList[index].url
        transparentIndex.value=index
        picOriginCoord[0]=(index%3)*((picBox.value.clientWidth-5)/3)
        picOriginCoord[1]=(Math.floor(transparentIndex.value/3))*((picBox.value.clientHeight-5)/3)
        coord[0]=picOriginCoord[0]+'px'
        coord[1]=picOriginCoord[1]+'px'
        figure[0]=(picBox.value.clientWidth-20)/3+10+'px'
        figure[1]=(picBox.value.clientHeight-20)/3+10+'px'
        picBox.value.addEventListener('mousemove',mouseMove)
        picBox.value.addEventListener('touchmove',touchMove)
        picBox.value.addEventListener('touchend',moveEnd)
        mouseOriginCoord[0]=event.clientX
        mouseOriginCoord[1]=event.clientY
    } 
    // 查看大图
    function grow(index){
        isGrow.value=index
        picUrl.splice(0,picUrl.length)   
        for(const k of picList){
            picUrl.push(k.url)
        }    
    }    
    // 结束图片的移动，如果是点按则放大图片
    function moveEnd(){
        if(isClick&&transparentIndex.value>=0){
            clearTimeout(picBox.value.timer)
            grow(transparentIndex.value)
        }
        isClick=true      
        picBox.value.removeEventListener('mousemove',mouseMove)    
        transparentIndex.value=-1
    }   
    function readyDel(index){
        if(confirm('是否删除该图片?')){
            picList.splice(index,1)
        }
    }

    // 获取图片
    function getPic(e){
        const file=e.target.files[0]
        const reader=new FileReader()        
        compressAccurately(file,100).then(res=>{
            // 使用formData直接上传file格式的图片
            // const formData = new FormData();
            // formData.append("pic", file);
            // axios
            //     .post(serverAddress+"/my/picture", formData,{
            //   headers:{ 
            //     authorization:localStorage.getItem('token')
            //   }
            // })
            //     .then((res) => {
            //     if (res.data.status === 0) {
            //         console.log("成功添加图片");
            //     } else {
            //         console.log(res);
            //     }
            //     })
            //     .catch((err) => {
            //     alert("发生错误");
            //     console.log(err);
            //     });         
            reader.readAsDataURL(res)
            reader.onload=(event)=>{
                picList.push({url:event.target.result,id:nanoid()})
            }             
        })
    }
    // 移动端事件
    function mobileMove(index,e){
        readyMove(index,e.targetTouches[0])
    }
    function touchMove(e){
        e.preventDefault()
       mouseMove(e.targetTouches[0])
    }
    return {
        grow,
        transparentIndex,
        readyMove,
        moveEnd,
        picBox,
        coord,  
        picList,  
        figure, 
        nowPic,
        readyDel,
        mobileMove,
        getPic
    }   
}
}
</script>

<style lang='less' scoped>
.lefter{
    position: relative;
    width: 40%;
    height: 100%;
    padding:5px;    
    .none{
        position: absolute;
        left:0;
        top:0;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 310px;
        color:#fff;
    }  
    .mover{
        position: absolute;
        height:v-bind('figure[1]');
        width:v-bind('figure[0]');
        background-color: red;
        left:v-bind('coord[0]');
        top:v-bind('coord[1]');
        background-size: cover;
        background-position: center;    
    }
    .pic{
        width: 100%;
        height:100%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        grid-gap:5px;                   
        .item{
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.5s ;       
            &.transparent{
            visibility: hidden;
            //   transition:none;          
            }
            .img{
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position:center center;
            }        
            .delete{
                display: none;
            }
            &:hover .delete{
                display: block;
                position: absolute;
                right:0;
                top:0;
                width: 25px;
                height: 25px;
                fill:rgba(148, 148, 148, 0.377);
                cursor: pointer;
            }
        }  
        .add{
            position: relative;
            width: 100%;
            height: 100%;
            input{
                position: absolute;
                top:0;
                left:0;                                
                width: 100%;
                height: 100%;
                opacity: 0;
            }
            .icon{
                position: absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);                 
                width: 50%;
                height: 50%;
                fill:rgba(255, 255, 255, 0.438);
            }
        }              
    }
}
.flip-list-leave-active {
  display: none;
}
.move-cube-enter-active{
    animation:bigger 0.5s
}
@keyframes bigger{
    0%{
      transform:scale(0.95,0.95);
    }
    100%{
      transform:none;
    }

}
@media (max-width: 500px){
    .lefter{
        width: 100%;
        height:170px;
        padding:0 0 5px 0;
        .none{
            line-height: 170px;
        }
        
    }
}
@media (max-width:1200px){
    .lefter .pic .item .delete{
        display: block;
        position: absolute;
        right:0;
        top:0;
        width: 25px;
        height: 25px;
        fill:rgba(148, 148, 148, 0.377);
        cursor: pointer;
    }
}
</style>