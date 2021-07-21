import React from 'react';
import { View } from 'react-native'

import DatePickerSwitch from './DatePicker/DatePickerSwitch'
import MonthPicker from './DatePicker/MonthPicker';

export default class App extends React.Component {
  render () {
    return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
      width: 400,
      backgroundColor: 'white'
    }}>
      <MonthPicker/>
      <DatePickerSwitch/>
    </View>
    )
  }
};
