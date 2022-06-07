<template>
  <div class='chapter'>
        <div class='nav'>
            <p class='chapter-title'>WEB项目</p>
            <div class='edit'>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2833" width="26" height="26">
                    <path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667z m32-394.666667h128a32 32 0 0 1 0 64H544v128a32 32 0 0 1-64 0V544H352a32 32 0 0 1 0-64h128V352a32 32 0 0 1 64 0v128z"
                    ></path>
                </svg>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2985" width="26" height="26">
                    <path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667zM352 480h320a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
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
                </li>
            </ul>  
        </div>    
        <div class="foot">
            <div class='more'>
                展开更多
                <svg t="1654592147160" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5999" width="20" height="20">
                <path
                    d="M533.333333 388.266667L358.4 213.333333 298.666667 277.333333l234.666666 234.666667L768 277.333333 708.266667 213.333333l-174.933334 174.933334z m0 260.266666l-174.933333-174.933333L298.666667 533.333333l234.666666 234.666667 234.666667-234.666667-59.733333-59.733333-174.933334 174.933333z"
                ></path>
                </svg>                
            </div>
        </div>  
  </div>
</template>

<script>
export default {
name:'WebChapter',
}
</script>

<style lang='less' scoped>
.chapter{
    width: 100%;
    height: 470px;
    background-color: rgba(255, 255, 255, 0.2);
    padding:0 15px;
    .nav{
        position: relative;
        width: 100%;
        height: 40px;
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
            position: absolute;
            top:5px;
            left:0;
            height: 30px;
            width: 80px;
            padding:2px;
            .icon{
                fill:#fff;
                cursor: pointer;
            }
        }
    }
    .list{
        height:400px;
        overflow: hidden;
        padding-top:10px;
        .items{
            width: 100%;
            display: flex;
            // align-items: center; n
            flex-wrap: wrap;
            li{
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
}
</style>