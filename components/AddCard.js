import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import Message from './HelperComponents/Message'
import { white } from '../utils/colors'
import { addNewCardDB } from '../utils/api'
import { useDispatch } from 'react-redux'
import { newCard } from '../actions/decks'
import { useNavigation } from '@react-navigation/native';


const AddCard = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [deck] = useState(props.route.params.deck);

    const _handleAlert = () => {
        return (Alert.alert(
            "Invalid Card Q&A",
            "Card Q&A should be atleast 1 character",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        ))
    }


    const handleSubmit = () => {
        if (question.length < 1 || answer.length < 1) {
            _handleAlert()
            return
        }
        addNewCardDB(deck.id,{question, answer}) //Call Add Card API addNewCardDB(deck)
        dispatch(newCard(deck.id, question, answer)) // Update Redux
        setQuestion("") //reset 
        setAnswer("")
        navigation.navigate('DeckDetails', { deck: deck })  //navigate to the deck details
    }

    return (
        <KeyboardAvoidingView style={styles.MainContainer}>
            <Message message={'New question ?'} />
            <View style={styles.bottom}>
                <TextInput
                    style={{ width: 300, height: 40, fontSize: 15, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setQuestion(text)}
                    value={question} placeholder="e.g. What are components"
                />
            </View>
            <Message message={'Answer ?'} />
            <View style={styles.bottom} >
                <TextInput
                    style={{ width: 300, height: 40, fontSize: 15, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setAnswer(text)}
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
        backgroundColor: white,
    },
    bottom: {
        paddingBottom: 30,
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
    }, info: {
        fontSize: 25,
        paddingTop: 5,

    },
})


export default AddCard