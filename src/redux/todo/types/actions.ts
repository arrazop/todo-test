import {PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '../../../types';

export type addTodo = PayloadAction<Pick<Todo, 'title' | 'description'>>;
export type selectedTodo = PayloadAction<{id: string}>;
