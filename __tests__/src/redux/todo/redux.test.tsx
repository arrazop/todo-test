import {setupListeners} from '@reduxjs/toolkit/query';
import {configureStore} from '@reduxjs/toolkit';
import {todoSlice} from '../../../../src/redux/todo/redux';

describe('todoSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {todos: todoSlice.reducer},
    });
    setupListeners(store.dispatch);
  });

  test('should handle addTodo', () => {
    const title = 'Test Todo';
    const description = 'This is a test todo';

    store.dispatch(todoSlice.actions.addTodo({title, description}));
    const state = store.getState().todos;

    expect(state.todoIds.length).toBe(1);
    expect(state.todosById[state.todoIds[0]].title).toEqual(title);
    expect(state.todosById[state.todoIds[0]].description).toContain(
      description,
    );
  });

  test('should handle toggleComplete', () => {
    const title = 'Test Todo';
    const description = 'This is a test todo';

    store.dispatch(todoSlice.actions.addTodo({title, description}));

    const state = store.getState().todos;
    const todoId = state.todoIds[0];

    expect(state.todosById[todoId].completed).toBe(false);

    store.dispatch(todoSlice.actions.toggleComplete({id: todoId}));

    const updatedState = store.getState().todos;

    expect(updatedState.todosById[todoId].completed).toBe(true);
  });

  test('should handle deleteTodo', () => {
    const title = 'Test Todo';
    const description = 'This is a test todo';

    store.dispatch(todoSlice.actions.addTodo({title, description}));

    const state = store.getState().todos;
    const todoId = state.todoIds[0];

    store.dispatch(todoSlice.actions.deleteTodo({id: todoId}));

    const updatedState = store.getState().todos;

    expect(updatedState.todoIds.length).toBe(0);
    expect(updatedState.todoIds).not.toContain(todoId);
  });
});
