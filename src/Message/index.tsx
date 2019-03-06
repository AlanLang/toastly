import Notification from '../Notification'
import MessageContent from './MessageContent'
import * as React from "react";

export class Message {
  duration = 3;//默认自动关闭延时，单位秒
  maxCount = 0;//最大显示数, 超过限制时，最早的消息会被自动关闭
  top = 24;//消息距离顶部的位置
  notification = Notification.create({
    maxCount:5,
    placement: 'topBottom'
  });

  constructor () {

  };
  /**
   * 成功消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   */
  success(content: string, duration?:number){
    return this.notification.create({
      content: <MessageContent type="success">{content}</MessageContent>,
      duration:duration
    })
  }
  /**
   * 失败消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   */
  error(content: string, duration?:number){
    return this.notification.create({
      content: <MessageContent type="error">{content}</MessageContent>,
      duration:duration
    })
  }
  /**
   * 消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   */
  info(content: string, duration?:number){
    return this.notification.create({
      content: <MessageContent type="info">{content}</MessageContent>,
      duration:duration
    })
  }

  /**
   * 警告消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   */
  warning(content: string, duration?:number){
    return this.notification.create({
      content: <MessageContent type="warning">{content}</MessageContent>,
      duration:duration
    })
  }
  /**
   * 加载中消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   */
  loading(content: string, duration = 0){
    return this.notification.create({
      content: <MessageContent type="loading">{content}</MessageContent>,
      duration:duration
    })
  }

  remove(key: string){
    this.notification.remove(key);
  }

  removeAll(){
    this.notification.removeAll();
  }
}

export interface ToastlyConfigProps { 
  duration?: number; 
  maxCount?: number;
  top?:number;
}