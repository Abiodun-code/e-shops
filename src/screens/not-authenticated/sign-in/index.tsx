import { ScrollView, View } from 'react-native'
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
      <Title showIcon={true} font={'i700'} variant={'titleMedium'} iconBg={Colors.blue} iconP={hp(1.2)} iconR={hp(1)} iconColor={Colors.white}>{""}</Title>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2), flex:1 }}>
        <View style={{ rowGap: hp(.5), paddingTop:hp(3)}}>
          <Title font={'i700'} variant={'headlineMedium'} textA={'left'}>Welcome back</Title>
          <Text variant='titleMedium' style={{ fontFamily: 'i400', }}>Login to your eShop account</Text>
        </View>
        <View style={{paddingTop:hp(2)}}>
          <CustomInput label='Email' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <CustomInput label='Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button mb={hp(2.5)} bg={Colors.white} press={() => { navigation.navigate(NOT_AUTHENTICATED_PATH.ForgetPasswordStack) }}>
            <Title textA={'right'} font={'i500'} variant={'titleSmall'}>Forget password</Title>
          </Button>
          <Button bg={Colors.blue} p={hp(2)} borderR={hp(1.5)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Log in</Title>
          </Button>
        </View>
      </ScrollView>
    </Container>
  )
}

export default SignIn