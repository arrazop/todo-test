import {createSelector, createSlice, nanoid} from '@reduxjs/toolkit';
import {Todo} from '../../types';
import {actionTypes} from './types';
import {RootState} from '../store';

type TodoState = {
  todosById: Record<string, Todo>;
  todoIds: string[];
};

const initialState: TodoState = {
  todosById: {},
  todoIds: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: actionTypes.addTodo) => {
      const {title, description} = action.payload;
      const id = nanoid();
      const createdAt = new Date().toISOString();
      const newTodo = {
        id,
        title,
        description,
        createdAt,
        completed: false,
      };
      state.todosById[id] = newTodo;
      state.todoIds.push(id);
    },
    toggleComplete: (state, action: actionTypes.selectedTodo) => {
      const todoId = action.payload.id;
      if (state.todosById[todoId]) {
        state.todosById[todoId].completed = !state.todosById[todoId].completed;
      }
    },
    deleteTodo: (state, action: actionTypes.selectedTodo) => {
      const todoId = action.payload.id;
      if (state.todosById[todoId]) {
        delete state.todosById[todoId];
        state.todoIds = state.todoIds.filter(id => id !== todoId);
      }
    },
  },
});

export const {reducer, actions} = todoSlice;

const root = (state: RootState) => state[todoSlice.name];

const todosById = createSelector(root, todoState => todoState.todosById);
const todoIds = createSelector(root, todoState => todoState.todoIds);
const todos = createSelector(root, todosState =>
  todosState.todoIds.map(id => todosState.todosById[id]),
);
const selectCompletedTodos = createSelector(root, todoList =>
  todoList.todoIds.filter(id => todoList.todosById[id].completed),
);
const selectIncompletesTodos = createSelector(root, todoList =>
  todoList.todoIds.filter(id => !todoList.todosById[id].completed),
);

export const selectors = {
  todosById,
  todoIds,
  todos,
  selectCompletedTodos,
  selectIncompletesTodos,
};
