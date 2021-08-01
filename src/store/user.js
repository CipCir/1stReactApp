import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../firebase";
const initialUserState = { userName: null, userEmail: null };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // signup(email, password) {
    //   return auth.createUserWithEmailAndPassword(email, password);
    // },

    // login(email, password) {
    //   return auth.signInWithEmailAndPassword(email, password);
    // },

    // logout() {
    //   return auth.signOut();
    // },

    // resetPassword(email) {
    //   return auth.sendPasswordResetEmail(email);
    // },
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export default userSlice.reducer;
