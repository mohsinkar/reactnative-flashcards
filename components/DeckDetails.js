import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { white } from '../utils/colors'
import { useSelector } from 'react-redux'


const DeckDetails = (props) => {

    const navigation = useNavigation();
    const [deckid] = useState(props.route.params.deckid);
    const decks = useSelector(state => state)
    const deck = decks[deckid]
    console.log(deck.cards.length)

    return (
        <View style={{ backgroundColor: white, flex: 1 }}>
            <View style={styles.item}>
                <Text style={styles.info}>{deck.name}</Text>
                <Text style={styles.infoCards}>{deck.cards.length} cards</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddCard', { deck: deck, name: deck.name })}>
                    <Text style={styles.text} >Add Card</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container} >
                {deck.cards.length === 0
                    ? <Text style={{alignItems: 'center' , paddingTop:0}}>Add Cards to take quiz</Text>
                    : <TouchableOpacity
                        onPress={() => navigation.navigate('Quiz', { deck: deck, name: `${deck.name} - Quiz` })}>
                        <Text style={styles.text} >Start Quiz</Text>
                    </TouchableOpacity>

                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    spacer: {
        paddingBottom: 50,
        backgroundColor: white
    },
    container: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
    },
    removeContainer: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        borderBottomWidth: 0,
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        fontSize: 30,
        padding: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        textAlign: "center",
    },
    item: {
        padding: 50,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 50,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        alignItems: 'center',

    },
    info: {
        fontSize: 25,
        paddingTop: 5,

    },
    infoCards: {
        fontSize: 20,
    },
    alert: {
        fontSize: 20,
        color: 'red'
    }
})

export default DeckDetails