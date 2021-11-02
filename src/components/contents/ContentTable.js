import React, { Component } from "react";
import ItemTable from "../contents/ItemTable";
class ContentTable extends Component {
  openModal = (data) => {
    this.props.openModal(data);
  };
  onEditProduct = (data) => {
    this.props.onEditProduct(data);
  };
  onDeleteProduct = (data) => {
    this.props.onDeleteProduct(data);
  };
  render() {
    var showProducts = this.props.products.map((item, index) => {
      return (
        <ItemTable
          key={index}
          item={item}
          index={index + 1}
          openModal={this.openModal}
          myState={this.props.myState}
          onEditProduct={this.onEditProduct}
          onDeleteProduct={this.onDeleteProduct}
        />
      );
    });
    return <tbody>{showProducts}</tbody>;
  }
}

export default ContentTable;
