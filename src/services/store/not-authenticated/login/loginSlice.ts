/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit"
import { loginUser, logoutUser } from "./loginThunk";


const initialState = {
  error: null,
  loading: false,
  accessToken: "",
  refreshToken: "",
  success: false,
}
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers:{
    setAuth(state, action){
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuth(state){
      state.accessToken = "";
      state.refreshToken = "";
      state.success = false;
    }
  },
  extraReducers: (builder) => {

    builder
    .addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = null
    })
    .addCase(loginUser.rejected, (state, action)=>{
      state.error = action.payload
      state.loading = false
    })
    .addCase(logoutUser.pending, (state)=>{
      state.loading = true
    })
    .addCase(logoutUser.fulfilled, (state)=>{
      state.loading = false
      state.success = true
    })
    .addCase(logoutUser.rejected, (state, action)=>{
      state.error = action.payload
      state.loading = false
    })
  }
})

export const loginReducer = loginSlice.reducer

export const { setAuth, clearAuth } = loginSlice.actions