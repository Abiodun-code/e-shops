import { configureStore } from "@reduxjs/toolkit"
import { loginReducer } from "./not-authenticated/login/loginSlice"

export const store = configureStore ({
  reducer: {
    login: loginReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>