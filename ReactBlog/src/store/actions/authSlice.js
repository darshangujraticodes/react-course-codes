import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = new createSlice({
  name: "AuthSliceName",
  initialState,
  // it should reducers if letter 's' is missing leads to error
  reducers: {
    // reducer has 2 parameter state and action - state define current state and action help to fetch the payload (id, or other data)
    loginAction: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logoutAction: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// in actions if letter 's' is missing lelads to error
export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducers;
