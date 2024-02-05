import {PayloadAction} from '@reduxjs/toolkit';
import {Todo} from '../../../types';

export type addTodo = PayloadAction<Todo>;
export type selectedTodo = PayloadAction<{id: string}>;
