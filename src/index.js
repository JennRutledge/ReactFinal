/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  
  document.getElementById('root')
);


