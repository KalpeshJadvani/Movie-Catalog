import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
const { Search } = Input;
class SearchBox extends Component {
  render() {
    const { searchHandler, searchYear, onTextChange } = this.props;
    return (
      <Row>
        <Col span={8} offset={4}>
          <Search
            placeholder="enter movie, series, episode name"
            enterButton="Search"
            size="large"
            onSearch={(value) => searchHandler(value)}
            onChange={(e) => onTextChange(e)}
          />
        </Col>
        <Col span={4} offset={2}>
          <Search
            placeholder="relese year.."
            enterButton="Search"
            size="large"
            onSearch={(value) => searchYear(value)}
          />
        </Col>
      </Row>
    );
  }
}

export default SearchBox;
