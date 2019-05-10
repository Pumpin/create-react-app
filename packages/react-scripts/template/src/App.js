import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_PROJECT_NAME || !process.env.REACT_APP_PATH) {
      throw new Error('Please define `REACT_APP_PROJECT_NAME` and `REACT_APP_PATH` in your .env file');
    }

    const projectName = process.env.REACT_APP_PROJECT_NAME
    const path = process.env.REACT_APP_PATH;

    return { projectName, path };
  }

  render() {

    const { projectName, path } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Headnet Labs</h2>
        </div>
        <p className="App-intro">
           <b> Project name: { projectName } </b><br/>
           <b> Path: { path } </b><br/>
        </p>
      </div>
    );
  }
}

export default App;
