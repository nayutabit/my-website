<template>
  <div class='msg-board'>
      <div class='header'>
            <div>
                <h1>留言</h1>
            </div>
      </div>
      <MessageBody/>
      <MessageFooter/>
  </div>
</template>

<script>
import MessageBody from './MessageBody.vue'
import MessageFooter from './MessageFooter.vue'
export default {
name:'messageBoard',
components:{
    MessageBody,
    MessageFooter
}
}
</script>

<style lang='less' scoped>
.msg-board{
  position: absolute;
  height: 2000px; 
  top:0;
  left: 0;
  right:0;
  .header{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      h1{
          display: inline-block;
          height: 100%;
          line-height: 100px;
          color:#fff;
      }
      .icon{
          position: relative;
          top:-5px;
          width: 50px;
          fill:#fff;
          vertical-align:middle;
          .pen{
              animation: write 2s linear infinite;
          }
      }
  }
}

@keyframes write {
    0%,100%{
        transform: translateY(50px);
    }
    50%{
        transform: translateY(-50px);
    }
}

@media (max-width: 500px){
    .msg-board .header div h1{
        display: none;
    }
}
</style>