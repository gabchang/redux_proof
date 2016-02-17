import * as types from 'constants';


export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
};



let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id  : nextTodoId++,
    text
  };
};

export const toggleCompleteTodo = (id) => {
  return {
    type: types.TOGGLE_COMPLETE_TODO,
    id
  };
};

export const completeAllTodo = () => {
  return {
    type: types.COMPLETE_ALL_TODO
  };
};

export const updateTodo = (id, text) => {
  return {
    type: types.UPDATE_TODO,
    id,
    text
  };
};

export const clearCompletedTodo = () => {
  return {
    type: types.CLEAR_COMPLETED_TODO
  };
};
