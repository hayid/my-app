import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
<BrowserRouter>
<App state={state} />
</BrowserRouter>, document.getElementById('root'));


reportWebVitals();
