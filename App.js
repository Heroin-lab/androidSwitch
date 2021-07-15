import React from 'react';
import { View } from 'react-native'

import DatePickerSwitch from './DatePickerSwitch'

export default class App extends React.Component {
  render () {
    return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
      width: 400,
      backgroundColor: 'white'
    }}>
      <DatePickerSwitch />
    </View>
    )
  }
};
