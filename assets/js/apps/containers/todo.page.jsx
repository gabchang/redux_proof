import reactStamp from 'react-stamp';
import todoAdd from '../components/todo_add.comp.jsx';
import todoFilter from '../components/todo_filter.comp.jsx';
import todoList from '../components/todo_list.comp.jsx';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions/action_creators';
import { VisibilityFilters } from 'constants';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;


export default React => {
  const {
    func, array, string, shape
  } = React.PropTypes;

  const TodoAdd = todoAdd(React);
  const TodoFilter = todoFilter(React);
  const TodoList = todoList(React);

  const TodoContainer =  reactStamp(React).compose({
    propTypes: {
      actions: shape({
        addTodo             : func.isRequired,
        toggleCompleteTodo  : func.isRequired,
        setVisibilityFilter : func.isRequired
      }),
      visibleTodos     : array.isRequired,
      visibilityFilter : string.isRequired
    },

    render() {
      const { actions, visibleTodos, visibilityFilter } = this.props;
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <TodoAdd
                onAddClick={ actions.addTodo } />
              <TodoList
                todos={visibleTodos}
                onToggleCompleteClick = { actions.toggleCompleteTodo } />
              <TodoFilter
                filter={visibilityFilter}
                onFilterChange={ actions.setVisibilityFilter } />
            </div>
          </div>
        </div>
      );
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
};


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

function mapStateToProps({ todos, visibilityFilter }) {
  return {
    visibleTodos     : selectTodos(todos, visibilityFilter),
    visibilityFilter : visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
