import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../constants/todo_filter.cst.js';
import { ADD_TODO, COMPLETE_TODO } from '../constants/todo.cst.js';
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;
const { assign } = Object;


function visibilityFilter(state = SHOW_ALL, {type, filter}) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filter;
    default:
      return state;
  }
}


function todos(state = [], {type, text, index}) {
  switch (type) {
  case ADD_TODO:
    return [
      ...state,
      { text, completed: true }
    ];
  case COMPLETE_TODO:
    return [
      ...state.slice(0, index),
      assign({}, state[index], {
        completed: true
      }),
      ...state.slice(index + 1)
    ];
  default:
    return state;
  }
}

export default combineReducers({
  todos,
  visibilityFilter
});
