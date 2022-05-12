<template>
  <div class="backLogo">
    <!-- 最开始转圈的几个小点 -->
    <div class='foreplay'>
       <span :class='`point point${p}`' v-for='p of pointSum' :key='p' ></span>
    </div>
    <!-- 小点聚合展开成一条线 -->
    <div class='bridge'>
       <span class='line'></span>
    </div>
    <!-- 背景字母N -->
    <svg id="LOGON" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.1 66.65">
        <g >
          <path
            class="cls-1"
            d="M69.8,83.27q-3.82,0-7.31,0-4.59,0-12.7.1Q47.25,78.54,46,76.39L37.84,62.47q-4-6.84-7.46-13.09-2.24-4-4.63-8.69l-13.36-24q5.14.05,9.36.05t11.69-.1L54.28,54.58l2.87,5.57Z"
            transform="translate(-4.93 -16.67)"
          />
          <path
            class="N-right"
            d="M57.16,63.39c.37-5.47.74-16.38,1.13-26.25s.58-16.69.58-20.47q6,.1,9.61.1,1.66,0,9.56-.1L76.86,31.23l-2.2,40.43-.29,11.67c-1.56,0-5.29,0-6.77-.06Z"
          />
          <path class="N-left" d="M25.75,38.27,24.7,63.83l-.5,19.49q-6-.1-9.22-.1-2.68,0-10,.1l1-10.25,1.9-34.77.54-14V16.67l7.91,0Z"  />
        </g>       
    </svg>
    <!-- N变形的水渍 -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" class='water'>
          <g>
            <!-- 左下水渍 -->
          <path
            class="left-water1"
            d="M21.67,83.17c5.51-1.73,9.53-2.25,15.27-.78,3.54.91,7.86,2.14,11.55,1.33,5.61-1.23,1.14-5.61-1.24-7.81-.87-.8-2.7-.32-2.56,1.06A1.2,1.2,0,0,1,44,78.74c-1.88-.34-2.7,2.53-.8,2.89a21.38,21.38,0,0,0,4.7.4A1.52,1.52,0,0,0,49,79.47,16.09,16.09,0,0,1,46.54,77a1.53,1.53,0,0,0-2.05-.54c-2.8,1.63-5.94,1.57-9.09,1.44a27.76,27.76,0,0,1-5.72-.73c-1.26-.32-2.78-1.25-4.08-1.2-3.08.11-3.69,2.94-3.68,5.62a1.48,1.48,0,0,0,.74,1.3c1.4.65,1.59.52,3.1.12,4.46-1.19,7.21-2.11,11.82-.62,1.84.59,2.63-2.3.8-2.89a18.37,18.37,0,0,0-8.91-.82c-.46.08-4.07,1.63-4.38,1.51q-.18-1.63,1.27-.89a14.69,14.69,0,0,0,2.52.79c5.48,1.39,12.23,1.84,17.12-1L44,78.48a18.18,18.18,0,0,0,2.9,3.12L47.91,79a12.3,12.3,0,0,1-3.9-.29l-.8,2.89c3.56.64,4.82-1.27,4.48-4.67L45.13,78c.31.28,2.45,2,2.48,2.38.06.75-.3.34-1.46.39-3.8.18-7.36-1.15-11-2-5.23-1.21-9.27-.11-14.28,1.46-1.84.58-1.05,3.47.8,2.89Z"
          />
          <!-- 左上水渍 -->
          <path
            class="left-water3"
            d="M22.68,49.2c1.07,3.15,4.26,3.68,7.26,3.2a12.54,12.54,0,0,0,2.73-.75q.62-.25,1.21-.56,1.89-1.15-.5.41c-2.14.76-4.82-.56-6.91-1s-6.17-.75-5.65,2.63c.55,3.55,5.7,2.72,8.07,2.34a21.24,21.24,0,0,1,5.45-.55c2.27.21.8-.3-.23-.79a11,11,0,0,0-5.37-.69A8.2,8.2,0,0,0,25,54.79c-.84.44-.44,2.89-1.83-.55-.35-.87-.1-2.51-.13-3.46-.07-2.65,1.47-.38,2.67.23a5.41,5.41,0,0,0,4.07.3c3.45-1.17,4.32-6.15,5.44-9.1.69-1.81-2.21-2.59-2.89-.8-1,2.67-2.42,9.43-6.21,5.92-1.1-1-1.91-2-3.61-1.55-3.62,1-2.66,7.14-2.21,9.75.59,3.44,3.89,4.85,6.38,2.22a3.1,3.1,0,0,1,3-1.34,7.8,7.8,0,0,1,4.43,1.29c1.18.66,2.57,1.11,3.74.1,3.06-2.63-1.85-5.89-4.24-6-1.16,0-9.49,1.09-9.5,1.31s6.92,1.49,7.75,1.51c2.87,0,7.56-2.28,5.35-5.85a2.83,2.83,0,0,0-3.35-1.13c-1.64.47-7.18,4-8.3.73-.62-1.82-3.52-1-2.89.8Z"
          />
          <!-- 左中水渍 -->
          <path
            class="left-water2"
            d="M22.21,63.74c1.86,3.57,5.48,4.16,9.23,4.1a13.1,13.1,0,0,0,6.06-1.12,8.12,8.12,0,0,0,1.57-1.13q.56-.64,1.09-1.31,1.51-2.34,3,2.9C42,68.41,38.57,65.84,37,65.49a28.28,28.28,0,0,0-8.19-.31c-4,.34-7.49,1.63-9.4,5.4a1.52,1.52,0,0,0,1.3,2.26c3.85.37,4.39-2.57,7.84-3.34,3.72-.83,8.28.33,11.64,1.62s8,2.34,7.28-3c-.4-3.16-5.73-6.13-8.77-4.66-3.5,1.7-.19,4,2.13,4.2,1.93.14,1.92-2.86,0-3q-.63,2.28,1.47,2.18l1.23.4c2.46,2.22-.09,1.75-1.2,1.55-2.49-.45-4.58-2-7.21-2.23-2.46-.25-6.22-.62-8.62.2s-2.84,3.36-5.79,3.08L22,72.1c2.15-4.26,7.15-4.16,11.26-4,3.53.15,5.56,2.06,8.64,3,3.63,1.11,4.54-1.52,4.21-4.64-.28-2.69-1.65-6.57-5.07-6.24-1.67.16-2.23,1.36-3.35,2.38-2.86,2.59-10.61,4-12.88-.38-.89-1.71-3.48-.2-2.59,1.51Z"
          />
        </g>
        <g >
          <!-- 右上 -->
          <path
            class="right-water1"
            d="M31.77,19.65c2.36-.25,6,1.86,8.55,2.19a32,32,0,0,0,8.5,0c2.34-.32,4.82-1.28,7.17-1.37.73,0,6.08.33,4,1.87,1.24-.91.46-2.39-.43-3.06-1.7-1.28-6.87.23-8.62.42a66.45,66.45,0,0,1-11.73-.08c-4.66-.31-6.85,1.82-4.82,6.65a1.52,1.52,0,0,0,2.89,0c1.18-3.37,9.66-2.55,12.54-2.67,3.84-.15,7.69-.83,9.75,3.17l2.05-2.05c-3.41-1.85-4.61-3.25-8.69-3.42-4.53-.19-9.58-1.59-14,.09-2,.75-4.42,2.31-4.44,4.67s2.22,4.11,4.33,4.22a1.54,1.54,0,0,0,1.45-1.1c.51-1.31,0-2.7-.17-4l-.69,1.69c3.78-2.79,10.38-2.65,14.69-1.65,3.09.71,6.25,2.61,9.4,2.75a1.46,1.46,0,0,0,1.3-.74c3.77-8.49-9.14-7.95-14.29-7.49s-17.32.68-14.91,8.48a1.48,1.48,0,0,0,1,1c2.19.31,3-.66,5-1.89a38.33,38.33,0,0,1,10.72-4.63,1.5,1.5,0,0,0-.8-2.89,44.3,44.3,0,0,0-7.2,2.6,36.39,36.39,0,0,0-3.56,1.91q-1,.62-2,1.34-1,1-.54,0a76.74,76.74,0,0,1,7.55-2.36,46.72,46.72,0,0,1,10.14-.73c1.41.09,4.75.16,5.89.94.92.62,1,.84-.07.9s-3.94-1.34-5.09-1.66a31.43,31.43,0,0,0-5.19-1.07c-4-.44-10.16.09-13.53,2.57A1.61,1.61,0,0,0,37.24,26a13.39,13.39,0,0,1,.17,2.42l1.45-1.1q-1.09-3.47,2.54-3.47L44,23.63c2.21,0,4.4.47,6.59.61,3.89.24,6.14,1.28,9.47,3.09a1.51,1.51,0,0,0,2.05-2.05c-3-5.85-8.4-4.85-14.09-4.58-4.67.22-11.79-.57-13.67,4.8h2.89c-1.95-4.64,2.34-2.74,4.62-2.58a49.37,49.37,0,0,0,7.23,0c1.34-.1,2.66-.28,4-.46a4.74,4.74,0,0,1,4.43-.08,10.88,10.88,0,0,0,.25,1.38c1.88,2.4,4.43,2.52,5.13-.9,1.26-6.21-3.2-6.07-7.75-5.24S46.41,19.46,41.81,19c-3.49-.34-6.58-2.72-10-2.35-1.9.2-1.92,3.2,0,3Z"
          />
          <!-- 右中 -->
          <path
            class="right-water2"
            d="M41.27,35.45c3.95.87,8.47,1.81,12.52,1.16a10.69,10.69,0,0,0,4.77-1.94c.64-.46,1.27-1.61,2-1.84,1.76-.57.14.21,1,1a1.52,1.52,0,0,0-2.51.66A4.12,4.12,0,0,0,58.71,36c0,1.23,1.26.42.72.69a7.62,7.62,0,0,1-1.72-.31,54,54,0,0,1-6.6-1.62l1.1,1.45c.22-5.25-8.34-1.49-10.67-.88l1.9,1.45c.11-1,.42-1.48-.11-2.59-.73-1.52-1.81-.86-.62.1A14.88,14.88,0,0,0,46.64,36a19.88,19.88,0,0,0,7.62,1.23c3.72,0,6.61-.7,9.24,2.5l2.12-2.12c-3.77-3.69-9.58-3.47-14.51-3.46-3,0-9.58-1.29-10.88,2.57-.83,2.45,1.71,6.1,4.56,5.31,1.56-.43,1.94-2,3.45-2.63s6.11-1.87,7.46-1.82c1.93.07,1.93-2.93,0-3-3.71-.14-7.67,1.94-11,3.11q-.84,1.56-.32.18.1-1.41,1.82-.66a26.29,26.29,0,0,1,4.86-.06c4,0,9.32-.43,12.39,2.58,1.41,1.38,3.33-.66,2.12-2.12-3.32-4-6.48-3.43-11.37-3.38-4.19,0-7-1.32-10.74-2.91-1.75-.74-2.45-1-4.17-.24a1.44,1.44,0,0,0-.74,1.3c.24,2.13,2.06,2.52,1.84,4.37-.12,1,1.05,1.67,1.9,1.45,1.12-.3,6.86-1.68,6.87-2a1.54,1.54,0,0,0,1.1,1.45,40.07,40.07,0,0,0,6.25,1.54c.57.11,1.24.18,1.79.34s.2.06-.18,0c.3.08.95.49,1.25.59a1.46,1.46,0,0,0,1.46-.39c1.39-1.7.43-2.47,1-4.43l-2.51.66c3.72,3.22,6.86-2.16,4.68-5.55a3,3,0,0,0-4.38-1c-2.78,1.65-4.25,4.21-8,4.36a38.51,38.51,0,0,1-9.66-1.21c-1.88-.42-2.68,2.48-.8,2.89Z"
          />
          <!-- 右下 -->
          <path
            class="right-water3"
            d="M47.72,48.73c1.49,2.45,3.88,2.76,6.58,2.65a13.68,13.68,0,0,0,4.5-.9c-.37.14,2.95-1,3-1-.52,1.33-2.81.55-3.73.42-4.78-.67-12-.43-11.84,6.18a1.52,1.52,0,0,0,1.9,1.45c2.17-.56,10.45-6.84,11.66-2.59l1-1.85c-1.28.26-3.19-1-4.53-1.13a8,8,0,0,0-4,.39c-1.46.63-3.23,2.45-2.56,4.21.81,2.1,3.49,1,5,.5,2.43-.85,6-.12,7.31-2.77.83-1.73-1.75-3.26-2.59-1.51-.37.76-2.51.46-3.34.66a21.54,21.54,0,0,0-2.17.74c-.71.24-2.71.31-.9.69s3.7.2,5.65.81a5.13,5.13,0,0,0,3,.32,1.52,1.52,0,0,0,1-1.85c-.79-2.78-3.27-3.46-5.94-3.39-3.84.11-5.9,3-9.41,3.88l1.9,1.45c-.23-8.58,15.58,1.76,16.48-5.66a3.6,3.6,0,0,0-3.14-3.85c-3.28-.57-9.79,4.68-12.23.67-1-1.65-3.6-.14-2.59,1.51Z"
          />
        </g>     
    </svg>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'BackLogo',
  setup(){
    //开局的小圆点数量
    let pointSum=ref(4)
    return {
      pointSum
    }
  }
}
</script>

<style scoped lang='less'>
@mainColor:#f87b7b;
.backLogo{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin:0 auto;
  width: 90vh;
  height: 70vh;
  overflow: hidden;
  top:15vh;
  .foreplay{
    position:absolute;
    width: 16vh;
    height: 16vh;
    padding:2vh;
    .point{
      position:absolute;
      display: inline-block;
      width: 2vh;
      height: 2vh;
      border-radius: 1vh;
      background-color: @mainColor;
      transform:rotate(45deg);
      transform-origin:8vh 8vh;
    }
    .point1{
      animation:pointAction 1.5s 0s forwards;
    }
    .point2{
      animation:pointAction 1.5s 0.1s forwards;
    }
    .point3{
      animation:pointAction 1.5s 0.2s forwards;
    }
    .point4{
      animation:pointAction 1.5s 0.3s forwards;
    }
  }
  .bridge{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    .line{
        width: 1vh;
        height: 1vh;
        border-radius: 0.5vh;
        visibility: hidden;
        background-color: @mainColor;
        animation:bridgeAction 1.5s 1.5s forwards
    }
  }
  #LOGON {
    position: absolute;
    fill: @mainColor;
  // transform: skew(-29deg);
    visibility: hidden;
    animation:action3 0.4s 3s forwards;
    .N-left{
      transform:translate(-10.93px,-16.67px) skew(32deg);
      animation: action1 0.4s 3.4s forwards;
    }  
    .N-right {
      transform-origin: bottom left;
      transform:translate(-19.93px,-16.67px) skew(31deg);
      animation: action2 0.4s 3.4s forwards;
    }  
  }  
  .water{
    fill:@mainColor;     
    .left-water1{
      transform-origin: right 115%;
     visibility: hidden;
     animation:waterAction1 0.4s 3.4s forwards;
    }
    .left-water2{
      transform-origin: right 100%;
    visibility: hidden;
    animation:waterAction2 0.4s 3.4s forwards;
    }
    .left-water3{
      transform-origin: right 70%;
     visibility: hidden;
      animation:waterAction3 0.4s 3.4s forwards;
    }    
    .right-water1{
      visibility: hidden;
      transform-origin:left 30%;
     animation:waterAction4 0.4s 3.4s forwards;
    }
    .right-water2{
     visibility: hidden;
      transform-origin:left 50%;
     animation:waterAction5 0.4s 3.4s forwards;
    }   
    .right-water3{
      visibility: hidden;
      transform-origin:left 70%;
     animation:waterAction6 0.4s 3.4s forwards;
    }       
  }
}

// waterAction是水渍的效果，每个水渍单独做的动画，折磨
@keyframes waterAction1{
  0%{
    visibility: visible;
     transform:translate(-5px,-16.61px) scale(0.5,2);
  }
  50%{
    visibility: visible;
    transform:translate(-5px,-16.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
    transform:translate(90px,-20.61px) scale(4,0.2);
    opacity: 0.2;
  }
}

@keyframes waterAction2{
  0%{
    visibility: visible;
     transform:translate(-25px,-16.61px) scale(0.1,2);
  }
  50%{
    visibility: visible;
    transform:translate(-5px,-16.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
    transform:translate(100px,-20.61px) scale(4,0.2);
    opacity: 0.2;
  }
}

@keyframes waterAction3{
  0%{
    visibility: visible;
     transform:translate(-30px,-16.61px) scale(0.1,1);
  }
  50%{
    visibility: visible;
    transform:translate(-5.93px,-16.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
    transform:translate(80px,-16.61px) scale(3,0.2);
    opacity: 0.2;
  }
}

@keyframes waterAction4{
  0%{
    visibility: visible;
     transform:translate(20px ,-16.61px) scale(0.1,1.5);
  }
  50%{
    visibility: visible;
    transform:translate(-8.93px ,-16.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
      transform:translate(-8.93px ,-16.61px) scale(1,1);
    opacity: 0.2;
  }
}

@keyframes waterAction5{
  0%{
    visibility: visible;
     transform:translate(25px ,-13.61px) scale(0.1,1);
  }
  50%{
    visibility: visible;
    transform:translate(-4.93px ,-13.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
    transform:translate(-115.93px ,-13.61px) scale(3,0.2);
    opacity: 0.2;
  }
}

@keyframes waterAction6{
  0%{
    visibility: visible;
     transform:translate(10px ,-16.61px) scale(0.5,2);
  }
  50%{
    visibility: visible;
    transform:translate(-20.93px ,-16.61px) scale(1,1);
    opacity:0.8;
  }
  100%{
    transform:translate(-124.93px ,-16.61px) scale(3,0.2);
    opacity: 0.2;
  }
}

// 点转圈动画
@keyframes pointAction{
  0%{
      transform:translate(0px,0px) rotate(45deg);
  }
  50%{
      transform:translate(0px,0px) rotate(405deg) scale(1);
  }
  100%{
    visibility: hidden;
    transform:translate(0,5vh) rotate(765deg) scale(0.5);
  }
}

// 点变线动画
@keyframes bridgeAction{
  0%{
      visibility: visible;
      transform: scale(1,1);
  }
  30%{
     visibility: visible;
     transform: scale(3,3);
  }
  50%{
     visibility: visible;
     transform: scale(0.5,0.5);
     width: 1vh;
     height: 1vh;
  }
  70%{
     visibility: visible;
     transform: scale(0.5,0.5);
     height:140vh;
     width:1vh;
  }
  95%{
     transform: scale(0.5,0.5);
     height:200vh;
     width:55vh;
  }
   100%{
     transform: scale(0.5,0.5);
     height:200vh;
     width:50vh;
  }
}

// 中线变斜动画
@keyframes action3{
  0%{ 
    visibility: visible;
      transform:skew(-29deg);
  }
  100%{
    visibility: visible;
      transform:skew(0deg);
  }
}
// 左竖动画
@keyframes action1{
  0%{
      transform:translate(-10.93px,-16.67px) skew(32deg);
  }
  90%{
      transform:translate(-4.93px,-16.67px) skew(-1deg);
  }
  100%{
      transform:translate(-4.93px,-16.67px) skew(0deg);
  }
}
// 右竖动画
@keyframes action2{
  0%{
      transform:translate(-19.93px,-16.67px) skew(31deg);
  }
  90%{
      transform:translate(-4.93px,-16.67px) skew(-1deg);
  }
  100%{
      transform:translate(-4.93px,-16.67px) skew(0deg);
  }
}
</style>

