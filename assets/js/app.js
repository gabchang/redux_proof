/* globals document */

import React from 'react';
import { render } from 'react-dom';
import configureStore from 'store/configure_store';
import { Provider } from 'react-redux';
import app from 'apps/containers/todo.page.jsx';
import {addTodo} from 'actions/action_creators';

const App = app(React);
const store = configureStore();


store.dispatch(addTodo('learn redux'));
store.dispatch(addTodo('learn react'));
store.dispatch(addTodo('learn react-stamp'));
store.dispatch(addTodo('learn high order components'));

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
