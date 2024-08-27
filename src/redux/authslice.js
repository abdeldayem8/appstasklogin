import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
    name:'auth',
    initialState: {
        token: null,
        isAuthenticated: false
      },
      reducers: {
        setToken: (state, action) => {
          state.token = action.payload;
          state.isAuthenticated = true;
        },
        logout: (state) => {
          state.token = null;
          state.isAuthenticated = false;
        }
      }
});

export const { setToken, logout } = authslice.actions;

export default authslice.reducer;