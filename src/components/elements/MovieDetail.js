import React from 'react';
import { Col, Row, Typography } from 'antd';
const TextTitle = Typography.Title;

const styleText = {
  color: '#343d46',
  margin: 0,
};
const MovieDetail = ({
  Title,
  Poster,
  imdbRating,
  imdbVotes,
  Runtime,
  Genre,
  Plot,
  Released,
  Actors,
}) => {
  return (
    <Row>
      <Col span={11}>
        <img
          src={
            Poster === 'N/A'
              ? 'https://placehold.it/198x264&text=Image+Not+Found'
              : Poster
          }
          alt={Title}
        />
      </Col>
      <Col span={13}>
        <Row>
          <Col span={21}>
            <TextTitle style={styleText} level={4}>
              {Title}
            </TextTitle>
          </Col>
          <Col span={3} style={{ textAlign: 'right' }}>
            <TextTitle style={styleText} level={4}>
              {imdbRating}
            </TextTitle>
          </Col>
        </Row>
        <Row>
          <Col>{Plot}</Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TextTitle style={styleText} level={4}>
              Genres
            </TextTitle>
            {Genre}
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <TextTitle style={styleText} level={4}>
              Actors
            </TextTitle>
            {Actors}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={10}>
            <TextTitle style={styleText} level={4}>
              {' '}
              Original Release
            </TextTitle>
            {Released}
          </Col>
          <Col span={10}>
            <TextTitle style={styleText} level={4}>
              Running Time
            </TextTitle>
            {Runtime}
          </Col>
        </Row>

        <br />
        <Row>
          <Col span={10}>
            <TextTitle style={styleText} level={4}>
              {` Box Office : ${parseFloat(imdbRating) > 7 ? 'Hit' : 'Flop'}`}
            </TextTitle>
          </Col>
          <Col span={10} style={{ textAlign: 'right' }}>
            <TextTitle style={styleText} level={4}>
              {`Votes : ${imdbVotes}`}
            </TextTitle>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MovieDetail;
