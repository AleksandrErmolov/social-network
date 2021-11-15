import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you', likesCount: 16 },
  { id: 2, message: "It's my first post", likesCount: 25 },
  { id: 4, message: "go go go", likesCount: 15 },
  { id: 5, message: "JS - power", likesCount: 115 },
]

let dialogData = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Iluha' },
  { id: 3, name: 'Anton' },
  { id: 4, name: 'Marry' },
  { id: 5, name: 'Galya' }
]


let messagesData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'Привет друг' },
  { id: 3, message: 'Это твоя первая социальная сеть' },
  { id: 4, message: 'Дальше будет больше' },
  { id: 5, message: 'Привет конкурентам!' }
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();