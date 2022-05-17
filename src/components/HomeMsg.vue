<template>
<!-- 中心介绍的文字 -->
    <transition name='slide-in-bottom0' appear="">
        <div class='top-msg w0'>
        <svg class="rotate-center" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="20" height="20">
        <path
            d="M512 972.8a34.133333 34.133333 0 0 1-34.133333-34.133333v-52.5824c-43.946667-3.618133-85.2992-14.2848-123.528534-31.8976l-26.248533 44.612266a34.133333 34.133333 0 1 1-58.8288-34.594133l26.2144-44.561067a409.344 409.344 0 0 1-90.504533-90.606933l-45.568 25.941333a34.065067 34.065067 0 0 1-46.557867-12.7488 34.116267 34.116267 0 0 1 12.765867-46.5408l44.765866-25.514666c-17.902933-38.519467-28.757333-80.0256-32.426666-124.040534H85.333333a34.133333 34.133333 0 0 1 0-68.266666h52.616534c3.669333-43.946667 14.5408-85.282133 32.443733-123.511467l-45.038933-26.180267a34.133333 34.133333 0 1 1 34.304-59.016533l45.192533 26.282667a385.536 385.536 0 0 1 41.506133-49.0496 382.941867 382.941867 0 0 1 49.015467-41.608534L269.141333 159.675733a34.167467 34.167467 0 0 1 12.373334-46.677333 34.116267 34.116267 0 0 1 46.660266 12.356267l26.180267 45.038933c38.229333-17.902933 79.5648-28.7744 123.511467-32.443733V85.333333a34.133333 34.133333 0 0 1 68.266666 0v52.5824c44.253867 3.652267 85.777067 14.472533 124.091734 32.3584l25.463466-44.663466a34.133333 34.133333 0 1 1 59.306667 33.792l-25.821867 45.329066c8.823467 6.382933 17.408 13.277867 25.685334 20.6336 7.3728 6.1952 15.2576 13.4656 22.801066 21.009067a404.872533 404.872533 0 0 1 41.915734 49.117867l44.629333-26.248534a34.133333 34.133333 0 0 1 34.594133 58.8288l-44.629333 26.2656c17.6128 38.263467 28.296533 79.598933 31.914667 123.528534H938.666667a34.133333 34.133333 0 0 1 0 68.266666h-52.5824c-3.618133 43.997867-14.2848 85.521067-31.880534 124.074667l44.356267 25.565867a34.116267 34.116267 0 1 1-34.0992 59.118933l-44.9024-25.890133a428.014933 428.014933 0 0 1-41.898667 48.622933c-7.543467 7.509333-15.4112 14.7456-23.432533 21.538133-8.004267 7.1168-16.4352 13.943467-25.1904 20.394667l25.873067 44.885333a34.116267 34.116267 0 1 1-59.118934 34.0992l-25.514666-44.253866c-38.3488 17.578667-79.872 28.228267-124.142934 31.812266V938.666667a34.133333 34.133333 0 0 1-34.133333 34.133333z m-153.3952-193.262933C403.694933 805.853867 455.304533 819.2 512 819.2c57.224533 0 109.073067-13.312 154.112-39.594667a293.632 293.632 0 0 0 43.383467-32c7.2192-6.126933 13.704533-12.100267 19.899733-18.261333 20.036267-20.053333 36.932267-41.3184 50.176-63.1808C805.870933 620.4928 819.2 568.6272 819.2 512c0-56.593067-13.329067-108.168533-39.611733-153.2928a334.336 334.336 0 0 0-69.410134-81.732267 254.532267 254.532267 0 0 0-43.485866-31.3856l-0.068267-0.034133-0.6656-0.375467C620.9536 218.385067 569.156267 204.8 512 204.8c-56.610133 0-108.1344 13.585067-153.173333 40.3968l-0.290134 0.170667c-0.017067 0-0.034133 0.034133-0.0512 0.017066l-0.392533 0.221867c-22.2208 12.629333-43.5712 29.1328-63.453867 49.032533a310.442667 310.442667 0 0 0-49.186133 63.726934l-0.119467 0.221866v0.017067l-0.119466 0.221867C218.385067 403.848533 204.8 455.389867 204.8 512c0 56.439467 13.499733 108.0832 40.123733 153.5488l0.3584 0.580267a320.546133 320.546133 0 0 0 49.373867 63.232 325.666133 325.666133 0 0 0 63.9488 50.176z"
            p-id="11289"
        ></path>
        </svg>
            vision</div>     
    </transition >
    <transition name='slide-in-bottom1' appear="">
      <p class='text w1'>Onward</p>    
    </transition>
    <transition name='slide-in-bottom2' appear="">
      <p  class='text w12'>Indefatigable</p>    
    </transition>
    <transition name='slide-in-bottom3' appear="">
      <p  class='text w2'>and shared</p>    
    </transition>
    <transition name='slide-in-bottom4' appear="">
      <p class='text bottom-msg w3' >welcome to nayutabit</p>    
    </transition>
</template>

<script>
export default {
   name:'HomeMsg',
}
</script>

<style scoped lang='less'>

.text{
  position: absolute;
  left:0;
  right:0;
  top:50%;
  text-align: center;
  font: 300 80px/1.2 "sofia-pro", sans-serif;
  color:#fff;
  letter-spacing: 0.02em;
  &.bottom-msg{
      font: 300 22px/1.4 "sofia-pro", sans-serif;
  }
}
.top-msg{
  position: absolute;
  top:50%;
  left:50%;
  width: 200px;
  color: #263366;
  font: 700 20px/1 "sofia-pro", sans-serif;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  svg{
      vertical-align: middle;
      fill:#263366;
  }
}   
.w0{
  transform: translate(-242px,-154px);
} 
.w1{
  transform: translate(-97px,-125px);
}
.w12{
  transform: translate(0px,-39px);
}
.w2{
  transform: translate(-35px,43px);
}
.w3{
  transform: translate(-125px,148px);
  left:20vw;
  right:20vw;
}
.rotate-center {
	animation: rotate-center infinite 3s linear;
}
@keyframes rotate-center {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}


// 每个标题的进场和离场动画，从上到下排序
.create-text(@n,@i:0) when(@i<=@n){
  .slide-in-bottom@{i}-enter-active{
    animation: slide-in-bottom 0.6s 3.4+@i*0.1s both;
  }
  .slide-in-bottom@{i}-leave-active{
    animation: slide-out-top 0.4s @i*0.05s both;
  }
  
  .create-text(@n,(@i+1))
}
.create-text(4);


@keyframes slide-in-bottom {
  0% {
    top:70%;
    opacity:0;
  }
  70%{
    top:48% ;
    opacity: 1;
  }
  100% {
    top:50% ;
    opacity: 1;
  }
}
@keyframes slide-out-top {
  0% {
    top:50% ;
    opacity: 1;
  }
  100% {
     top:30% ;
    opacity: 0;
  }
}


// 响应式布局，对于宽度768px以下文字居中，字号减小
@media (max-width:768px){
.text{
  font: 300 50px/1 "sofia-pro", sans-serif;
}  
.w0{
  transform: translate(-50px,-148px);
} 
.w1{
  transform: translateY(-112px);
}
.w12{
  transform: translateY(-52px);
}
.w2{
  transform: translateY(10px);
}
.w3{
  transform: translateY(86px);
  left:20vw;
  right:20vw;
}  
}

// 响应式布局，对于宽度375px以下文字字号进一步减小
@media (max-width:375px){
.text{
  font: 300 40px/1 "sofia-pro", sans-serif;
}  
.w0{
  transform: translate(-50px,-117px);
} 
.w1{
  transform: translateY(-78px);
}
.w12{
  transform: translateY(-30px);
}
.w2{
  transform: translateY(23px);
}
.w3{
  transform: translateY(86px);
  left:20vw;
  right:20vw;
} 
}

</style>