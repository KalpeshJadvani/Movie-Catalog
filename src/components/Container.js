import React, { Component } from 'react';
import Tabe1 from './Tabe1';
import Tabe2 from './Tabe2';
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tab } = this.props;
    return (
      <div className="container">{tab === 'tab1' ? <Tabe1 /> : <Tabe2 />}</div>
    );
  }
}

export default Container;
