import todo from './todo.comp.jsx';

export default React => {
  const Todo = todo(React);

  function TodoList({todos, onToggleCompleteClick }) {
    return (
      <ul>
        { todos.map( mapTodo(Todo, onToggleCompleteClick) ) }
      </ul>
    );
  }

  const {
    array, func
  } = React.PropTypes;


  TodoList.propTypes = {
    todos                 : array.isRequired,
    onToggleCompleteClick : func.isRequired
  };

  return TodoList;
};

function mapTodo(Todo, onToggleCompleteClick) {
  return function renderTodo(todo, index) {
    return (
      <Todo {...todo}
            key={index}
            onClick={() => onToggleCompleteClick(index) } />
    );
  };
}
