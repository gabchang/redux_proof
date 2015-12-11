import * as types from './action_types';


export function setVisibilityFilter (filter) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}

export function addTodo (text) {
  return { type: types.ADD_TODO, text };
}

export function toggleCompleteTodo (index) {
  return { type: types.TOGGLE_COMPLETE_TODO, index };
}


export function updateTodo (index, text) {
  return { type: types.UPDATE_TODO, index, text };
}