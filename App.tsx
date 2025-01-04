/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import './global.css';

import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ConfigureWrapper from '@/components/configureWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import Main from './src/navigation'
import { StatusBar } from 'expo-status-bar'
import Button from '@/shared/button';
import Title from '@/shared/title';
import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux'
// import { store } from '@/services/store/store'

const App = () => {

  return (
    // <Provider store={store}>
      <ConfigureWrapper>
        <SafeAreaProvider>
         <NavigationContainer>
          <View>
            <Title>Hello</Title>
          </View>
         </NavigationContainer>
          <StatusBar style='light' />
        </SafeAreaProvider>
      </ConfigureWrapper>
    // </Provider>
  )
}

export default App;