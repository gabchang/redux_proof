/* globals document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

import configureStore from 'store/configure_store';
import { Provider } from 'react-redux';
import createPages from 'apps/containers/index';
import {addTodo} from 'actions/action_creators';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

store.dispatch(addTodo('learn redux'));
store.dispatch(addTodo('learn react'));

const {App, Todo} = createPages(React);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="todo" component={Todo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
