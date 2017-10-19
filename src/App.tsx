import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

const user = {"hi":"hu"};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>2 plus 2 equals {user['hi']}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>srac/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
