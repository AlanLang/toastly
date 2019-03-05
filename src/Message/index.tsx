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
   * @param onClose 关闭的回调
   */
  success(content: string, duration?:number, onClose?:Function){
    this.notification.create({
      content: <MessageContent type="success">{content}</MessageContent>,
      duration:duration,
      onClose:()=>{
        onClose?onClose():null
      }
    })
  }
  /**
   * 失败消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   * @param onClose 关闭的回调
   */
  error(content: string, duration?:number, onClose?:Function){
    this.notification.create({
      content: <MessageContent type="error">{content}</MessageContent>,
      duration:duration,
      onClose:()=>{
        onClose?onClose():null
      }
    })
  }
  /**
   * 消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   * @param onClose 关闭的回调
   */
  info(content: string, duration?:number, onClose?:Function){
    this.notification.create({
      content: <MessageContent type="info">{content}</MessageContent>,
      duration:duration,
      onClose:()=>{
        onClose?onClose():null
      }
    })
  }

  /**
   * 警告消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   * @param onClose 关闭的回调
   */
  warning(content: string, duration?:number, onClose?:Function){
    this.notification.create({
      content: <MessageContent type="warning">{content}</MessageContent>,
      duration:duration,
      onClose:()=>{
        onClose?onClose():null
      }
    })
  }
  /**
   * 加载中消息提醒
   * @param content 消息内容
   * @param duration 持续时间
   * @param onClose 关闭的回调
   */
  loading(content: string, duration = 0, onClose?:Function){
    this.notification.create({
      content: <MessageContent type="loading">{content}</MessageContent>,
      duration:duration,
      onClose:()=>{
        onClose?onClose():null
      }
    })
  }

  remove(key: string){
    this.notification.remove(key);
  }

  removeAll(){
    this.notification.removeAll();
  }

  config(config:ToastlyConfigProps){
    
  }
}

export interface ToastlyConfigProps { 
  duration?: number; 
  maxCount?: number;
  top?:number;
}