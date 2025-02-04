import { View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Text } from 'react-native-paper'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { StatusBar } from 'expo-status-bar'
import { NOT_AUTH_PROP } from '@/types/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'

const VerifyOtp = ({ navigation, route }: NOT_AUTH_PROP) => {

  // const { email, password } = route.params as { email: string; password: string }
  // console.log(email, password);

  const [otp, setOtp] = useState('');
  const handleVerify = ()=>{
    if (!otp.trim() || isNaN(Number(otp))) {
      Alert.alert('Enter valid otp')
    }
  }
  
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} font={'i700'} variant={'titleMedium'} iconBg={Colors.blue} iconP={hp(1.2)} iconR={hp(1)} iconColor={Colors.white}>{""}</Title>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2), flex: 1 }}>
        <View style={{ rowGap: hp(.5), paddingTop: hp(3) }}>
          <Title font={'i700'} variant={'headlineMedium'} textA={'left'}>Verify Email</Title>
          <View style={{ flexDirection: 'row', columnGap: hp(.5) }}>
            <Text variant='titleMedium' style={{ fontFamily: 'i400', }}>Enter otp sent to</Text>
            <Text variant='titleMedium' style={{ fontFamily: 'i700' }}>email@gmail.com</Text>
          </View>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput label='Otp' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button bg={Colors.blue} p={hp(2)} borderR={hp(1.5)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Create Account</Title>
          </Button>
        </View>
      </ScrollView>
      <StatusBar />
    </Container>
  )
}

export default VerifyOtp