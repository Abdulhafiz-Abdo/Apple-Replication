import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Header from "./Component/Header/Header";

import reportWebVitals from './reportWebVitals';
import Footer from './Component/Footer/Footer';
import MainPage from './Component/Main/MainPage';

import banker from "./images/home/banker.png";


ReactDOM.render(
  <React.StrictMode>
    <Header/>,
    <MainPage/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
