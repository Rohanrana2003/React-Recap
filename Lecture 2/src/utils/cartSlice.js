import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    deleteCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addCart, removeItem, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
