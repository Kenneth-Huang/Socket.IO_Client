import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response: false,
      endpoit: 'http://127.0.0.1:8008'
    };
  }

  componentDidMount(){
    const {endpoit} = this.state;
    const socket = socketIOClient(endpoit);
    socket.on('FromAPI', data=>{
      console.log('get data:'+data);
      this.setState({response:data.temp_c})
    });
  }
  render() {
    const {response} = this.state;
    console.log('response:'+response)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div style={{textAlign:"center"}}>
          {response?<p>the temperature is {response} &#176;C</p>:<p>loading...</p>}
        </div>
      </div>
    );
  }
}

export default App;
