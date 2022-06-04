<template>
<!-- 管理员登录后页面中间网站设置部分 -->
    <div class='settings'>
        <p class='text'>网站设置</p>
        <ul class='choices'>
            <!-- 更换网站颜色 -->
            <li>
                <ul class='item topic'>
                   <li class='topic-color' v-for='(k,index) of topic' :key='index' :style="{backgroundColor:`${k[1]}`}" @click='colorChose=index'>
                       <span v-show='colorChose===index'>
                            <svg t="1653473575665" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2866" >
                            <path
                                d="M447.711811 862.823134 127.068024 528.812921l82.21242-67.503417 185.41285 148.896168c76.017324-92.443435 244.701165-276.0655 477.455229-422.048315l19.565615 46.298466C678.076456 435.323667 503.19445 718.258621 447.711811 862.823134L447.711811 862.823134 447.711811 862.823134zM447.711811 862.823134"
                            ></path>
                            </svg>                           
                       </span>
                   </li>
                </ul>
                <p>更换主题颜色</p>
            </li>
            <li>
                <div class='item'></div>
                <p>待定</p>
            </li>
            <li>
                <div class='item'></div>
                <p>待定</p>
            </li>
            <li>
                <div class='item'></div>
                <p>待定</p>
            </li>                        
        </ul>
    </div>  
</template>

<script>
import {reactive,ref,watch,inject} from 'vue'
export default {
name:"WebSettings",
setup(){
   const topic=reactive([['#f87b7b','#F76C6C',"#cf6363"],['#9bc9e1','#a8d0e6','#4b6499'],['#2b3973','#263366','#2f65cac5']])
   let colorChose=ref(0)
   let topicColor=inject('topicColor')
   watch(colorChose,(newVal)=>{
       topicColor[0]=topic[newVal][0]
       topicColor[1]=topic[newVal][1]
       topicColor[2]=topic[newVal][2]
   })
   return {
       topic,
       colorChose
   }
}
}
</script>

<style lang='less' scoped>
  .settings{
    width: 100%;
    height: 20%;
    .text{
        width: 100%;
        height:36px ;
        text-align: center;
        font:400 36px/1 "sofia-pro", sans-serif;
        color:#fff;
    }
    .choices{
        margin-top:40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex:1 1 1;
        width: 100%;
        li{
            list-style: none;
            width: 23%;
            height: 200px;
            .item{
                background-color:rgba(255, 255, 255, 0.219);
                width: 100%;
                height: 150px;
            }
            .topic{
                display: flex;
                justify-content: stretch;
                .topic-color{
                    height: 100%;
                    width: 100%;
                    display:flex;
                    flex-direction: column-reverse;
                    span{                     
                        fill:#fff;     
                    }
                }
            }
            p{
                width: 100%;
                font:400 16px "sofia-pro", sans-serif;                
                text-align: center;  
                color:#fff;    
                line-height: 50px;          
            }
        }
    }
  }
@media (max-width: 1200px){
    .settings{
        .text{
            font-size:28px;
        }      
    }
}
@media (max-width: 768px){
.settings{
    height: 500px;
   .choices{
    margin-top:20px;
       li{
           width:48%;
           height:180px;
            p{
                line-height: 30px;             
            }           
       }

   }
}
}
@media (max-width: 500px){
.settings{
    height: 650px;
    .text{
        font-size:20px;
    }
   .choices{
    margin-top:10px;
       li{
           width:100%;
           height:150px;
           .item{
               height:120px;
           }
            p{
                line-height: 30px;             
            }           
       }

   }
}
}
</style>