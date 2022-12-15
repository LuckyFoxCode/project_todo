import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: 't1',
        color: '#42b883',
        title: 'Products',
        checked: false,
      },
      {
        id: 't2',
        color: '#64c4ed',
        title: 'Front - End',
        checked: true,
      },
    ],
  },
  reducers: {
    addTodoFolder(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        color: action.payload.color,
        title: action.payload.title,
        checked: false,
      });
    },
    removeTodoFolder(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    checkedTodoFolder(state, action) {
      const checkedItem = state.todos.find((todo) => todo.id === action.payload.id);
      checkedItem.checked = !checkedItem.checked;
    },
  },
});

export const { addTodoFolder, checkedTodoFolder, removeTodoFolder } = todoSlice.actions;
export default todoSlice.reducer;
