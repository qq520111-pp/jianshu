import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import http from "./static/core/request.js";
// Object.http = http;
React.http = http;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
