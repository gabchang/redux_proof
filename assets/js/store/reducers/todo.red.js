import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from 'actions/action_types';
import { VisibilityFilters } from 'app_constants';

const { SHOW_ALL } = VisibilityFilters;
const { assign } = Object;

export const defaultState = {
  todos: [],
  visibilityFilter: SHOW_ALL
};


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
      { text, completed: false }
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
