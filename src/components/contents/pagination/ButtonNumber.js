import React, { Component } from "react";

class ButtonNumber extends Component {
  render() {
    return (
      <li
        className=" w-7 h-9 m-0.5 bg-yellow-500 justify-center cursor-pointer
        font-bold text-white text-center flex items-center"
      >
        {this.props.number}
      </li>
    );
  }
}

export default ButtonNumber;
