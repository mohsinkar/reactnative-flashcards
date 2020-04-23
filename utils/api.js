import { AsyncStorage } from 'react-native'

export const DB_KEY = 'flashcard_app'

export const addDeckDB = (deck) => {
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

export const addNewCardDB = (deckid, card) => {
    console.log(deckid,card)
    return getAllDecks()
        .then((results) => {
            const decks = JSON.parse(results)
            decks[deckid].cards.push(card);
            AsyncStorage.mergeItem(DB_KEY, JSON.stringify(decks));
        });
}

export function getAllDecks() {
    return AsyncStorage.getItem(DB_KEY)
}