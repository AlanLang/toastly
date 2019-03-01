import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Hello";

class Message {
  constructor () {
    console.log(123);
    this.render();
  };

  show(){
    console.log(456)
  }

  private render(){
    ReactDOM.render(
      <Hello compiler="TypeScript" framework="React" />,
      document.body
    );
  }
}

export const message = new Message();