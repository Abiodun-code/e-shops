import { apiClient } from "@/services/api/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk ("auth/register", async({firstName, lastName, email, password}:{firstName:string, lastName:string, email:string, password:string},{rejectWithValue, dispatch})=>{
  try {
    const response = await apiClient.post('/auth/register', {firstName, lastName, email, password})
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
})

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ({ otp, email }: { otp: number; email: string }, { rejectWithValue }) => {
  try {
    const res = await apiClient.post(`/auth/verify-otp/${email}`, { otp });
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({ message: "Something went wrong" });
  }
});

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const res = await apiClient.post(`/auth/resend-otp/${email}`);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: "Something went wrong" });
    }
  })