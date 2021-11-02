import React, { Component, Fragment } from "react";
import EditProduct from "../modals/EditProduct";
import DeleteProduct from "../modals/DeleteProduct";
class ItemTable extends Component {
  onEditProduct = (data) => {
    this.props.onEditProduct(data);
  };
  onDeleteProduct = (data) => {
    this.props.onDeleteProduct(data);
  };
  openModal = (data, item) => {
    var modal = undefined;
    if (data === "edit") {
      modal =
        this.props.myState.Modal === false ? (
          <EditProduct
            openModal={() => this.props.openModal(data)}
            onEditProduct={this.onEditProduct}
            item={item}
          />
        ) : (
          ""
        );
      this.props.openModal(modal);
    } else {
      modal =
        this.props.myState.Modal === false ? (
          <DeleteProduct
            openModal={() => this.props.openModal(data)}
            onDeleteProduct={this.onDeleteProduct}
            item={item}
          />
        ) : (
          ""
        );
      this.props.openModal(modal);
    }
  };
  render() {
    return (
      <Fragment>
        <tr>
          <td className="p-2">{this.props.index}</td>
          <td className="p-2">{this.props.item.IDProduct}</td>
          <td className="p-2">{this.props.item.NameProduct}</td>
          <td className="p-2">{this.props.item.PriceProduct}</td>
          <td className="p-2">
            <span
              className={
                this.props.item.IsShow
                  ? "px-3 py-1.5 text-sm rounded-3xl font-bold text-white bg-green-500"
                  : "px-3 py-1.5 text-sm rounded-3xl font-bold text-white bg-red-500"
              }
            >
              {this.props.item.IsShow ? "Hiện" : "Ẩn"}
            </span>
          </td>
          {/* 0 - Khuyến mãi | 1 - Yêu thích | 2 - Mới về | 3 - Bán chạy */}
          <td className="p-2">
            <span
              className={
                this.props.item.TypeProduct === 0
                  ? "bg-red-500 px-3 py-1.5 text-sm rounded-3xl font-bold text-white"
                  : this.props.item.TypeProduct === 1
                  ? "bg-pink-500 px-3 py-1.5 text-sm rounded-3xl font-bold text-white"
                  : this.props.item.TypeProduct === 2
                  ? "bg-yellow-500 px-3 py-1.5 text-sm rounded-3xl font-bold text-white"
                  : "bg-blue-500 px-3 py-1.5 text-sm rounded-3xl font-bold text-white"
              }
            >
              {this.props.item.TypeProduct === 0
                ? "Khuyến mãi"
                : this.props.item.TypeProduct === 1
                ? "Yêu thích"
                : this.props.item.TypeProduct === 2
                ? "Mới về"
                : "Bán chạy"}
            </span>
          </td>
          <td className="p-2">
            <i
              onClick={() => this.openModal("edit", this.props.item)}
              className="bx bx-edit-alt text-3xl cursor-pointer"
            ></i>
          </td>
          <td className="p-2">
            <i
              onClick={() => this.openModal("delete", this.props.item)}
              className="bx bxs-trash-alt text-3xl cursor-pointer"
            ></i>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default ItemTable;
