import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from 'constants/todo.cst';


// dispatch or not dispatch??
//
export default {
  setVisibilityFilter: filter => ( { type: SET_VISIBILITY_FILTER, filter } ),
  addTodo: text => ( { type: ADD_TODO, text } ),
  completeTodo: index => ( { type: COMPLETE_TODO, index } )
};
