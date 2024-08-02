import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 

const purchaseOrderSlice = createSlice({
  name: "purchaseOrderSlice",
  initialState,
  reducers: {
    openPurchaseOrder: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    closePurchaseOrder: (state, action) => {
      return state.filter(
        (purchaseOrderNumber) => purchaseOrderNumber !== action.payload,
      );
    },
  },
});

export const { openPurchaseOrder, closePurchaseOrder } =
  purchaseOrderSlice.actions;

export default purchaseOrderSlice.reducer;
