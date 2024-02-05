import {createSlice, nanoid} from '@reduxjs/toolkit';
import {Todo} from '../../types';
import {actionTypes} from './types';
import {RootState} from '../store';

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: actionTypes.addTodo) => {
      const newTodo: Todo = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action: actionTypes.selectedTodo) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: actionTypes.selectedTodo) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const {reducer, actions} = todoSlice;

const root = (state: RootState) => state[todoSlice.name];
const todos = (state: RootState) => root(state).todos;

export const selectors = {
  todos,
};
