// src/store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "./../../utils/tokenUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!getToken(),
    user: null,
    token: getToken(),
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Remove the token from local storage
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
