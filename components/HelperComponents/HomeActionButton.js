import { FloatingAction } from "react-native-floating-action"
import React from 'react'

const actions = [
    {
        text: "Home",
        name: "home",
        position: 1
    }
]

const HomeActionButton = () => {
    return (
        <FloatingAction
            actions={actions}
            onPressItem={name => {
                console.log(`selected button: ${name}`);
            }}
        />
    )
}

export default HomeActionButton