import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, Animated } from 'react-native';

class DatePickerSwitch extends React.Component {
    state = {
        active: false,
        moveAnimation: new Animated.Value(0)
    }

    handleSwitchToggle = () => {
        this.setState({
            active: !this.state.active
        });

        Animated.timing(this.state.moveAnimation, {
            toValue: this.state.active ? 0 : 93,
            timing: 1000,
            useNativeDriver: true,
        }).start()
    }

    render () {
        const styles = StyleSheet.create({
            container: {
                height: 60,
                width: 190,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#A1BDFF',
                backgroundColor: 'rgba(233, 239, 249, 0.5)',
            },

            container__bgText: {
                position: 'absolute',
                top: 19,
                left: 29,
                fontSize: 14,
                color: '#B0B3BA'
            },

            toggle: {
                alignItems: 'center',
                justifyContent: 'center',
                height: 58,
                width: 95,
                borderWidth: 1,
                borderRadius: 19,
                borderColor: '#A1BDFF',
                backgroundColor: '#4950DD',
            },

            lable: {
                fontSize: 14,
                color: '#FFFFFF',
            },

            transformAnimation: {
                transform: [
                    { translateX: this.state.moveAnimation }
                ]
            }
        })
        return (
            <View style={styles.container}>
                    <Text style={styles.container__bgText}>
                        DAILY            MONTHLY
                    </Text>
                    <TouchableWithoutFeedback onPress={this.handleSwitchToggle}>
                        <Animated.View style={[styles.toggle, styles.transformAnimation]}>
                            <Text style={styles.lable}> 
                                {this.state.active ? 'MONTHLY' : 'DAILY'}
                            </Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default DatePickerSwitch;