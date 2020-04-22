import Constants from 'expo-constants'
import {View, StatusBar} from 'react-native';
import React from 'react'

export const AppStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}