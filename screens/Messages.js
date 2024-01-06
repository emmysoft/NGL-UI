//import libraries
import { View, Text } from 'react-native'
import React from 'react';
import tw from 'twrnc';

//import components
import CustomButton from "../components/CustomButton";

const Messages = () => {
  return (
    <View style={tw`flex flex-col justify-center items-center gap-24 bg-white h-full`}>
      <View style={tw`flex flex-row justify-center items-center bg-blue-400 p-12 rounded-lg mb-24`}>
        <Text style={tw`text-white text-2xl font-bold text-center w-60`}>
            Hello there! You know I love you so much! Guess who? 😄 
        </Text>
      </View>
      <View style={tw`flex flex-col justify-center items-center gap-8`}>
        <CustomButton style={tw`flex flex-row justify-center items-center px-16 py-4 bg-[#fa6e2d] rounded-[60px]`}>
            <Text style={tw`text-white text-xl font-bold`}>Who Sent this? 😄 </Text>
        </CustomButton>
        <CustomButton style={tw`flex flex-row justify-center items-center px-16 py-4 bg-black rounded-[60px]`}>
            <Text style={tw`text-white text-xl font-bold`}>Or did we do it? 🤔 </Text>
        </CustomButton>
        <Text style={tw`text-black text-sm font-bold text-center`}>With 💘  from NGL Guess Who? </Text>
      </View>
    </View>
  )
}

export default Messages;