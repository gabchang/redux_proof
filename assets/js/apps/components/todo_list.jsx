export default React => (
  ({Todo, todos, onTodoClick}) => (
    <ul>
      { todos.map( mapTodo(Todo, onTodoClick) ) }
    </ul>
  )
);


function mapTodo(Todo, onTodoClick) {
  return function renderTodo(todo, index) {
    return <Todo {...todo} key={index} onClick={ () => onTodoClick(index) } />
  }
}
