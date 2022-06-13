<template>
    <div class='lefter' ref='picBox' @selectstart.prevent>
        <ul class="pic" :class="{type1:picList.length>=5,type0:picList.length>=2&&picList.length<=4}">
                <li class='item' v-for='k,index of picList' :key='k'  @click="grow(index)">
                    <span class='img' :style="`background-image:url(${k})`"></span>
                </li> 
        </ul>
    </div>  
</template>

<script>
import {inject} from 'vue'
export default {
name:'LeftPictures',
setup(){ 
    const picList=inject('picList')      
    const isGrow=inject('isGrow')
    //放大查看的图片们
    const picUrl=inject('picUrl')
    function grow(index){
        isGrow.value=index
        picUrl.splice(0,picUrl.length,...picList)       
    }      
  return {
    grow,
    picList,  
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
    .item{
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
    }                
    }
}
@media (max-width: 500px){
    .lefter{
        width: 100%;
        height:170px;
        padding:0 0 5px 0;
    }
}
</style>