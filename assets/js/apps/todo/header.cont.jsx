import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeAllTodo } from 'actions/todo.act';
import Header from './components/header.comp.jsx';

const mapStateToProps = ({
  todos
}) => {
  return {
    showToggle: todos.length > 0
  };
};

const mapDispatchToProps = (
  dispatch
) => {
  return {
    onClick() {
      dispatch(completeAllTodo());
    },
    onSave(text) {
      dispatch(addTodo(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
