import React, { Component, Fragment } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onSearchData = () => {
    this.props.onSearchData(this.state.keyword);
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    this.props.onSearchData(value);
  };
  render() {
    return (
      <Fragment>
        <input
          type="text"
          name="keyword"
          className="w-2/5 ml-4 p-2.5 rounded-3xl 
          bg-white border-solid border-gray-200 border-2"
          placeholder="Tìm kiếm"
          value={this.state.keywork}
          onChange={this.onChange}
          // onInput={this.onSearchData}
        />
      </Fragment>
    );
  }
}

export default Search;
