import React, { Component } from "react";

class ButtonSection extends Component {
  render() {
    return (
      <div class="button-section">
        <button onClick={this.props.handleClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default ButtonSection;
