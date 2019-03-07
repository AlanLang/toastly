# toastly
一个无须依赖HTML模板、极简的通知组件。
## 效果
[live demo](https://alanlang.github.io/toastly/)

## Getting Started
using cnd
```
<script src="https://npmcdn.com/toastly.js/dist/toastly.js"></script>
```
using yarn 
```
yarn add toastly.js
```
using npm
```
npm install toastly.js
```

## Use
using cnd
```
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
<script src="https://npmcdn.com/toastly.js/dist/toastly.js"></script>
<button id="success">成功</button>
<button id="error">失败</button>
<button id="info">消息</button>
<button id="warning">警告</button>
<button id="loading">加载中</button>
<button id="closeBtn">关闭</button>
<script type="text/javascript">
success.onclick=function(){
  const toast = Toastly.message.success('This is a prompt message for success, and it will disappear in 10 seconds');
  toast.onClose.then(re=>{
    console.log('%cre: ','color: MidnightBlue; background: Aquamarine;',re);
  })
}
error.onclick=function(){
  Toastly.message.error('This is a prompt message for success, and it will disappear in 10 seconds',10);
}
info.onclick=function(){
  Toastly.message.info('This is a prompt message for success, and it will disappear in 10 seconds');
}
warning.onclick=function(){
  Toastly.message.warning('This is a prompt message for success, and it will disappear in 10 seconds');
}
loading.onclick=function(){
  Toastly.message.loading('This is a prompt message for success, and it will disappear in 10 seconds');
}
closeBtn.onclick = function(){
  console.log(123);
  Toastly.message.removeAll();
}
</script>
</html>
```