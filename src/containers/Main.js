import React, { Component } from "react";
import Fillter from "../components/controls/Fillter";
import ButtonAddProduct from "../components/controls/ButtonAddProduct";
import Search from "../components/controls/Search";
import Table from "../containers/Table";
class Main extends Component {
  openModal = (data) => {
    this.props.openModal(data);
  };
  onAddProduct = (data) => {
    this.props.onAddProduct(data);
  };
  onEditProduct = (data) => {
    this.props.onEditProduct(data);
  };
  onDeleteProduct = (data) => {
    this.props.onDeleteProduct(data);
  };
  onSearchData = (data) => {
    this.props.onSearchData(data);
  };
  onFillter = (data) => {
    this.props.onFillter(data);
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
      <div
        className="w-full bg-gray-100 dark:bg-dark-main h-screen relative"
        id="main"
      >
        <div className="w-9/12 mx-auto pt-10">
          <div className="w-full flex py-3">
            <Fillter onFillter={this.onFillter} />
            <div className="w-1/2 flex">
              <ButtonAddProduct
                openModal={this.openModal}
                myState={this.props.myState}
                onAddProduct={this.onAddProduct}
              />
              <Search onSearchData={this.onSearchData} />
            </div>
          </div>
          <Table
            products={this.props.products}
            openModal={this.openModal}
            myState={this.props.myState}
            onEditProduct={this.onEditProduct}
            onDeleteProduct={this.onDeleteProduct}
            onPreviouPagination={this.onPreviouPagination}
            onNumberPagination={this.onNumberPagination}
            onNextPagination={this.onNumberPagination}
          />
        </div>
      </div>
    );
  }
}

export default Main;
