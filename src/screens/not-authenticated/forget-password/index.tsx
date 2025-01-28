import { ScrollView, View } from 'react-native'
import React from 'react'
import {Button, Container, CustomInput, Title} from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'
import { AUTHENTICATED_PATH } from '@/types/authenticated'

const ForgetEmail = ({navigation}:NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} font={'i700'} variant={'titleMedium'} iconBg={Colors.blue} iconP={hp(1.2)} iconR={hp(1)} iconColor={Colors.white}>{""}</Title>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2), flex:1 }}>
        <View style={{ rowGap: hp(.5), paddingTop:hp(3) }}>
          <Title font={'i700'} variant={'headlineMedium'} textA={'left'}>Recovery Email</Title>
          <Text variant='titleMedium' style={{ fontFamily: 'i400', }}>User your email to receive otp</Text>
        </View>
        <View style={{paddingTop:hp(2)}}>
          <CustomInput label='Email' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button bg={Colors.blue} p={hp(2)} borderR={hp(1.5)} press={()=>navigation.navigate(NOT_AUTHENTICATED_PATH.ForgetOtp)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Next</Title>
          </Button>
        </View>
      </ScrollView>
      <StatusBar />
    </Container>
  )
}

export default ForgetEmail