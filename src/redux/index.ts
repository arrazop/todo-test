import * as appRedux from './app/redux';
import * as todoRedux from './todo/redux';

export const actions = {
  app: appRedux.actions,
  todo: todoRedux.actions,
};

export const selectors = {
  app: appRedux.selectors,
  todo: todoRedux.selectors,
};

export const reducers = {
  app: appRedux.reducer,
  todo: todoRedux.reducer,
};
