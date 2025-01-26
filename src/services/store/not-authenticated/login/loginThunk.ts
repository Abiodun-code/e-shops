/* eslint-disable prettier/prettier */
import { apiClient } from "@/services/api/apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { clearAuth, setAuth } from "./loginSlice";

export const loginUser = createAsyncThunk('auth/login', async({email, password}:{email:string, password:string}, {rejectWithValue, dispatch})=>{
  try {
    const response = await apiClient.post("/auth/login", {email, password})
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    const role = response.data.role;

    // Check if the user is user
    if(role !== "ROLE_USER"){
      Alert.alert('Only user are allowed to login')
      return rejectWithValue({message: "You are not authorized to access this page"});
    }

    await AsyncStorage.setItem('accessToken', accessToken)
    await AsyncStorage.setItem('refreshToken', refreshToken)

    dispatch(setAuth({accessToken, refreshToken}))

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue({message: "Something went wrong"});
  }
})

export const logoutUser = createAsyncThunk('auth/logout', async(_, {rejectWithValue, dispatch})=>{
  try {
    
    await AsyncStorage.multiRemove(['accessToken', 'refreshToken'])

    dispatch(clearAuth())

    return Alert.alert('Logout successful')
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
})