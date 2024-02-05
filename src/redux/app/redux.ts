import {createSlice} from '@reduxjs/toolkit';

import {actionTypes} from './types';
import {RootState} from '../store';

type AppState = {
  isInit: boolean;
};

//
// Initial state
//

const initialState: AppState = {
  isInit: false,
};

//
// Slice (Actions & Reducers)
//

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: () => undefined,
    setIsInit: (state, action: actionTypes.setIsInit) => {
      const {isInit} = action.payload;
      state.isInit = isInit;
    },
  },
});

export const {reducer, actions} = slice;

//
// Selectors
//

const root = (state: RootState) => state[slice.name];
const isInit = (state: RootState) => root(state).isInit;

export const selectors = {
  isInit,
};
