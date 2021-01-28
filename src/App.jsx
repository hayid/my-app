import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import {  Route  } from 'react-router';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        
      <Route component="Dialogs"/>
      </div>
    </div>
  );
}


export default App;
