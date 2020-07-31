import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    const newOpacity = this.props.opacity
    return this.props.opacity < .2 ? null : (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newOpacity - .1} />
      </div>
    )
  }
}

