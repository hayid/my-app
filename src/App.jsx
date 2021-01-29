import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
       
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/content' component={Content}/>
      
      
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
