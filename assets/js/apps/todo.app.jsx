import { connect } from 'react-redux';
import createTodoAdd from './components/todo_add.jsx';
import createTodoFilter from './components/todo_filter.jsx';
import createTodoList from './components/todo_list.jsx';
import createTodo from './components/todo.jsx';
import createContainer from './containers/todo.cont.jsx';

export default (React, VisibilityFilters) => {
  const TodoApp = createContainer({
    React,
    TodoAdd    : createTodoAdd(React),
    TodoList   : createTodoList(React),
    Todo       : createTodo(React),
    TodoFilter : createTodoFilter(React),
    VisibilityFilters
  });

  const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters;

  function selectTodos(todos, filter) {
    switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    }
  }

  function select({todos, visibilityFilter}) {
    return {
      visibleTodos: selectTodos(todos, visibilityFilter),
      visibilityFilter: visibilityFilter
    }
  }

  return connect(select)(TodoApp);
}
