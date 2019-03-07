import Notification from '../Notification'
import {NotificationProps} from '../Notification/PropsType'
import MessageContent from './MessageContent'
import * as React from "react";

export class Message {
  notification = Notification.create({
    maxCount:0,
    placement: 'topCenter'
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

  setConfig(option: NotificationProps){
    this.notification.removeAll();
    this.notification.clear();
    this.notification = Notification.create(option);
  }

  remove(key: string){
    this.notification.remove(key);
  }

  removeAll(){
    this.notification.removeAll();
  }
}