import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons"

const Inbox = () => {
    return (
        <View style={tw`flex-1 flex flex-col justify-center items-center bg-white`}>
            <Text style={tw`font-bold text-xl text-black`}>Inbox</Text>
            <Ionicons name="mail" size={120} color={"#ef2673"} />
        </View>
    )
}

export default Inbox