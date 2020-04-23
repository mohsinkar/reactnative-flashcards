import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Platform, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Message from './HelperComponents/Message'


const AddDeck = () => {

    const [deckName, onChangeName] = useState('');
    const _handleAlert = () => {
        return (Alert.alert(
            "Invalid Deck Name",
            "Deck Name Should be atleast 2 characters",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        ))
    }

    const handleSubmit = () => {
        if (deckName.length < 2) {  
            _handleAlert() 
            return
        }

        //Call Add Deck API

        // Update Redux

    }

    return (
        <KeyboardAvoidingView style={styles.MainContainer}>
            <Message message={'Title of the new Deck'} />
            <View style={styles.bottom}>
                <TextInput
                    style={{ width: 300, height: 50, fontSize: 22, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeName(text)}
                    value={deckName} placeholder="e.g. Learn React"
                />
            </View>
            <View style={styles.action}>
            <TouchableOpacity onPress={() => handleSubmit()}>
                <Text style={styles.textStyle}>Add Deck</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    },
    bottom: {
        paddingTop: 55,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    action: {
        paddingTop: 55,
    },
    textStyle: {
        backgroundColor: '#FF9800',
        padding: 10,
        paddingLeft: 60,
        paddingRight: 60,
        color: '#fff',
        fontSize: 22
    }
})


export default AddDeck