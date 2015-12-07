import {SET_VISIBILITY_FILTER} from '../constants/todo_filter.cst';

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
