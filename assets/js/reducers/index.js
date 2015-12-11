import { combineReducers } from 'redux';
import { VisibilityFilters } from 'constants';
import todos from './todo.reduc';
import visibilityFilter from './visibility_filter.reduc';

const { SHOW_ALL } = VisibilityFilters;

export const defaultState = {
  todos: [],
  visibilityFilter: SHOW_ALL
};

export default combineReducers({
  todos,
  visibilityFilter
});
