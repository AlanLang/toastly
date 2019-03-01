import * as React from "react";
import * as ReactDOM from "react-dom";

export interface NotificationProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Notification extends React.Component<NotificationProps, {}> {
    newInstance(){

    }

    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}