<template>
  <!-- 管理员登录后页面下方网站流量监控和操作日志部分 -->
  <div class='web-watcher'>
      <div class='flow-watcher'><span> 网站流量监控（待施工）</span></div>
      <div class='operation-log'><span> 网站操作日志（待施工）</span></div>
  </div>
</template>

<script>
export default {
name:'WebWatcher'
}
</script>

<style lang='less' scoped>
.web-watcher{
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    div{
        width: 48%;
        height: 100%;
        background-color:rgba(255, 255, 255, 0.219);
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        span{
            color:#fff;
            font:400 24px/2 "sofia-pro", sans-serif;
        }
    }
}  

@media (max-width:768px) {
    .web-watcher{
        flex-direction: column;
        align-items: center;
        div{
            width:100%;
        }
    }
}
@media (max-width:500px) {
    .web-watcher{
      height:300px;
      div{
          span{
              font-size:16px;
          }
      }
    }
}
</style>