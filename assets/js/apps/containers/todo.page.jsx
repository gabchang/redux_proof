import reactStamp from 'react-stamp';
import todoHeader from '../components/todo_header.comp.jsx';
import todoFilter from '../components/todo_filter.comp.jsx';
import todoList from '../components/todo_list.comp.jsx';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions/action_creators';
import { VisibilityFilters } from 'constants';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;


export default React => {
  const {
    func, array, string, shape, number
  } = React.PropTypes;

  const TodoHeader = todoHeader(React);
  const TodoFilter = todoFilter(React);
  const TodoList = todoList(React);

  const TodoContainer =  reactStamp(React).compose({
    displayName: 'TodoContainer',
    propTypes: {
      actions: shape({
        addTodo             : func.isRequired,
        toggleCompleteTodo  : func.isRequired,
        setVisibilityFilter : func.isRequired,
        updateTodo          : func.isRequired,
        completeAllTodo     : func.isRequired
      }),
      visibleTodos     : array.isRequired,
      visibilityFilter : string.isRequired,
      totalCount       : number.isRequired,
      completedCount   : number.isRequired,
      activeCount      : number.isRequired
    },

    render() {
      const { actions,
              visibleTodos,
              visibilityFilter,
              totalCount,
              activeCount,
              completedCount
            } = this.props;
      return (
        <div className="container">
          <div className="row todo-container">
            <div className="col-sm-6 col-sm-offset-3">
              <header>
                <h1>Hello, Todos</h1>
                <TodoHeader totalCount={totalCount}
                  actions={actions} />
              </header>
              <section>
                <TodoList
                  todos={visibleTodos}
                  actions={actions} />
              </section>
              <footer>
                <TodoFilter
                  filter={visibilityFilter}
                  activeCount={activeCount}
                  completedCount={completedCount}
                  actions={actions} />
              </footer>
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
  const totalCount = todos.length;
  const completedCount = todos.reduce((count, todo) => count + (todo.completed ? 1 : 0), 0);
  const activeCount = totalCount - completedCount;

  return {
    visibleTodos     : selectTodos(todos, visibilityFilter),
    visibilityFilter : visibilityFilter,
    totalCount,
    completedCount,
    activeCount
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}
