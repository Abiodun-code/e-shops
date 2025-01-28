import { View,ScrollView } from 'react-native'
import React from 'react'
import { Button, Container, CustomInput, Title } from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import { Colors } from '@/constants/Colors'
import { Text } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { NOT_AUTH_PROP, NOT_AUTHENTICATED_PATH } from '@/types/not-authenticated'

const ChangePassword = ({ navigation }: NOT_AUTH_PROP) => {
  return (
    <Container padX={hp(2)} bgColor={Colors.white}>
      <Title showIcon={true} font={'i700'} variant={'titleMedium'} iconBg={Colors.blue} iconP={hp(1.2)} iconR={hp(1)} iconColor={Colors.white}>{""}</Title>
      <ScrollView contentContainerStyle={{ paddingVertical: hp(2), flex: 1 }}>
        <View style={{ rowGap: hp(.5), paddingTop: hp(3) }}>
          <Title font={'i700'} variant={'headlineMedium'} textA={'left'}>Change password</Title>
          <Text variant='titleMedium' style={{ fontFamily: 'i400' }}>Enter the new password you wish to use</Text>
        </View>
        <View style={{ paddingTop: hp(2) }}>
          <CustomInput label='New Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <CustomInput label='Confirm Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button bg={Colors.blue} p={hp(2)} borderR={hp(1.5)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Confirm</Title>
          </Button>
        </View>
      </ScrollView>
      <StatusBar />
    </Container>
  )
}

export default ChangePassword