import React, { useState } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const MonthPicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [fullDate, updateFullDate] = useState(getNormalDate());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    updateFullDate(getNormalDate(date))
    hideDatePicker();
  };

  const styles = StyleSheet.create({
      monthButton: {
          alignItems: 'center',
          justifyContent: 'center',
          width: 95,
          height: 37,
          backgroundColor: '#E9EFF9',
          borderRadius: 12,
          fontSize: 14,
      }
  })

  return (
    <View>
        <TouchableOpacity style={styles.monthButton} onPress={showDatePicker}>
        <Text>{fullDate}</Text>
        </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        value='date'
        mode='date'
        is24Hour={true}
        locale={true}
        display='default'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const getNormalDate = (newDate) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    if (newDate) {
        newGenDate = newDate.toISOString().split('T')[0].split('-');
        correctMonth = newGenDate[1][0] == 0 ? newGenDate[1][1] : newGenDate[1]
        return `${monthNames[correctMonth-1]} ${newGenDate[0]}`
    } else {
        return monthNames[new Date().getMonth()] + ' ' + new Date().getFullYear();
    }   
  };

export default MonthPicker;