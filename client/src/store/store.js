import { configureStore } from "@reduxjs/toolkit";
import purchaseOrderSlice from "./PurchaseOrder/PurchaseOrderSlice";
import fetchPurchaseOrdersSlice from "./Data/fetchPurchaseOrdersSlice";
import itemsReducer from "./Form/itemsSlice";
import authReducer from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    itemsSlice: itemsReducer,
    purchaseOrderData: fetchPurchaseOrdersSlice,
    purchaseOrders: purchaseOrderSlice,
    auth: authReducer,
  },
});
