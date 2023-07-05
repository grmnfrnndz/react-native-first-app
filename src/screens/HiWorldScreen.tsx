import React from 'react'
import { Text, View } from 'react-native'

export const HiWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
      }}
    >
      <Text
      style={{
        fontSize: 40,
        textAlign: 'center'
      }}
      >
        Hi LEPMAH
      </Text>
    </View>
  )
}
