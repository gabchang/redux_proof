import reactStamp from 'react-stamp';

export default ({
  React,
  TodoAdd,
  TodoFilter,
  Todo,
  TodoList,
  VisibilityFilters
}) => (
  reactStamp(React).compose({
    render() {
      const { actions, visibleTodos, visibilityFilter } = this.props;
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <TodoAdd
                onAddClick={ actions.addTodo } />
              <TodoList
                Todo={Todo}
                todos={visibleTodos}
                onTodoClick={ actions.completeTodo } />
              <TodoFilter
                filter={visibilityFilter}
                onFilterChange={ actions.setVisibilityFilter }
                VisibilityFilters={VisibilityFilters} />
            </div>
          </div>
        </div>
      );
    }
  })
)
