<template>
  <div class='footer'>
    <p>记笔记啦~</p>
    <div class="content">
      <input class='title' type="text" placeholder="此处输入标题">
      <div class='text'>
        <textarea ></textarea> 
      </div>
      <div  class='select'>
        <span>分类标签选择：</span>
          <label>
              <span>算法</span>
              <input type="radio" name='classify' checked>
          </label>
          <label>
              <span>工具学习</span>
              <input type="radio" name='classify'>
          </label>
          <label>
              <span>项目经验</span>
              <input type="radio" name='classify'>
          </label>         
          <label>
              <span>其他</span>
              <input type="radio" name='classify'>
          </label>                     
      </div>
    </div>    
    <button class='btn'>添加笔记</button>
  </div>
</template>

<script>
export default {
name:'NoteFooter'
}
</script>

<style lang='less' scoped>
.footer{
    width: 100%;
    height: 900px;
    padding:0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .content{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;  
      .title{
        width: 100%;
        height: 40px;
        border:none;
        outline:none;     
        border-bottom:1px solid rgb(194, 194, 194);    
        font-size:24px;
        padding:0 10px;
        &::placeholder{
          color:rgb(180, 180, 180);
        }           
      }  
      .text{
        width: 100%;
        height: 750px;
        overflow: auto;
        background-color: #fff;
        textarea{
          padding:0 10px;
          resize:none;
          width: 100%;
          height: 900px;
          border:none;
          outline:none;    
          font-size:16px;     
          font-family: '微软雅黑';    
        }
      }
      .select{
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        padding:0 10px;
        background: #fff;
        border-top:1px solid rgb(194, 194, 194);           
        input{
          margin-right:10px;
        }
      }
    }
    p{
      align-self: flex-start;      
      color:#fff;
    }
    .btn{
      width: 150px;
      height: 30px;
      background-color: rgba(0,0,0,0.4);
      font:400 16px/1 "sofia-pro", sans-serif;
      color:#fff;
      border:none;
      cursor: pointer;    
      &.cant{
       background-color: rgb(97, 97, 97);  
       cursor: default;
      }  
    }    
}
</style>