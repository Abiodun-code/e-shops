import { configureStore } from "@reduxjs/toolkit"
import { loginReducer } from "./not-authenticated/login/loginSlice"
import { registerReducer } from "./not-authenticated/register/registerSlice"

export const store = configureStore ({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>