import React from 'react'
import { SafeAreaView } from 'react-native'

// import { HiWorldScreen } from './src/screens/HiWorldScreen'
// import { CounterScreen } from './src/screens/CounterScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { DimensionScreen } from './src/screens/DimensionScreen'
// import { PositionScreen } from './src/screens/PositionScreen'
// import { FlexScreen } from './src/screens/FlexScreen'
import { WorkHome } from './src/screens/WorkHome'

export const App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
         {/* <HiWorldScreen/>
          <CounterScreen/> 
          <BoxObjectModelScreen/>
          <DimensionScreen/>
          <PositionScreen/>
          <FlexScreen/>
        */}
        <WorkHome/>
      </SafeAreaView>
  )
}
