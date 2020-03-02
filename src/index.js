import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './component/me/App';
import envelope from './component/envelope/envelope';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={App} />
    <Route exact path="/envelope" component={envelope} />
  </BrowserRouter>), document.getElementById('root'));
