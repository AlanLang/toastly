import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';

export default class Notification {
  maxCount = 0;//最大显示数, 超过限制时，最早的消息会被自动关闭
  top = 24;//消息距离顶部的位置
  constructor () {
    console.log(123);
    this.render();
  };
  render(){
    const div = document.createElement('div');
    document.body.appendChild(div);
    const NotificationContent = styled.div`
      position: fixed;
      left: 0px;
      right: 0px;
      top: 0px;
      text-align: center;
    `
    ReactDOM.render(<div><NotificationContent>123</NotificationContent></div>, div);
  }
}