import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextComponent } from './Component/Contextapi';
import {StyleContextComponent} from "./Component/StyleContext";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ContextComponent>
    <StyleContextComponent>
    <App />
    </StyleContextComponent>
  </ContextComponent>
  </BrowserRouter>
  
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
