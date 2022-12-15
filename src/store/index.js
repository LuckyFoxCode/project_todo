import { configureStore } from '@reduxjs/toolkit';
import colorSlice from './colorSlice';
import todoSlice from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    colors: colorSlice,
  },
});
