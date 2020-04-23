import { uuid } from 'uuidv4';
import {getAllDecks} from './api'




const decks = {
    deckid: {
        id: "deckid",
        name: "Deck 1",
        cards: [
            {
                question: 'Question 1',
                answer: 'Answer 1'
            },
            {
                question: 'Question 2',
                answer: 'Answer 2'
            }
        ]
    },
    deckid2: {
        id: "deckid2",
        name: "Deck 2",
        cards: [
            {
                question: 'Question 1',
                answer: 'Answer 1'
            },
            {
                question: 'Question 2',
                answer: 'Answer 2'
            }
        ]
    }
}
// Function to reterieve the Decks  from the application storage
export function getDecksData() {
    /*return new Promise((res) => {
        setTimeout(() => res({ ...decks }), 100)
    })*/
    return getAllDecks()
}

export function generateDeckKey () {
    return uuid()
  }