import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>

     <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
      <Route path='/content' render={ () => <Profile posts={props.posts} /> }/>
      
      
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
