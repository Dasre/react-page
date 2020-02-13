import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Header from './Header';
import envelope from './envelope';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route path="/" component={Header} />
    <Route path="/App" component={App} />
    <Route path="/envelope" component={envelope} />
  </BrowserRouter>), document.getElementById('root'));
