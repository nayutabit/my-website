<template>
    <div class='settings'>
        <p class='text'>网站设置</p>
        <ul class='choices'>
            <li>
                <div class='item'></div>
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
export default {
name:"WebSettings"
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
        width: 100%;
        li{
            width: 23%;
            height: 200px;
            .item{
                background-color:rgba(255, 255, 255, 0.219);
                width: 100%;
                height: 150px;
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
</style>