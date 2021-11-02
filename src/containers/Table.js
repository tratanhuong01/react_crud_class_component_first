import React, { Component } from "react";
import ContentTable from "../components/contents/ContentTable";
import TitleTable from "../components/contents/TitleTable";
import Pagination from "../components/contents/pagination/Pagination";
class Table extends Component {
  openModal = (data) => {
    this.props.openModal(data);
  };
  onEditProduct = (data) => {
    this.props.onEditProduct(data);
  };
  onDeleteProduct = (data) => {
    this.props.onDeleteProduct(data);
  };
  onPreviouPagination = (data) => {
    this.props.onPreviouPagination(data);
  };
  onNumberPagination = (data) => {
    this.props.onNumberPagination(data);
  };
  onNextPagination = (data) => {
    this.props.onNumberPagination(data);
  };
  render() {
    return (
      <div className="w-full overflow-x-auto max-w-full py-3">
        <table className="w-full bg-white" id="tableMain">
          <TitleTable />
          <ContentTable
            products={this.props.products}
            openModal={this.openModal}
            myState={this.props.myState}
            onEditProduct={this.onEditProduct}
            onDeleteProduct={this.onDeleteProduct}
          />
        </table>
        <Pagination
          products={this.props.products}
          onPreviouPagination={this.onPreviouPagination}
          onNumberPagination={this.onNumberPagination}
          onNextPagination={this.onNumberPagination}
        />
      </div>
    );
  }
}

export default Table;
