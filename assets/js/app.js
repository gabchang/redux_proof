/* globals document */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myStore from 'store/reducers/todo.red';
import createApp from 'apps/todo.app.jsx';
import actionCreators from 'actions/action_creators';


const store = createStore(myStore);

const App = createApp(React);

let unsubscribe = store.subscribe(function() { //eslint-disable-line no-unused-vars
  console.log(store.getState());
});

const {addTodo} = actionCreators;
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
