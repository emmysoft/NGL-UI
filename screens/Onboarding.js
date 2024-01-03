//import libraries
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

//import components
import CustomButton from '../components/CustomButton';

const Onboarding = ({ navigation }) => {
    return (
        <>
            <LinearGradient colors={['#ef2673', '#fa6e2d']}>
                <View style={tw`flex flex-col justify-center items-center gap-16 h-full mt-10`}>
                    <Image source={require("../assets/new-icon.png")} style={tw`w-72`} />
                    <Text style={tw`text-2xl text-center text-white h-20 font-bold`}>Get anonymous messages on Instagram!</Text>
                    <CustomButton style={tw`bg-white px-5 py-5 rounded-full w-[300px] flex flex-row justify-center items-center`} onPress={() => navigation.navigate("Handle")}>
                        <Text style={tw`text-black text-xl font-bold text-center`}>Get Started!</Text>
                    </CustomButton>
                    <Text style={tw`text-white text-xs font-normal text-center w-[376px]`}>By continuing, you agree to our Terms of Use and have read and agreed to our Privacy Policy</Text>
                </View>
            </LinearGradient>
        </>
    )
}

export default Onboarding;