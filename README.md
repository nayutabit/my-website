### 20220511
完成了主页的入场动画
### 20220512
完成了网站页面逻辑的初步构思以及导航栏的制作,优化了下开场动画
### 20220513
导航栏和首页文字布局完成，页面第一层路由跳转逻辑完成，首页基本完工
### 20220515
今天写路由跳转的时候遇到了坑，简单描述一下:
就是如果transition标签如果被div（或者是其他）标签包裹，那么这个动画只会生效一次，查阅了官方文档，找到了transition生效的条件：
- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点
我的需求是通过路由切换来跳转页面，同时触发前一个页面中所有元素的transition离场动画，那么就只能利用第四点，也就是被transition包裹的节点必须是组件的根节点,最终的解决方案是用relative+translate居中定位之后再微调，有点心累
### 20220516
1. 一大早就碰到一个问题，由于动画都写在每个组件内部的，路由跳转时不能用transition包裹router-view来做整个组件整体的动效，因为组件必须被keep-alive包裹，组件内部的离场动画才能生效。。。
2. 然后又遇到一个蛋疼的问题，路由守卫的触发会使得router-link标签中的active-class属性不能正常显示
3. 然后关于路由跳转页面发生抖动问题，当跳转前有离开动画时，由于正在离开的页面中有标准流中的元素，那么该元素就会因为没完全离开而占住页面，两个页面的元素碰撞，造成了抖动。
- 第一种是比较推荐的，就是用transition标签包裹routerview，设置mode来让后来的页面等前面的页面结束了再来，但是我这里放弃了这个方案，因为我要求这个页面中子元素需要有很多不一样的离场动画，因此不能用trnasition统一包裹
- 第二种比较麻烦，就是要将前一个页面中的所有元素脱标，使其离开过程中不占用后来页面的位置,我这里就只能用这种了
4. 对于动画理解更深刻了，Vue动画相对于CSS动画最大的优势是可以添加离场动画，主要是针对路由跳转的离场，不过官方的预设是整个页面的动效是一致的，页面内的元素相对页面是静止的，如果页面内的元素离场时都有自己的想法，那做起来还是很麻烦的，而对于进场动画，vue的enter-active时行时不行的感觉不是CSS动画稳定
### 20220517
1. 完成刷新后页面重定向到首页的功能
```javascript
   //App.vue中
  created() {
    console.log(this.$router);
    if(this.$router.currentRoute.path!=='/home'){
      this.$router.replace('/home')
    }
  },
```
2. 今日踩坑一:如果页面中的元素由于trnaslate或者别的什么原因，它的边界突破了所设置的范围（即使那部分没有内容，仅仅是容器本身越界）那么在移动端浏览器会把超出的那部分空间也渲染出来，页面会被撑开，导致希望被展示的那个范围不能够正常的填充满浏览器的窗口
### 20220524
1. 生病了一周
2. 基本完成了登录页面的后端逻辑和前端静态页面
3. 明天需要做的：将左上右上两个图标相对固定在网页上、完成管理员登录后的功能逻辑，以及前面项目、笔记的逻辑和布局的构思

### 20220525
1. 黑科技啊，css中使用v-bind()能直接读取data中的数据，绝了；琢磨了一下，原理大概是给当前组件最外层骨架添加一个内联样式，当前组件内的样式属性通过var（）来调用这个样式，遇到个坑，在当前组件内声明的变量，组件外的结构中的样式是无法使用的
2. 今日完成：管理页面的响应式布局，整个网站的主题颜色一键切换，管理员密码修改功能
3. 今天还差更改头像功能没搞完，明天再弄吧

### 20220526
1. 今日遇坑，图片上传到服务器时有默认的大小限制，nodejs默认为100kb，同时mysql数据库也有大小小智，普通的text大小是65535b，因此都需要进行调整，数据库的调整比较简单，就是把text换成mediumtext就行，nodejs的比较坑
2. nodejs修改数据上传大小限制
   ```javascript
    //导入修改对上传的数据大小的限制的包
    const bodyParser = require("body-parser");

    // 修改对上传的数据大小的限制,图片的dataurl属于json
    app.use(bodyParser.json({ limit: "1mb" }));
    app.use(bodyParser.urlencoded({ limit: "1mb", extended: false }));
    app.use(bodyParser.text({ limit: "1mb" }));   
   ```
3. 同源策略的坑，目前还没有解决：前后端功能部署在云服务器上之后，都安装ssl证书（同一个），开启https之后，前后端交互依然无法完成，报错ERR_SSL_PROTOCOL_ERROR，只能先不使用ssl证书了？
### 20220527
1. 昨天的问题解决了，nodejs开启https和前端页面开启方式不一样，需要在app.js中安装证书并且开启服务端口，这样https向https发送ajax请求就通畅了
  ```javascript
  const https = require("https");
  const http = require("http");
  let fs = require("fs");
  const httpsOption = {
    key: fs.readFileSync("./nayutabit.cn.key"),
    cert: fs.readFileSync("./nayutabit.cn_bundle.pem")
  };


  http.createServer(app).listen(3007, () => {
    console.log("http 3007 ready");
  });

  //服务器挂载的域名和证书的域名相同，https才会生效
  https.createServer(httpsOption, app).listen(3008, () => {
    console.log("https 3008 is ok");
  });

  ```
2. 复刻出了AlloyTeam的二维码，感觉不错
### 20220529
1. 修复了登录之后不能及时显示头像的问题
### 20220531
1. 完成了留言界面的前后端全部功能
### 20220601
1. 完成了笔记界面的前端静态页面