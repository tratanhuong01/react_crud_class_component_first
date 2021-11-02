import React, { Component } from "react";

class ButtonNext extends Component {
  render() {
    return (
      <li
        className={
          (this.props.index === this.props.length / 10) <= 0
            ? 0
            : this.props.length / 10 - 1
            ? "hidden"
            : "w-7 h-9 m-0.5 bg-gray-500 justify-center cursor-pointer" +
              " font-bold text-white text-center flex items-center "
        }
      >
        <i className="bx bxs-chevron-right"></i>
      </li>
    );
  }
}

export default ButtonNext;
