import { AsyncStorage } from 'react-native'
import { DB_KEY } from './helper'

export const addDeck = (deck) => {
    return AsyncStorage.mergeItem(DB_KEY, JSON.stringify({
        [deck.id]: deck
    }))
}

export function removeDeck(key) {
    return AsyncStorage.getItem(DB_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(DB_KEY, JSON.stringify(data))
        }
        )
}

export function getAllDecks() {
    return AsyncStorage.getItem(DB_KEY)
}