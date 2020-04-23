import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Message from './HelperComponents/Message'
import { useNavigation } from '@react-navigation/native';
import { clearlocalNotofication, setLocalNotification } from '../utils/helper'

function Quiz(props) {

    const [deck] = useState(props.route.params.deck);
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [wrongAnswer, setWrongAnswer] = useState(0)
    const [displayAnswer, setDisplayAnswer] = useState(false)
    const [qCounter, setQCounter] = useState(1)
    const navigation = useNavigation();

    const _getCouter = () => {
        return (
            <Text style={{ paddingBottom: 20, paddingTop: 20 }}>Question {qCounter} of {deck.cards.length}</Text>
        )
    }


    const _getQuestion = () => {
        if (deck.cards.length > qCounter - 1) {
            return (
                <View>
                    {_getCouter()}
                    <View>
                        {displayAnswer ? <Message message={deck.cards[qCounter - 1].answer} /> : <Message message={deck.cards[qCounter - 1].question} />}
                    </View>
                    <View style={{ paddingTop: 30, paddingBottom: 50 }}>
                        <TouchableOpacity onPress={() => setDisplayAnswer(!displayAnswer)}>
                            <Text style={styles.textStyle}>Show {!displayAnswer ? 'Answer' : 'Question'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "column", alignItems: 'center', }}>
                        <View style={{ paddingBottom: 40 }}>
                            <TouchableOpacity onPress={() => {
                                setCorrectAnswer(correctAnswer + 1)
                                setQCounter(qCounter + 1)
                            }
                            }>
                                <Text style={styles.btnStyleCorrect}>Correct</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => {
                                setWrongAnswer(wrongAnswer + 1)
                                setQCounter(qCounter + 1)
                            }
                            }>
                                <Text style={styles.btnStyleWrong}>Wrong</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        } else {

            clearlocalNotofication().then(setLocalNotification)

            return (
                <View>
                    <View style={{ paddingTop: 40 }}>
                        <Message message={'Results'} />
                    </View>
                    <View style={{ paddingTop: 30, paddingBottom: 50 }}>
                        <Text style={styles.info}> Score: {Math.floor(correctAnswer / (wrongAnswer + correctAnswer) * 100)} %</Text>
                    </View>
                    <View style={{ flexDirection: "column", alignItems: 'center', }}>
                        <View style={{ paddingBottom: 40 }}>
                            <TouchableOpacity onPress={() => {
                                setCorrectAnswer(0)
                                setWrongAnswer(0)
                                setDisplayAnswer(false)
                                setQCounter(1)
                            }
                            }>
                                <Text style={styles.textStyle}>Restart Quiz</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => navigation.navigate('DeckDetails', { deckid: deck.id })} >
                                <Text style={styles.textStyle}>Back to Deck</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    }
    return (
        <ScrollView>
            <View style={styles.MainContainer}>
                {_getQuestion()}
                <View style={styles.bottom}>
                    <Text style={styles.info}>Correct: {correctAnswer} Wrong: {wrongAnswer}</Text>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',

    },
    bottom: {
        flex: 1,
        paddingTop: 60,
        width: '100%',
        justifyContent: 'flex-end',
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
    btnStyleCorrect: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#fff',
        fontSize: 22,
    },
    btnStyleWrong: {
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#fff',
        fontSize: 22,
    },
})


export default Quiz