import React from 'react';
import { connect } from 'react-redux';
import { clearCompletedTodo } from 'actions/todo.act';
import Footer from './components/footer.comp.jsx';


const mapStateToProps = (state) => {
  const { todos } = state;
  const totalCount = todos.length;
  const completedCount = todos.reduce((count, todo) => count + (todo.completed ? 1 : 0), 0);

  return {
    activeCount: totalCount - completedCount,
    completedCount
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompletedTodo() {
      return dispatch(clearCompletedTodo())
    }
  }
}

const FooterC = connect(mapStateToProps, mapDispatchToProps)(Footer);
FooterC.displayName = 'FooterC';

export default FooterC;
