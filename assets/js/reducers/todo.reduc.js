import { ADD_TODO, TOGGLE_COMPLETE_TODO, UPDATE_TODO } from 'actions/action_types';
import R from 'ramda';



export default function todos(state = [], { type, text, index }) {
  switch (type) {
  case ADD_TODO:
    return R.append({text, completed: false}, state);
  case TOGGLE_COMPLETE_TODO:
    return R.update(index, R.merge(state[index], { completed: !state[index].completed }), state);
  case UPDATE_TODO:
    return R.update(index, R.merge(state[index], { text }), state);
  default:
    return state;
  }
}
