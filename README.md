# toastly
[![NPM](https://nodei.co/npm/toastly.js.png)](https://nodei.co/npm/toastly.js/)

一个无须依赖HTML模板，可用于任何主流前端框架，极简的通知组件。
## 效果
[live demo](https://alanlang.github.io/toastly/)

## Getting Started
using cnm
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

## Usage
using cnm
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
<button id="closeAllBtn">全部关闭</button>
<script type="text/javascript">
success.onclick=function(){
  const toast = Toastly.message.success('This is a prompt message for success');
  toast.onClose.then(re=>{
    console.log('%cre: ','color: MidnightBlue; background: Aquamarine;',re);
  })
}
error.onclick=function(){
  Toastly.message.setConfig({
    placement:'bottomBottom'
  })
  Toastly.message.error('This is a prompt message for error, and it will disappear in 10 seconds',10);
}
info.onclick=function(){
  Toastly.message.info('This is a prompt message for info');
}
warning.onclick=function(){
  Toastly.message.warning('This is a prompt message for warning');
}
loading.onclick=function(){
  const key = Toastly.message.loading('This is a prompt message for loading').key;
  setTimeout(() => {
    Toastly.message.remove(key);
    Toastly.message.success('loading已关闭')
  }, 2*1000);
}
closeAllBtn.onclick = function(){
  Toastly.message.removeAll();
}
</script>
</html>
```
using angular
```
import { Component } from '@angular/core';
import { message } from 'toastly.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick() {
    message.success('This is a prompt message for success');
  }
}
```
using react
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import { message } from 'toastly.js';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  onClick(){
    message.success('这是一条提示')
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>success</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```

### API
#### 组件提供了一些静态方法，使用方式和参数如下：
* message.success(content,[duration])
* message.error(content,[duration])
* message.info(content,[duration])
* message.warning(content,[duration])
* message.loading(content,[duration])

| 参数  | 说明                                                         | 类型   | 默认值   |
| ----- | ------------------------------------------------------------ | ------ | -------- |
| content | 消息内容 | string | topRight |
| duration | 默认自动关闭时间                           | number | 3 |

#### 全局方法
* message.remove(key)
* message.removeAll()
* message.setConfig(option)

option details:

| 参数  | 说明                                                         | 类型   | 默认值   |
| ----- | ------------------------------------------------------------ | ------ | -------- |
| place | 弹出位置，可选 `topLeft` `topRight` `topCenter` `bottomLeft` `bottomRight` `bottomCenter`  | string | topRight |
| maxCount | 同一时间可展示的最大提示数量，为0时则不限制                              | number | 0 |
| duration | 持续时间(秒)，当设置为0时不消失                           | number | 3 |