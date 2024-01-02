import { Pressable, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ style, children, onPress }) => {
    return (
        <Pressable style={style} onPress={onPress}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export default CustomButton