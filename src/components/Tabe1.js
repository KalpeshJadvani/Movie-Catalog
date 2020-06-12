import React, { Component } from 'react';
import { Layout, Row, Alert, Modal } from 'antd';
import SearchBox from './elements/SearchBox';
import Loader from './elements/Loader';
import ColCardBox from './elements/ColCardBox';
import MovieDetail from './elements/MovieDetail';
const { Content } = Layout;

const API_KEY = 'ce762116';
class Tabe1 extends Component {
  state = {
    data: {},
    error: null,
    loading: true,
    q: 'Bloodshot',
    y: '',
    activateModal: false,
    detail: false,
    detailRequest: false,
  };

  componentDidMount() {
    this.setState(
      {
        data: '',
        error: null,
        loading: true,
      },
      () => {
        this.apiCall();
      }
    );
  }

  clickHandler = (imdbID) => {
    this.setState({ activateModal: true, detailRequest: true }, () => {
      fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
        .then((resp) => resp)
        .then((resp) => resp.json())
        .then((response) => {
          this.setState({
            activateModal: true,
            detailRequest: false,
            detail: response,
          });
        })
        .catch(({ message }) => {
          this.setState({ detailRequest: false });
        });
    });
  };
  apiCall = () => {
    const { q, y } = this.state;
    fetch(`https://www.omdbapi.com/?t=${q}&y=${y}&apikey=${API_KEY}`)
      .then((result) => result.json())
      .then((response) => {
        this.setState({
          data: response ? response : {},
          error: response.Response === 'False' ? response.Error : null,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
        console.error(error);
      });
  };

  onTextChange = (e) => {
    const value = e.target.value;
    this.setState({ q: value ? value : '' });
  };
  searchHandler = (value) => {
    if (!value) return;
    this.setState({ q: value ? value : 'Bloodshot' }, () => {
      this.apiCall();
    });
  };

  searchYear = (year) => {
    if (!/^\d{4}$/.test(year)) {
      // validation with 4 digits
      return;
    }

    this.setState({ y: year }, () => {
      if (this.state.q) this.apiCall();
    });
  };
  render() {
    const {
      loading,
      error,
      data,
      detailRequest,
      activateModal,
      detail,
    } = this.state;

    return (
      <Content style={{ padding: '0 50px' }}>
        <SearchBox
          searchHandler={this.searchHandler}
          searchYear={this.searchYear}
          onTextChange={this.onTextChange}
        />
        <br />
        <Row gutter={16} type="flex" justify="center">
          {loading && <Loader />}

          {error !== null && (
            <div style={{ margin: '20px 0' }}>
              <Alert message={error} type="error" />
            </div>
          )}
          {data.Title ? (
            <ColCardBox {...data} clickHandler={this.clickHandler} />
          ) : (
            ''
          )}
        </Row>
        <Modal
          title="Detail"
          centered
          visible={activateModal}
          onCancel={() => this.setState({ activateModal: false })}
          footer={null}
          width={800}
        >
          {detailRequest === false ? <MovieDetail {...detail} /> : <Loader />}
        </Modal>
      </Content>
    );
  }
}

export default Tabe1;
