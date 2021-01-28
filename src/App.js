import React from 'react';
import './App.css';
import Content from './components/Content/Content.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />

    </div>
  );
}


export default App;
