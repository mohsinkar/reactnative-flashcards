import { uuid } from 'uuidv4';
import { getAllDecks } from './api'
import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';

const NOTIFICATION_KEY = 'flashcard_app:notification'

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

export function generateDeckKey() {
    return uuid()
}

export function clearlocalNotofication() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
    return {
        title: 'Flashcard - Study Log',
        body: 'You have not done quiz today',
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(16)
                            tomorrow.setMinutes(0)
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}