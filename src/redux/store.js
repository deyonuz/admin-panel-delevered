import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slices/orderSlice";
import clientReducer from "./slices/clientSlice";

export const store = configureStore({
  reducer: {
    orderState: orderReducer,
    clientState: clientReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
})