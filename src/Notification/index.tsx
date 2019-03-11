import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, {keyframes} from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { NotificationProps } from './PropsType'

let seed = 0;
const now = Date.now();
const getUuid = () => {
  return `Toastly-${now}_${seed++}`;
};
export default class Notification extends React.PureComponent<NotificationProps, State> {
  public static defaultProps = {
    maxCount: 0,
    duration: 3,
    placement: 'topRight'
  };

  constructor (props?: NotificationProps) {
    super(props)
    this.state = {
      messages: [],
    };
  };

  static create = (props: NotificationProps = {}) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const message: any = ReactDOM.render(<Notification {...props}></Notification>, div);
    return {
      /**
       * 创建
       * @param params 入参
       */
      create(params: MessageItem) {
        return message.add(params);
      },
      /**
       * 移除指定项
       * @param key 唯一id
       */
      remove(key: any) {
        message.remove(key);
      },
      /**
       * 移除所有
       */
      removeAll(){
        message.removeAll();
      },
      /**
       * 移除
       */
      clear() {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
      },
      component: message,
    };
  }

  removeAll(){
    this.setState((previousState: any) => {
      previousState.messages.map((message: MessageItem) => {
        message.onClose = new Promise((resolve, reject) => {
          resolve(message.key);
      });
      });
      return {
          messages: [],
      };
    });
  }

  add(messageItem: MessageItem) {
    const { maxCount = 0 } = this.props;
    const { duration = this.props.duration, key = getUuid() } = messageItem;
    if (messageItem) {
      messageItem.key = key;
      const messages = [...this.state.messages];
      let isExit = false;
      for (const message of messages) {
          if (message.key === key) {
              isExit = true;
              break;
          }
      }
      if (!isExit) {
        if(maxCount > 0 && messages.length >= maxCount){
          messages[0].onClose?messages[0].onClose():null;
          messages.shift();
        }
        messages.push(messageItem);
        if(duration > 0){
          messageItem.onClose = new Promise((resolve, reject) => {
            setTimeout(re=>{
              this.remove(messageItem.key);
              resolve(messageItem.key);
            }, duration * 1000)
          });
        }
        this.setState({
            messages,
        });
      }
    }
    return messageItem;
  }

  /**
   * 移除指定消息
   * @param key 消息的key
   */
  remove = (key: any) => {
    this.setState((previousState: any) => {
      const messages = previousState.messages.filter((message: any) => message.key !== key);
      return {
          messages,
      };
    });
  }

  getMessageChildren = () => {
    const {messages} = this.state;
    const children: any[] = [];
    messages.map((message: MessageItem) => {
      const close = () => {
        this.remove(message.key);
        message.onClose = new Promise((resolve, reject) => {
          resolve(message.key);
        });
      };
      children.push(
        <div key={message.key} >{message.content}</div>
      );
    });
    return children;
  }

  render() {
    const { placement } = this.props;
    const messagesChildren = this.getMessageChildren();
    return (
      <NotificationConent 
      placement={placement}>
        {messagesChildren}
      </NotificationConent>
    );
  }
}

export interface State{
  messages:any[];
}

export interface MessageItem{
  key?: string;
  content?: string|React.ReactNode; //内容
  /**
   * 自动关闭延时，如果是0则不自动关闭
   */
  duration?: number;
  onClose?: Promise<any>;
}

interface IViewProps {
  placement: 'topLeft'|'topRight'|'topCenter'|'bottomLeft'|'bottomRight'|'bottomCenter';
}

const NotificationConent = styled(QueueAnim)`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0 16px;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: fixed;
  top: ${(props: IViewProps) => props.placement.indexOf('top') >= 0 ? '0px' : 'auto'};
  left: 0;
  right:0;
  bottom: ${(props: IViewProps) => props.placement.indexOf('bottom') >= 0 ? '0px' : 'auto'};
  z-index: 1010;
  width: 100%;
  pointer-events: none;
  text-align: ${(props: IViewProps) => props.placement.indexOf('Right') >= 0 ? 'right' : (props: IViewProps) => props.placement.indexOf('Left') >= 0 ? 'left' : 'center'};
`;
