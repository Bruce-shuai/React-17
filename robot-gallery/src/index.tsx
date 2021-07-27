import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './AppState';


const username = '帅得乱七八糟';
export const NameContext = React.createContext('帅得歪瓜裂枣');
ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App username={username}/>
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
