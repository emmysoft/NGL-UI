//import libraries
import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';

//import components
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const Handle = ({ navigation }) => {

    const [handle, setHandle] = useState("");

    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === 'iox' ? 'padding' : 'height'}>
                <LinearGradient colors={['#ef2673', '#fa6e2d']}>
                    <View style={tw`flex flex-col justify-center items-center gap-4 h-full`}>
                        <Image source={require("../assets/new-icon.png")} style={tw`w-60`} />
                        <Text style={tw`w-80 text-center text-white font-bold text-lg`}>What's your Instagram handle?</Text>
                        <Text style={tw`w-60 text-center text-gray-200 text-base font-light text-sm`}>Ex. @emmysoft.io</Text>
                        <CustomInput
                            placeholder="@"
                            value={handle}
                            type="text"
                            onChangeText={(text) => setHandle(text)}
                            placeholderTextColor="#992B3B"
                            style={tw`bg-gray-300 rounded-lg px-4 py-2 opacity-30 w-60 text-base`}
                        />
                        <CustomButton
                            style={tw`bg-white px-5 py-5 rounded-full w-[300px] flex flex-row justify-center items-center`}
                            onPress={() => navigation.navigate("Account")}
                        >
                            <Text style={tw`text-black text-xl font-bold text-center`}>Done!</Text>
                        </CustomButton>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        </>
    )
}

export default Handle;