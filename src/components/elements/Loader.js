import React from 'react';
import { Spin } from 'antd';
const Loader = () => {
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <Spin />
    </div>
  );
};

export default Loader;
