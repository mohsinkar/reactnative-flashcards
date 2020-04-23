import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Platform } from 'react-native'
import { getDecksData } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { receiveDecks } from '../actions/decks'
import { teal } from '../utils/colors'
import Message from './HelperComponents/Message'
import DecksList from './DecksList'

const Dashboard = () => {
    const dispatch = useDispatch()
    const decks = useSelector(state => state)

    useEffect(() => {
        if (Object.keys(decks).length === 0) {
            getDecksData().then((decks) => {
                dispatch(receiveDecks(JSON.parse(decks)))
            }
            ).catch(error => {
                console.log(error);
            })
        }
    })

    return (
        <ScrollView style={{ flex: 1 }} >
            {
                Object.keys(decks) === 0 ? <Message message={'No Decks available'} /> :
                    <DecksList />
            }

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: teal,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        textAlign: 'center',
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    noDataText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
})

export default Dashboard