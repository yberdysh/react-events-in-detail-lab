// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  render() {
    return (
      <div><button onClick={(event) => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
      }}>Button</button></div>
    );
  }
}
