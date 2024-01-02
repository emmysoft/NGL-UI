//import libraries
import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Account = () => {
    return (
        <View style={tw`flex flex-row justify-center items-center gap-4 bg-white h-full`}>
            <Text style={tw`bg-[#0000ff] text-white px-5 py-5 rounded-lg`}>Anonymous</Text>
            <Text style={tw`bg-[#ef2673] text-white px-5 py-5 rounded-lg`}>Confession</Text>
        </View>
    )
}

export default Account;