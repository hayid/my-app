import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Wgatsapp?", likesCount: 11 },
    { id: 3, message: "HOW?", likesCount: 25 },
    { id: 4, message: "OK?", likesCount: 36 }
  ]
  let dialogs = [
    { id: 1, name: 'Hayko' },
    { id: 2, name: 'Nazar' },
    { id: 3, name: 'Myrat' },
    { id: 4, name: 'Aman' },
    { id: 5, name: 'Yura' },
    { id: 6, name: 'Valera' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 1, message: 'Salam' },
    { id: 1, message: 'Privet' },
    { id: 1, message: 'Hola' }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));


reportWebVitals();
