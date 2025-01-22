import { View } from 'react-native'
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
      <Title showIcon={true} font={'i700'} variant={'headlineSmall'} iconP={hp(1.7)} iconBg={Colors.blue} iconR={hp(6)} iconColor={Colors.white}>Forget Password</Title>
      <View style={{ flex: 1, justifyContent: 'center', rowGap: hp(3) }}>
        <View style={{ rowGap: hp(.5) }}>
          <Text variant='titleLarge' style={{ fontFamily: 'i400', }}>Input your new password</Text>
        </View>
        <View>
          <CustomInput label='Change Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <CustomInput label='Confirm Password' textColor={Colors.black} activeOutlineColor={Colors.blue} cursorColor={Colors.black} bg={Colors.blue} />
          <Button bg={Colors.blue} p={hp(2)}>
            <Title font={'i700'} variant={'titleSmall'} color={Colors.white}>Confirm</Title>
          </Button>
        </View>
      </View>
      <StatusBar />
    </Container>
  )
}

export default ChangePassword