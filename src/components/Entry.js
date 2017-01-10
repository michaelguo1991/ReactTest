import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from '../reducers';
import TodoApp from './TodoApp';

const store = createStore(appReducers);
store.subscribe(() => {
  console.log(store.getState());
});

const Entry = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default Entry;
