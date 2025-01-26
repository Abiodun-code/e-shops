/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import './global.css';
import 'react-native-gesture-handler';
import React, { useState } from 'react'
import ConfigureWrapper from '@/components/configureWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Main from './src/navigation';
import { Provider } from 'react-redux';
import { store } from '@/services/store/store';

const App = () => {

  return (
    <Provider store={store}>
      <ConfigureWrapper>
        <SafeAreaProvider>
         <Main/>
        <StatusBar />
        </SafeAreaProvider>
      </ConfigureWrapper>
    </Provider>
  )
}

export default App;