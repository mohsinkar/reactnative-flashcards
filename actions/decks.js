export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const NEW_CARD = 'NEW_CARD'

//get all the decks to be loaded onto the dashboard
export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function newCard(id, question, answer) {
    return {
        type: NEW_CARD,
        id,
        question,
        answer
    }
}

