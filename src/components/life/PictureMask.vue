<template>
    <div class='pic-mask'  @click='isGrow=-1'>
        <ul class='pics'>
            <li v-for='k,index of picUrl' :key='index' :style="`background-image:url(${k})`" class='pic'></li>
        </ul>  
        <svg class="left" @click.stop="leftGo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" >
            <path
                d="M628.48 756.053333a35.84 35.84 0 0 1-50.773333 0L341.333333 536.746667a35.84 35.84 0 0 1 0-52.48l235.52-220.586667a35.84 35.84 0 1 1 49.066667 52.48L419.413333 512l207.786667 194.56a35.84 35.84 0 0 1 1.28 49.493333zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
            ></path>
        </svg>
        <svg class="right" @click.stop="rightGo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M682.666667 536.746667l-235.52 220.586666a35.84 35.84 0 0 1-49.066667-52.48L603.733333 512 395.946667 315.733333a35.84 35.84 0 1 1 49.066666-52.48L682.666667 484.266667a35.84 35.84 0 0 1 0 52.48zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
            ></path>
        </svg>
        <div class="points">
            <ul>
                <li v-for='p,index of picUrl.length' :key='index' class='point' :class="{selected:isGrow===index}" @click.stop='jump(index)'></li>
            </ul>
        </div>
    </div>  
</template>

<script>
import {inject,ref} from 'vue'
export default {
    name:'PictureMask',
    setup(){
        const scroll=ref('')    
        const isGrow=inject('isGrow')
        const picUrl=inject('picUrl') 
        const moveLeft=ref(isGrow.value*-100+'%')
        let moveOver=true
        function move(start,end){
            let rest=(start-end)*100
            let timer=setInterval(()=>{
                let step=Math.abs(rest)>1?(rest<0?Math.floor(rest/2):Math.ceil(rest/2))/10:rest
                rest-=step
                moveLeft.value=end*-100-rest+'%'
                console.log(step);
                if(rest===0){
                    moveOver=true
                    clearInterval(timer)
                }
            },10)
        }
        // 弹出窗口随网页滚动
        window.addEventListener('scroll',()=>{
          scroll.value=document.documentElement.scrollTop+'px'
        })    
        function leftGo(){
            if(moveOver&&isGrow.value>0){
                moveOver=false
                move(isGrow.value,isGrow.value-1)
                isGrow.value-=1
            }            
        }
        function rightGo(){
            if(moveOver&&isGrow.value<picUrl.length){
                moveOver=false
                move(isGrow.value,isGrow.value+1)
                isGrow.value+=1
            }
        }
        function jump(end){
            if(moveOver){
                moveOver=false
                move(isGrow.value,end)
                isGrow.value=end
            }            
        }
        return{
            isGrow,
            scroll,
            picUrl,
            leftGo,
            rightGo,
            moveLeft,
            jump
        }
    }
}
</script>

<style lang='less' scoped>
.pic-mask{
    position: absolute;
    top:0;
    left:0;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
    transform: translateY(v-bind(scroll));
    .left,.right{
        position: absolute;
        top:50%;
        width: 80px;
        height: 80px;
        cursor: pointer;
        fill:rgba(0, 0, 0, 0.185);
        transform: translateY(-50%);
        &:hover{
           fill:rgba(0, 0, 0, 0.438);            
        }
    }
    .left{
        left:10px;
    }
    .right{
        right:10px;
    }
    .pics{
        position: relative;
        left:v-bind(moveLeft);
        height: 100%;
        display: flex;
        .pic{
            width: 60vw;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.452);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            float:left;
        }
    }
    .points{
        position: absolute;
        bottom:10px;
        height: 30px;
        width: 100%;
        ul{
            width: 200px;
            display: flex;
            margin:0 auto;
            align-items: center;
            justify-content: space-between;
            .point{
                cursor: pointer;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.267);
                &.selected{
                    width: 20px;
                    height: 20px;
                    background: rgba(255, 255, 255, 0.733);                   
                }
            }
        }
    }
}

@media (max-width:1920px){
    .pic-mask{
        .pics>.pic{
            width: 76vw;
        }
    }
}
@media (max-width:992px){
    .pic-mask{
        .pics>.pic{
            width: 100vw;
        }
    }
}
</style>