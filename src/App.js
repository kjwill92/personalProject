import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';
import styled from 'styled-components';
import img from './Hdw6Roq.png'


const HomePage = styled.div`
    /* background-color: #FFDEE7; */
    background-image: url(${img});
    height: 100vh;
    overflow: auto;
    font-family: "Comic Sans MS", cursive, sans-serif
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
