import { configureStore } from "@reduxjs/toolkit";
import { jwelleryApi } from "./jwellerySlice";

const store = configureStore({
  reducer: {
    [jwelleryApi.reducerPath]: jwelleryApi.reducer,
  },
  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(jwelleryApi.middleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
