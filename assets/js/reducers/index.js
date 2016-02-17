import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { VisibilityFilters } from 'constants';
import todos from './todo.reduc';
import visibilityFilter from './visibility_filter.reduc';
import { selectedReddit, postsByReddit } from './reddit.reduc';

const { SHOW_ALL } = VisibilityFilters;

export const defaultState = {
  todos: [],
  filter: SHOW_ALL
};

export default combineReducers({
  todos,
  visibilityFilter,
  selectedReddit,
  postsByReddit,
  routing: routeReducer
});
