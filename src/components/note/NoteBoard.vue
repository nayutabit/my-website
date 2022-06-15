<template>
  <div class='note-board'>
      <div class='header'>
            <h1>笔记</h1>
      </div>   
      <NoteBody/>
      <NoteFooter/>
  </div>
</template>

<script>
import NoteBody from './NoteBody.vue'
import NoteFooter from './NoteFooter.vue'
export default {
name:'NoteBoard',
components:{
    NoteBody,
    NoteFooter
}
}
</script>

<style lang='less' scoped>
.note-board{
  position: absolute;
  height: 2100px; 
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
  }
}
@media (max-width:500px) {
  .note-board .header h1{
    display: none;
  }
}
</style>