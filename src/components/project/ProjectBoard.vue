<template>
  <div class='project-board'>
      <div class='header'>
            <h1>项目</h1>
      </div> 
    <div class='product'>
        <WebChapter v-show='selected===0||-1' />
        <WebChapter v-show='selected===1||-1' />
        <WebChapter v-show='selected===2||-1' />
        <WebChapter v-show='selected===3||-1' />        
    </div>  
  </div>
</template>

<script>
import {ref} from 'vue'
import WebChapter from './WebChapter.vue'
export default {
name:'ProjectBoard',
components:{
    WebChapter
},
setup(){
    const selected=ref(-1)
    return{
        selected
    }
}
}
</script>

<style lang='less' scoped>
.project-board{
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
  }
  .product{
      height:1900px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding:0 10px;
  }
}
</style>