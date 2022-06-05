<template>
  <div class='preview' v-html='content'></div>
</template>

<script>
import hljs from 'highlight.js';
import"highlight.js/styles/github.css"

import {marked} from 'marked'
import {ref} from 'vue'
export default {
 name:'MdPreview',
 props:['preContent'],
 setup(props){
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        },
        langPrefix: 'hljs language-',
        pedantic: false,
        gfm: true,
        tables:true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });    
    const content=ref(marked.parse(props.preContent))     
    return {
        content
    }
 }
}
</script>

<style  lang='less'>
.hljs{
    background-color: rgb(243, 243, 243);
}
.preview{
    overflow: auto;
    height: 100%;
    padding:0 10px;  
    li{
        list-style: decimal inside;     
    }                
}
</style>