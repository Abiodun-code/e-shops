import { View } from 'react-native'
import React from 'react'
import {Container, CustomInput, Title} from '@/shared/index'
import { StatusBar } from 'expo-status-bar'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'

const SignIn = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} variant={'titleLarge'} iconP={hp(1.7)} iconBg={Colors.blue} iconR={hp(6)} iconColor={Colors.white}>Sign in</Title>
      <View style={{flex:1, justifyContent:'center', rowGap:hp(3)}}>
        <View>
          <Title variant={'displayMedium'} textA={'left'}>Welcome back</Title>
          <Text variant='headlineSmall' style={{fontFamily:'i400', }}>Login to your eShop account</Text>
        </View>
        <View>
          <CustomInput label='Email'/>
          <CustomInput placeholder='Password' />
        </View>
      </View>
      <StatusBar/>
    </Container>
  )
}

export default SignIn