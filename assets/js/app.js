import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import App from './containers/App'
import myStore from 'store/reducers/todo.red';
const store = createStore(myStore);
import createApp from 'apps/todo.app.jsx';


const App = createApp(React)

let unsubscribe = store.subscribe(function() {
  console.log(store.getState());
})

import actions from 'actions/actions';
const {addTodo} = actions;
store.dispatch(addTodo('learn redux'))
store.dispatch(addTodo('learn react'))
store.dispatch(addTodo('learn react-stamp'))
store.dispatch(addTodo('learn high order components'))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
