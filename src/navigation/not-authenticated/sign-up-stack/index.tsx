/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NOT_AUTHENTICATED_PARAM, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'
import { SignUp } from '@/screens/not-authenticated'

const { Navigator, Screen } = createNativeStackNavigator<NOT_AUTHENTICATED_PARAM>()

const SignUpStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={NOT_AUTHENTICATED_PATH.SignUp}>
      <Screen name={NOT_AUTHENTICATED_PATH.SignUp} component={SignUp} />

      {/* <Screen name={NOT_AUTHENTICATED_PATH.VerifyOtp} component={VerifyOtp} /> */}
    </Navigator>
  )
}

export default SignUpStack