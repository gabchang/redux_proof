import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createTodoAdd from './components/todo_add.jsx';
import createTodoList from './components/todo_list.jsx';
import createTodo from './components/todo.jsx';
import createTodoFilter from './components/todo_filter.jsx';
import createContainer from './containers/todo.cont.jsx';
import actionCreators from 'actions/action_creators';
import { VisibilityFilters } from 'app_constants';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

export default (React) => {
  const TodoApp = createContainer({
    React,
    TodoAdd    : createTodoAdd(React),
    TodoList   : createTodoList(React),
    Todo       : createTodo(React),
    TodoFilter : createTodoFilter(React),
    VisibilityFilters
  });


  function selectTodos(todos, filter) {
    switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    }
  }

  function select({todos, visibilityFilter}) {
    return {
      visibleTodos     : selectTodos(todos, visibilityFilter),
      visibilityFilter : visibilityFilter
    };
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
  }

  return connect(select, mapDispatchToProps)(TodoApp);
};
