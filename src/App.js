import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import styled from 'styled-components';


const HomePage = styled.div`
    background-color: #FFDEE7;
    height: 100vh;
    overflow: auto;
`

class App extends Component {
  render() {
    
    return (
      <HomePage>
      <div className="App">
      <Nav/>
        {routes}
      </div>
      </HomePage>
    );
  }
}

export default App;
