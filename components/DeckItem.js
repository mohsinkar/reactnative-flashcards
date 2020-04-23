import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { white } from '../utils/colors'

const DeckItem = (props) => {

    const [deck] = useState(props.deck);
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('DeckDetails', { deck: deck })} >
                <View style={styles.item}>
                    <Text style={styles.info}>{deck.name}</Text>
                    <Text style={styles.infoCards}>{deck.cards.length} cards</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 20,
        padding: 40,
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
    },
    infoCards: {
        fontSize: 20,
    }

})
export default DeckItem