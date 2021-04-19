import { createStore } from 'redux';
import { addTodo } from './reducer/addTodo_reducer';

export const store = createStore(addTodo);

