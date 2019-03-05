import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';
export default class MessageContent extends React.PureComponent<Prop, State> {
  constructor (props?: Prop) {
    super(props)
  };
  render(){
    return <div>{this.props.content}</div>
  }
}

export interface State{
  notificatirons:any[];
}
export interface Prop{
  content: string;
}