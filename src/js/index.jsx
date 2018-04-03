import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import App from './app';
import rootStore from "./rootStore";

render(
  <Provider store = {store} >
    <App />
  </Provider>, 
  document.getElementById('root')
);
