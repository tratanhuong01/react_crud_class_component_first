import React, { Component } from "react";

class ButtonPrevious extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === 0
            ? "hidden"
            : "w-7 h-9 m-0.5 bg-gray-500 justify-center cursor-pointer" +
              " font-bold text-white text-center flex items-center "
        }
      >
        <i className="bx bxs-chevron-left"></i>
      </li>
    );
  }
}

export default ButtonPrevious;
