import React from 'react';
import Todo from './todo.comp.jsx';

const {
  func, array
} = React.PropTypes;

const List = ({
  todos,
  onTodoSave,
  onTodoClick
}) => (
  <ul className="list-group">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        onSave={text => (
          onTodoSave(todo.id, text)
        )}
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />
    )}
  </ul>
)

List.propTypes = {
  todos: array.isRequired,
  onTodoSave: func.isRequired,
  onTodoClick: func.isRequired
};


export default List;
