import React, { Component, Fragment } from "react";

class TitleTable extends Component {
  render() {
    return (
      <Fragment>
        <thead>
          <tr>
            <th className="p-2">STT</th>
            <th className="p-2">ID Sản Phẩm</th>
            <th className="p-2">Tên Sản Phẩm</th>
            <th className="p-2">Giá</th>
            <th className="p-2">Hiển Thị</th>
            <th className="p-2">Loại Sản Phẩm</th>
            <th colSpan="2"></th>
          </tr>
        </thead>
      </Fragment>
    );
  }
}

export default TitleTable;
