import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createTodoAdd from 'apps/components/todo_add.jsx';
import createTodoList from 'apps/components/todo_list.jsx';
import createTodo from 'apps/components/todo.jsx';
import createContainer from 'apps/containers/todo.cont.jsx';
import createTodoFilter from 'apps/components/todo_filter.jsx';
import actions from 'actions/actions';
import { VisibilityFilters } from 'constants/todo.cst';

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

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
  }

  return connect(select, mapDispatchToProps)(TodoApp);
}
