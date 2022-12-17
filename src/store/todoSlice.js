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
        tasks: [
          { id: 't1', title: 'Milk', checked: false },
          { id: 't2', title: 'Bread', checked: true },
          { id: 't3', title: 'Water', checked: false },
        ],
      },
      {
        id: 't2',
        color: '#64c4ed',
        title: 'Front - End',
        checked: false,
        tasks: [
          { id: 't1', title: 'Film1', checked: false },
          { id: 't2', title: 'Film2', checked: false },
          { id: 't3', title: 'Film3', checked: false },
        ],
      },
      {
        id: 't3',
        color: '#c355f5',
        title: 'Ideas',
        checked: false,
        tasks: [
          { id: 't1', title: 'Ideas - 1', checked: false },
          { id: 't2', title: 'Ideas - 2', checked: false },
          { id: 't3', title: 'Ideas - 3', checked: false },
        ],
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
      state.todos.filter((todo) =>
        todo.id === action.payload.id ? (todo.checked = !todo.checked) : todo,
      );
    },
    addTodoTask(state, action) {
      state.todos.filter((todo) => {
        if (todo.checked === true) {
          return todo.tasks.push({
            id: new Date().toISOString(),
            title: action.payload.title,
            checked: false,
          });
        }
        return todo;
      });
    },
  },
});

export const { addTodoFolder, checkedTodoFolder, removeTodoFolder, addTodoTask } =
  todoSlice.actions;
export default todoSlice.reducer;
