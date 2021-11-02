import React, { Component } from "react";

class DeleteProduct extends Component {
  openModal = (data) => {
    this.props.openModal(data);
  };
  onDeleteProduct = () => {
    this.props.onDeleteProduct(this.props.item);
  };
  render() {
    return (
      <div
        className="w-2/5 top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg absolute
              -translate-y-1/2 border-2 border-gray-300 border-solid shadow-xl bg-white"
      >
        <div className="w-full relative py-3 border-b-2 border-gray-300 border-solid">
          <p className="font-bold text-2xl text-center">Xóa sản phẩm</p>
          <span
            onClick={this.openModal}
            className="w-10 h-10 bg-gray-300 rounded-full font-bold text-2xl 
                  flex justify-center pt-1 cursor-pointer top-2 right-2 absolute"
          >
            &times;
          </span>
        </div>
        <div className="w-full p-2">
          <div className="w-full py-2 leading-7">
            Sản phẩm sẽ bị mất sau khi bạn bấm nút&nbsp;&nbsp;
            <span
              className="bg-blue-500 px-3 py-1.5 text-sm rounded-3xl 
                      font-bold text-white"
            >
              Xóa Sản Phẩm
            </span>{" "}
            . Bấm&nbsp;
            <span
              className="bg-gray-500 px-3 py-1.5 text-sm rounded-3xl 
                      font-bold text-white"
            >
              Hủy
            </span>{" "}
            &nbsp; khi bạn muốn thoát khỏi hộp thoại này .
          </div>
          <div className="w-full py-2 my-2 h-12">
            <button
              onClick={this.onDeleteProduct}
              type="button"
              className="px-5 py-2 bg-blue-500 text-white 
                          float-right mr-1 rounded-lg"
            >
              Xóa sản phẩm
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
        </div>
      </div>
    );
  }
}

export default DeleteProduct;
