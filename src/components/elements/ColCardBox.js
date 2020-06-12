import React from 'react';
import { Col, Row, Card, Tag } from 'antd';
const { Meta } = Card;

const upperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const ColCardBox = ({ Title, imdbID, Poster, Type, clickHandler }) => {
  return (
    <Col style={{ margin: '20px 0' }} className="gutter-row" span={4}>
      <div className="gutter-box">
        <Card
          style={{ width: 200 }}
          cover={
            <img
              alt={Title}
              src={
                Poster === 'N/A'
                  ? 'https://placehold.it/198x264&text=Image+Not+Found'
                  : Poster
              }
            />
          }
        >
          <Meta title={Title} description={false} />
          <Row style={{ marginTop: '10px' }} className="gutter-row">
            <Col>
              <Tag onClick={() => clickHandler(imdbID)} color="magenta">
                {upperCase(Type)} Detaile
              </Tag>
            </Col>
          </Row>
        </Card>
      </div>
    </Col>
  );
};

export default ColCardBox;
