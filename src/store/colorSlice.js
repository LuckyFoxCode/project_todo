import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    colors: [
      { id: 'c0', color: '#c9d1d3', checked: true },
      { id: 'c1', color: '#42b883', checked: false },
      { id: 'c2', color: '#64c4ed', checked: false },
      { id: 'c3', color: '#ffbbcc', checked: false },
      { id: 'c4', color: '#b6e6bd', checked: false },
      { id: 'c5', color: '#c355f5', checked: false },
      { id: 'c6', color: '#09011a', checked: false },
      { id: 'c7', color: '#ff6464', checked: false },
    ],
  },
  reducers: {},
});

export const { checkedColor } = colorSlice.actions;
export default colorSlice.reducer;
