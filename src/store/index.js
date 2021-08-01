import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import userReducer from "./user";

const store = configureStore({
  reducer: { theme: themeReducer, user: userReducer },
});

export default store;
