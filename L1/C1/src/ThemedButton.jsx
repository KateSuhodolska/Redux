import React, { Component } from "react";
import { ThemeContext } from "./themes-context";

class ThemedButton extends Component {
  render() {
    return (
      <button
        className="btn"
        {...this.props}
        style={{
          background: this.context.background,
          color: this.context.fontColor,
        }}
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
