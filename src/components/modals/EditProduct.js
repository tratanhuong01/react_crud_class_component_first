import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IDProduct: this.props.item.IDProduct,
      NameProduct: this.props.item.NameProduct,
      PriceProduct: this.props.item.PriceProduct,
      IsShow: this.props.item.IsShow,
      TypeProduct: this.props.item.TypeProduct,
    };
  }
  openModal = (data) => {
    this.props.openModal(data);
  };
  onEditProduct = (event) => {
    event.preventDefault();
    this.props.onEditProduct(this.state);
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div
        className="w-2/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg
        -translate-y-1/2 border-2 border-gray-300 border-solid shadow-xl bg-white"
      >
        <div className="w-full relative py-3 border-b-2 border-gray-300 border-solid">
          <p className="font-bold text-2xl text-center">Sửa sản phẩm</p>
          <span
            onClick={this.openModal}
            className="w-10 h-10 bg-gray-300 rounded-full font-bold text-2xl 
                flex justify-center pt-1 cursor-pointer top-2 right-2 absolute"
          >
            &times;
          </span>
        </div>
        <div className="w-full p-2">
          <form onSubmit={this.onEditProduct} action="" method="POST">
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                Tên sản phẩm :
              </label>
              <input
                type="text"
                className="w-9/12 p-2 bg-gray-100 border-solid 
                    border-blue-500 border-2 rounded-lg"
                placeholder="Tên sản phẩm"
                name="NameProduct"
                value={this.state.NameProduct}
                onChange={this.onChange}
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                Giá :
              </label>
              <input
                type="text"
                className="w-9/12 p-2 bg-gray-100 border-solid 
                    border-blue-500 border-2 rounded-lg"
                placeholder="Giá sản phẩm"
                name="PriceProduct"
                value={this.state.PriceProduct}
                onChange={this.onChange}
              />
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                Loại Hiển thị :
              </label>
              <select
                name="IsShow"
                value={this.state.IsShow}
                onChange={this.onChange}
                className="w-1/2 p-2 font-bold border-2 
                    border-solid border-blue-500 rounded-lg"
              >
                <option value={false}>Ẩn</option>
                <option value={true}>Hiện</option>
              </select>
            </div>
            <div className="w-full py-2 flex">
              <label className="w-3/12 flex items-center mr-6 font-bold">
                Loại Sản Phẩm :
              </label>
              <select
                name="TypeProduct"
                value={this.state.TypeProduct}
                onChange={this.onChange}
                className="w-1/2 p-2 font-bold border-2 
                    border-solid border-blue-500 rounded-lg"
              >
                <option value={0}>Khuyến mãi</option>
                <option value={3}>Bán chạy</option>
                <option value={1}>Yêu thích</option>
                <option value={2}>Mới về</option>
              </select>
            </div>
            <div className="w-full py-2 my-2 h-12">
              <button
                type="submit"
                className="px-5 py-2 bg-blue-500 text-white 
                    float-right mr-1 rounded-lg"
              >
                Lưu
              </button>
              <button
                onClick={this.openModal}
                type="button"
                className="px-5 py-2 bg-gray-500 text-white 
                    float-right mr-1 rounded-lg"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProduct;
