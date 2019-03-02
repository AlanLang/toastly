import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';
import { NotificationProps } from './PropsType'

let seed = 0;
const now = Date.now();
const getUuid = () => {
  return `Message-${now}_${seed++}`;
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
      create(params: MessageItem) {
        return message.add(params);
      },
      remove(key: any) {
        message.remove(key);
      },
      clearAll() {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
      },
      component: message,
    };
  }

  add(messageItem: MessageItem) {
    const { maxCount = 0 } = this.props;
    if (messageItem) {
      const key = messageItem.key ? messageItem.key : getUuid();
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
        this.setState({
            messages,
        });
      }
    }
    return messageItem;
  }

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
    messages.map((message: any) => {
      const close = () => {
          this.remove(message.key);
          if (message.onClose) {
              message.onClose();
          }
      };
      children.push(
          <div key={message.key} >{message.content}</div>
      );
    });
    return children;
  }


  render() {
    const {messages} = this.state;
    const messagesChildren = this.getMessageChildren();
    return (
      <NotificationConent>
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
  onClose?: (event: any) => void;
}

const NotificationConent = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: fixed;
  top: 16px;
  left: 0;
  z-index: 1010;
  width: 100%;
  pointer-events: none;
  text-align: center;
`;