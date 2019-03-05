import Notification from '../Notification'

export class Message {
  duration = 3;//默认自动关闭延时，单位秒
  maxCount = 0;//最大显示数, 超过限制时，最早的消息会被自动关闭
  top = 24;//消息距离顶部的位置
  notification = Notification.create({
    maxCount:5
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
      content: content,
      onClose:()=>{
        console.log(1)
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