import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

function Quiz()  {
    return (
        <View style={styles.MainContainer}>
        <Text> This is Main Container View. </Text>
            <View style={styles.bottom}>
                <Text style={styles.textStyle}>Answer</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    bottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    textStyle: {
        color: '#fff',
        fontSize: 22
    }
})

export default Quiz