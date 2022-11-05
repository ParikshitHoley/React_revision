import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./store/store"
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
   </Provider>

)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
