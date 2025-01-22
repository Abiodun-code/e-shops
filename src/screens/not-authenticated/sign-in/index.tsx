import { View } from 'react-native'
import React from 'react'
import {Button, Container, CustomInput, Title} from '@/shared/index'
import { StatusBar } from 'expo-status-bar'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'

const SignIn = ({navigation}: NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} font={'i700'} variant={'headlineSmall'} iconP={hp(1.7)} iconBg={Colors.blue} iconR={hp(6)} iconColor={Colors.white}>Sign in</Title>
      <View style={{flex:1, justifyContent:'center', rowGap:hp(3)}}>
        <View style={{rowGap:hp(.5)}}>
          <Title font={'i500'} variant={'displaySmall'} textA={'left'}>Welcome back</Title>
          <Text variant='titleLarge' style={{fontFamily:'i400', }}>Login to your eShop account</Text>
        </View>
        <View>
          <CustomInput label='Email' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <CustomInput label='Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button mb={hp(2.5)} bg={Colors.white} press={() => {navigation.navigate(NOT_AUTHENTICATED_PATH.ForgetPasswordStack)}}>
            <Title textA={'right'} font={'i500'} variant={'titleSmall'}>Forget password</Title>
          </Button>
         <Button bg={Colors.blue} p={hp(2)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Log in</Title>
          </Button>
        </View>
      </View>
      <StatusBar/>
    </Container>
  )
}

export default SignIn