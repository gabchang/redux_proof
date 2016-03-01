import "babel-polyfill";
/* globals document */
// import "babel-core/register";

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';

import configureStore from 'store/configure_store';
import * as gh from 'actions/github.act.js';


const store = configureStore(hashHistory);


render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
