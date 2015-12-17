import R from 'ramda';
import app from './app.page.jsx';
import todo from './todo.page.jsx';

const Pages = {
  App: app,
  Todo: todo
};

export default React => R.map(f => f(React), Pages);
