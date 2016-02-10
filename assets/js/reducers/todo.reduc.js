import R from 'ramda';
import { ADD_TODO,
         TOGGLE_COMPLETE_TODO,
         UPDATE_TODO,
         CLEAR_COMPLETED_TODO,
         COMPLETE_ALL_TODO
       } from 'constants';


function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
      break;
    case TOGGLE_COMPLETE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return R.merge(state, { completed: !state.completed })
    case UPDATE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return R.merge(state, { text: action.text })
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return R.append(todo(undefined, action), state);
  case TOGGLE_COMPLETE_TODO:
  case UPDATE_TODO:
    return R.map(t => (
      todo(t, action)
    ), state)
  case CLEAR_COMPLETED_TODO:
    return R.reject(R.propEq('completed', true), state);
  case COMPLETE_ALL_TODO:
    return R.map(todo => R.merge(todo, { completed: true } ), state);
  default:
    return state;
  }
}
