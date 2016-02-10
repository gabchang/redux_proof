import React from 'react';
import { connect } from 'react-redux';
import TodoList from 'apps/components/todo/list.comp.jsx';
import { VisibilityFilters } from 'constants';
import { updateTodo, toggleCompleteTodo } from 'actions/action_creators';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTodos = (
  todos,
  filter
) =>  {
  switch (filter) {
  case SHOW_ALL:
    return todos;
  case SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

const mapStateToProps = (
  state
) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (
  dispatch
) => {
  return {
    onTodoSave: (id, text) => {
      dispatch(updateTodo(id, text))
    },
    onTodoClick: (id) => {
      dispatch(toggleCompleteTodo(id))
    }
  }
}

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleList;
