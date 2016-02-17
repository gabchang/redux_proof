/* globals document */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from 'store/configure_store';
import { App, Todo, Reddit } from 'apps';
import { addTodo } from 'actions/todo.act';
import { fetchPostsIfNeeded } from 'actions/reddit.act';

const store = configureStore(hashHistory);

// store.dispatch(addTodo('learn redux'));
// store.dispatch(addTodo('learn react'));

// store.dispatch(fetchPostsIfNeeded('reactjs'));

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="todo" component={Todo}/>
        <Route path="reddit" component={Reddit}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
