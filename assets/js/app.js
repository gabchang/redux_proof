/* globals document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from 'store/configure_store';
import { App, Todo } from 'apps/pages';
import {addTodo} from 'actions/action_creators';

const store = configureStore(hashHistory);

store.dispatch(addTodo('learn redux'));
store.dispatch(addTodo('learn react'));


render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="todo" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
