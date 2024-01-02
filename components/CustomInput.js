
import React from 'react'
import { TextInput } from 'react-native'

const CustomInput = ({ onChangeText, value, placeholder, style, type, placeholderTextColor }) => {
    return (
        <>
            <TextInput
                style={style}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                type={type}
            />
        </>
    )
}

export default CustomInput