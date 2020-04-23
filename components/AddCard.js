import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import Message from './HelperComponents/Message'


function AddCard() {
   
    const [question, onChangeQuestion] = useState('');
    const [answer, onChangeAnswer] = useState('');

    const handleSubmit = () => {
        console.log(question, answer)
    }

    return (
        <KeyboardAvoidingView style={styles.MainContainer}>
            <Message message={'New question ?'} />
            <View style={styles.bottom}>
                <TextInput
                    style={{ width: 300, height: 40, fontSize: 15, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeQuestion(text)}
                    value={question} placeholder="e.g. What are components"
                />
            </View>
            <Message message={'Answer ?'} />
            <View style={styles.bottom} >
                <TextInput
                    style={{ width: 300, height: 40, fontSize: 15, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeAnswer(text)}
                    value={answer} placeholder="e.g. What are components"
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Text style={styles.textStyle}>Add New Card</Text>
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
        paddingBottom:30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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


export default AddCard