import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    doLight(state) {
      state.theme = "light";
    },
    doDark(state) {
      state.theme = "dark";
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
