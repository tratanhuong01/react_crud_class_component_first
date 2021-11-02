import React, { Component } from "react";
import ButtonNext from "./ButtonNext";
import ButtonNumber from "./ButtonNumber";
import ButtonPrevious from "./ButtonPrevious";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      length: this.props.products.length,
    };
  }
  onPreviouPagination = (data) => {
    this.props.onPreviouPagination(data);
  };
  onNumberPagination = (data) => {
    this.setState({
      index: data,
    });
    this.props.onNumberPagination(data);
  };
  onNextPagination = (data) => {
    this.props.onNumberPagination(data);
  };
  roundUp = (num, precision) => {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
  };
  generate = () => {
    var data = this.roundUp(this.state.length / 10, 1);
    var array = [];
    for (let index = 0; index < data; index++) {
      array[index] = (
        <ButtonNumber
          onNumberPagination={this.onNumberPagination}
          key={index}
          number={index}
        />
      );
    }
    return array;
  };
  render() {
    return (
      <div className="w-full py-3">
        <ul className="flex justify-center" id="pageMain">
          <ButtonPrevious index={this.state.index} />
          {this.generate()}
          <ButtonNext index={this.state.index} length={this.state.length} />
        </ul>
      </div>
    );
  }
}

export default Pagination;
