import React, { Component, Fragment } from "react";
import AddProduct from "../modals/AddProduct";
class ButtonAddProduct extends Component {
  onAddProduct = (data) => {
    this.props.onAddProduct(data);
  };
  openModal = (data) => {
    data =
      this.props.myState.Modal === false ? (
        <AddProduct
          openModal={this.openModal}
          onAddProduct={this.onAddProduct}
        />
      ) : (
        ""
      );
    this.props.openModal(data);
  };
  render() {
    return (
      <Fragment>
        <button
          onClick={this.openModal}
          className="px-6 py-2 rounded-lg bg-blue-500 
                    text-white font-bold"
        >
          Thêm Sản Phẩm
        </button>
      </Fragment>
    );
  }
}

export default ButtonAddProduct;
