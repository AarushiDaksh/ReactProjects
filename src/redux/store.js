import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

    devTools:process.env.NODE_ENV !== 'production'
});
