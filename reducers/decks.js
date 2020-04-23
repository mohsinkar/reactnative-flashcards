import { RECEIVE_DECKS, ADD_DECK, NEW_CARD } from '../actions/decks'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: {
                    ...action.deck
                }
            }
        case NEW_CARD:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    cards: [
                        ...state[action.id].cards,
                        {
                            question: action.question,
                            answer: action.answer,
                        }
                    ]
                }
            }
        default:
            return state
    }
}