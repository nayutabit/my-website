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
        sanitize: true,
        smartLists: true,
        smartypants: true,
        xhtml: false
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
    background-color: green;
}
.preview{
    color:#000;
    padding:0 10px;  
    li{
        list-style: decimal inside;     
    }                
}
</style>