import React, { Component } from "react";

class Second extends Component {
  render() {
    return (
      <div
        className={
          this.props.modal === true
            ? "w-full bg-gray-500 top-0 left-0 z-50 bg-opacity-50 h-screen fixed"
            : "w-full bg-gray-500 top-0 left-0 z-50 bg-opacity-50 "
        }
        id="second"
      >
        {this.props.data_modal}
      </div>
    );
  }
}

export default Second;
