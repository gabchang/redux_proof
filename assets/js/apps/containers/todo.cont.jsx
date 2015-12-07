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
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <TodoAdd
                onAddClick={ getLoger('add todo') } />
              <TodoList
                Todo={Todo}
                todos={todos}
                onItemClick={ getLoger('todo clicked') } />
              <TodoFilter
                filter="SHOW_ALL"
                onFilterChange={ getLoger('filter change') }
                VisibilityFilters={VisibilityFilters} />
            </div>
          </div>
        </div>
      );
    }
  })
);

function getLoger(type) {
  return (text) => {console.log(type, text)};
}

var todos = [
              {
                text: 'Use Redux',
                completed: true
              },
              {
                text: 'Learn to connect it to React',
                completed: false
              }
            ];
