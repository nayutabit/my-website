<template>
    <div class='lefter' ref='picBox' @selectstart.prevent  @mouseup="moveEnd()">
        <ul class="pic" :class="{type1:picList.length>=5,type0:picList.length>=2&&picList.length<=4}">
            <li v-for='k,index of picList' :key='index' :class='{transparent:transparentIndex===index}' @mousedown="readyMove(index,$event)" @mouseup="grow(index)">
                <span class='img' :style="`background-image:url(${k})`"></span>
            </li>
        </ul>
        <transition name='move-cube'>
             <div class='mover' v-if='transparentIndex>=0' :style="`background-image:url(${picList[transparentIndex]})`"  @mouseup="moveEnd()"></div>
        </transition> 
    </div>  
</template>

<script>
import {inject,reactive,ref} from 'vue'
export default {
name:'LeftPictures',
setup(){
    const isEdit=inject('isEdit')  
    const picList=inject('picList')   
    const isGrow=inject('isGrow')
    //放大查看的图片们
    const picUrl=inject('picUrl')  
    //长按后可拖动图片的坐标
    const coord=reactive([0,0]) 
    //长按后可拖动图片的长宽
    const figure=reactive([0,0])     
    //关联整个图片区域，获取其长宽信息 
    let picBox=ref(null)
    // 被长按的图片索引
    const transparentIndex=ref(-1)     
    // let timer
    //为了防止拖动图片时鼠标移出了图片，并在其他图片上松开导致放大其他图片所设置的开关
    let selected=-1
    //监听鼠标移动的函数
    function mouseMove(e){
        // console.log(e,e.clientX,e.clientY);
        // console.log(mouseOriginCoord[0],mouseOriginCoord[1]);
        // console.log(e.clientX-mouseOriginCoord[0],e.clientY-mouseOriginCoord[1]);
        coord[0]=picOriginCoord[0]+e.clientX-mouseOriginCoord[0]+'px'
        coord[1]=picOriginCoord[1]+e.clientY-mouseOriginCoord[1]+'px'
    }
    // 鼠标点击位置的坐标
    const mouseOriginCoord=reactive([0,0])
    // 点击图片后的初识坐标
    const picOriginCoord=[0,0]
    //长按后保存所按住的图片的索引，并生成其左上角坐标和放大图片的长宽,并保存鼠标点击位置的原始坐标    
    function readyMove(index,event){
        selected=index
        // timer=setTimeout(()=>{
            transparentIndex.value=index
            picOriginCoord[0]=(index%3)*((picBox.value.clientWidth-5)/3)
            picOriginCoord[1]=(Math.floor(transparentIndex.value/3))*((picBox.value.clientHeight-5)/3)
            coord[0]=picOriginCoord[0]+'px'
            coord[1]=picOriginCoord[1]+'px'
            figure[0]=(picBox.value.clientWidth-20)/3+10+'px'
            figure[1]=(picBox.value.clientHeight-20)/3+10+'px'
            picBox.value.addEventListener('mousemove',mouseMove)
            mouseOriginCoord[0]=event.clientX
            mouseOriginCoord[1]=event.clientY
        // },300)
    } 
    function grow(index){
        // clearTimeout(timer) 
        if(index===selected){
            isGrow.value=index
            picUrl.splice(0,picUrl.length,...picList)
        }
        selected=-1
        //由于鼠标速度过快而滑动到别的图片上后，松开鼠标也得使放大图片消失
        transparentIndex.value=-1        
    }    
  function moveEnd(){
    picBox.value.removeEventListener('mousemove',mouseMove)    
    transparentIndex.value=-1
  }   
  return {
    grow,
    isEdit,
    transparentIndex,
    readyMove,
    moveEnd,
    picBox,
    coord,  
    picList,  
    figure, 
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
    &.type1{
        grid-template-columns: repeat(3,1fr);
        grid-gap:5px;
        grid-auto-rows:auto;
    }        
    &.type0{
        grid-template-columns: repeat(2,1fr);
        grid-gap:5px;
        grid-auto-rows:auto;
    }                 
    li{
        width: 100%;
        height: 100%;
        &.transparent{
        opacity: 0;
        }
        .img{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position:center center;
        }        
    }                
    }
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
</style>