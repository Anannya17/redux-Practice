import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomeContainer from './Container/HomeContainer'
import HeaderContainer from './Container/HeaderContainer';

function App() {
  return (
   <div className="App">
    <HeaderContainer/>
    <HomeContainer/>
   </div>
  );
}

export default App;
