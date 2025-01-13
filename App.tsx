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
import { NavigationContainer } from '@react-navigation/native';
import Title from '@/shared/title';
import Button from '@/shared/button';
import { hp } from '@/utils/responsiveHelper';
// import { Provider } from 'react-redux'
// import { store } from '@/services/store/store'

const App = () => {

  return (
    // <Provider store={store}>
      <ConfigureWrapper>
        <SafeAreaProvider>
         <NavigationContainer>
          <View className='flex-1 justify-center items-center'>
            <Title>Hello</Title>
            <Button  p={hp(5)} bg={'red'}>
              <Text >click</Text>
            </Button>
          </View>
         </NavigationContainer>
          <StatusBar style='light' />
        </SafeAreaProvider>
      </ConfigureWrapper>
    // </Provider>
  )
}

export default App;