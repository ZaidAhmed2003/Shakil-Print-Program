// src/store/auth/authActions.js

import axios from "axios";
import { loginSuccess } from "./authSlice";

// Action creator for logging in a user
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/login",
      credentials,
    );
    const { token, user } = response.data;

    // Save token to localStorage
    localStorage.setItem("token", token);

    // Dispatch loginSuccess with user data
    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    console.error("Login failed", error);
    throw error; // Let the component handle the error
  }
};
