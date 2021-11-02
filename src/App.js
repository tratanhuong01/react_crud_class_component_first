import React, { Component, Fragment } from "react";
import Main from "./containers/Main";
import Second from "./containers/Second";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      Modal: false,
      DataModal: "",
      keyword: "",
      filterIsShow: -1,
      filterType: -1,
      index: 0,
    };
  }
  UNSAFE_componentWillMount() {
    if (localStorage && localStorage.getItem("products")) {
      var products = JSON.parse(localStorage.getItem("products"));
      this.setState({
        products: products,
      });
    }
  }
  CreateID() {
    var IDProduct = undefined;
    if (this.state.products.length > 0) {
      IDProduct = this.state.products[this.state.products.length - 1].IDProduct;
    } else {
      IDProduct = "SP10000";
    }
    IDProduct = IDProduct.replace("SP", "");
    IDProduct = Number(IDProduct);
    IDProduct++;
    IDProduct = "SP" + IDProduct;
    return IDProduct;
  }
  openModal = (data) => {
    this.setState({
      Modal: !this.state.Modal,
      DataModal: data,
    });
  };
  onAddProduct = (product) => {
    var IDProduct = this.CreateID();
    product.IDProduct = IDProduct;
    product.TypeProduct = Number(product.TypeProduct);
    var { products } = this.state;
    products.push(product);
    this.setState({
      products: products,
      Modal: false,
      DataModal: "",
    });
    localStorage.setItem("products", JSON.stringify(products));
  };
  onEditProduct = (product) => {
    var index = this.state.products.findIndex(
      (item) => item.IDProduct === product.IDProduct
    );
    var { products } = this.state;
    product.TypeProduct = Number(product.TypeProduct);
    product.IsShow = product.IsShow === "true" ? true : false;
    products[index] = product;
    this.setState({
      products: products,
      Modal: false,
      DataModal: "",
    });
    localStorage.setItem("products", JSON.stringify(products));
  };
  onDeleteProduct = (product) => {
    var index = this.state.products.findIndex(
      (item) => item.IDProduct === product.IDProduct
    );
    var { products } = this.state;
    products.splice(index, 1);
    this.setState({
      products: products,
      Modal: false,
      DataModal: "",
    });
    localStorage.setItem("products", JSON.stringify(products));
  };
  onSearchData = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  onFillter = (data) => {
    if (data.TypeFilter === "ShowProduct")
      this.setState({
        filterIsShow: Number.isInteger(data.ValueFilter)
          ? data.ValueFilter
          : Number(data.ValueFilter),
      });
    else
      this.setState({
        filterType: Number.isInteger(data.ValueFilter)
          ? data.ValueFilter
          : Number(data.ValueFilter),
      });
  };
  onPreviouPagination = () => {};
  onNumberPagination = () => {};
  onNextPagination = () => {};
  render() {
    var { products, keyword, filterIsShow, filterType } = this.state;
    products = products.filter((item) => {
      if (filterIsShow === -1) return item;
      else return item.IsShow === (filterIsShow === 1 ? true : false);
    });
    products = products.filter((item) => {
      if (filterType === -1) return item;
      else return item.TypeProduct === filterType;
    });
    if (keyword) {
      products = products.filter((item) => {
        return item.NameProduct.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    return (
      <Fragment>
        <Main
          products={products}
          openModal={this.openModal}
          myState={this.state}
          onAddProduct={this.onAddProduct}
          onEditProduct={this.onEditProduct}
          onDeleteProduct={this.onDeleteProduct}
          onSearchData={this.onSearchData}
          onFillter={this.onFillter}
          onPreviouPagination={this.onPreviouPagination}
          onNumberPagination={this.onNumberPagination}
          onNextPagination={this.onNumberPagination}
        />
        <Second modal={this.state.Modal} data_modal={this.state.DataModal} />
      </Fragment>
    );
  }
}
export default App;
