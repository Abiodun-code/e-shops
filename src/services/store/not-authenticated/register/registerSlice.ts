import { createSlice } from '@reduxjs/toolkit';
import { registerUser, verifyOtp } from './registerThunk';

const initialState = {
  error: null,
  loading: false,
  message: "",
}

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(registerUser.pending, (state, action) => {
      state.loading = true
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false
      state.message = action.payload
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
    .addCase(verifyOtp.pending, (state, action) => {
      state.loading = true
    })
    .addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false
      state.message = action.payload
    })
    .addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export const registerReducer = registerSlice.reducer
