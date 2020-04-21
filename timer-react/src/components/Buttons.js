import React, { Component } from "react";

class Button extends Component {
  render() {
      return(
          <div>
              <button className={this.props.class} onClick={this.props.HandleClick}>{this.props.text }</button>
          </div>
      )
  }
}

export default Button;
