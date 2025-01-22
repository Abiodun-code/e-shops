import { View } from 'react-native'
import React from 'react'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { StatusBar } from 'expo-status-bar'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'

const VerifyOtp = () => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} font={'i700'} variant={'headlineSmall'} iconP={hp(1.7)} iconBg={Colors.blue} iconR={hp(6)} iconColor={Colors.white}>Verify Otp</Title>
      <View style={{ flex: 1, justifyContent: 'center', rowGap: hp(3) }}>
        <View style={{ rowGap: hp(.5) }}>
          <Text variant='titleLarge' style={{ fontFamily: 'i400', }}>Verify code sent to email@gmail.com</Text>
        </View>
        <View>
          <CustomInput label='Otp' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button bg={Colors.blue} p={hp(2)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Create account</Title>
          </Button>
        </View>
      </View>
      <StatusBar />
    </Container>
  )
}

export default VerifyOtp