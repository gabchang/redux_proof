import { ADD_TODO,
         TOGGLE_COMPLETE_TODO,
         UPDATE_TODO,
         CLEAR_COMPLETED_TODO,
         COMPLETE_ALL_TODO
        } from 'actions/action_types';
import R from 'ramda';


export default function todos(state = [], { type, text, index }) {
  switch (type) {
  case ADD_TODO:
    return R.append({text, completed: false}, state);
  case TOGGLE_COMPLETE_TODO:
    let todo = state[index];
    return R.update(index, R.merge(todo, { completed: !todo.completed }), state);
  case UPDATE_TODO:
    return R.update(index, R.merge(state[index], { text }), state);
  case CLEAR_COMPLETED_TODO:
    return R.reject(R.propEq('completed', true), state);
  case COMPLETE_ALL_TODO:
    return R.map(todo => R.merge(todo, { completed: true } ), state);
  default:
    return state;
  }
}
