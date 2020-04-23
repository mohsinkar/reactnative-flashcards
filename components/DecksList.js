import React from 'react'
import { useSelector } from 'react-redux'
import DeckItem from './DeckItem'

const DecksList = () => {

    const decks = useSelector(state => state)

    return (
        Object.values(decks).map((deck) => {
            return <DeckItem deckid={deck.id} key={deck.id} />
        })
    )
}

export default DecksList