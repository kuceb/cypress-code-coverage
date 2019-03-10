import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    clickCount: 0,
    text: 'click me'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button className="btn" onClick={() => {
            const clickCount = this.state.clickCount + 1
            this.setState({clickCount})
            if (clickCount === 2) {
              alert('you fool!')
            }
            this.setState({text:'click me again'})
          }
            }>{this.state.text}</button>
        </header>
      </div>
    );
  }
}

export default App;
