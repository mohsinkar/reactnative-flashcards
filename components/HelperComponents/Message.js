import React from 'react'
import { Text} from 'react-native'

const Message = (props) => {
    return (
        <Text style={{ textAlignVertical: "center", textAlign: "center", fontSize:25}}> {props.message}</Text>
    )
}

export default Message