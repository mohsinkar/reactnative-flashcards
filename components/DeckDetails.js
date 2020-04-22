import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { lightPurp, white, purple } from '../utils/colors'


const DeckDetails = (props) => {

    const navigation = useNavigation();
    const [deck] = useState(props.route.params.deck);

    return (
        <View>
            <View style={styles.item}>
                <Text style={styles.info}>{deck.name}</Text>
                <Text style={styles.infoCards}>{deck.cards.length} cards</Text>
            </View>
            <View style={styles.spacer}></View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AddCard'),{deck: deck}}>
                    <Text style={styles.text} >Add Card</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz'),{deck: deck}}>
                    <Text style={styles.text} >Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    spacer: {
       paddingBottom: 150
    },
    container: {
        borderRadius: Platform.OS === 'ios' ? 16 : 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
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
        backgroundColor: lightPurp,
        borderRadius: Platform.OS === 'ios' ? 16 : 20,
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        borderRadius: 15,
        borderColor: '#ddd',
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
        color:white
    },
    infoCards: {
        fontSize: 20,
        color:white
    }
})

export default DeckDetails