<template>
  <div class='msg-board'>
      <div class='header'>
            <div>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4427" >
                <path
                    d="M879.8 448.2V824c0 31.2-25.5 56.7-56.7 56.7H201.5c-31.2 0-56.7-25.5-56.7-56.7V202.4c0-31.2 25.5-56.7 56.7-56.7h374.6v-47H188.4c-49.8 0-90.6 40.8-90.6 90.6v648.1c0 49.8 40.8 90.6 90.6 90.6h648.1c49.8 0 90.6-40.8 90.6-90.6V448.2h-47.3z"
                ></path>
                <path d="M775.2 169.2l114.5 114.6-271.5 271.5-193.5 78.1 78.9-192.6z" p-id="4429" class='pen'></path>
                </svg>
                <h1>管理员留言板</h1>
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
@media (max-width:992px){
}
</style>