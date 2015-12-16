import todo from './todo.comp.jsx';

export default React => {
  const Todo = todo(React);

  const TodoList = ({todos, actions}) => {
    return (
      <ul className="list-group">
        { todos.map( mapTodo(Todo, actions) ) }
      </ul>
    );
  };

  const {
    array, func, shape
  } = React.PropTypes;


  TodoList.propTypes = {
    todos              : array.isRequired,
    actions: shape({
      toggleCompleteTodo : func.isRequired,
      updateTodo         : func.isRequired
    }).isRequired
  };

  return TodoList;
};

function mapTodo(Todo, actions) {
  return function renderTodo(todo, index) {
    return (
      <Todo
        {...todo}
        todoId={index}
        key={index}
        actions={actions} />
    );
  };
}
