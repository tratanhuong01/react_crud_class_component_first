import React, { Component } from "react";

class Fillter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        ShowProduct: {
          TypeFilter: "",
          ValueFilter: -1,
        },
        TypeProduct: {
          TypeFilter: "",
          ValueFilter: -1,
        },
      },
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      TypeFilter: name,
      ValueFilter: Number.isInteger(value) ? value : Number(value),
    };
    if (name === "ShowProduct")
      this.setState({
        filter: {
          ShowProduct: filter,
        },
      });
    else
      this.setState({
        filter: {
          TypeProduct: filter,
        },
      });
    this.props.onFillter(filter);
  };
  render() {
    return (
      <div className="w-1/2 flex">
        <p className="text-xm font-bold py-3 mr-4 flex items-center">Bộ Lọc</p>
        <select
          value={this.state.filter.ValueFilter}
          onChange={this.onChange}
          name="ShowProduct"
          className="w-48 p-3 mr-5 font-bold flex bg-white cursor-pointer relative"
        >
          <option value={-1}>Tất cả</option>
          <option value={0}>Ẩn</option>
          <option value={1}>Hiện</option>
        </select>
        <select
          value={this.state.filter.ValueFilter}
          onChange={this.onChange}
          name="TypeProduct"
          className="w-48 p-3 mr-5 font-bold flex bg-white cursor-pointer relative"
        >
          <option value={-1}>Tất cả</option>
          <option value={0}>Khuyến mãi</option>
          <option value={1}>Yêu thích</option>
          <option value={2}>Mới về</option>
          <option value={3}>Bán chạy</option>
        </select>
      </div>
    );
  }
}

export default Fillter;
