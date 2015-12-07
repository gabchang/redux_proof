
import { ADD_TODO, COMPLETE_TODO } from '../constants/todo.cst';


export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}
