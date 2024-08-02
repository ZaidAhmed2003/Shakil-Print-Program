import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data
export const fetchPurchaseOrders = createAsyncThunk(
  "purchaseOrders/fetchPurchaseOrders",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/shakilprint/purchaseorders",
    ); // Server Endpoint For PurchaseOrders
    return response.data;
  },
);

// Purchse Order SLice
const purchaseOrdersSlice = createSlice({
  name: "purchaseOrders",
  initialState: {
    purchaseOrders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchaseOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPurchaseOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.purchaseOrders = action.payload;
      })
      .addCase(fetchPurchaseOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default purchaseOrdersSlice.reducer;
