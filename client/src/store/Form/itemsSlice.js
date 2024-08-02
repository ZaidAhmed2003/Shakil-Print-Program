// store/Form/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
