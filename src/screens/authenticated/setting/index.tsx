import { View, Text } from 'react-native'
import React from 'react'
import {Container} from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

const Setting = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Text>Setting</Text>
      <StatusBar/>
    </Container>
  )
}

export default Setting