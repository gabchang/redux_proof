import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import App from './containers/App'
import myStore from './store/reducers/todo.red.js';
const store = createStore(myStore);
import createApp from './apps/todo.app.jsx';

import { VisibilityFilters } from './store/constants/todo_filter.cst.js';

const App = createApp(React, VisibilityFilters)


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
