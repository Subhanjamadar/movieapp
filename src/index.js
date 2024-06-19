import React from 'react';                //to create react application
import ReactDOM from 'react-dom/client';  //to support virtual DOM and real DOM
import './index.css';
import reportWebVitals from './reportWebVitals';  
import App from './App';
import { BrowserRouter } from 'react-router-dom';

 // ./ ->local file  //'react'->package

 //ReactDOM.Render() ->In older version

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
