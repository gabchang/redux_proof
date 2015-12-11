import { SET_VISIBILITY_FILTER } from 'actions/action_types';
import { VisibilityFilters } from 'constants';

const { SHOW_ALL } = VisibilityFilters;


export default function visibilityFilter(state = SHOW_ALL, {type, filter}) {
  switch (type) {
  case SET_VISIBILITY_FILTER:
    return filter;
  default:
    return state;
  }
}
