import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';

class App extends Component {
  state = {
    tab: 'tab2',
  };

  tabEvent = (e, tab) => {
    this.setState({ tab });
  };
  render() {
    const { tab } = this.state;

    return (
      <div className="App">
        <header className="header">
          <a href="#default" className="logo">
            Movie Catalog
          </a>

          <div className="header-right">
            <a
              href="#tab1"
              className={`tablinks ${tab === 'tab1' ? 'active' : ''}`}
              onClick={(e) => this.tabEvent(e, 'tab1')}
            >
              Tab1
            </a>
            <a
              href="#tab2"
              className={`tablinks ${tab === 'tab2' ? 'active' : ''}`}
              onClick={(e) => this.tabEvent(e, 'tab2')}
            >
              Tab2
            </a>
          </div>
        </header>
        <Container tab={tab} />
        <footer style={{ textAlign: 'center' }}>
          Movies Information ©2020
        </footer>
      </div>
    );
  }
}

export default App;
