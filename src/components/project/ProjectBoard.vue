<template>
  <div class='project-board'>
      <div class='header'>
            <h1>项目</h1>
      </div> 
    <div class='product'>
        <OneChapter v-show='selected===0||selected===-1' @select='chosenOne' title='WEB' tag=0 />
        <OneChapter v-show='selected===1||selected===-1' @select='chosenOne' title='移动端' tag=1 />
        <OneChapter v-show='selected===2||selected===-1' @select='chosenOne' title='小程序' tag=2 />
        <OneChapter v-show='selected===3||selected===-1' @select='chosenOne' title='其他' tag=3 />        
    </div>  
  </div>
</template>

<script>
import {ref} from 'vue'
import OneChapter from './OneChapter.vue'
export default {
name:'ProjectBoard',
components:{
    OneChapter
},
setup(){
    const selected=ref(-1)
    function chosenOne(index){
        selected.value=index*1
    }
    return{
        selected,
        chosenOne
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
@media (max-width:500px) {
  .project-board .header h1{
    display: none;
  }
}
</style>