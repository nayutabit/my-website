<template>
    <!-- 二维码组件 -->
    <div class='or-code'>
        <div class='water'></div>
        <img src="../../../public/ORcode.png" alt="">
        <div class='mask'>
            <div class='point'>
                <li v-for='(k,index) of 36' :key='index' :class='`point${index}`' style='backgroundColor:#000;'></li>
            </div>
        </div>  
        <div class='mask real'>
            <div class='point'>
                <li v-for='(k,index) of 36' :key='index' :class='`point${index}`'></li>
            </div>
        </div>                          
    </div>  
</template>

<script>
export default {
name:'QRcode'
}
</script>

<style lang='less' scoped>
.or-code{
    position: relative;
    width: 200px;
    height: 200px;
    padding:20px;
    background-color:#fff;
    img{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 190px;
        height: 190px;
    }
    .water{
        width:160px;
        height: 160px;
        background-color: #263366;
        border-radius: 50%;
        animation:water 1s linear infinite;
    }
    .mask{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);   
        width: 120px;
        height: 120px; 
        &.real{
            animation:water 1s linear infinite; 
        }      
        .point{
            width: 100%;
            height: 100%; 
            animation:ring 8s linear infinite;
            li{
            position: absolute;
            top:58px;
            width: 4px;
            height: 4px;
            background-color: #fff;
            border-radius:50%;
            transform-origin:60px 2px ;
            }    
            .create-point(36)    
        }
    }  
                
}
.create-point(@n,@i:0)when(@i<@n){
    .point@{i}{
        transform: rotate(@i*10deg);
    }
    .create-point(@n,(@i+1))
}
@keyframes water{
    0%,100%{
clip-path: polygon(0% 100%,0% 63%,11% 63%,23% 61%,34% 59%,45% 56%,57% 51%,67% 48%,78% 46%,90% 45%,100% 45%,100% 100%);
    }
    25%{
        clip-path: polygon(0% 100%,0% 56%,12% 56%,23% 54%,35% 51%,45% 49%,58% 49%,69% 51%,80% 53%,90% 54%,100% 53%,100% 100%);
    }
    50%{
        clip-path: polygon(0% 100%,0% 47%,13% 44%,24% 44%,34% 45%,45% 49%,56% 53%,67% 56%,77% 56%,89% 55%,100% 53%,100% 100%);
    }
    75%{
        clip-path: polygon(0% 100%,0% 50%,12% 52%,24% 54%,35% 55%,44% 56%,53% 56%,63% 55%,76% 54%,88% 52%,100% 50%,100% 100%);
    }
}
@keyframes ring{
    0%{
        transform:  rotate(0deg);
    }
    50%{
        transform:  rotate(180deg);
    }
    100%{
        transform:  rotate(360deg);
    }
}
@media (max-width: 1200px){
    .contact-box{
        .or-code{
            width: 120px;
            height: 120px;
            padding:15px;    
            img{
                width: 110px;
                height: 110px;
            }    
            .water{
                width:90px;
                height: 90px;                
            } 
            .mask{
                width: 70px;
                height: 70px;   
                .point>li{
                    top:34px;
                    width: 2px;
                    height: 2px;
                    transform-origin:35px 1px ;                    
                }              
            }   
        }
    }
}
</style>