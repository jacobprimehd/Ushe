import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home';
import * as serviceWorker from './serviceWorker';

//Variable inputs
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Switch = require("react-router").Switch;

const root = ({ref})

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
